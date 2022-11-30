<template>

    <footer class="footer">

        <div class="footer-row1">

             <div class="footer-col1">
                <h4>CONTACT IFORMATION</h4>
                <p>6116 second W Gore Crescent,</p>
                <span>Monrovia Liberia West Africa,</span>
                <p>+231 778 128 252</p>
                <span>Silkroad@Kwagei.com</span><br><br>
                <i class="fa-brands fa-instagram"></i><i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i>
            </div>
            <div >
                <h4>QUICK LINKS</h4>

                <div class="footer-col2">
                    <div>
                        <p>Register</p> 
                        <p>Login</p>
                        <p>Post Property</p>
                        <p>Our Recent Postings</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h4></h4>
                        <p>About Us</p> 
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
            </div>
            <div class="footer-col3">
                <h4>OUR RESENT POSTINGS</h4>
                <p>3 Bedroom Apartment at Sinkor</p>
                <span class="top"><i class="fa-sharp fa-solid fa-location-pin"></i>  Sinkor, Monrovia, Liberia</span>
                <p>3 Bedroom Apartment at Sinkor </p>
                <span><i class="fa-sharp fa-solid fa-location-pin"></i>  Sinkor, Monrovia, Liberia</span>
                <p>3 Bedroom Apartment at Sinkor  </p>
                <span><i class="fa-sharp fa-solid fa-location-pin"></i>  Sinkor, Monrovia, Liberia</span>
            </div>       

        </div> 
        <div class="footer-row2"></div>   
        <div class="footer-row3">
            <p>Copyright &copy; 2017 - Kwagei Group - All rights reserve</p>
            <p><b>SILKROAD</b></p>
        </div>
    </footer>

</template>

<script>

    export default {
        name: 'Footer'
    }

</script>

<style scoped>
.fa-facebook-f{
    margin: 0% 7% 0% 7%;
}

.footer-col2{
    display: grid;
    grid-template-columns: 50% 50%;
}
.footer{
    font-weight: bold;
}

span{
    font-size: 70%;
}
.footer-col3 p, .footer-col1 p{
    margin-bottom: -1%;
    margin-top: 8%;
}

p{
    font-size: 75%;
}

.footer{
    background-color: rgba(98, 110, 114, 0.863);
    display: grid;
    grid-template-rows: 80% 0.1% 19%;
    color: white;
    padding: 3% 10% 2% 10%;
    margin: 3% -0.4% -2% -2%;
    row-gap: 5%;
}

.footer-row1{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    column-gap: 5%;
}
.footer-row2{
    background-color: white;
}
@media only screen and (max-width: 600px) {
    .footer{
        margin: 70% -0.4% -2% -2%;
    }
    .footer-row1{
        display: flex;
        flex-direction: column;
    }
    .footer-row3{
        margin: 5%;
    }
}
</style>

