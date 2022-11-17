<template>

    <div id="widget-main">
        <div class="center-box">

            <div class="center-box-rows">
                <div class="center-box-row1">
                    <p>FILTER</p>
            
                    <p class="box-nav1 active">All</p>
                    <p class="box-nav2">Rent</p>
                    <p class="box-nav3">Sale</p>                        
                </div>
                <div class="center-box-row2">
                    <input type="text" placeholder="      KEYWORD">
                </div>

                <div class="center-box-row3">

                    <select name="role">

                        <option value="category">category</option>
        
                    </select>

                    <select name="role" class="second-row">

                        <option value="category">category</option>
        
                    </select>

                </div>

                <div class="center-box-row4">

                    <select name="role">

                        <option value="category">category</option>
        
                    </select>

                    <select name="role" class="second-row">

                        <option value="category">category</option>
        
                    </select>

                </div>
                <div  class="center-box-row5">
                    <!-- <p>Price   $00.00-$10,000.00</p><br> -->
                    <input type="range" name="" id="range" class="active">
                    <button>Find it</button>
                </div>

            <div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: 'HomePage'
    }

</script>

<style scoped>

h3 i{
    color: white;
    margin-top: 3%;
}

#widget-main h1{
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

#widget-main{
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
   
    #widget-main{
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

    #widget-main{
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

