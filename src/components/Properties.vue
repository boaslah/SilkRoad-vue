<template>

    <div>
        <div class="properties-main" :class="house ? 'col2-height' : ''">

            <div class="col1" :class="house ? 'height' : ''">

                <div class="side-nav">
                    <h3>Search</h3>
                    <input class="search-input" type="text" placeholder="Search                                &#x1F50D;"/>
                    <h3>Category</h3>
                    <select class="select-arrow filter-select option-text" name="category" id="category">
                        <option value="Rooms">Most Recent</option>
                        <option value="Rooms"></option>
                    </select>
                    <h3>Location</h3>
                    <select class="select-arrow filter-select option-text"  name="location" id="">
                        <option value="Rooms">Most Recent</option>
                    </select>
                    <h3>Bedrooms</h3>
                   <select class="select-arrow filter-select option-text"  name="bedrooms" id="">
                        <option value="Rooms">Most Recent</option>
                    </select>
                    <h3>Bathrooms</h3>
                    <select class="select-arrow filter-select option-text"  name="category" id="">
                        <option value="Rooms">Most Recent</option>
                    </select>
                    <div>
                        <p>Price      $00.00-$10,000.00</p>
                        <input type="range" name="">
                    </div>
                    <button>Done</button>
                </div>
            </div>
            <div class="col2">
                <div class="col2-row1" v-if="!house">
                    <div class="prop-menu">
                        <div class="prop-menu1">
                            <strong><p class="active">All</p></strong>
                            <strong><p>Recent</p></strong>
                            <strong><p>Sale</p></strong>
                        </div>
                        <div class="prop-menu2">
                            <p>View</p>     
                            <i @click="showAndHideItem('list-view', 'grid-view', 'block')" class="fa-solid fa-bars icon1"></i>
                            <i @click="showAndHideItem('grid-view', 'list-view', 'block')" class="fa-sharp fa-solid fa-border-all icon1"></i>
                            
                            <strong><p>Sort By</p></strong>
                            <div>
                                <select class="select-arrow search-select option-text" name="" id="">
                                    <option value="Rooms">Most Recent</option>
                                </select>
                            </div>
                        </div>

                    </div>
                
                </div>
                <div class="col2-row2">

                    <div class="row2-col1">
                        <div id="grid-view" @click="house = true">
                            <HousesGrid />
                        </div>
                        <div id="list-view" @click="house = true">
                            <HousesList />
                        </div>
                        <div id="house-view">
                            <House />
                        </div>
                    </div>
                    <div class="row2-col2" :class="house ? 'height' : ''">

                        <h2>Advertisement</h2>

                    </div>

                </div>

                <div v-if="!house">
                    <button class="btn2"> Load More</button>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
</template>

<script>

    import HousesGrid from "./HousesGrid";
    import HousesList from "./HousesList";
    import House from "./House";
    import Footer from "./Footer";
    import {showAndHideItem} from "../helper.js";


    export default {
        name: 'Properties',
        components:{
            Footer, 
            HousesGrid,
            HousesList,
            House
        },
        data(){
            return{
                date: false,
                house: ''
            }
        },
        methods:{
            showAndHideItem
        }
    }

</script>

<style lang="scss" scoped>
.height{
    height:93vh !important;
}
.col2-height{
    height: 255vh !important;
}

i:hover{
    cursor: pointer;
}

#house-view{
    display: none;
}

.fa-sharp{
    margin-right: 10%;
}

.option-text{
    padding-left: 5% !important;
    color: rgba(98, 110, 114, 0.863);
    font-size: 90% !important;
}

select.search-select{
    width: 230px;
    border: none;
    appearance: none;
    padding: 4% 0% 3% 0%;
    border-radius: 1px;
    margin-top: 3%;
    font: inherit;
}

select.filter-select{
    width: 100%;
    border: none;
    appearance: none;
    padding: 4% 0% 3% 0%;
    border-radius: 1px;
    font: inherit;
    margin-bottom: 5%;
}

