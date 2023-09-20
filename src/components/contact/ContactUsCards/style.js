import styled from "styled-components";

export const StyledContactUsCard = styled.div`
    text-align:left;
    width:30%;
    margin:100px auto;
    padding:20px;
    border-top:6px solid #4f44e0;
    background-color:#fff;
    box-shadow:3px 3px 20px 4px #00000030;
    border-radius:10px;
    height:auto;
    .heading{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #1a1a1b;
    }
    
    .text{
      line-height: 24px;
      font-weight: 500;
      color: #444444;
    }
    
    
    .wrapper{
      margin-top: 60px;
    }
    
    .wrap{
      background-color: #4f44e4;
      border-radius: 30px;
      padding: 10px;
      color: #fff;
      font-weight: 700;
      margin: 10px;
      
    }
    
    .wrap img{
      margin-right: 10px;
    }

    @media only screen and (max-width:1020px){
      margin:0;
      width:33%;
      .text{
        font-size:small;
      }


    }


    @media only screen and (max-width:780px){
      width:95%;
      margin:20px 0;
      border-top:none;
      border-left: 5px solid #4f44e4;
  }
`;