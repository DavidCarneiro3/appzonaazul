import { environment } from './../../environments/environment';
import { MD5Util } from './../../util/md5.util';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { XML2JSONUtil } from '../../util/xml2json.util';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/observable/throw';
import { TempoEstacionadoProvider } from '../tempo-estacionado/tempo-estacionado';
import { LoggerProvider } from '../logger/logger';
import { FirebaseLoggerProvider } from '../firebase-logger/firebase-logger';
import { Platform } from "ionic-angular";

@Injectable()
export class ComunicacaoCentralProvider {

  static APP_TIMEOUT = 15 * 1000; // 15 segundos (Tempo de Resposta)
  static APP_ESPERA = 30 * 1000; // 30 segundos (Tempo de Espera)

  /**
   * Tutorial HTTP Client Angular
   * https://alligator.io/angular/httpclient-intro/
   */

  private URL_CENTRAL: string = `https://wszonaazuldsv.centralamc.com.br/transacao`;
  private COD_CLIENTE: number = 75;
  private COD_CLIENTE_PDV: number = 76;

  private CNPJ_CLIENTE: string = '05591991000148';
  private DMA: number = this.getDataAtual();
  private TOKEN: string = 'af777ebfab40209d52e5500fd5582214';
  // private COD_ACESSO: string = this.gerarCodigoAcesso(this.COD_CLIENTE);
  // private COD_ACESSO_PDV: string = this.gerarCodigoAcesso(this.COD_CLIENTE_PDV);

  constructor(public http: HttpClient,
    public platform: Platform,
    private logger: LoggerProvider,
    private firebaseLoggerProvider: FirebaseLoggerProvider,
    private tempoEstacionadoProvider: TempoEstacionadoProvider) {

    const isProd = environment.production ? true : false;
    // const isProd = false;

    if (isProd && !environment.simular_l2) { // PRODUCAO
      this.URL_CENTRAL = `https://wszonaazuldsv.centralamc.com.br/transacao`;
      // this.URL_CENTRAL = `https://wszonaazulprd2.centralamc.com.br/transacao`;
      this.COD_CLIENTE = 82;
      this.COD_CLIENTE_PDV = 83;

    } else { // DEV
      this.URL_CENTRAL = `https://wszonaazuldsv.centralamc.com.br/transacao`;
      this.COD_CLIENTE = 106;
      this.COD_CLIENTE_PDV = 107;
    }

    this.logger.info('AMBIENTE: ' + (isProd ? '** PRODU????O **' : '** DESENVOLVIMENTO **'));
    this.logger.info('URL_CENTRAL: ' + this.URL_CENTRAL);
    this.logger.info('COD_CLIENTE: ' + this.COD_CLIENTE);
    this.logger.info('COD_CLIENTE_PDV: ' + this.COD_CLIENTE_PDV);
    this.logger.info('CNPJ_CLIENTE: ' + this.CNPJ_CLIENTE);
    this.logger.info('TOKEN: ' + this.TOKEN);
    this.logger.info('DMA: ' + this.DMA);
  }

  setDMA(date: Date) {
    this.DMA = this.getDataAtual(date);
    this.logger.info('DMA NTP: ' + this.DMA);
  }

  setDMA_NTP() {
    this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(data => {
      this.setDMA(data.dateNow);
    });
  }

  // --------------------------------------------------------------------------------
  // -- APP

