<template>
    <header>
        <img :src="scrLogo" alt="Logo How it is" class="logo">
        <nav>
            <ul class="nav_links">
                <li><a href="">Busca</a></li>
                <li><a href="">Cadastro</a></li>
                <li><a href="">Sobre nós</a></li>
            </ul>
        </nav>
        <button class="login-btn">Login</button>
    </header>
</template>

<script>
export default {
  props: ['scrLogo']
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #d6da4b;
}

header {
  display: flex;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 35px 15px 35px;
}

header img.logo {
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin-right: auto;
  margin-top: 15px;
}

header button {
  margin-left: 35px;
  background-color: #1b9bd6;
  border-radius: 50px;
  cursor: pointer;
  padding: 10px 25px;
  opacity: 1;
  transition: opacity 1s ease 0s;
}

header button:hover {
  opacity: 0.8;
}

li, a, button{
  font-family: 'Baloo Bhaijaan 2', cursive;
  color: black;
  text-decoration: none;
  font-size: 1.2em;
}

.nav_links {
  list-style: none;
}

.nav_links li {
  display: inline-block;
  padding: 0px 30px;
  
}

.nav_links li a {
  transition: all 0.3s ease 0s;
}

.nav_links li a:hover {
  color: #1190cb;
}

</style>
