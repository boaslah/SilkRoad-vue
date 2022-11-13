<template>

    <div class="properties-main">

        <div class="col1">

            <div class="side-nav input-icons">
                <h3>Search</h3>
                <input class="input-field" type="text" placeholder="Most Recent">
                <i class="fa fa-caret-down icon"></i>
                <h3>Category</h3>
                <input class="input-field" type="text" placeholder="Most Recent">
                <i class="fa fa-caret-down icon"></i>
                <h3>Location</h3>
                <input class="input-field" type="text" placeholder="Most Recent">
                <i class="fa fa-caret-down icon"></i>
                <h3>Bedrooms</h3>
                <input class="input-field" type="text" placeholder="Most Recent">
                <i class="fa fa-caret-down icon"></i>
                <h3>Bathrooms</h3>
                <input class="input-field" type="text" placeholder="Most Recent">
                <i class="fa fa-caret-down icon"></i>
                <div>
                    <h3>Price   $00.00-$10,000.00</h3>
                    <input type="range" value="50">
                </div>
                <button>Done</button>
            </div>
        </div>
        <div class="col2">
            <div class="col2-row1">
                <div class="prop-menu">
                    <div class="prop-menu1">
                        <p class="active">All</p>
                        <p>Recent</p>
                        <p>Sale</p>
                    </div>
                    <div class="prop-menu2">
                        <p>View</p>     
                        <i class="fa fa-solid fa-list icon1"></i>
                        <i class="fa-sharp fa-solid fa-border-all icon1"></i>
                        <p>Sort By</p>
                        <div class="input-icons">
                            <input class="input-field" type="text" placeholder="Search">
                            <i class="fa fa-caret-down icon"></i>
                        </div>
                    </div>

                </div>
            
            </div>
            <div class="col2-row2">

                <div class="row2-col1">

                    <div class="img-grid">
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                    </div>
                    <div class="img-grid">
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                    </div>

                    <div class="img-grid">
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                        <div>
                            <img src="../assets/grid1-mobile.jpg" alt="houses">
                        </div>
                    </div>                    
                </div>
                <div class="row2-col2">

                    <h2>Advertisement</h2>

                </div>

            </div>

            <div>
                <button class="btn2"> Load More</button>
            </div>
        </div>
        
    </div>
    <Footer />
</template>

<script>

    import Footer from "./Footer"

    export default {
        name: 'Properties',
        components:{
            Footer
        }
    }

</script>

<style scoped>

.icon1{
    width: 5%;
    margin-top: 3.5%;
}

    
.icon {
    padding:3.3%;
    background-color:rgba(98, 110, 114, 0.863);
    color: black;
}

.prop-menu{
    display: grid;
    grid-template-columns: 40% 60%;
    /* column-gap: 5%; */
    margin: 1% 5% 0% 5%;
    color: rgba(98, 110, 114, 0.863);
}
.prop-menu1, .prop-menu2{
    display: flex;
    column-gap: 5%;
}

.img-grid{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    column-gap: 1%;
    margin-bottom: 3%;
}

.properties-main{
    display: grid;
    grid-template-columns: 22% 78%;
    margin: 10% 10% 0% 1%;
}

.col1{
    background-color:rgb(209, 215, 223);
    border-radius: 1%; 
    padding: 7%;
    margin: 3%;
    margin-bottom: 85%;
}
h3, h2{
    color: rgba(98, 110, 114, 0.863);
}
h2{
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 70vh;
    display: flex;
}
.col1 input{
    background-color:white;  
    border:none; 
    color:white;
    width:61%; 
    padding:4%;
    border-radius: 1%;
}
.col2-row1 input{
    border: none;
    padding: 4%;
    width: 80%;
    margin: 4% 0% 5% 0%;

}
.col1 button{
    background-color: rgba(98, 110, 114, 0.863);
    border: none;
    width: 93%;
    border-radius: 5%;
    padding: 5%;
    color: white;
    font-size: 1rem;
}
.btn2{
    background-color: rgba(98, 110, 114, 0.863);
    border: none;
    border-radius: 5%;
    color: white;
    justify-content: center;
    width: 20%;
    padding: 1%;
    margin: 2% 0% 0% 27%;
}

.col2-row1{
    background-color:rgb(214, 214, 214);
    margin: 1%;
}
.col2-row2{
    display: grid;
    grid-template-columns: 75% 25%;
    margin: 1%;
}
.col2{
    display: grid;
    grid-template-rows: 10% 90%;
}

.row2-col1{
    display: grid;
    grid-template-rows: 33% 33% 33%;
}
.row2-col1 img{
    width: 90%;
}

.row2-col2{
    background-color: white;
    margin-bottom: 85%;
}

@media only screen and (max-width: 600px) {

    .properties-main{
        display: flex;
        flex-direction: column;
        margin: 30% 10% 0% 1%;
    }
    .img-grid{
        display: flex;
        flex-direction: column;
        row-gap: 5%;
    }
    img{
        width: 150% !important;
    }
    .col2-row1{
        padding: 1% !important;
    }
    .col1{
        display: none;
    }
    .col2-row1{
        display: none;
    }
    .row2-col2{
        display: none;
    }
    .btn2{
        display: none;
    }


}
</style>

