<template>

    <div>

        <div class="main-div">
            <div class="row1"> 
                <div @click="category = true; property = '';">
                    <span :class="category ? 'active' : ''">Category</span>
                    <hr :class="category ? 'active-hr' : ''">
                </div>
                <div @click="location = true; property ='';" :class="location ? 'active' : ''"> 
                    <span>Location</span>
                    <hr :class="location ? 'active-hr' : ''">
                </div>
                <div @click="category = ''; location = false; property = true;" :class="property ? 'active' : ''">
                    <span>Property Details</span>
                    <hr :class="property ? 'active-hr' : ''">
                </div>
                <div>
                    <span>Contact Details</span>
                    <hr>
                </div>
            </div>
            <div class="row2">

                <div v-if="category">
                    <span>Select a Category</span>
                    <hr>
                </div>
                <div v-if="location">
                    <span>Select a District with in Grand Cape Mount</span>
                    <hr>
                </div>
                 <div v-if="property">
                    <span>Provide Property Details</span>
                    <hr>
                </div>

            </div>
            <div class="row3">

                <div v-if="category">
                    <p>Houses</p>
                    <p>Apartments</p>
                    <p>Office Spaces</p>
                    <p>Storage Spaces</p>
                    <p>Rooms</p>
                    <p>Land</p>
                    <p>Commercial Properties</p>
                </div>

                <div v-if="location">
                    <p>Popular Areas</p>
                    <p>Commonwealth</p>
                    <p>Garwula</p>
                    <p>Gola Konneh</p>
                    <p>Porkpa District</p>
                    <p>Tewor District</p>
                    <p>Other areas within the country</p>
                    <select class="select-arrow search-select option-text" name="" id="">
                        <option value="Rooms">   Most Recent</option>
                    </select>
                </div>
                <div v-if="property">
                    <div>
                        <input type="text">
                    </div>
                    <div class="select-inputs">
                        <div>
                            <select class="select-arrow search-select option-text" name="" id="">
                                <option value="Rooms">   Most Recent</option>
                            </select>
                            <select class="select-arrow search-select option-text" name="" id="">
                                <option value="Rooms">   Most Recent</option>
                            </select>
                            <select class="select-arrow search-select option-text" name="" id="">
                                <option value="Rooms">   Most Recent</option>
                            </select>
                        </div>
                        <div>
                            <select class="select-arrow search-select option-text" name="" id="">
                                <option value="Rooms">   Most Recent</option>
                            </select>
                            <select class="select-arrow search-select option-text" name="" id="">
                                <option value="Rooms">   Most Recent</option>
                            </select>
                            <select class="select-arrow search-select option-text" name="" id="">
                                <option value="Rooms">   Most Recent</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input type="text">
                    </div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Upload Pictures</button>
                    </div>
                    <div class="pictures">
                        <div><img src="../assets/list1.jpg" alt="houses"></div>
                        <div><img src="../assets/list1.jpg" alt="houses"></div>
                        <div><img src="../assets/list1.jpg" alt="houses"></div>
                        <div><img src="../assets/list1.jpg" alt="houses"></div>
                        <div><img src="../assets/list1.jpg" alt="houses"></div>
                    </div>
                    <strong><p>AMENITIES</p></strong>
                    <div class="check-boxes">
                        <div>
                            <p>Garage   <input type="checkbox"></p> 
                        </div>
                        <div>
                            <p>Garage</p> <input type="checkbox">
                        </div>
                        <div>
                            <p>Garage</p> <input type="checkbox">
                        </div>
                        <div>
                            <p>Garage</p> <input type="checkbox">
                        </div>

                    </div>
                    <div>
                        <button>Continue</button>
                    </div>
                </div>
            </div>

        </div>
       
        <Footer />
    </div>
</template>

<script>

    import Footer from "./Footer";

    export default {
        name: 'PostProperties',
        components:{
            Footer, 
        },
        data(){
            return{
                category: true,
                location: '',
                property: ''
            }
        },
        methods:{
            updateData(){

            }
        }
    }

</script>

<style lang="scss" scoped>
.row1 hr{
    margin-left: -1%;
    width: 150%;
}
.active-hr{
    border: 1px solid rgb(91, 170, 170);
}
.row2 hr{
    margin-left: -1%;
    width: 70%;
}

.check-boxes{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width: 200%;    
}

.pictures{
    display:grid;
    grid-template-columns: 19% 19% 19% 19% 19%;
    column-gap:2%;
    background-color: rgb(209, 215, 223);
    width:168%;
    padding: 2% 10% 2% 13%;
    margin-top: 5%;
}
img{
    width: 100%;
}

.select-inputs{
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 50%;
}

.flex-box{
    display: flex;
    width: 180%;
}

.no-display{
    display:none;
}

input{
    border: none;  
    width:185%; 
    color: rgba(98, 110, 114, 0.863);
    background-color: rgb(209, 215, 223);
    padding: 3%;
    margin-bottom:8%;
}

select.search-select{
    width: 180%;
    border: none;
    appearance: none;
    padding: 4% 0% 3% 0%;
    border-radius: 1px;
    margin-top: 3%;
    font: inherit;
    color: rgba(98, 110, 114, 0.863);
    background-color: rgb(209, 215, 223);
    margin-bottom: 9%;
}
option{
    margin-left: 6px;
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

.row2, p{
    color: rgba(144, 151, 153, 0.863);
}

.row1:hover{
    cursor: pointer;
}
.row2 span{
    font-weight: bold;
}
.row1{
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    color: rgba(144, 151, 153, 0.863);
    column-gap: 8%;
}

.row3, .row2{
    display: grid;
    grid-template-columns: 50% 50%;
    width: 70%;
}

button{
    border: none;
    border-radius: 5px;
    color: white;
    background-color:rgba(98, 110, 114, 0.863) ;
    width: 50%;
    padding: 4%;
}

.main-div{
    display: grid;
    grid-template-rows: 5% 5% 90%;
    margin: 12% 0% 0% 18%;
    height: 150vh;
    width:70%;
    row-gap: 2%;
}

</style>

