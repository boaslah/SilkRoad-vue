<template>

    <div>

        <div class="main-div">
            
            <div class="row1"> 
                <div @click="category = true; property = ''; contact = '';">
                    <span :class="category ? 'active' : ''">Category</span>
                    <hr :class="category ? 'active-hr' : ''">
                </div>
                <div @click="location = true; property =''; contact = '';" :class="location ? 'active' : ''"> 
                    <span>Location</span>
                    <hr :class="location ? 'active-hr' : ''">
                </div>
                <div @click="category = ''; location = ''; contact = ''; property = true;" :class="property ? 'active' : ''">
                    <span>Property Details</span>
                    <hr :class="property ? 'active-hr' : ''">
                </div>
                <div @click="category = ''; location = ''; property = ''; contact = true" :class="contact ? 'active' : ''">
                    <span>Contact Details</span>
                    <hr :class="contact ? 'active-hr' : ''">
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
                <div v-if="contact">
                    <span>Provide contact additional details</span>
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
                    <select class="select-arrow search-select option" name="" id="">
                        <option value="Rooms">Other areas (A-Z)</option>
                    </select>
                </div>
                <div v-if="property">
                    <div>
                        <input class="wide-inputs" type="text" placeholder="Title">
                    </div>
                    <div class="select-inputs">
                        <div>
                            <select class="select-arrow search-select option" name="" id="">
                                <option value="Rooms">Bedrooms</option>
                            </select>
                            <select class="select-arrow search-select option" name="" id="">
                                <option value="Rooms">Livingrooms</option>
                            </select>
                            <select class="select-arrow search-select option" name="" id="">
                                <option value="Rooms">Size</option>
                            </select>
                        </div>
                        <div>
                            <select class="select-arrow search-select option" name="" id="">
                                <option value="Rooms">Bathrooms</option>
                            </select>
                            <select class="select-arrow search-select option" name="" id="">
                                <option value="Rooms">Kitchens</option>
                            </select>
                            <select class="select-arrow search-select option" name="" id="">
                                <option value="Rooms">Price</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input class="wide-inputs" type="text" placeholder="Physical Address / Landmarks">
                    </div>
                    <div>
                        <textarea placeholder="Description"></textarea>
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
                    <div>
                        <Amenities />                        
                    </div>
                    <button class="float-right">Continue</button>
                </div>
                <div v-if="contact">
                    <div>
                        <h5>Name</h5>
                        <p>Nathan Musulyn</p>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <p>james@tblackie.com</p>
                    </div>
                    <div>
                        <input type="text">
                    </div>
                    <div>
                        <button>Done</button>
                    </div>
                </div>
            </div>

        </div>
       
        <Footer />
    </div>
</template>

<script>

    import Footer from "./Footer";
    import Amenities from "./Amenities"

    export default {
        name: 'PostProperties',
        components:{
            Footer, 
            Amenities
        },
        data(){
            return{
                category: true,
                location: '',
                property: '',
                contact: ''
            }
        },
        methods:{
            updateData(){

            }
        }
    }

</script>

<style lang="scss" scoped>

.float-right{
    float: left;
}
.row1 hr{
    margin-left: -1%;
    width: 139%;
}
.active-hr{
    border: 2px solid rgb(91, 170, 170);
}
.row2 hr{
    margin-left: -1%;
    width: 70%;
}

.pictures{
    display:grid;
    grid-template-columns: 19% 19% 19% 19% 19%;
    column-gap:2%;
    background-color: rgb(209, 215, 223);
    width:168%;
    padding: 4% 10% 4% 13%;
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
.wide-inputs{
    width:185% !important; 
}

textarea{
    width:170%;
    border: none;  
    color: rgba(98, 110, 114, 0.863);
    background-color: rgb(209, 215, 223);
    padding: 10%;
    margin-bottom:8%;
}
.option{
    padding-left: 5% !important;
    color: rgba(98, 110, 114, 0.863);
    font-size: 90% !important;
}
input{
    border: none;  
    width:100%; 
    color: rgba(98, 110, 114, 0.863);
    background-color: rgb(209, 215, 223);
    padding: 3%;
    margin-bottom:8%;
}
.select-inputs select{
    width: 180% !important;
}

select.search-select{
    width: 90%;
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
    height: 180vh;
    width:70%;
    row-gap: 2%;
}

</style>

