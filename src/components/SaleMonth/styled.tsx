import styled from "styled-components";

export const Container = styled.div`
    gap: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    top: 26%;
    width: 100%;
    z-index: 4;
`

export const GridMonth = styled.div`
    display: flex;
    justify-content: space-around;
    width: 35%;
    height: 96px;
    flex-direction: row;
    background-color: #C7EC41;
    border-radius: 6px;
    align-items: center;
    border: 0.83px solid #819A2866;
    box-shadow: 5px 5px 5px 5px #0C0C0D0D;
`

export const GridTicket = styled.div`
    display: flex;
    justify-content: space-around;
    width: 35%;
    height: 96px;
    flex-direction: row;
    background-color: #ffff;
    border-radius: 6px;
    align-items: center;
    border: 0.83px solid #3B295F66;
    box-shadow: 5px 5px 5px 5px #0C0C0D0D;
`

export const Display = styled.pre`
    display: flex;
    gap: 15px;
`