<template>
    <div class="check-boxes">
        <div  v-for="loop in loops">
            <div class="check-box">
                <div>
                    <p>Garage</p>
                </div>
                <div>
                    <input type="checkbox" id="" name="">
                </div>
            </div>
            <div class="check-box">
                <div>
                    <p>Swimming Pool</p>
                </div>
                <div>
                    <input type="checkbox" id="" name="">
                </div>
            </div>
            <div class="check-box">
                <div>
                    <p>Laundry Room</p>
                </div>
                <div>
                    <input type="checkbox" id="" name="">
                </div>
            </div>
            <div class="check-box">
                <div>
                    <p>Advertisements</p>
                </div>
                <div>
                    <input type="checkbox" id="" name="">
                </div>
            </div>
            <div class="check-box">
                <div>
                    <p>Garden</p>
                </div>
                <div>
                    <input type="checkbox" id="" name="">
                </div>
            </div>
            <div class="check-box">
                <div>
                    <p>Generator</p>
                </div>
                <div>
                    <input type="checkbox" id="" name="">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default{
    name: "Amenities",
    data(){
        return {
            loops: [{}, {}, {}, {}]
        }
    }
}

</script>

<style lang="scss" scoped>

.check-box p{
    margin-top: -1%;
    font-size: 76%;
    color: rgba(144, 151, 153, 0.863);
}
.check-box{
    display: grid;
    grid-template-columns: 50% 50%;
}

.check-boxes{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width:215%;
    padding: 4% 10% 4% 13%;
    margin: 5% 0% 5% -14%;
}

</style>
