<template>
  <div id="app">
    <div id="hero">
      <h1>Barne.me</h1>
      <p><a href="https://twitter.com/superbarne" target="_blank">Twitter</a> - <a href="https://github.com/superbarne" target="_blank">Github</a> - <a href="https://www.instagram.com/barnose/"  target="_blank">Instagram</a></p>
    </div>
    <Glitch/>
  </div>
</template>

<script>
import Glitch from './components/Glitch.vue'

export default {
  name: 'app',
  components: {
    Glitch
  }
}
</script>

<style>

  @font-face {
      font-family: "hacked";
      src: url("./assets/fonts/HACKED.woff") format('woff');
  }

  canvas {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  #app {
    font-family: 'hacked', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body, html {
    margin: 0px;
    padding: 0px;
    width: 100%;
  }
  #hero {
    width: 100%;
    margin: 20% 0;
    text-align: center
  }

  #hero a, #hero h1, #hero p {
    color: #fff;
    text-decoration: none;
  }

  #hero h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 0.6rem
  }

  @media (min-width: 576px) {
    #hero h1 {
      font-size: 8rem;
    letter-spacing: 1.5rem
    }
  }
</style>
