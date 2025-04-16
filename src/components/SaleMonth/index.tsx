import * as S from "./styled";
import stats from "../../assets/img/Frame 7.svg";
import ticket from "../../assets/img/Frame 7 (1).svg";
import value from "../../assets/img/R$31.489.svg";
import positiveStats from "../../assets/img/Frame 8.svg";

export const SaleMonth = () => {
    return (
        <S.Container>
            <S.GridMonth>
                <img src={stats} alt="stats" />
                <pre>
                    <img src={value} alt="valor" />
                    {`
Vendas no mês`}
                </pre>
                <S.Display>
                    <img src={positiveStats} alt="" />
                    {`Em relação ao 
mês passado`}
                </S.Display>
            </S.GridMonth>
            <S.GridTicket>
                <img src={ticket} alt="ticket" />
                <pre>
                    <img src={value} alt="" />
                    {`
Ticket médio no mês`}
                </pre>
                <S.Display>
                    <img src={positiveStats} alt="" />
                    {`Em relação ao 
mês passado`}
                </S.Display>
            </S.GridTicket>
        </S.Container>
    )
}