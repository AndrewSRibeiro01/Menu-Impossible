import * as S from "./styled"
import printer from "../../assets/img/printer.svg";
import question from "../../assets/img/question.svg";
import { IoWalletOutline } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { db } from "../../db";

export const Dashboard = () => {
    return (
        <S.Container>
            <S.GridCards>
                <S.Grid>
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
                </S.Grid>

                <S.Grid>
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
                </S.Grid>

                <S.Zindex>
                    <S.Order>
                        Vendas por dia
                    </S.Order>
                    <div style={{ padding: "0 30px 0 0" }}>
                        <FaChevronLeft />
                        <FaChevronRight />
                    </div>
                </S.Zindex>

                <S.Zindex>
                    <S.Charts>
                        Gráfico
                    </S.Charts>
                </S.Zindex>

            </S.GridCards>

            <S.GridCards>
                <S.OrderMonth>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <IoWalletOutline style={{ color: "#66D575", width: "30px", height: "30px", padding: "0 0 0 20px" }} />
                        <S.Paragraph>212</S.Paragraph>
                        Pedidos no mês
                    </div>
                    <div style={{ padding: "0 20px 0 0" }}>
                        <LuArrowRight style={{ width: "30px", height: "30px" }} />
                    </div>
                </S.OrderMonth>

                {db.map((item) => (
                    <S.Grid key={item.icon && item.id && item.hour && item.label}>
                        <img src={item.icon} alt="Icons" />
                        <S.ParagraphDash>
                            {item.id}
                        </S.ParagraphDash>
                        <div style={{
                            background: "#3B295F", color: "#fff",
                            width: "50px",
                            height: "35px",
                            borderRadius: "280px",
                            padding: "0.48px 20.97px",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            fontWeight: "bold",
                            fontSize: "20px"
                        }}>
                            {item.hour}
                        </div>
                        <pre>
                            {item.label}
                        </pre>
                    </S.Grid>
                ))}

            </S.GridCards>
        </S.Container >
    )
}