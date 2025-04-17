import styled from "styled-components";
import { IoWalletOutline } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 35px;
    top: 40%;
`

export const GridCards = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px 0 0;
    border: 0.83px solid #3B295F66;
    box-shadow: 5px 5px 5px 5px #0C0C0D0D;
    width: 100%;
    height: 70px;
    border-radius: 6px;
`

export const GridButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 0.83px solid #3B295F66;
    box-shadow: 5px 5px 5px 5px #0C0C0D0D;
    width: 100%;
    height: 90px;
    border-radius: 6px;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const Paragraph = styled.p`
    font-size: 30px;
`

export const PrinterButton = styled.button`
    background: #3B295F;
    padding: 15px 20px 15px 20px;
    border-radius: 6px;
    color: #fff;
    font-size: 18px;
`

export const Charts = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 0.83px solid #3B295F66;
    box-shadow: 5px 5px 5px 5px #0C0C0D0D;
    width: 100%;
    height: 350px;
    border-radius: 6px;
    z-index: 4;
`

export const Order = styled.p`
    display: flex;
    font-size: 25px;
    font-weight: bold;
    padding-left: 15px;
`

export const Zindex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 4;
`

export const OrderMonth = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 0.83px solid #3B295F66;
    background: #3B295F;
    color: #fff;
    box-shadow: 5px 5px 5px 5px #0C0C0D0D;
    width: 100%;
    height: 70px;
    border-radius: 6px;
`

export const ParagraphDash = styled.p`
    font-size: 20px;
    font-weight: bold;
`

export const DivPadding = styled.div`
    padding: 0 30px 0 0;
`

export const OrderMontIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const IconIoWalletOutline = styled(IoWalletOutline)`
    color: #66D575;
    width: 30px;
    height: 30px;
    padding: 0 0 0 20px; 
`

export const IconLuArrowRight = styled(LuArrowRight)`
    width: 30px;
    height: 30px;
    cursor: pointer;
`

export const DivContainer = styled.div`
    background: #3B295F;
    color: #fff;
    width: 50px;
    height: 35px;
    border-radius: 280px;
    padding: 0.48px 20.97px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: bold;
    font-size: 20px;
`

export const FlexGap = styled.div`
    display: flex;
    gap: 15px;
    align-items: center; 
`

export const PaddingLeft = styled.img`
    padding-left: 15px;
`

export const PaddingRigth = styled.pre`
    padding-right: 15px;
`
