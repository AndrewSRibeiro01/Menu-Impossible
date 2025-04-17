import * as S from "./styled"
import image from "../../assets/img/eu.jpg";

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
                        <S.StyledIoHelpCircleOutline />
                        <S.StyledIoNotificationsOutline />
                        <S.AvatarImage src={image} alt="Eu" />
                    </S.ColorIcons>
                </S.IconsAvatar>
            </S.GridHeader>
        </S.GridContainer>
    )
}