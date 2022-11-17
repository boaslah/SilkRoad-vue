<template>

    <div>
        <div class="page">

            <div class="head">

                <div class="row1">
                    <h1 class="title">SILKROAD</h1><i @click="showMenu('cover')" class="fa fa-bars icon"></i>
                </div>
                
                <div class="row2">

                    <div class="nav-links">

                        <div>

                            <span class="menu">

                                <router-link to="/" class="active">Home</router-link>  

                                <router-link to="/properties" class="property" >Properties</router-link>

                            </span>

                            <div class="register">

                            <router-link to="/login">Login</router-link> |
        
                            <router-link to="/register">Register</router-link>

                            </div>

                        </div>

                    </div>
                    
                    <div><hr></div>

                    <div>

                        <button>Post a Property</button>

                    </div>
                    
                </div>
            </div>
            <div @click="hideMenu('cover')" id="cover">
                <div class="mobile-menu">
                    <div class="menu-div">
                        <router-link to="/">Home</router-link>
                    </div>
                    <div class="menu-div">
                        <router-link to="/properties">Properties</router-link>
                    </div>
                    <div class="menu-div">
                        <router-link to="/login">Login</router-link>
                    </div>
                    <div class="menu-div">
                        <router-link to="/register">Register</router-link>
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
    methods:{
        showAndHideItem,
        showMenu,
        hideMenu
    }
}

</script>


<style scoped>

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
    grid-template-columns: 18% 88%;
    column-gap: 2%;
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
    color: white;
}
.nav-links{
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.register{
    margin: -2% 0% 0% 65%; 
    width:100%;
    position: fixed;
}

.row2 button{
    margin: -1% 0% 0% 62%; 
    padding:0.5%; 
    width:13%;
    border:none; 
    color:white; 
    background-color: rgb(39, 135, 214); 
    border-radius:5%;
    position: fixed;
    font-size: 1.0rem;
}

.property{
    margin: 0% 0% 0% 2%; 
    position: fixed;
}

.row1{
    background-color: rgb(44, 44, 44);
    margin: 1%;
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
        margin: -3% 0% 0% 78%; 
    }
    .row2 button{
        margin: -1% 0% 0% 74%; 
        width: 20%;
    }
}
</style>
