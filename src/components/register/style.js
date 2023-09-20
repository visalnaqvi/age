import styled from "styled-components";

export const StyledLogin = styled.div`

position:fixed;
height:100vh;
top:0;
right:-120%;
bottom:0;
width:100%;
transition:0.3s right ease;
z-index:99;
.shade{
    width:30%;
    background-color:#0000000;
    height:100vh;
    backdrop-filter:blur(10px);
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


input[type=number] {
  -moz-appearance: textfield;
}

.login{
    width:70%;
    background-color:#fff;
    height:100vh;
    margin-left:auto;
    opacity:1;
    box-shadow:2px 3px 30px #000;
    flex-direction:column;
    position:relative;
}


.title{
    font-size:40px;
    font-weight:900;
    color:#1a1a1b;
}
.wrap{
    width:60%;
}
.input-container{
    margin-top:40px;
    height:70px;
    width:100%;
    background-color:#eceff3;
    border-radius:10px;
    border:1px solid #00000050;
    align-items:flex-start;
    padding:0 20px;
    cursor:pointer;
    flex-direction:column;
    transition:0.3s ease;
}

.input-container p{
    font-size:12px;
    font-weight:800;
    color:#44444440;
}

.input-container input{
    background-color:transparent;
    border:none;
    outline:none;
    color:#00000080;
    font-size:20px;
    height:20px;
    transition:0.3s ease;
    font-weight:700;
}

.disable{
    width:100%;
    height:60px;
    border-radius:70px;
    border:none;
    background-color:#eceff3;
    margin-top:40px;
    color:#44444460;
    font-size:18px;
    font-weight:700;
    letter-spacing:2px;
}

.note{
    text-align:center;
    position:absolute;
    bottom:30px;
    left:0px;
    right:0px;
    color:#444444;
    width:70%;
    margin:auto;
}

button.active{
    background-color:#4f44e0;
    color:#fff;
}

.cross{
    position:absolute;
    top:10px;
    right:10px;
    font-size:100px;
    font-weight:500;
    cursor:pointer;
}

@media only screen and (max-width:800px){
    .wrap{
        width:80%;
    }
}

@media only screen and (max-width:550px){
    .shade{
        width:10%;
    }

    .login{
        width:90%;
    }
}

@media only screen and (max-width:500px){
    .title{
        font-size:28px;
    }

    .input-container{
        margin-top:20px;
    }

    .note{
        width:90%;
        font-size:small;
    }
}

`;