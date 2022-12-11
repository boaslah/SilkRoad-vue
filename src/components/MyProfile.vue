<template>

    <div>

        <div class="main-div">
            <div class="col1">
                <div>
                    <h3>My Profile</h3>
                    <hr>
                </div>
                <div>
                    <div>
                        <h3>Name</h3>
                        <p>Nathan Musulyn</p>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <p>james@tblackie.com</p>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <p>0778128252</p>
                    </div>
                    <div>
                        <button>Done</button>
                    </div>
                </div>

            </div>
            <div class="col2">
                <HousesList />
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
                
            }
        }
    }

</script>

<style lang="scss" scoped>

button{
    border: none;
    border-radius: 5px;
    color: white;
    background-color:rgba(98, 110, 114, 0.863) ;
    width: 50%;
    padding: 2%;
}

.main-div{
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
    width:99%;
    margin: 10% 0% 0% 0%;
}
.col1{
    margin-left: 40%;
}

h3{
    color: rgba(98, 110, 114, 0.863);
}
hr{
    width: 60%;
    margin-left: -0.1%;
}
.col2{
    overflow: scroll;
    float: right;
}
p{
    color: rgba(144, 151, 153, 0.863);
}

</style>

