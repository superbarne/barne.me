<template>
  <canvas/>
</template>

<script>
  import { WebGLRenderer, WebGLRenderTarget, Scene, OrthographicCamera, PerspectiveCamera, Clock, Vector3 } from 'three'
  import PostEffect from '../lib/postEffect'
  import BackgroundImage from '../lib/backgroundImage'

  export default {
    name: 'glitch',
    mounted () {
      const canvas = this.$el;
      const renderer = new WebGLRenderer({
        antialias: false,
        canvas: canvas,
      });
      const renderBack1 = new WebGLRenderTarget(document.body.clientWidth, window.innerHeight);
      const scene = new Scene();
      const sceneBack = new Scene();
      const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1000);
      const cameraBack = new PerspectiveCamera(45, document.body.clientWidth / window.innerHeight, 1, 10000);
      const clock = new Clock();

      //
      // process for this sketch.
      //

      const bgImg = new BackgroundImage();
      const postEffect = new PostEffect(renderBack1.texture);

      const render = () => {
        const time = clock.getDelta();
        renderer.render(sceneBack, cameraBack, renderBack1);
        postEffect.render(time);
        renderer.render(scene, camera);
      }
      const renderLoop = () => {
        render();
        requestAnimationFrame(renderLoop);
      }
      const init = () => {
        renderer.setSize(document.body.clientWidth, window.innerHeight);
        renderer.setClearColor(0x555555, 1.0);
        cameraBack.position.set(1000, 1000, 1000);
        cameraBack.lookAt(new Vector3());

        bgImg.init(() => {
          sceneBack.add(bgImg.obj);
          scene.add(postEffect.obj);
        })

        //on();
        //resizeWindow();
        renderLoop();
      }
      init();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