select.select-arrow {
  background-image:
    linear-gradient(45deg, transparent 50%, white 50%),
    linear-gradient(135deg, white 50%, transparent 50%),
    linear-gradient(to right, rgba(98, 110, 114, 0.863), rgba(98, 110, 114, 0.863));
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    100% 0;
  background-size:
    3px 5px,
    5px 5px,
    2.5em 2.5em;
  background-repeat: no-repeat;
}

input::placeholder { font-family: 'FontAwesome'; }

input[type="range"] {
  -webkit-appearance: none;
  margin-bottom: 10%;
  width: 98%;
  height: 3px;
  background: rgb(91, 170, 170);
  border-radius: 5px;
  background-image: linear-gradient(rgb(91, 170, 170), rgb(91, 170, 170));
}

.search-input::placeholder{
    color: white !important;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: rgb(91, 170, 170);
  cursor: ew-resize; 
}

#list-view{
    display: none;
}

.icon1{
    margin-top: 2%;
    font-size: 30px;
    margin-left: -3%;
}

.prop-menu{
    display: grid;
    width: 100%;
    grid-template-columns: 45% 55%;
    margin: 1% 0% 0% 5%;
    color: rgba(98, 110, 114, 0.863);
}
.prop-menu1, .prop-menu2{
    display: flex;
    column-gap: 5%;
}

.properties-main{
    display: grid;
    grid-template-columns: 20% 80%;
    margin: 10% 3% 0% 2%;
    height: 165vh;
}

.col1 p{
    color: rgba(98, 110, 114, 0.863);
    margin-bottom: -1%;
    font-size: 90%;
}

.col1{
    background-color:rgb(209, 215, 223);
    border-radius: 1%; 
    padding: 7%;
    margin: 3% 5% 0% 3%;
    height: 55%;
}
.side-nav{
    height: 50%;
}

h2, h3{
    color: rgba(98, 110, 114, 0.863);
}
h3{
    margin-bottom: 7%;
    font-size: 100%;
}
h2{
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 70vh;
    display: flex;
}

.col1 .search-input{
    background-color: rgb(85, 84, 84);
    border:none; 
    color:white;
    width:92%; 
    padding:4%;
    border-radius: 1%;
    margin-bottom: 10%;
}

.col1 button{
    background-color: rgba(98, 110, 114, 0.863);
    border: none;
    width: 100%;
    border-radius: 5%;
    padding: 4%;
    color: white;
    font-size: 1rem;
}
.btn2{
    background-color: rgba(98, 110, 114, 0.863);
    border: none;
    border-radius: 5px;
    color: white;
    justify-content: center;
    width: 20%;
    padding: 1%;
    margin: -10% 0% 0% 28%;
}

.col2-row1{
    background-color:rgb(214, 214, 214);
    margin-top: 1%;
    border-radius: 2%;
    padding: 0.1% 10% 1% 0.2%;
}
.col2-row2{
    display: grid;
    grid-template-columns: 75% 25%;
    margin-top: 1%;
}
.col2{
    /* display: grid;
    grid-template-rows: 8% 92%; */
    
}

.row2-col1{
    display: grid;
    grid-template-rows: 33% 33% 33%;
}

.row2-col2{
    background-color: white;
    margin-bottom: 85%;
    margin-left: 7%;
}

@media only screen and (max-width: 600px) {

    .properties-main{
        display: flex;
        flex-direction: column;
        margin: 30% 10% 0% 1%;
    }
   
    .col2-row1{
        padding: 1% !important;
    }
    .col1{
        display: none;
    }
    .col2-row1{
        display: none;
    }
    .row2-col2{
        display: none;
    }
    .btn2{
        display: none;
    }
}
@media only screen and (max-width: 1000px) {

    .properties-main{
        margin: 26% 0% 0% 0%;
    }

}
</style>

