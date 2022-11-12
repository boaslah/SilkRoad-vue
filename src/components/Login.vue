<template>

    <div class="main">
        <div class="main1"></div>
        <div class="main2">
            <div>
                <h1>
            </div>

            <div>
               
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: 'LoginPage'
    }

</script>

<style scoped>

h3 i{
    color: white;
    margin-top: 3%;
}

.main h1{
    text-align: center;
}
    
.main2{
    padding: 0% 10% 0% 10%;
}
.main-bottom{
    text-align: center;
    margin-top: 18%;
}
.main-bottom i{
    margin-top: -15%;
    font-size: 25px;
}

.main{
    display: grid;
    grid-template-columns: 25% 50% 50%;
    color: white;
    position: fixed;
    width: 100%;
    margin: 17% 0% 0% 0%;
}
#homepage-input{
    margin: auto;
    display: block;
    border: none;
    padding: 1%;
    width: 95%;
    background-color:rgba(0, 0, 0, 0.644);
}
h3{
    margin: auto;
    display: block;  
    text-align: right;
    margin: 1% 2% 0% 0%;
}
::placeholder{
    color: white !important;
}

@media only screen and (max-width: 600px) {
   
    .main{
        margin: 70% 0% -40% -2%;
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
    #homepage-input{
        width: 94%;
        padding: 10%;
    }
    .main-bottom{
        text-align: center;
        margin-top: 100%;
    }
}

@media only screen and (max-width: 1000px) {

    .main{
        margin: 40% 0% 0% -2%;
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
    #homepage-input{
        width: 94%;
        padding: 1.5%;
    }
    .main-bottom{
        text-align: center;
        margin-top: 63%;
    }
}
</style>

