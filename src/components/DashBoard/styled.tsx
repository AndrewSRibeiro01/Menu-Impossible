import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: absolute;
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
    justify-content: space-around;
    border: 0.83px solid #3B295F66;
    box-shadow: 5px 5px 5px 5px #0C0C0D0D;
    width: 100%;
    height: 70px;
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
    height: 410px;
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