  /**
   * Desbloqueio - APP 
   * 
   * @param idTransacaoDistribuidor 
   * @param quantidadeCartoes 
   * 
   * DOCUMENTACAO
   * 
   * <!-- PARAMETROS -->
   *   <transacao>
   *       <codigoDistribuidor>75</codigoDistribuidor>
   *       <dataEnvio>2018-07-18T11:28:00</dataEnvio>
   *       <tipo>1</tipo>
   *       <idTransacaoDistribuidor>12345</idTransacaoDistribuidor>
   *       <cnpj>05591991000148</cnpj>
   *       <quantidadeCartoes>1</quantidadeCartoes>
   *   </transacao>
   *
   *   <!-- RESPOSTA -->
   *   <?xml version="1.0"?>
   *   <Resultado>
   *       <dataResultado>2018-07-18T11:19:08</dataResultado>
   *       <codigoDistribuidor>75</codigoDistribuidor>
   *       <transacaoXml>75, 2018-07-18T11:28:00, 1, 12345, 05591991000148, 1</transacaoXml>
   *       <dataProcessamento>2018-07-18T11:19:08</dataProcessamento>
   *       <autenticacao>75969070547632873</autenticacao>
   *       <sucesso>true</sucesso>
   *       <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
   *   </Resultado>
   */
  desbloqueioApp(quantidadeCartoes: number, idTransacaoDistribuidor: number, dataEnvio: Date) {
    const dateStr = this.getDateComunicacao(dataEnvio);
    // const idTransacaoDistribuidor = this.gerarIdTransacao();

    const requestBody = `
    <transacao>
      <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
      <dataEnvio>${dateStr}</dataEnvio>
      <tipo>1</tipo>
      <idTransacaoDistribuidor>${idTransacaoDistribuidor}</idTransacaoDistribuidor>
      <cnpj>${this.CNPJ_CLIENTE}</cnpj>
      <quantidadeCartoes>${quantidadeCartoes}</quantidadeCartoes>
    </transacao>
    `;

    if (environment.simular_l2) {
      const resposta = `
      <?xml version="1.0"?>
        <Resultado>
            <dataResultado>${dateStr}</dataResultado>
            <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
            <transacaoXml>75, 2018-07-18T11:28:00, 1, 12345, 05591991000148, 1</transacaoXml>
            <dataProcessamento>${dateStr}</dataProcessamento>
            <autenticacao>75969070547632873</autenticacao>
            <sucesso>true</sucesso>
            <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
        </Resultado>
      `;

      const respostaJson = XML2JSONUtil.parseHttpXmlResponse(resposta);
      console.log('Resposta Json linha 140',respostaJson);
      return new Promise<{}>((resolve, reject) => resolve(respostaJson));
    } else {
      return this.genericRequest(this.URL_CENTRAL, requestBody);
    }
  }

  /**
   * Desbloqueio com Ativa????o - APP 
   * 
   * @param idTransacaoDistribuidor 
   * @param imei 
   * @param area 
   * @param setor 
   * @param face 
   * @param latitude 
   * @param longitude 
   * @param placa 
   * @param tipoVeiculo 
   * @param tempoCartao 
   * @param quantidadeCartoes 
   * 
   * DOCUMENTACAO
   * 
   * <!-- PARAMETROS -->
   * <transacao>
   *  <codigoDistribuidor>75</codigoDistribuidor>
   *  <dataEnvio>2018-07-18T11:28:00</dataEnvio>
   *  <tipo>3</tipo>
   *  <idTransacaoDistribuidor>260</idTransacaoDistribuidor>
   *  <cnpj>05591991000148</cnpj>
   *  <imei>123456789012345</imei>
   *  <area>01</area>
   *  <setor>01</setor>
   *  <face>A</face>
   *  <latitude>-23.71624</latitude>
   *  <longitude>-46.778914</longitude>
   *  <placa>VAC9876</placa>
   *  <tipoVeiculo>1</tipoVeiculo>
   *  <tempoCartao>30</tempoCartao>
   *  <quantidadeCartoes>1</quantidadeCartoes>
   * </transacao>
   *
   * <!-- RESPOSTA -->
   * <?xml version="1.0"?>
   * <Resultado>
   *  <dataResultado>2018-07-18T11:20:42</dataResultado>
   *  <codigoDistribuidor>75</codigoDistribuidor>
   *  <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>
   *  <dataProcessamento>2018-07-18T11:20:42</dataProcessamento>
   *  <autenticacao>75380275967530906</autenticacao>
   *  <sucesso>true</sucesso>
   *  <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
   * </Resultado>
   */
  desbloqueioAtivacaoApp(imei: string, area: string, setor: string, face: string, latitude: number, longitude: number, placa: string, tipoVeiculo: number, tempoCartao: number, quantidadeCartoes: number, idTransacaoDistribuidor: number, dataEnvio: Date) {
    // const idTransacaoDistribuidor = this.gerarIdTransacao();
    const dateStr = this.getDateComunicacao(dataEnvio);
    const imeiTitle = (imei.indexOf('-') > 0) ? 'udid' : 'imei';

    const requestBody = `
    <transacao>
      <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
      <dataEnvio>${dateStr}</dataEnvio>
      <tipo>3</tipo>
      <idTransacaoDistribuidor>${idTransacaoDistribuidor}</idTransacaoDistribuidor>
      <cnpj>${this.CNPJ_CLIENTE}</cnpj>
      <${imeiTitle}>${imei}</${imeiTitle}>
      <area>${area}</area>
      <setor>${setor}</setor>
      <face>${face}</face>
      <latitude>${latitude}</latitude>
      <longitude>${longitude}</longitude>
      <placa>${placa}</placa>
      <tipoVeiculo>${tipoVeiculo}</tipoVeiculo>
      <tempoCartao>${tempoCartao}</tempoCartao>
      <quantidadeCartoes>${quantidadeCartoes}</quantidadeCartoes>
    </transacao>
    `;

    if (environment.simular_l2) {
      const resposta = `
      <?xml version="1.0"?>
      <Resultado>
        <dataResultado>${dateStr}</dataResultado>
        <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
        <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>
        <dataProcessamento>${dateStr}</dataProcessamento>
        <autenticacao>75380275967530906</autenticacao>
        <sucesso>true</sucesso>
        <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
       </Resultado>
      `;

      const respostaJson = XML2JSONUtil.parseHttpXmlResponse(resposta);
      return new Promise<{}>((resolve, reject) => resolve(respostaJson));
    } else {
      return this.genericRequest(this.URL_CENTRAL, requestBody);
    }
  }

