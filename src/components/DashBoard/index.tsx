import * as S from "./styled"
import printer from "../../assets/img/printer.svg";
import question from "../../assets/img/question.svg";
import { db } from "../../db";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const Dashboard = () => {
    return (
        <S.Container>
            <S.GridCards>
                <S.GridButtons>
                    <img src={printer} alt="Printer" />
                    <S.FlexColumn>
                        <S.Paragraph>
                            12
                        </S.Paragraph>
                        <p>
                            Pedidos para imprimir
                        </p>
                    </S.FlexColumn>
                    <S.PrinterButton style={{ width: "20%" }}>
                        Imprimir
                    </S.PrinterButton>
                </S.GridButtons>

                <S.GridButtons>
                    <img src={question} alt="Question" />
                    <S.FlexColumn>
                        <S.Paragraph>
                            08
                        </S.Paragraph>
                        <p>
                            Novas perguntas
                        </p>
                    </S.FlexColumn>
                    <S.PrinterButton>
                        Responder
                    </S.PrinterButton>
                </S.GridButtons>

                <S.Zindex>
                    <S.Order>
                        Vendas por dia
                    </S.Order>
                    <S.DivPadding>
                        <FaChevronLeft />
                        <FaChevronRight />
                    </S.DivPadding>
                </S.Zindex>

                <S.Zindex>
                    <S.Charts>
                        Gráfico
                    </S.Charts>
                </S.Zindex>

            </S.GridCards>

            <S.GridCards>
                <S.OrderMonth>
                    <S.OrderMontIcons>
                        <S.IconIoWalletOutline />
                        <S.Paragraph>212</S.Paragraph>
                        Pedidos no mês
                    </S.OrderMontIcons>
                    <S.DivPadding>
                        <S.IconLuArrowRight />
                    </S.DivPadding>
                </S.OrderMonth>

                {db.map((item) => (
                    <S.Grid key={item.icon && item.id && item.hour && item.label}>
                        <S.FlexGap>
                            <S.PaddingLeft style={{ paddingLeft: "15px" }} src={item.icon} alt="Icons" />
                            <S.ParagraphDash>
                                {item.id}
                            </S.ParagraphDash>
                        </S.FlexGap>

                        <S.FlexGap>
                            <S.DivContainer>
                                {item.hour}
                            </S.DivContainer>
                            <S.PaddingRigth>
                                {item.label}
                            </S.PaddingRigth>
                        </S.FlexGap>
                    </S.Grid>
                ))}

            </S.GridCards>
        </S.Container >
    )
}