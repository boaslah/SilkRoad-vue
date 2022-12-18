<template>

    <div>

        <div class="main-div">
            <div class="col1">
                <div>
                    <h3 class="h3-color">My Profile</h3>
                    <hr>
                </div>
                <div v-if="profile">
                    <div>
                        <h4>Name</h4>
                        <p>Nathan Musulyn</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>james@tblackie.com</p>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>0778128252</p>
                    </div>
                    <div>
                        <button @click="profile ='' ; update = true" v-if="profile">Update Profile</button>
                    </div>
                </div>
                <div v-if="update">
                    <div>
                        <h4>Name</h4>
                        <input type="text" placeholder="James Gaye">
                    </div>
                    <div>
                        <h4>Email</h4>
                        <input type="text" placeholder="jamesgaye@gmail.com">
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <select name="" id="">
                            <option value="">+ 231</option>
                        </select>
                        <input id="select-input" type="text" placeholder="0778128252">
                    </div>
                    <div>
                        <button @click="update = '' ; profile = true" v-if="update" >Save</button>
                    </div>
                </div>

            </div>
            <div class="col2">
                <div class="items">
                    <div class="row1">
                        <div>
                            <h3 class="active">My Postings</h3>
                            <hr class="active-hr">
                        </div>
                        <div>
                            <h3 class="h3-color">My Favorites</h3>
                            <hr>
                        </div>
                    </div>
                    <div>
                        <HousesList />
                    </div>
                </div>
            </div>
        </div>
       
        <Footer />
    </div>
</template>

<script>

    import Footer from "./Footer";
    import HousesList from "./HousesList"

    export default {
        name: 'MyProfile',
        components:{
            Footer, 
            HousesList
        },
        data(){
            return{
                profile: true,
                update: ''
                
            }
        }
    }

</script>

<style lang="scss" scoped>
#select-input{
    width: 74%;
}
h4{
    margin-bottom: -0.1%;
}
select{
    background-color:rgba(98, 110, 114, 0.863);
    padding: 2%;
    color: white;
}
input{
    border: none;  
    width:94%; 
    color: rgba(98, 110, 114, 0.863);
    background-color: rgb(209, 215, 223);
    padding: 3%;
    margin-bottom:4%;
    margin-top: 0.1%;
}

button{
    border: none;
    border-radius: 5px;
    color: white;
    background-color:rgba(98, 110, 114, 0.863) ;
    width: 50%;
    padding: 2%;
    float: right;
}

.main-div{
    display: grid;
    grid-template-columns: 45% 50%;
    column-gap: 5%;
    height: 100vh;
    width:99%;
    margin: 10% 0% 0% 0%;
}
.col1{
    margin-left: 40%;
}

.h3-color, h4, span{
    color: rgba(98, 110, 114, 0.863);
}
.col1 hr{
    width: 100%;
    margin-left: -0.1%;
}
hr{
    margin-top: -3%;
}
.col2{
    overflow: scroll;
    float: right;
    direction: rtl;
    margin-top: -0.1%;
}

.active-hr{
    border: 2px solid rgb(91, 170, 170);
}
::-webkit-scrollbar-thumb {
  background-color: rgba(98, 110, 114, 0.863);
  border-radius: 20px;
}
.col2::-webkit-scrollbar {
  width: 12px;              
}

.col2::-webkit-scrollbar-track {
  background: rgba(200, 202, 202, 0.863);        
}

.col2 {
  scrollbar-width: thin;          
  scrollbar-color: rgba(98, 110, 114, 0.863) rgba(144, 151, 153, 0.863);
}
.items{
    direction: ltr;
    margin: 0% 0% 0% 2%;
}
.row1{
    display: grid;
    grid-template-columns: 50% 50%;
}
p{
    color: rgba(144, 151, 153, 0.863);
}
@media only screen and (max-width: 1000px) {

    .main-div{
        margin: 26% 0% 0% 0%;
    }

}

</style>

