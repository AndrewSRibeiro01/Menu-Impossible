import styled from "styled-components";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";

export const GridContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const GridHeader = styled.div`
    background-color: #3B295F;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding-left: 30px;
    /* position: static; */
    margin-top: 25px;
    z-index: 3;
    width: 70%;
    height: 128px;
    border-radius: 8px;
    border: 1px solid #5C2CBD;
`

export const GridName = styled.div`
    font-weight: 500;
    font-size: 28px;
    color: #FFF;
    padding-bottom: 10px;
`

export const GridWelcome = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #FFF;
`

export const AvatarImage = styled.img`
    background-color: red;
    border-radius: 100%;
    width: 65px;
`

export const IconsAvatar = styled.div`
    margin-right: 50px;
`

export const ColorIcons = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
`

export const StyledIoHelpCircleOutline = styled(IoHelpCircleOutline)`
    padding-right: 4px;
    width: 65px;
    height: 35px;
    cursor: pointer;
`

export const StyledIoNotificationsOutline = styled(IoNotificationsOutline)`
    padding-right: 4px;
    width: 65px;
    height: 35px;
    cursor: pointer; 
`