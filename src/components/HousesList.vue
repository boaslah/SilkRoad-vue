<template>
    <div>
        <div class="img-list">
            <div class="houses">
                <div>
                    <img src="../assets/list1.jpg" alt="houses">
                </div>
                <div class="house-details">
                    <div>
                        <div class="price">
                            <p>3 bedroom Townhouse</p><span class="active-back">$500.00/month</span>
                        </div>
                        <span><i class="fa-sharp fa-solid fa-location-pin active"></i> 45 Circle Dr, Monrovia, Liberia</span><br>
                        <span>Peter Wayne</span>
                    </div>
                    <div class="house-details-numbers">
                        <div class="border-right border-left"> <i class="fa fa-triangle-exclamation active"></i> 2</div>
                        <div class="border-right"><i class="fa fa-book active"></i> 3</div>
                        <div class="border-right"><i class="fa fa-computer active"></i> 4</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: "HousesList"
}
</script>

<style scoped>

.img-list{
    margin-bottom: 3%;
}

.active-back{
    background-color: rgba(91, 170, 170, 0.822);
    color: white;
    padding: 1%;
    font-size: 75%;
    float: right;
    margin-top: -7%;
}

p{
    margin-bottom: 3%;
}

span{
    font-size: 80%;
}

.houses{
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: white;
    width: 97%;
    column-gap: 2%;
    margin-bottom: 3%; 
    border: solid 1px rgba(192, 195, 196, 0.863);
}

img{
    width: 100% !important;
    height: 100%;
}
.house-details{
    margin: 0% 5% 0% 5%;
    padding-top: 3%;
    margin-top: -3%;
    display: grid;
    grid-template-rows: 80% 20%;
    color: rgba(98, 110, 114, 0.863);
}
.house-details-numbers{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    text-align: center;
    border-color: rgba(98, 110, 114, 0.863);
}
.house-details-numbers div{
    padding-top: 2%;
    border-top: solid 1px rgba(192, 195, 196, 0.863);
}
.border-right{
    border-right: solid 1px rgba(192, 195, 196, 0.863);
}
.border-left{
    border-left: solid 1px rgba(192, 195, 196, 0.863);
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


