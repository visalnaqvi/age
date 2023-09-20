import styled from "styled-components";
export const StyledStepCard = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:80%;
    margin:auto;
    transform:translateX(-20px);

    
      
      .num{
        width: 10%;
        text-align: right;
        font-size: 200px;
        font-weight: 900;
        color: #bdbcc650;
      }
      
      .right{
        width: 90%;
        height: 200px;
        box-shadow: 3px 3px 10px #00000020;
        border-radius: 10px;
        background-color: #fff;
        transform: translateX(-10px);
      }
      
      
      .content{
      
        width: 80%;
      
      }
      
      .content .heading{
        font-weight: 700;
        font-size: 28px;
      }
      
      .right img{
        width: 80px;
      }
      
      .content .text{
        font-size: 19px;
        color: #bdbcc6;
        width: 80%;
        line-height: 30px;
        margin-top: 20px;
      }

      @media only screen and (max-width:650px){
        width:100%;
        margin:30px 0;
        transform:none;
    
        .num{
          display:none;
        }

        .right{
          width:90%;
          margin:auto;
          transform:none;
          flex-direction:column-reverse;
          height:auto;
          padding:20px;
          align-items:flex-start;
        }

        .right img{
          width:20%;
          margin:20px 0;
          margin-bottom:30px;
        }

        .right .content{
          width:100%;
        }

        .right .content .text{
          width:100%;
        }
      }

      @media only screen and (max-width:500px){
        .right .content .heading{
          font-size:24px;
        }

        .right .content .text{
          font-size:18px;
          line-height:22px;
          margin-top:10px
        }
      }
`