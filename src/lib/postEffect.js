import { Vector2, Mesh, PlaneBufferGeometry, RawShaderMaterial } from "three";
import vertexShader from '../glsl/postEffect.vs'
import fragmentShader from '../glsl/postEffect.fs'

export default class PostEffect {
  constructor(texture) {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
      resolution: {
        type: 'v2',
        value: new Vector2(document.body.clientWidth, window.innerHeight)
      },
      texture: {
        type: 't',
        value: texture,
      },
    };
    this.obj = this.createObj();
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
  render(time) {
    this.uniforms.time.value += time;
  }
  resize() {
    this.uniforms.resolution.value.set(document.body.clientWidth, window.innerHeight);
  }
}