  /**
   * Ativa????o - APP 
   * 
   * @param idTransacaoDistribuidor 
   * @param quantidadeCartoes 
   * 
   * DOCUMENTACAO
   * 
   * <!-- PARAMETROS -->
   * <transacao>
   *  <codigoDistribuidor>75</codigoDistribuidor>
   *  <dataEnvio>2018-07-18T11:28:00</dataEnvio>
   *  <tipo>2</tipo>
   *  <idTransacaoDistribuidor>313</idTransacaoDistribuidor>
   *  <cnpj>05591991000148</cnpj>
   *  <imei>123456789012345</imei>
   *  <area>01</area>
   *  <setor>01</setor>
   *  <face>A</face>
   *  <latitude>-23.71624</latitude>
   *  <longitude>-46.778914</longitude>
   *  <placa>VAC9876</placa>
   *  <tipoVeiculo>1</tipoVeiculo>
   *  <tempoCartao>60</tempoCartao>
   *  <quantidadeCartoes>1</quantidadeCartoes>
   * </transacao>
   *
   * <!-- RESPOSTA -->
   * <?xml version="1.0"?>
   * <Resultado>
   *  <dataResultado>2018-07-18T11:20:42</dataResultado>
   *  <codigoDistribuidor>75</codigoDistribuidor>
   *  <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>
   *  <dataProcessamento>2018-07-18T11:20:42</dataProcessamento>
   *  <autenticacao>75380275967530906</autenticacao>
   *  <sucesso>true</sucesso>
   *  <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
   * </Resultado>
   */
  ativacaoApp(imei: string, area: string, setor: string, face: string, latitude: number, longitude: number, placa: string, tipoVeiculo: number, tempoCartao: number, quantidadeCartoes: number, idTransacaoDistribuidor: number, dataEnvio: Date) {
    // const idTransacaoDistribuidor = this.gerarIdTransacao();
    const dateStr = this.getDateComunicacao(dataEnvio);
    const imeiTitle = (imei.indexOf('-') > 0) ? 'udid' : 'imei';

    const requestBody = `
    <transacao>
      <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
      <dataEnvio>${dateStr}</dataEnvio>
      <tipo>2</tipo>
      <idTransacaoDistribuidor>${idTransacaoDistribuidor}</idTransacaoDistribuidor>
      <cnpj>${this.CNPJ_CLIENTE}</cnpj>
      <${imeiTitle}>${imei}</${imeiTitle}>
      <area>${area}</area>
      <setor>${setor}</setor>
      <face>${face}</face>
      <latitude>${latitude}</latitude>
      <longitude>${longitude}</longitude>
      <placa>${placa}</placa>
      <tipoVeiculo>${tipoVeiculo}</tipoVeiculo>
      <tempoCartao>${tempoCartao}</tempoCartao>
      <quantidadeCartoes>${quantidadeCartoes}</quantidadeCartoes>
    </transacao>
    `;

    if (environment.simular_l2) {
      const resposta = `
      <?xml version="1.0"?>
      <Resultado>
        <dataResultado>${dateStr}</dataResultado>
        <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
        <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>
        <dataProcessamento>${dateStr}</dataProcessamento>
        <autenticacao>75380275967530906</autenticacao>
        <sucesso>true</sucesso>
        <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
      </Resultado>
      `;

      const respostaJson = XML2JSONUtil.parseHttpXmlResponse(resposta);
      console.log('Resposta Json linha 320',respostaJson);
      return new Promise<{}>((resolve, reject) => resolve(respostaJson));
    } else {
      return this.genericRequest(this.URL_CENTRAL, requestBody);
    }
  }

