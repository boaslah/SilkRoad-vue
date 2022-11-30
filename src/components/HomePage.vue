<template>

    <div>
        <div id="main">
            <div class="main1"></div>

            <div class="main2">
                <div>
                    <h1>Real Estate Without the Hassle</h1>
                </div>

                <div>

                    <input type="text" name="" id="homepage-input" placeholder="    &#128269;  FIND A PROPERTY">

                    <h3 @click="showAndHideItem( 'widget-main', 'main', 'grid')"> <i class="fa fa-filter"></i>         FILTER</h3>

                    <div class="main-bottom">
                        <h4>OUR LATEST POSTINGS</h4>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>

                </div>
            </div>

            <div class="main3"></div>

        </div>
        
        <div id="widget-main">

            <div></div>

            <div class="center-box">
                <div class="center-box-rows">

                    <div class="center-box-row1">

                        <div>
                            <p> <i class="fa fa-filter"></i>             FILTER</p>
                        </div>

                        <div class="center-box-row1-navs">
                            <div></div>

                            <div class="active">All</div>
                            <div>Rent</div>
                            <div>Sale</div> 

                        </div>

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
                        <div>
                            <div>Price   $00.00-$10,000.00</div>
                            <div><input type="range" name=""></div>
                        </div>
                        <div>
                            <button>Find it</button>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div></div>
        </div>
    </div>
    
</template>

<script>

    import {showAndHideItem} from "../helper.js"

    export default {
        name: 'HomePage',
        methods:{
            showAndHideItem
        }

    }

</script>

<style scoped>

.bread-crumb{
    /* background-color: ; */
    display: none;
}
input[type="range"] {
  -webkit-appearance: none;
  margin-right: 15px;
  width: 100px;
  height: 3px;
  background: rgb(91, 170, 170);
  border-radius: 5px;
  background-image: linear-gradient(rgb(91, 170, 170), rgb(91, 170, 170));
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: rgb(91, 170, 170);
  cursor: ew-resize; 
}

.center-box-row1-navs{
    display: grid;
    grid-template-columns: 40% 20% 20% 20% ;
    text-align: right;
    column-gap: 10%;
    margin: 5% 30% 0% 0%;
}


#widget-main{
    display: none;
    grid-template-columns: 25% 50% 50%;
    color: white;
    position: fixed;
    width: 100%;
    margin: 14% 0% 0% 0%;
}

.center-box{
    background-color:rgba(0, 0, 0, 0.644);
    padding: 1% 5% 5% 5%;
}

.center-box-row3, .center-box-row4{
    display: flex;
    margin-top: 3%;
}

.center-box-row5{
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 5%;
}

.center-box-row1{
    display: grid;
    grid-template-columns:50% 50% ;
}


.center-box-row2 input{
    background-color: rgb(44, 44, 44);
    border: none;
    display: block;
    width: 95%;
    padding: 1.5%;
    margin-top: 2%;
}
.center-box-row4 select, .center-box-row3 select{
    background-color: rgb(134, 142, 145);
    border: none;
    display: block;
    width: 46%;
    padding: 1.5%;
    color: white;
}
.second-row{
    margin-left: 5.8%;
}
input[type=range]::-webkit-slider-thumb{
    background: aqua;
}
input[type=range]{
    width: 90%;
}

.center-box-row5 button{
    margin: 0% 0% 0% 8.3%; 
    padding:0.5%; 
    width:13%;
    border:none; 
    color:white; 
    background-color: rgb(39, 135, 214); 
    border-radius:5%;
    position: fixed;
    font-size: 1.0rem;
}


h3 i{
    color: white;
    margin-top: 3%;
}

h3:hover{
    cursor: pointer;
}
#main h1{
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

#main{
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
    .center-box-row5 button{
        width: 30%;
    }
    #main{
        margin: 70% 0% -40% -2%;
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
    #widget-main{
        margin: 0% 0% 0% -2%;
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

    #main{
        margin: 40% 0% 0% -2%;
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
     #widget-main{
        margin: 30% 0% 0% -2%;
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

