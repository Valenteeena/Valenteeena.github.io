<template>
    <div class="menu">
        <h1>Adetoun Olayemi</h1>
        <a href="/"><img src="../assets/Pic3.jpg"></a>
        <p>Hi, My name is Detoun and i am a Frontend Developer. Welcome to my Portfolio website.</p>
            <span class="icon"><i class="fab fa-instagram"></i></span>
            <span class="icon"><i class="fab fa-linkedin-in"></i></span>
            <span class="icon"><i class="fab fa-github"></i></span> 
            <span class="icon"><i class="fas fa-phone"></i></span>
            <span class="icon"><i class="fas fa-envelope"></i></span>
        <hr>
        <ul class="navigation">
            <!-- <li><a href="./" class="active">About Me</a></li> -->
            <li><router-link to="/about">About Me</router-link></li>
            <li><router-link to="/portfolio">Portfolio</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <button><i class="fas fa-paper-plane"></i>  Hire me</button>
    </div>
</template>

<script>
export default {
  name: 'navmenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
    color:#AF99AE;
}
.icon{
    padding: .5rem;
    font-size: 1.2rem;
    cursor: pointer;
}
.icon:hover{
    color: #AF99AE;
}
.navigation{
    color: #F9DBF1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}
ul li{
    margin-top: .5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    width:40%;
    list-style-type: none;
}
hr{
    width: 80%;
    margin: auto;
    margin-top: .5rem;
    margin-bottom: 1rem;
    height: 2px;
    border: none;    
    background: #6D4D62;
}
.menu{
    width:30vw;
    height: calc(100vh - 1rem);
    padding-top: 1rem;
    background: #442343;
    color: #F9DBF1;
    text-align: center;
}
.menu img{
    width: 50%;
    border-radius: 50%;
}
h1{
    font-size: 2.2rem;
    font-variant: small-caps;
    padding-bottom: 1rem;
}
p{
    font-size: .85rem;
    padding: 1rem;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #F9DBF1;
  cursor: pointer;
  text-decoration: none;
  font-size: .85rem;
}
a:hover{
    color:#AF99AE;
    text-decoration: underline;
}
button{
    width:40%;
    font-size: 1.1rem;
    color:#442343;
    padding:.3rem;
    cursor: pointer;
    font-weight: bold;
    font-variant:small-caps ;
    background: ;
    border:none;
}
button:hover{
    background: #F9DBF1;
}
</style>
