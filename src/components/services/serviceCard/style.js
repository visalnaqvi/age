import styled from "styled-components";

export const StyledService = styled.div`
    height:350px;
    width:50%;
    margin-right:10px;
    padding:20px;
    border-top:5px solid #4f44e0;
    background-color:#fff;
    box-shadow:3px 3px 30px #00000020;
    transition:0.5s ease;
    cursor:pointer;
    :hover{
        background-color:#4f44e0;
        color:#fff;
        transform:scale(1.1)
    }
    .text{
        font-size:small;
        margin-top:10px;
        line-height:20px;
    }

    .heading{
        font-size:large;
        font-weight:600;
    }

    @media only screen and (max-width:1190px){
        height:400px;
    }

    @media only screen and (max-width:940px){
        height:300px;
        margin:10px;
    }

    @media only screen and (max-width:680px){
        height:350px;
    }

    @media only screen and (max-width:580px){
        height:auto;
    }

    @media only screen and (max-width:500px){
        width:100%;
        border-top:none;
        border-left:5px solid #4f44e4;
        border-radius:10px;
    }
    
    `;