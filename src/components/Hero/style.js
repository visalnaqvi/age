import styled from "styled-components";
export const StyledHero = styled.div`
    
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 80px;
    h1{
        font-size: 55px;
        line-height: 70px;
        font-weight: 800;
        color: #1a1a1b;
        word-spacing: 5px;
        letter-spacing:1px
      }
      
      .left{
        padding-top: 50px;
        width: 60%;
      }
      
      .right{
        width: 40%;
      }
      
      .right img{
        width: 100%;
        margin-top: 120px;
      }
      
      h2{
        margin-top: 10px;
        color: #6d6d75;
        font-size: 30px;
        line-height: 40px;
        font-weight: 600;
      }
      
      button{
        font-size: 1.25rem;
          line-height: 1.875rem;
          padding: 1rem 5rem;
          font-weight: 600;
          background-color: rgb(79,68,224);
          color: #fff;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 2px solid rgb(79,68,224);
          border-radius: 100px;
          margin-top: 50px;
          transition:0.3s ease;
          cursor:pointer;
      }

      button:hover{
          background-color:transparent;
          color:rgb(79,68,224);
      }
      
      p{
        color: #9f9faa;
        font-size: 1.3rem;
        font-weight: 600;
        margin-top: 10px;
        margin-left: 8px;
      }


      @media only screen and (max-width:900px){
        flex-direction:column-reverse;
        padding:0 80px;
        padding-bottom:80px;
      }

    .left{
        width:100%;
      }

      .right{
        width:80%;
      }

      @media only screen and (max-width:640px){
        padding:0px 30px;
        margin-bottom:50px;

        h1{
          font-size:45px;
          line-height:60px;
        }
      }

      @media only screen and (max-width:460px){
        .right{
          width:100%;
        }

        .right img{
          margin:0;
          margin-top:40px;
        }

        h2{
          font-size:24px;
          line-height:30px;
        }
      }

      @media only screen and (max-width:400px){
        h1{
          font-size:33px;
          line-height:38px;
        }

 

        button{
          width:100%;
          font-size:16px;
        }
      }

     
`