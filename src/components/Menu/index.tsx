import * as S from "./styled"

export const MainMenu = () => {
    return (
        <S.Container>
            <S.Ball />
            <S.NozzleMenu />
            <S.GridMenu>
                <S.StyledCgMenuGridR />
                <S.StyledVscChecklist />
                <S.StyledIoStatsChartOutline />
                <S.StyledTbMoneybag />
                <S.StyledBsGear />
                <S.StyledLuSquareUser />
            </S.GridMenu>
            <S.NozzleBackMenu />
            <S.BallBottom />
        </S.Container>
    )
}