  /**
   * Cancelamento - APP
   * 
   * @param idTransacaoDistribuidor 
   * @param motivoCancelamento 
   * @param idTransacaoDistribuidorCancelamento 
   * 
   * DOCUMENTACAO
   * 
   * <!-- PARAMETROS -->
   * <transacao>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   *     <dataEnvio>2018-07-18T11:28:00</dataEnvio>
   *     <tipo>4</tipo>
   *     <idTransacaoDistribuidor>313</idTransacaoDistribuidor>
   *     <motivoCancelamento>Falha de comunicacao</motivoCancelamento>
   *     <idTransacaoDistribuidorCancelamento>275</idTransacaoDistribuidorCancelamento>
   * </transacao>
   * 
   * <!-- RESPOSTA -->
   * <?xml version="1.0"?>
   * <Resultado>
   *     <dataResultado>2018-07-18T11:22:28</dataResultado>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   *     <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>
   *     <dataProcessamento>2018-07-18T11:22:28</dataProcessamento>
   *     <autenticacao>75160633052652701</autenticacao>
   *     <sucesso>false</sucesso>
   *     <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de cancelamento: c&#xF3;digo da transa&#xE7;&#xE3;o duplicado!</mensagem>
   * </Resultado>
   */
  cancelamentoApp(idTransacaoDistribuidor: number, motivoCancelamento: string, idTransacaoDistribuidorCancelamento: number, dataEnvio: Date) {
    const dateStr = this.getDateComunicacao(dataEnvio);

    const requestBody = `
    <transacao>
      <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
      <dataEnvio>${dateStr}</dataEnvio>
      <tipo>4</tipo>
      <idTransacaoDistribuidor>${idTransacaoDistribuidorCancelamento}</idTransacaoDistribuidor>
      <motivoCancelamento>${motivoCancelamento}</motivoCancelamento>
      <idTransacaoDistribuidorCancelamento>${idTransacaoDistribuidor}</idTransacaoDistribuidorCancelamento>
    </transacao>
    `;

    if (environment.simular_l2) {
      const resposta = `
      <?xml version="1.0"?>
      <Resultado>
        <dataResultado>${dateStr}</dataResultado>
        <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
        <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>
        <dataProcessamento>${dateStr}</dataProcessamento>
        <autenticacao>75160633052652701</autenticacao>
        <sucesso>true</sucesso>
        <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de cancelamento: c&#xF3;digo da transa&#xE7;&#xE3;o duplicado!</mensagem>
      </Resultado>
      `;

      const respostaJson = XML2JSONUtil.parseHttpXmlResponse(resposta);
      return new Promise<{}>((resolve, reject) => resolve(respostaJson));
    } else {
      return this.genericRequest(this.URL_CENTRAL, requestBody);
    }
  }

  /**
   * Consulta Transa????o - APP 
   * 
   * @param idTransacaoDistribuidor 
   * 
   * DOCUMENTACAO
   * 
   * <!-- PARAMETROS -->
   * <transacao>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   *     <idTransacaoDistribuidor>313</idTransacaoDistribuidor>
   * </transacao>
   * 
   * <!-- RESPOSTA -->
   * <?xml version="1.0"?>
   * <ResultadoConsultaTransacao>
   *     <dataResultado>2018-07-18T11:22:28</dataResultado>
   *     <transacaoXml>75, 313</transacaoXml>
   *     <dataProcessamento>2018-07-18T11:22:28</dataProcessamento>
   *     <autenticacao>75160633052652701</autenticacao>
   *     <estado>1</estado>
   *     <mensagem>Dados retornados com sucesso!</mensagem>
   * </ResultadoConsultaTransacao>
   * 
   * <!-- RESPOSTA DE ERRO -->
   * <?xml version="1.0"?>
   * <ResultadoConsultaTransacao>
   *     <dataResultado>2018-07-18T11:22:28</dataResultado>
   *     <transacaoXml>75, 232</transacaoXml>
   *     <mensagem>TRANSACAO INEXISTENTE</mensagem>
   * </ResultadoConsultaTransacao>
   */
  consultaTransacaoApp(idTransacaoDistribuidor: number) {
    const requestBody = `
    <transacao>
      <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
      <idTransacaoDistribuidor>${idTransacaoDistribuidor}</idTransacaoDistribuidor>
    </transacao>
    `;

    if (environment.simular_l2) {
      const resposta = `
      <?xml version="1.0"?>
      <ResultadoConsultaTransacao>
        <dataResultado>${this.getDateComunicacao()}</dataResultado>
        <transacaoXml>75, 313</transacaoXml>
        <dataProcessamento>${this.getDateComunicacao()}</dataProcessamento>
        <autenticacao>75160633052652701</autenticacao>
        <estado>1</estado>
        <mensagem>Dados retornados com sucesso!</mensagem>
      </ResultadoConsultaTransacao>
      `;

      const respostaJson = XML2JSONUtil.parseHttpXmlResponse(resposta);
      return new Promise<{}>((resolve, reject) => resolve(respostaJson));
    } else {
      return this.genericRequest(this.URL_CENTRAL, requestBody);
    }
  }

