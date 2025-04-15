import * as S from "./styled"
import { CgMenuGridR } from "react-icons/cg";
import { VscChecklist } from "react-icons/vsc";
import { IoStatsChartOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { LuSquareUser } from "react-icons/lu";

export const MainMenu = () => {
    return (
        <div>
            <S.Ball />
            <S.NozzleMenu />
            <S.GridMenu>
                <CgMenuGridR style={{ width: "30px", height: "40px", cursor: "pointer" }} />
                <VscChecklist style={{ width: "30px", height: "40px", cursor: "pointer" }} />
                <IoStatsChartOutline style={{ width: "30px", height: "40px", cursor: "pointer" }} />
                <TbMoneybag style={{ width: "30px", height: "40px", cursor: "pointer" }} />
                <BsGear style={{ width: "30px", height: "40px", cursor: "pointer" }} />
                <LuSquareUser style={{ width: "30px", height: "40px", cursor: "pointer" }} />
            </S.GridMenu>
            <S.NozzleBackMenu />
            <S.BallBottom />
        </div>
    )
}
