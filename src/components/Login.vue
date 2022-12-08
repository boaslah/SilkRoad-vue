<template>

    <div class="main">

        <div class="main1"></div>
        <div class="main2">
            <div class="main2-col1">
                <h2 style="color:white;">Don't have an account?</h2>

                <p style="color:white;">If you do have an account fill in the form <br>and click done to login to your account,
                <br>else click register to register your <br>account.</p>

                <button><router-link to="/register">REGISTER</router-link></button>
            </div>
            <div class="main2-col2">
                <div class="login">

                    <h1>LOGIN</h1>
                    <div class="input1">
                        <i class="fa fa-phone icon"></i><input type="text" placeholder="Phone Number"><br>
                    </div>

                    <div class="input2">
                        <i class="fa-solid fa-lock icon"></i><input type="text" placeholder="Password">
                    </div>

                    <p class="active">Forget your password?</p>

                    <button>Login</button>
                    <!-- <span class="align-left">Login With  <i class="fa-brands fa-facebook-f"></i>    <i class="fa-brands fa-twitter"></i> </span> -->
                </div>
            </div>
        </div>

        <div class="main3"></div>
        
      
    </div>
    
</template>

<script>

    export default {
        name: 'Login'
    }

</script>

<style lang="scss" scoped>

.align-left{
    /* text-align: center; */
    margin-top: -500%;
}

.main2-col1 a{
    text-decoration: none;
    color: white;
}
.main2-col1 button{
    border: solid;
    border-color: white;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.568);
    color: white;
    width: 40%;
    padding: 3%;
}

.input1{
    display: flex;
}
.input2{
    display: flex;
}

.code{
    background-color: rgba(99, 122, 129, 0.863);
    padding:3.1%;
    color: white;
}
    
.icon {
    padding:3%;
    background-color:rgb(216, 220, 224);
    color: black;
    margin-top: 4%;
}

.login{
    padding: 5% 13% 5% 13%;
}
.main2-col2 p{
    float: right;
}
::placeholder{
    color: rgba(99, 122, 129, 0.863);
}
.main2-col2 button{
    background-color: rgba(99, 122, 129, 0.863);
    color: white;
    border: none;
    padding: 3%;
    border-radius: 5px;
    width: 70%;
    display: block;
    float: right;
}
.login input{
    border: none;   
    background-color:rgb(216, 220, 224);
    padding: 3.9%;
    margin-top: 5%;
    float: right;
    width: 80%;
}

.main{
    display: grid;
    grid-template-columns: 20% 60% 20%;
    color: white;
    position: fixed;
    width: 100%;
    margin: 17% 0% 0% 0%;
}
.main2-col2{
    background-color: rgb(228, 228, 228);
    color: rgba(98, 110, 114, 0.863);
    margin: -30% 0% -20% 0%;
    overflow: hidden;
}
.main2{
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 5% 5% 5% 5%;
    background-color: rgba(0, 0, 0, 0.568);
}
@media only screen and (max-width: 600px) {
    .main{
        display: grid;
        grid-template-columns: 5%  90% 5%;
    }
    .main2{
        display: flex;
        flex-direction: column;
        padding-bottom: 35%;
        margin-top: 20% !important;
    }
    .main2-col2{
        margin-top: 5%;
        padding-bottom: 5%;
    }
}
@media only screen and (max-width: 1000px) {

    .main{
        margin: 30% 0% 0% -2%;
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
}

</style>