  /**
   * Consulta Saldo - APP 
   * 
   * DOCUMENTACAO
   * 
   * <!-- PARAMETROS -->
   * <transacao>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   * </transacao>
   * 
   * <!-- RESPOSTA -->
   * <?xml version="1.0"?>
   * <ResultadoConsultaTransacao>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   *     <data>2018-07-18T11:25:20</data>
   *     <saldoBloqueado>4998</saldoBloqueado>
   *     <saldoDesbloqueado/>
   *     <totalAtivado>2</totalAtivado>
   *     <mensagem>Sucesso ao retornar os dados!</mensagem>
   * </ResultadoConsultaTransacao>
   */
  consultaSaldoApp() {
    const requestBody = `
    <transacao>
      <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
    </transacao>
    `;

    if (environment.simular_l2) {
      const resposta = `
      <?xml version="1.0"?>
      <ResultadoConsultaTransacao>
        <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
        <data>${this.getDateComunicacao()}</data>
        <saldoBloqueado>4998</saldoBloqueado>
        <saldoDesbloqueado/>
        <totalAtivado>2</totalAtivado>
        <mensagem>Sucesso ao retornar os dados!</mensagem>
      </ResultadoConsultaTransacao>
      `;

      const respostaJson = XML2JSONUtil.parseHttpXmlResponse(resposta);
      return new Promise<{}>((resolve, reject) => resolve(respostaJson));
    } else {
      return this.genericRequest(this.URL_CENTRAL, requestBody);
    }
  }


  // --------------------------------------------------------------------------------
  // -- PDV

