import styled from "styled-components";
export const StyledFooter = styled.div`
    padding:0 100px;

    .logo{
        width: 160px;
      }
      
      .top{
        justify-content: space-between;
        padding: 20px 0;
      }

      
      .icons img{
        width: 35px;
        height: 35px;
        margin: 0 10px;
      }
      
      .divide{
        height: 1px;
        background-color: #00000020;
      }
      
      .left{
        color: #444444;
      }

      @media only screen and (max-width:760px){
        .top:nth-child(3){
          flex-direction:column;
        }

        .top .left{
          margin:5px 0;
        }
      }

      @media only screen and (max-width:590px){
        padding:0 30px;
      }

      @media only screen and (max-width:440px){
        background-color:#eeeeee;
        padding-top:30px;

        .top{
          flex-direction:column;
        }

        .icons img{
          margin:0;
        }

        .icons{
          width:100%;
          justify-content:space-between;
          margin-top:30px;
        }
      }
`