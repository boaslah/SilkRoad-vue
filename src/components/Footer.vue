<template>

    <footer class="footer">

        <div class="footer-row1">

             <div class="footer-col1">
                <h4>CONTACT IFORMATION</h4>
                <p>6116 second W Gore Crescent,</p>
                <p>Monrovia Liberia West Africa,</p>
                <p>+231 778 128 252</p>
                <p>Silkroad@Kwagei.com</p>
            </div>
            <div class="footer-col2">
                <h4>QUICK LINKS</h4>
                <p>Register</p>
                <p>Login</p>
                <p>About</p>
                <p>Post Property</p>
            </div>
            <div class="footer-col3">
                <h4>OUR RESENT POSTINGS</h4>
                <p>3 Bedroom Apartment at Sinkor</p>
                <p>3 Bedroom Apartment at Sinkor </p>
                <p>3 Bedroom Apartment at Sinkor  </p>
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

.footer{
    background-color: rgba(98, 110, 114, 0.863);
    display: grid;
    grid-template-rows: 80% 1% 19%;
    color: white;
    padding: 3% 15% 2% 15%;
    margin: 10% -0.4% -2% -2%;
}

.footer-row1{
    display: grid;
    grid-template-columns: 33% 33% 33%;
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