  /**
   * Desbloqueio com Ativa????o - PDV 
   * 
   * @param idTransacaoDistribuidor 
   * @param imei 
   * @param area 
   * @param setor 
   * @param face 
   * @param latitude 
   * @param longitude 
   * @param placa 
   * @param tempoCartao 
   * @param quantidadeCartoes 
   * @param codigoPDV 
   * 
   * DOCUMENTACAO
   * 
   * <!-- PARAMETROS -->
   * <transacao>
   *  <codigoDistribuidor>75</codigoDistribuidor>
   *  <codigoPDV>22</codigoPDV>
   *  <dataEnvio>2018-07-18T11:28:00</dataEnvio>
   *  <tipo>3</tipo>
   *  <idTransacaoDistribuidor>260</idTransacaoDistribuidor>
   *  <cnpj>05591991000148</cnpj>
   *  <imei>123456789012345</imei>
   *  <area>01</area>
   *  <setor>01</setor>
   *  <face>A</face>
   *  <latitude>-23.71624</latitude>
   *  <longitude>-46.778914</longitude>
   *  <placa>VAC9876</placa>
   *  <tempoCartao>30</tempoCartao>
   *  <quantidadeCartoes>1</quantidadeCartoes>
   * </transacao>
   *
   * <!-- RESPOSTA -->
   * <?xml version="1.0"?>
   * <ResultadoPDV>
   *  <codigoDistribuidor>75</codigoDistribuidor>
   *  <dataResultado>2018-07-18T11:20:42</dataResultado>
   *  <codigoPDV>22</codigoPDV>
   *  <idTransacaoDistribuidor>309</idTransacaoDistribuidor>
   *  <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>
   *  <dataProcessamento>2018-07-18T11:20:42</dataProcessamento>
   *  <autenticacao>75380275967530906</autenticacao>
   *  <sucesso>true</sucesso>
   *  <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
   * </ResultadoPDV>
   * 
   * <!-- RESPOSTA ERRO -->
   * <?xml version="1.0"?>
   * <ResultadoPDV>
   *     <dataResultado>2018-07-18T11:26:09</dataResultado>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   *     <codigoPDV>22</codigoPDV>
   *     <idTransacaoDistribuidor>260</idTransacaoDistribuidor>
   *     <transacaoXml>75, 20, 2018-07-18T07:00:00, 8, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 30, 1</transacaoXml>
   *     <dataProcessamento>2018-07-18T11:26:09</dataProcessamento>
   *     <autenticacao>75105797701235860</autenticacao>
   *     <sucesso>false</sucesso>
   *     <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de desbloqueio com ativa&#xE7;&#xE3;o: ponto de venda inv&#xE1;lido!</mensagem>
   * </ResultadoPDV>
   */
  desbloqueioAtivacaoPDV(imei: string, area: string, setor: string, face: string, latitude: number, longitude: number, placa: string, tipoVeiculo: number, tempoCartao: number, quantidadeCartoes: number, codigoPDV: string, idTransacaoDistribuidor: number, dataEnvio: Date) {
    // const idTransacaoDistribuidor = this.gerarIdTransacao();
    const dateStr = this.getDateComunicacao(dataEnvio);
    const imeiTitle = (imei.indexOf('-') > 0) ? 'udid' : 'imei';
    const auth = btoa(`${this.COD_CLIENTE_PDV}:${this.gerarCodigoAcesso(this.COD_CLIENTE_PDV)}`);

    const requestBody = `
    <transacao>
      <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
      <codigoPDV>${codigoPDV}</codigoPDV>
      <dataEnvio>${dateStr}</dataEnvio>
      <tipo>3</tipo>
      <idTransacaoDistribuidor>${idTransacaoDistribuidor}</idTransacaoDistribuidor>
      <cnpj>${this.CNPJ_CLIENTE}</cnpj>
      <${imeiTitle}>${imei}</${imeiTitle}>
      <area>${area}</area>
      <setor>${setor}</setor>
      <face>${face}</face>
      <latitude>${latitude}</latitude>
      <longitude>${longitude}</longitude>
      <placa>${placa}</placa>
      <tempoCartao>${tempoCartao}</tempoCartao>
      <quantidadeCartoes>${quantidadeCartoes}</quantidadeCartoes>
    </transacao>
    `;

    if (environment.simular_l2) {
      const resposta = `
      <?xml version="1.0"?>
      <ResultadoPDV>
           <dataResultado>${dateStr}</dataResultado>
           <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
           <codigoPDV>${codigoPDV}</codigoPDV>
           <idTransacaoDistribuidor>${idTransacaoDistribuidor}</idTransacaoDistribuidor>
           <transacaoXml>75, 20, 2018-07-18T07:00:00, 8, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 30, 1</transacaoXml>
           <dataProcessamento>${dateStr}</dataProcessamento>
           <autenticacao>75105797701235860</autenticacao>
           <sucesso>true</sucesso>
           <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de desbloqueio com ativa&#xE7;&#xE3;o: ponto de venda inv&#xE1;lido!</mensagem>
      </ResultadoPDV>
      `;

      const respostaJson = XML2JSONUtil.parseHttpXmlResponse(resposta);
      return new Promise<{}>((resolve, reject) => resolve(respostaJson));
    } else {
      return this.genericRequest(this.URL_CENTRAL, requestBody, auth);
    }

  }

