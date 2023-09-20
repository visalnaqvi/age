import styled from "styled-components";
export const StyledServices = styled.div`
padding:0 100px;
.title{
    font-size:60px;
    font-weight:800;
    text-align:center;
    margin:60px;
    color: #1a1a1b;
}

.sub{
    font-size:28px;
    font-weight:900;
    color: #1a1a1b;
    letter-spacing:2px;
    word-spacing:5px;
}

.wrapper{
    justify-content:space-between;
    padding:50px 0;
    margin:30px 0;
}

.top{
    width:50%;
}

@media only screen and (max-width:1090px){
    padding:0 30px;
}

@media only screen and (max-width:940px){
    .wrapper{
        flex-direction:column;
    }

    .top{
        width:100%;
    }
}

@media only screen and (max-width:500px){
    .top{
        flex-direction:column;
    }

    .title{
        font-size:45px;
        margin-bottom:20px;
    }

    .sub{
        display:none;
    }
}
`;