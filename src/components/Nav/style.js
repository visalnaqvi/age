import styled from "styled-components";
export const StyledNav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 80px;
    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      a{
        text-decoration: none;
        font-weight: 700;
        color: #4f44e0;
      }
      
      ul li a{
        padding: 10px 15px;
        border-radius: 30px;
        transition: 0.3s background-color ease;
      }
      
      ul li a:hover{
        background-color: #4f44e010;
      }
      
      button{
        width: 180px;
        height: 50px;
        border-radius: 50px;
        border: 1px solid #4f44e0;
        background-color: transparent;
        font-weight: 700;
        color: #4f44e0;
        margin-left: 20px;
        cursor: pointer;
        transition: 0.2s ease;
      }
      
      button:hover{
        background-color: #4f44e0;
        color: #fff;
      }
      
      .logo{
        height: 60px;
      }
      
      .right{
        display: flex;
        justify-content: center;
        align-items: center;
      }


      @media only screen and (max-width:950px){
        button{
          display:none;
        }
      }


      @media only screen and (max-width:730px){
        flex-direction:column;
        ul{
          width:100%;
          flex-wrap:wrap;
        }
        .logo{
          margin-bottom:20px;
        } 
      }

      @media only screen and (max-width:580px){
        padding:20px 30px;
      }

      @media only screen and (max-width:480px){
        ul li a{
          min-width:10px;
        }

        ul li{
          margin:8px 0;
        }
      }

`