  /**
   * Cancelamento - PDV
   * 
   * @param idTransacaoDistribuidor 
   * @param motivoCancelamento 
   * @param idTransacaoDistribuidorCancelamento 
   * 
   * DOCUMENTACAO
   * 
   * <!-- PARAMETROS -->
   * <transacao>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   *     <codigoPDV>22</codigoPDV>
   *     <dataEnvio>2018-07-18T11:28:00</dataEnvio>
   *     <tipo>4</tipo>
   *     <idTransacaoDistribuidor>313</idTransacaoDistribuidor>
   *     <motivoCancelamento>Falha de comunicacao</motivoCancelamento>
   *     <idTransacaoDistribuidorCancelamento>275</idTransacaoDistribuidorCancelamento>
   * </transacao>
   * 
   * <!-- RESPOSTA -->
   * <?xml version="1.0"?>
   * <Resultado>
   *     <dataResultado>2018-07-18T11:22:28</dataResultado>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   *     <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>
   *     <dataProcessamento>2018-07-18T11:22:28</dataProcessamento>
   *     <autenticacao>75160633052652701</autenticacao>
   *     <sucesso>false</sucesso>
   *     <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de cancelamento: c&#xF3;digo da transa&#xE7;&#xE3;o duplicado!</mensagem>
   * </Resultado>
   * 
   * <!-- RESPOSTA ERRO -->
   * <?xml version="1.0"?>
   * <Resultado>
   *     <dataResultado>2018-07-18T11:22:28</dataResultado>
   *     <codigoDistribuidor>75</codigoDistribuidor>
   *     <codigoPDV>20</codigoPDV>
   *     <idTransacaoDistribuidor>276</idTransacaoDistribuidor>
   *     <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>
   *     <dataProcessamento>2018-07-18T11:22:28</dataProcessamento>
   *     <autenticacao>75160633052652701</autenticacao>
   *     <sucesso>false</sucesso>
   *     <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de desbloqueio: ponto de venda inv&#xE1;lido!</mensagem>
   * </Resultado>
   */
  cancelamentoPDV(idTransacaoDistribuidor: number, motivoCancelamento: string, idTransacaoDistribuidorCancelamento: number, codigoPDV: number, dataEnvio: Date) {
    const dateStr = this.getDateComunicacao(dataEnvio);
    const auth = btoa(`${this.COD_CLIENTE_PDV}:${this.gerarCodigoAcesso(this.COD_CLIENTE_PDV)}`);

    const requestBody = `
    <transacao>
      <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
      <codigoPDV>${codigoPDV}</codigoPDV>
      <dataEnvio>${dateStr}</dataEnvio>
      <tipo>4</tipo>
      <idTransacaoDistribuidor>${idTransacaoDistribuidorCancelamento}</idTransacaoDistribuidor>
      <motivoCancelamento>${motivoCancelamento}</motivoCancelamento>
      <idTransacaoDistribuidorCancelamento>${idTransacaoDistribuidor}</idTransacaoDistribuidorCancelamento>
    </transacao>
    `;


    if (environment.simular_l2) {
      const resposta = `
      <?xml version="1.0"?>
      <Resultado>
           <dataResultado>${dateStr}</dataResultado>
           <codigoDistribuidor>${this.COD_CLIENTE}</codigoDistribuidor>
           <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>
           <dataProcessamento>${dateStr}</dataProcessamento>
           <autenticacao>75160633052652701</autenticacao>
           <sucesso>true</sucesso>
           <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de cancelamento: c&#xF3;digo da transa&#xE7;&#xE3;o duplicado!</mensagem>
      </Resultado>
      `;

      const respostaJson = XML2JSONUtil.parseHttpXmlResponse(resposta);
      return new Promise<{}>((resolve, reject) => resolve(respostaJson));
    } else {
      return this.genericRequest(this.URL_CENTRAL, requestBody, auth);
    }
  }

  private genericRequest(url = this.URL_CENTRAL, requestBody: string, auth = undefined) {
    if (auth === undefined) {
      auth = btoa(`${this.COD_CLIENTE}:${this.gerarCodigoAcesso(this.COD_CLIENTE)}`);
    }

    // const _headers = new HttpHeaders();
    // _headers.append('content-type', 'application/xml');
    // _headers.append('authorization', `Basic ${auth}`);
    // _headers.append('Authorization', `Basic NzU6NTM4YjUxNzAxNTU4OTUxNTFjYjAyYTkzZmJmNDMwNjk=`);
    // _headers.append('Access-Control-Allow-Origin' , '*');
    // _headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    const _headers = {
      'authorization': `Basic ${auth}`,
      'content-type': 'application/xml'
    }

    // const body = `username=${usuario}&password=${senha}&grant_type=password`;

    this.logger.info('***************************');
    this.logger.info('** HTTP POST CENTRAL');
    this.logger.info('** Basic: ' + auth);
    this.logger.info('** URL: ' + url);
    this.logger.info('** headers: ' + JSON.stringify(_headers));
    this.logger.info('** requestBody: ' + requestBody);

