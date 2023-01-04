<template>

    <div>
        <div class="page">

            <div class="head">

                <div></div>

                <div class="row1">
                    <h1 class="title">SILKROAD</h1><i @click="showMenu('cover')" class="fa fa-square icon"></i>
                </div>

                <!-- <div></div> -->
                
                <div class="row2">

                    <div class="nav-links">

                        <div>

                            <span class="menu">

                                <router-link to="/" :class="menu ?'color-white': 'active'" @click="menu = false; showAndHideItem('main', 'widget-main', 'grid')" >Home</router-link>  

                                <router-link to="/properties" :class="menu === 'HOUSES'? 'active property' : 'color-white property' " @click="menu = 'HOUSES'">Our Properties</router-link>

                            </span>

                            <div class="register">

                            <router-link to="/login" @click="menu = 'LOGIN'" :class="menu === 'LOGIN'? 'active' : 'color-white'">Login</router-link> |
        
                            <router-link to="/register" @click="menu = 'REGISTER'"  :class="menu === 'REGISTER'? 'active' : 'color-white'">Register</router-link>

                            </div>

                        </div>

                    </div>
                    
                    <div><hr></div>

                    <div class="header-second-row">

                        <div class="bread-crumb">

                            <router-link to="/" v-if="menu" class="color-gray" >HOME</router-link>
                        
                            <i v-if="menu" class="fa-regular fa-greater-than"></i>
        
                            <router-link v-if="menu" to="#" class="color-white"><strong>{{menu}}</strong></router-link>
                        </div>

                        <div class="button-right">
                            <router-link to="/post-property" ><button>Post a Property</button></router-link>
                        </div>

                    </div>
                    
                </div>
            </div>
            <div @click="hideMenu('cover')" id="cover">
                <div class="mobile-menu">
                    <div class="menu-div">
                        <router-link to="/" class="color-white">Home</router-link>
                    </div>
                    <div class="menu-div">
                        <router-link to="/properties" class="color-white">Our Properties</router-link>
                    </div>
                    <div class="menu-div">
                        <router-link to="/login" class="color-white">Login</router-link>
                    </div>
                    <div class="menu-div">
                        <router-link to="/register" class="color-white">Register</router-link>
                    </div>
                </div>
            </div>

        </div>
    <router-view/>

  </div>

</template>

<script>

    import {showAndHideItem, showMenu, hideMenu} from "../helper.js"

    export default {
        name: 'Header',
        components: {
        },
        data(){
            return {
                menu: '',

            }
        },
        methods:{
            showMenu,
            hideMenu,
            showAndHideItem
        },
    }

</script>


<style lang="scss" scoped>

.button-right{
    text-align: right;
}
.bread-crumb{
    font-size: 85%;
    text-decoration: solid;
}
.color-white{
    color: white;
}
.color-gray{
    color: gray;
}
.bread-crumb i{
    margin: 0% 4% 0% 4%;
    font-size: 60%;
}
#cover{
    display: none;
}
.page{
    display: grid;
    grid-template-rows: 50% 50%;
    width: 100%;
}

.head{
    display: grid;
    grid-template-columns: 0% 14% 88%;
    column-gap: 3%;
    background-color: rgba(0, 0, 0, 0.568);
    color: white;
    padding: 3%;
    position: fixed;
    overflow: hidden;
    width: 100%;
    margin: -2.5% 0% 0% -2%;
}

.icon{
    display: none;
}

.row2 a{
    text-decoration: none;
    font-size: 80%;
}
.nav-links{
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.register{
    text-align: right;
    margin: -2% 0% 0% 0%; 
    width:85%;
}

.header-second-row{
    display: grid;
    width:85%;
    grid-template-columns: 50% 50%;
    margin: -1% 0% 0% 0%; 
    font-size: 90%;
}
.row2 button{
    margin: -2% 0% 0% 0%; 
    padding:1.2%; 
    width:35%;
    border:none; 
    color:white; 
    background-color: rgb(39, 135, 214); 
    border-radius:5px;
    font-size: 1.0rem;
}

.property{
    margin: 0% 0% 0% 2%; 
    /* position: fixed; */
}

.row1{
    background-color: rgb(44, 44, 44);
    margin: 1%;
    padding: 0% 0% 0% 0%;
}

.row1 h1{
    text-align: center;

}
.row2{
    display: grid;
    grid-template-rows: 50% 50%;
    font-size:1.3rem;
}

hr{
    width: 75%;
    background-color:white;
    opacity:0.9;
    color:red;
    position: fixed;
}

@media only screen and (max-width: 600px) {

    .icon{
        font-size: 2.5rem;
        margin: 10% 10% 10% 25%;
        display: block;
        float: right;
    }

    #cover{  
        background-color: rgba(56, 56, 59, 0.952);
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 9;
        margin: 0% -20% 0% -2%;
        padding: 2%;
    }
    #cover a{
        color: white;
        text-decoration: none;
        padding: 5%;
        font-size: 2rem;
    }
    .mobile-menu{
        margin-top: 25%;
    }
    .menu-div{
        background-color: rgb(44, 44, 44);
        border-radius: 5%;
        margin:10%;
        padding: 5%;
    }

    .row2{
        display: none;
    }

    .head{
        display: flex;
        flex-direction: column;
        padding-bottom: 5%;
    }
    .row1{
        margin-right: 95%;
        display: flex;
        padding: 0% 10% 0% 25%;
    }
}

@media only screen and (max-width: 1000px) {
    .head{
        display: flex;
        flex-direction: column;
        padding-bottom: 4.2%;
    }
    .row1{
        margin-right: 6%;
    }
    .nav-links{
        padding-bottom: 4%;
    }
    hr{
        width: 93.5%;
    }
    .register{
        /* margin: 0% 0% 0% 0%;  */
        width: 94%;
    }
    .header-second-row{
        width: 90%;
        margin: -2% 0% 0% 0%; 
    }
    .row2 button{
        margin: -1% 0% 0% 74%; 
        width: 35%;
    }
}
</style>
