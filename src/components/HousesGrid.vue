<template>
    <div>
        <div class="img-grid" >
            <div class="houses" @click="showProperty()" v-for="house in houseData">
                <img src="../assets/list1.jpg" alt="houses">
                <div class="house-details">
                    <div>
                        <p>{{house.houseDes}}</p>
                        <span><i class="fa-sharp fa-solid fa-location-pin active"></i>  {{house.houseLoc}}</span><br>
                        <span>{{house.houseOwner}}</span>
                    </div>
                    <div class="house-details-numbers">
                        <div class="border-right"> <i class="fa fa-triangle-exclamation active"></i> {{house.checkIns}}</div>
                        <div class="border-right"><i class="fa fa-book active"></i> {{house.beds}}</div>
                        <div class="border-right"><i class="fa fa-computer active"></i> {{house.TV}}</div>
                        <div><i class="fa fa-lightbulb active"></i> {{house.light}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import data from "./../data.json"
    

    export default{
        name: "HousesGrid",
        methods:{
            // showProperty
        },
        data(){
            return{
                houseData: data.HousesData
            }
            
        }
    }
</script>

<style scoped>

p{
    margin-bottom: 3%;
}

span{
    font-size: 80%;
    margin-top: 35%;
}
img{
    width: 100%;
    /* position: absolute; */
}

.img-grid{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    column-gap: 1%;
    margin-bottom: 3%;
}

.houses:hover{
    cursor: pointer;
}

.houses{
    background-color: white;
    width: 98%;
    margin-bottom: 5%;
    border: solid 1px rgba(192, 195, 196, 0.863);
}


.house-details{
    margin: 0% 5% 5% 5%;
    margin-top: -3%;
    display: grid;
    grid-template-rows: 80% 20%;
    color: rgba(98, 110, 114, 0.863);
}
.house-details-numbers{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    text-align: center;
    margin: 0% -10% -6% -10%;
    padding: 3%;
    border-color: rgba(98, 110, 114, 0.863);
}
.house-details-numbers div{
    padding-top: 4%;
    border-top: solid 1px rgba(192, 195, 196, 0.863);
}
.border-right{
    border-right: solid 1px rgba(192, 195, 196, 0.863);
}
@media only screen and (max-width: 600px) {

    .houses{
        width: 145%;
        margin-top: 10%;
    }

    .img-grid{
        display: flex;
        flex-direction: column;
        column-gap: 10%;
    }

}
</style>


