import styled from "styled-components";

export const StyledHowWeWork = styled.div`
    padding:100px 0;
    background-color:#f8f8f8;
    .title{
        text-align: center;
        font-size: 80px;
        font-weight: 800;
        color: #1a1a1b;
      }
      
      .sub{
        text-align: center;
        color: #bdbcc6;
        font-size: 30px;
        margin: 36px 0;
      }

      @media only screen and (max-width:650px){
        .title{
          font-size:45px;
        }

       .title, .sub{
        width:95%;
        margin:auto;
        }
      }

      @media only screen and (max-width:500px){
        .title{
          font-size:30px;
          margin-bottom:20px;
        }

        .sub{
          font-size:22px;
          line-height:30px;
        }
      }
`