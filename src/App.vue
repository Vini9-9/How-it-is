<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    <ul>
      <li>
        <h2>#1 {{ produto.nome }}</h2>
        <img :src="produto.url" alt="" >
        <h2>{{ msgProduto }}</h2>
        <img :src="produto.fotoReal.url" alt="" >
        <sub>{{msgDono}} {{ produto.fotoReal.dono }} - {{ produto.fotoReal.local }}</sub>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Bem vindo ao How It Is',
      msgProduto: 'Como realmente é:',
      msgDono: 'Foto tirada por: ',
      produto: {
        nome: 'Big Mac',
        url: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br',
        fotoReal: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Big_Mac_hamburger.jpg/694px-Big_Mac_hamburger.jpg',
          dono: 'Evan-Amos',
          local: 'Estados Unidos'
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
img {
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
}
</style>
