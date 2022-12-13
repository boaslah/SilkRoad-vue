<template>

    <div class="house">
        <div>
            <img src="../assets/background-image.jpg" alt="houses">
        </div>
        <div>
            <div class="center">
                <i class="fa-solid fa-ellipsis scroll active"></i>   <i class="fa-solid fa-ellipsis scroll active"></i>
            </div>
            <div class="row1">
                <div>
                    <h2>3 Bedroom Townhouse</h2>
                    <p><i class="fa-sharp fa-solid fa-location-pin active"></i>                            Du-port Road, Monrovia, Liberia</p>
                </div>
                <div>
                    <span class="price">$500.00/month</span>
                </div>
            </div>

            <p class="amenities"><span><i class="fa fa-triangle-exclamation active"></i>   4</span><span> <i class="fa fa-computer active"></i>  7</span><span>  <i class="fa fa-book active"></i>  8</span><span>  <i class="fa fa-lightbulb active"></i> 3</span></p>
            <p class="owner">Peter Dennis</p>
            <button>Give Peter Dennis a call</button>   <button>Send Peter Dennis an Email</button>
            <h4>PROPERTY DESCRIPTION</h4>
            <p>We have learned that components can accept props, which can be JavaScript values of any type. But how about template content? In some cases, we may want to pass a template fragment to a child component, and let the child component render the fragment within its own template.</p>
            <h4>AVAILABLE AMENITIES</h4>
            <div class="avaliable-amenites">
                <div>
                    <span>Garage</span>
                    <span>Swimming Pool</span>
                    <span>Laundry Room</span>
                    <span>Advertisement</span>
                    <span>Garden</span>
                    <span>Generator</span>
                </div>
                <div>
                    <span>Garage</span>
                    <span>Swimming Pool</span>
                    <span>Laundry Room</span>
                    <span>Advertisement</span>
                    <span>Garden</span>
                    <span>Generator</span>   
                </div>
                <div>
                    <span>Garage</span>
                    <span>Swimming Pool</span>
                    <span>Laundry Room</span>
                    <span>Advertisement</span>
                    <span>Garden</span>
                    <span>Generator</span>
                </div>
            </div>

            <h4>SHARE PROPERTY</h4>
            <i class="fa-brands fa-instagram social-icons"></i><i class="fa-brands fa-facebook-f social-icons"></i><i class="fa-brands fa-twitter social-icons"></i><i class="fa-solid fa-ellipsis social-icons"></i>
            <h4>SHARE PROPERTY</h4>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.728985311669!2d-10.7470872!3d6.27264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9271766a21802cbd!2sKwagei%20Group!5e0!3m2!1sen!2s!4v1670858548086!5m2!1sen!2s" width="700" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>

   
</template>

<script>

    export default{
        name: "House",
        props:{
            property: Object
        },
    }
    
</script>

<style lang="scss" scoped>

.center{
    padding: 0% 30% 0% 45%;
}

.scroll{
    font-size: 50px;
}

.social-icons{
    margin-right: 4%;
    font-size: 30px;
}

.avaliable-amenites{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
}
.avaliable-amenites span{
    display: block;
    line-height: 30px;
    font-size: 15px;
}

.amenities span{
    margin-right: 3%;
}
.owner{
    margin: 4% 0% 1% 0%;
}
.amenities{
    margin-top: 1%;
}

.price{
    background-color: rgba(91, 170, 170, 0.822);
    color: white;
    padding: 4%;
    font-size: 100%;
    float: right;
    width: 45%;
    font-weight: bold;
    margin-top: 5%;
}
.row1{
    display: grid;
    grid-template-columns: 60% 40%;
    margin-top: -3%;
}
.row1 p{
    margin-top: -3%;
}

button{
    background-color: rgba(98, 110, 114, 0.863);
    border: none;
    border-radius: 5px;
    padding: 1.5%;
    color: white;
    font-size: 15px;
    margin-right: 3.5%;
}

.house{
    display:grid;
    grid-template-rows: 30% 70%;
    color: rgba(98, 110, 114, 0.863);
    font-family: 'Roboto', serif;
    margin-bottom: -50%;
}

img{
    width: 100% !important;
    height: 100%;
}

</style>


