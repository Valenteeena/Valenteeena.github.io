<template>
    <div>
        <h1>Contact</h1>
        <p>Interested in hiring me for your project, you can fill out the contact form 
            below or send me an email to <a href="mailto:toun.olayemi2@gmail.com">toun.olayemi2@gmail.com</a>
        </p>
        <h3>Get connected on social media</h3>
        <span class="icon"><i class="fab fa-instagram"></i></span>
            <span class="icon"><i class="fab fa-linkedin-in"></i></span>
            <span class="icon"><i class="fab fa-github"></i></span> 
            <span class="icon"><i class="fas fa-phone"></i></span>
            <span class="icon"><i class="fas fa-envelope"></i></span>
        <hr>
        <h2>Get In Touch</h2>
        <form>
            <div class="roe"><input type="text" placeholder="Fullname" required>
            <input type="email" placeholder="Email Address" required>
            </div>
            <br>
            <textarea placeholder="Enter your message" rows="18" required></textarea><br>
            <button><i class="fas fa-envelope"></i>Send Now</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'contact',    
  data(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    color:#6d466b;
    text-align: center;
}
form{
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    justify-content: center;
    align-content: center;
    text-align: center;
}
input{
    width:40%;
    height: 2.5rem;
    margin:.5rem;
}
input, textarea{
    text-align: left;
    padding-left: .5rem;
    border: 1px solid#6D4D62;
        border-radius: 10px;

}
textarea{
    height:15rem;
    padding-top: .5rem;
}
textarea,button{
    width:calc(80% + 2rem);
    margin:auto;
}
button{
    height: 2.5rem;
    background: #6D4D62;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 10px;
    font-variant: small-caps;

}
hr{
    width: 80%;
    margin: auto;
    margin-top: .5rem;
    margin-bottom: .5rem;
    height: 1px;
    border: none;    
    background: #6D4D62;
}
.icon{
    padding: .5rem;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
}
.icon:hover{
    color: #AF99AE;
}
h3,h2{
    text-align: center;
    text-decoration: underline;
    font-variant:small-caps;
    padding-bottom: .5em;
}
h2{
    text-decoration: none;
}
a{
    color:#B470A4;
}
p{
    font-size: 1.1rem;
    text-align: center;
    padding-top:.5rem;
    padding-bottom: .5rem;
}
h1{
    color:#6d466b;
    font-variant: small-caps;
    font-size: 2.5rem;
    text-align: center;
}

</style>
