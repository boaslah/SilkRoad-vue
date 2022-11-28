<template>

    <div>
        <div class="properties-main">

            <div class="col1">

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
                <div class="col2-row1">
                    <div class="prop-menu">
                        <div class="prop-menu1">
                            <p class="active">All</p>
                            <p>Recent</p>
                            <p>Sale</p>
                        </div>
                        <div class="prop-menu2">
                            <p>View</p>     
                            <i @click="showAndHideItem('list-view', 'grid-view', 'block')" class="fa fa-solid fa-list icon1"></i>
                            <i @click="showAndHideItem('grid-view', 'list-view', 'block')" class="fa-sharp fa-solid fa-border-all icon1"></i>
                            <p>Sort By</p>
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
                        <div id="grid-view">
                            <HousesGrid />
                        </div>
                        <div id="list-view">
                            <HousesList />
                        </div>
                    </div>
                    <div class="row2-col2">

                        <h2>Advertisement</h2>

                    </div>

                </div>

                <div>
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
    import Footer from "./Footer";
    import {showAndHideItem} from "../helper.js"


    export default {
        name: 'Properties',
        components:{
            Footer, 
            HousesGrid,
            HousesList
        },
        methods:{
            showAndHideItem
        }
    }

</script>

<style scoped>

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
  height: 7px;
  background: rgb(91, 170, 170);
  border-radius: 5px;
  background-image: linear-gradient(rgb(91, 170, 170), rgb(91, 170, 170));
}

.search-input::placeholder{
    color: white !important;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: rgb(91, 170, 170);
  cursor: ew-resize; 
}

#list-view{
    display: none;
}

.icon1{
    width: 5%;
    margin-top: 2%;
    font-size: 30px;
}

.prop-menu{
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 1% 5% 0% 5%;
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

h2, h3{
    color: rgba(98, 110, 114, 0.863);
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
    border-radius: 5%;
    color: white;
    justify-content: center;
    width: 20%;
    padding: 1%;
    margin: -10% 0% 0% 27%;
}

.col2-row1{
    background-color:rgb(214, 214, 214);
    margin-top: 1%;
    border-radius: 2%;
    padding: 0.1% 0.2% 1% 0.2%;
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
</style>

