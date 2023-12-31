import styled from "styled-components";
export const StyledContactUs = styled.div`
    padding-top:60px;
    text-align:center;

    .title{
        font-size:60px;
        font-weight:800;
        color: #1a1a1b;
    }

    .sub{
        font-size: 20px;
        margin-top: 20px;
        color: #4e4e4e;
      }

      .wrapper{
        width:80%;
        margin:50px auto;
        flex-wrap:wrap;
      }

      @media only screen and (max-width:1228px){
          .wrapper{
              width:95%;
          }
      }

      @media only screen and (max-width:860px){
        .wrapper{
            width:95%;
            padding:0;
        }

        @media only screen and (max-width:780px){
            .wrapper{
                flex-direction:column
            }
        }

        @media only screen and (max-width:500px){
            .title{
                font-size:30px;
            }

            .sub{
                font-size:20px;
                line-height:30px;
                width:90%;
                margin:auto;
                margin-top:10px;
            }
        }
    }
`
