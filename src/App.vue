<template>
  <div id="app">
    <header>
      <img :src="logo" alt="Logo How it is" class="logo">
      <nav>
        <ul class="nav_links">
          <li><a href="">Home</a></li>
          <li><a href="">Cadastrar</a></li>
          <li><a href="">Sobre nós</a></li>
        </ul>
      </nav>
      <button class="login-btn">Login</button>
    </header>
    <section class="content">
      <h1 id="titulo">{{ titulo }}</h1>
      <h2 id="slogan">{{ slogan }}</h2>
      <ul>
        <li v-for="produto of produtos">
          <h2>{{ produto.nome }}</h2>
          <img :src="produto.url" alt="" >
          <h2>{{ msgProduto }}</h2>
          <img :src="produto.fotoReal.url" alt="" >
          <sub>{{msgDono}} {{ produto.fotoReal.dono }} - {{ produto.fotoReal.local }}</sub>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Confira como os produtos realmente são*',
      slogan: '*Imagens nada ilustrativas',
      logo: '../src/assets/logo-head.png',
      msgProduto: 'Como realmente é:',
      msgDono: 'Foto tirada por: ',
      produtos: [
        {
        nome: 'Big Mac',
        url: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br',
        fotoReal: 
          {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Big_Mac_hamburger.jpg/694px-Big_Mac_hamburger.jpg',
          dono: 'Evan-Amos',
          local: 'Estados Unidos'
          }
        }, 
        {
        nome: 'Burger King bacon cheeseburger',
        url: 'https://bk-cms-dev.s3.amazonaws.com/_800x600_crop_center-center_none/cheeseburger-bacon-thumb_2021-09-16-134755_cxdp.png?mtime=20210916094755&focal=none&tmtime=20210916095009',
        fotoReal: 
          {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Burger-King-Bacon-Cheeseburger.jpg/1200px-Burger-King-Bacon-Cheeseburger.jpg',
          dono: 'Evan-Amos',
          local: 'Estados Unidos'
          }
        }

      ]
    }
  }
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

.content{
  background-color:#1190cb;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
}

.content img {
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
}

.content h1, h2 {
  font-weight: normal;
}

.content ul {
  list-style-type: none;
  padding: 0;
}

.content li {
  display: inline-block;
  margin: 10px 10px;
}

</style>
