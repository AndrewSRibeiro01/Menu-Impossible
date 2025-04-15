import * as S from "./styled"
import { IoNotificationsOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import image from "../../assets/eu.jpg"

export const Header = () => {
    return (
        <S.GridContainer>
            <S.GridHeader>
                <div>
                    <S.GridName>
                        Olá, Andrew Souza!
                    </S.GridName>
                    <S.GridWelcome>
                        Seja bem vindo de volta!
                    </S.GridWelcome>
                </div>
                <S.IconsAvatar>
                    <S.ColorIcons>
                        <IoHelpCircleOutline style={{ paddingRight: "4px", width: "65px", height: "35px" }} />
                        <IoNotificationsOutline style={{ paddingRight: "4px", width: "65px", height: "35px" }} />
                        <S.AvatarImage src={image} alt="" />
                    </S.ColorIcons>
                </S.IconsAvatar>
            </S.GridHeader>
        </S.GridContainer>
    )
}