<template>
    <div>
        <div class="img-grid">
            <div class="houses">
                <img src="../assets/grid1-mobile.jpg" alt="houses">
                <div class="house-details">
                    <div>
                        <p>3 bedroom Townhouse</p>
                        <span><i class="fa-sharp fa-solid fa-location-pin active"></i> 45 Circle Dr, Monrovia, Liberia</span><br>
                        <span>Peter Wayne</span>
                    </div>
                    <div class="house-details-numbers">
                        <div class="border-right"> <i class="fa fa-triangle-exclamation active"></i> 2</div>
                        <div class="border-right"><i class="fa fa-book active"></i> 3</div>
                        <div><i class="fa fa-computer active"></i> 4</div>
                    </div>
                </div>
            </div>
            <div class="houses">
                <img src="../assets/grid1-mobile.jpg" alt="houses">
                <div class="house-details">
                     <div>
                        <p>3 bedroom Townhouse</p>
                        <span><i class="fa-sharp fa-solid fa-location-pin active"></i> 45 Circle Dr, Monrovia, Liberia</span><br>
                        <span>Peter Wayne</span>
                    </div>
                    <div class="house-details-numbers">
                        <div class="border-right"> <i class="fa fa-triangle-exclamation active"></i> 2</div>
                        <div class="border-right"><i class="fa fa-book active"></i> 3</div>
                        <div><i class="fa fa-computer active"></i> 4</div>
                    </div>
                </div>
            </div>
            <div class="houses">
                <img src="../assets/grid1-mobile.jpg" alt="houses">
                <div class="house-details">
                     <div>
                        <p>3 bedroom Townhouse</p>
                        <span><i class="fa-sharp fa-solid fa-location-pin active"></i> 45 Circle Dr, Monrovia, Liberia</span><br>
                        <span>Peter Wayne</span>
                    </div>
                    <div class="house-details-numbers">
                        <div class="border-right"> <i class="fa fa-triangle-exclamation active"></i> 2</div>
                        <div class="border-right"><i class="fa fa-book active"></i> 3</div>
                        <div><i class="fa fa-computer active"></i> 4</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name: "HousesGrid"
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

.houses{
    background-color: white;
    width: 98%;
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
    grid-template-columns: 33% 33% 33%;
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


