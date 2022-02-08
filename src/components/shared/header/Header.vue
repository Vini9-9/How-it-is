<template>
    <header>
        <img :src="scrLogo" alt="Logo How it is" class="logo">
        <b-input-group id="input-group-busca" size="sm" class="mb-2">
          <b-form-input id="input-busca" type="search" v-model.trim="filtro" placeholder="O que você procura?"></b-form-input>
          <b-input-group-prepend is-text v-on:click="optionChanged">
            <b-icon icon="search" ></b-icon>
          </b-input-group-prepend>
        </b-input-group >
        <nav>
            <ul class="nav_links">
                <li><a href="">Cadastro</a></li>
                <li><a href="">Sobre nós</a></li>
            </ul>
        </nav>
        <button class="login-btn">Login</button>
    </header>
</template>

<script>

export default {
  props: ['scrLogo'],

  data () {
    return {
      filtro: ''
    }
  },
  methods: {
    optionChanged: function (value) {
      console.info("optionChanged")
      this.$emit('update:option', this.filtro)
    }
  }

}

</script>

<style scoped>

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

#input-group-busca {
  width: 30%;
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
  margin: 0px;
}

.nav_links li {
  display: inline-flex;
  padding: 0px 30px;
  
}

.nav_links li a {
  transition: all 0.3s ease 0s;
  cursor: pointer;
}

.nav_links li a:hover {
  color: #1190cb;
}

</style>
