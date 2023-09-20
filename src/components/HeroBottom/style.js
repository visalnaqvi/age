import styled from "styled-components";
export const StyledHeroBottom = styled.div`
    background-color:rgb(236,239,243);
    text-align:center;
    padding: 100px 0;
    overflow:hidden;


    .main-head{
        font-size: 30px;
        font-weight: 800;
        font-size: 2.5rem;
        margin-bottom: 30px;
      }
      
      span{
        color: #4f44e0;
      }
      
      .in{
        padding: 30px;
        position:relative;
      }
      
      img{
        width: 100%;
        border-radius: 10px;
        box-shadow: 2px 3px 30px #4f44e050;
        transition:0.3s box-shadow ease;
        cursor:pointer;
        
      }

      .in:hover img{
        box-shadow: 2px 3px 5px #4f44e090;
      }

      .details{
        position: absolute;
        top: 30px;
        left: 30px;
        right: 30px;
        height: 0px;
        bottom: unset;
        border-radius: 10px;
        background-color: #fff;
        opacity: 0;
        transition: 0.3s ease;
        cursor: pointer;
        overflow-y:scroll;
      }
      
      .in:hover .details{
        opacity: 1;
        height: calc(100% - 60px);
        padding: 20px;
      }
      
      p.titlein{
        font-size: 20px;
        font-weight: 700;
        text-align: left;
      }
      
      p.text{
        text-align: left;
        margin: 10px 0;
        font-size:small;
        line-height:20px;
      }

      /* Designing for scroll-bar */
      .details::-webkit-scrollbar {
          width: 8px;
      }
    
      /* Track */
      .details::-webkit-scrollbar-track {
          background: #f8f8f8;
          border-radius: 5px;
      }
    
      /* Handle */
      .details::-webkit-scrollbar-thumb {
          background: #4f44e0;
          border-radius: 5px;
      }
    
      /* Handle on hover */
      .details::-webkit-scrollbar-thumb:hover {
          background: #4f44e070;
      }


      @media only screen and (max-width:930px){
        .main-head{
          width:95%;
          margin:auto;
          margin-bottom:30px;
        }
      }

      @media only screen and (max-width:500px){
        .main-head{
          font-size:30px;
        }
      }
`