<template>
  <div id="home">
    <my-header :scrLogo="logo" @update:search="searchUpdate">
    </my-header>
    <section class="content">
      <div id='intro' class="introduction">
        <h1 id="title">{{ titulo }}</h1>
        <h2 id="slogan">{{ slogan }}</h2>
      </div>
      <ul>
        <h2 id="info-resultado">Resultados de: <span v-text="filtro"></span></h2>
        <li v-for="produto of produtosComFiltro">
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
import Header from "../shared/header/Header.vue";

export default {

  components: {
    'my-header': Header
  },
  name: 'home',
  data () {
    return {
      titulo: 'Confira como os produtos realmente são*',
      slogan: '*Imagens nada ilustrativas',
      logo: '../src/assets/logo-head.png',
      msgProduto: 'Como realmente é:',
      msgDono: 'Foto tirada por: ',
      filtro: '',
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
  },
  computed: {

    produtosComFiltro() {
      console.log("produtosComFiltro");
      
      var elInfoResultado = document.getElementById('info-resultado')
      var elIntro = document.getElementById('intro')

      if(this.filtro) {
        
        elIntro.style.display = 'none';
        elInfoResultado.style.display = 'block';
        let exp = new RegExp(this.filtro, 'i');
        return this.produtos.filter(produto => exp.test(produto.nome));
      } else {
        
        elIntro ? elIntro.style.display = 'block' : null;
        elInfoResultado ? elInfoResultado.style.display = 'none' : null;
        return this.produtos;
      }
    }
  },
  methods: {
    searchUpdate: function (value) {
      this.filtro = value;
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


.introduction {
  color: aliceblue;
}

#info-resultado{
  display:none;
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
