import { PagamentoModel } from "../pagamento";

export class CardPagarmeModel {
    card_number: string;
    card_holder_name: string;
    card_expiration_date: string;
    card_cvv: string;
    cpf: string;

    constructor() {
    }

    static fromCardModel(pagamento: PagamentoModel) {
        let card = new CardPagarmeModel();
        card.card_number = pagamento.numero;
        card.card_expiration_date = this.putZero(new Date(pagamento.data).getMonth()) + '' + new Date(pagamento.data).getFullYear();
        card.card_cvv = pagamento.ccv;
        card.card_holder_name = pagamento.nome;
        card.cpf = pagamento.cpf;

        return card;
    }

    static putZero(mes: number) {
        mes += 1;

        if (mes < 10)
            return '0' + mes;

        return '' + mes;
    }
}