    return this.genericRequestAngular(url, requestBody, auth, _headers);
  }

  private genericRequestAngular(url = this.URL_CENTRAL, requestBody: string, auth = undefined, _headers) {
    this.logger.info('** HTTP GET ANGULAR');
    const _url = environment.middleware_cors;
    const _urlFull = (`${_url}?url=${url}&body=${encodeURI(requestBody)}&headers=${encodeURI(JSON.stringify(_headers))}`);
    this.logger.info('** url', _url);
    this.logger.info('** url2', _urlFull);

    return new Promise<any>((resolve, reject) => {
      this.http.get(_urlFull, { responseType: 'text' })
        .timeoutWith(ComunicacaoCentralProvider.APP_TIMEOUT, Observable.throw(new Error(`N??o foi poss??vel estacionar seu ve??culo. Seu tempo m??ximo de resposta durou mais de ${ComunicacaoCentralProvider.APP_TIMEOUT / 1000} segundos`)))
        // .map(response => {
        //   console.log('Resposta linha 743',response)
        //   XML2JSONUtil.parseHttpXmlResponse(response)
          
        // })
        .take(1)
        .subscribe(response => {
          console.log('Resposta CC linha 748',response)
          this.logger.info('** response: ', response);
          const respostaJson = XML2JSONUtil.parseHttpXmlResponse(response);
          return resolve(respostaJson);
        }, error => {
          this.logger.error('** error: ', error);
          return reject(error);
        });
    });
  }
  
  private genericRequestAngularNotCORs(url = this.URL_CENTRAL, requestBody: string, auth = undefined, _headers) {
    return this.http.post(url, requestBody, { headers: _headers, responseType: 'text' })
      .timeoutWith(ComunicacaoCentralProvider.APP_TIMEOUT, Observable.throw(new Error(`N??o foi poss??vel estacionar seu ve??culo. Seu tempo m??ximo de resposta durou mais de ${ComunicacaoCentralProvider.APP_TIMEOUT / 1000} segundos`)))
      .map(response => XML2JSONUtil.parseHttpXmlResponse(response))
      .toPromise()
      .then(response => {
        this.logger.info('** response: ' + response);
        // response = response.replace('<?xml version="1.0"?>', '').trim();
        // this.logger.info('** response 2: '+ response);
        // this.logger.info('** response 2: '+ response);

        // const toJSON = XML2JSONUtil.parseHttpXmlResponse(response);
        // this.logger.info('** response 2: '+ response);

        return Promise.resolve(response);
      })
      .catch(response => {
        // this.logger.error('** HTTP POST CENTRAL');
        this.logger.info('** HTTP POST CENTRAL');
        this.logger.info('** Basic: ' + auth);
        this.logger.info('** URL: ' + url);
        this.logger.info('** headers: ' + JSON.stringify(_headers));
        this.logger.info('** requestBody: ' + requestBody);
        this.logger.info('** reject: ', response);

        this.firebaseLoggerProvider.enviarFirebase({
          auth: auth,
          url: url,
          headers: _headers,
          requestBody: requestBody,
          response: JSON.stringify(response),
          tipo: 'ERRO',
          tipoDetalhe: 'Erro na comunica????o com a AMC. Link L2.',
          timestamp: new Date().toISOString(),
        });

        // if (response.status === 400) {
        //   const responseJson = response.json();

        //   if (responseJson.error === 'invalid_grant') {
        //     return Promise.reject('Usu??rio ou senha inv??lida!');
        //   }
        // }

        return Promise.reject(response);
      });
  }

  private getDateComunicacao(date = new Date()) {
    const dateStr = date.getFullYear() + '-' + this.putZero(date.getMonth() + 1) + '-' + this.putZero(date.getDate()) + 'T' + this.putZero(date.getHours()) + ':' + this.putZero(date.getMinutes()) + ':' + this.putZero(date.getSeconds());

    return dateStr;
  }

  /**
   * tipo inteiro - data atual "dma" (sem barras ou caracteres e sem zeros a esquerda)
   */
  private getDataAtual(dt = new Date()) {
    return parseInt(dt.getDate() + '' + (dt.getMonth() + 1) + dt.getFullYear()); // 1172018
  }

  private gerarCodigoAcesso(COD = this.COD_CLIENTE) {
    return this.gerarMD5(COD, this.CNPJ_CLIENTE, this.DMA, this.TOKEN);
  }

  private gerarMD5(cod, cnpj, dma, token) {
    const md5 = MD5Util.hashStr(cod + '' + cnpj + '' + dma + '' + token);
    // const md5 = Md5.hashStr(cod + '' + cnpj + '' + dma + '' + token);
    this.logger.info('md5: ' + md5);
    return md5;
  }

  private putZero(val: number) {
    return val < 10 ? ('0' + val) : val;
  }

  // private gerarIdTransacao(): number{
  //   // TODO: OBTER A QUANTIDADE DE VEICULOS ESTACIONADOS NO BANCO INDEPENDENTE DO STATUS
  //   return parseInt(this.COD_CLIENTE + '' + new Date().getTime());
  // }
}
