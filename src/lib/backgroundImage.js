import { Vector2, Mesh, PlaneBufferGeometry, RawShaderMaterial, VideoTexture, LinearFilter } from "three";
import vertexShader from '../glsl/backgroundImage.vs'
import fragmentShader from '../glsl/backgroundImage.fs'

export default class BackgroundImage {
  constructor() {
    this.uniforms = {
      resolution: {
        type: 'v2',
        value: new Vector2(document.body.clientWidth, window.innerHeight),
      },
      imageResolution: {
        type: 'v2',
        value: new Vector2(2048, 1356),
      },
      texture: {
        type: 't',
        value: null,
      },
    };
    this.obj = null;
  }

  getRandomVideo() {
    const videos = [
      '/videos/glitch0.mp4',
      '/videos/glitch1.mp4',
      '/videos/glitch0.mp4',
      '/videos/glitch2.mp4',
      '/videos/glitch0.mp4'
    ]
    return videos[Math.floor(Math.random()*videos.length)];
  }

  init(callback) {
    const video = document.createElement( 'video' );
    video.loop = true
    video.controls = true
    video.src = "/videos/glitch1.mp4";
    video.load();
    video.play();
    const texture = new VideoTexture( video );
    texture.minFilter = LinearFilter
    this.uniforms.texture.value = texture;
    this.obj = this.createObj();

    const randomnes = () => {
      video.src = this.getRandomVideo()
      video.play();
      setTimeout(randomnes, 3000);
    }
    randomnes();
    callback();
  }
  createObj() {
    return new Mesh(
      new PlaneBufferGeometry(2, 2),
      new RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader,
        fragmentShader
      })
    );
  }
  resize() {
    this.uniforms.resolution.value.set(document.body.clientWidth, window.innerHeight);
  }
}
