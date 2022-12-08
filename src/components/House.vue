<template>

    <div class="house">
        <div>
            <img src="../assets/background-image.jpg" alt="houses">
        </div>
        <div>
            <h2>{{house.houseDes}}</h2>
            <p><i class="fa-sharp fa-solid fa-location-pin active"></i>  {{house.houseLoc}}</p>
            <p><span><i class="fa fa-triangle-exclamation active"></i>   {{house.checkIns}} <i class="fa fa-computer active"></i>  {{house.TV}}  <i class="fa fa-book active"></i>  {{house.beds}}  <i class="fa fa-lightbulb active"></i> {{house.light}}</span></p>
            <p>{{house.houseOwner}}</p>
            <button>Give {{house.houseOwner}} a call</button>   <button>Send {{house.houseOwner}} an Email</button>
            <h4>PROPERTY DESCRIPTION</h4>
            <p>I don't have anything here for now, bye!!!</p>
            <h4>AVAILABLE AMENITIES</h4>
            <tr>Swiming Pool</tr>
            <tr>Swiming Pool</tr>
            <tr>Swiming Pool</tr>
            <tr>Swiming Pool</tr>

            <h4>SHARE PROPERTY</h4>
            <i class="fa-brands fa-instagram"></i><i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i>
            <h4>SHARE PROPERTY</h4>




        </div>
    </div>

   
</template>

<script>

    import {houseData} from "../helper.js"
    console.log("hello", houseData);
    export default{
        name: "House",
        data(){
            return{
                house: houseData
            }
        },

    }
    
</script>

<style lang="scss" scoped>

.house{
    display:grid;
    grid-template-rows: 30% 70%;
    color: rgba(98, 110, 114, 0.863);
    font-family: 'Roboto', serif;
}

img{
    width: 100% !important;
    height: 100%;
}

</style>


