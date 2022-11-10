<template>

    <div class="main">
        <div class="main1"></div>
        <div class="main2">
            <div>
                <h1>Real Estate Without the Hassel</h1>
            </div>

            <div>
                <input type="text" name="" id="homepage-input" placeholder="    &#128269;    FIND A PROPERTY">
                <h3>FILTER</h3>
            </div>
        </div>
        <div class="main3"></div>
    </div>
    
</template>

<script>

export default {
    name: 'HomePage'
}

</script>

<style scoped>

.main h1{
    text-align: center;
}
    
.main2{
    padding: 0% 10% 0% 10%;
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
    margin: 2% 1% 0% 0%;
}
::placeholder{
    color: white;
    font-size: 1rem;
}

@media only screen and (max-width: 600px) {
   
    .main{
        margin: 70% 0% 0% -2%;
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
    #homepage-input{
        width: 70%;
        padding: 3%;
    }


}

@media only screen and (max-width: 1000px) {

    .main{
        margin: 50% 0% 0% -2%;
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
    #homepage-input{
        width: 70%;
        padding: 1%;
    }
}
</style>

