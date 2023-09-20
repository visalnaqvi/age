import styled from "styled-components";

export const StyledAboutUs = styled.div`
    .title{
        font-size:60px;
        font-weight:800;
        text-align:center;
        margin:60px;
        color: #1a1a1b;
    }

    .about-card{
        width: 80%;
        margin: 50px auto;
        background-color: #ffcb6990;
        padding: 20px;
        border-radius: 10px;
      }
      
      .heading{
        font-weight: 800;
        font-size: 20px;
        margin-bottom: 20px;
      }
      
      .text{
        line-height: 25px;
        font-weight: 500;
        color: #262626;
      }

      @media only screen and (max-width:500px){
        .about-card{
          width:90%;
        }

        .title{
          font-size:35px;
        }
      }
`