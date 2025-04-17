import styled from "styled-components";
import { CgMenuGridR } from "react-icons/cg";
import { VscChecklist } from "react-icons/vsc";
import { IoStatsChartOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { LuSquareUser } from "react-icons/lu";

export const Container = styled.div`
    width: 10%;
    margin-Top: 7%;
`

export const Ball = styled.div`
    background-color: #fbfbfb;
    z-index: 2;
    position: absolute;
    width: 709px;
    height: 295px;
    border-radius: 64%;
    margin-left: -1px;
    margin-top: -162px;

    @media ( max-width: 1440px) {
        width: 709px;
        height: 295px;
        border-radius: 64%;
        margin-left: -26px;
        margin-top: -195px;
    }
    @media ( max-width: 1230px) {
        width: 490px;
        height: 295px;
        border-radius: 64%;
        margin-left: -26px;
        margin-top: -197px;
    }
`

export const NozzleMenu = styled.div`
    background-color: #3B295F;
    width: 40%;
    height: 12vh;
    border-radius: 0 100% 0 0;
    margin-top: -9px;
`

export const GridMenu = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 60%;
    height: 60vh;
    background-color: #3B295F;
    border-radius: 0 80px 80px 0;
    margin-top: -41px;
    align-items: center;
    justify-content: space-evenly;
`

export const NozzleBackMenu = styled.div`
    background-color: #3B295F;
    width: 45%;
    height: 12vh;
    border-radius: 0 0 100% 0;
    margin-top: -24%;
`

export const BallBottom = styled.div`
    background-color: #ffffff;
    z-index: 2;
    width: 709px;
    height: 295px;
    border-radius: 64%;
    margin-left: -1px;
    margin-top: -138px;

    @media ( max-width: 1440px) {
        width: 709px;
        height: 295px;
        border-radius: 64%;
        margin-left: -1px;
        margin-top: -138px;
    }

    @media ( max-width: 1230px) {
        width: 490px;
        height: 295px;
        border-radius: 64%;
        margin-left: 0px;
        margin-top: -138px;
    }
`

export const StyledCgMenuGridR = styled(CgMenuGridR)`
  width: 30px;
  height: 40px;
  cursor: pointer;
`

export const StyledVscChecklist = styled(VscChecklist)`
  width: 30px;
  height: 40px;
  cursor: pointer;
`

export const StyledIoStatsChartOutline = styled(IoStatsChartOutline)`
  width: 30px;
  height: 40px;
  cursor: pointer;
`

export const StyledTbMoneybag = styled(TbMoneybag)`
  width: 30px;
  height: 40px;
  cursor: pointer;
`

export const StyledBsGear = styled(BsGear)`
  width: 30px;
  height: 40px;
  cursor: pointer;
`

export const StyledLuSquareUser = styled(LuSquareUser)`
  width: 30px;
  height: 40px;
  cursor: pointer;
`