module.exports = {
  configureWebpack: {
    module: {
      rules: [
        { test: /\.(glsl|frag|vert|fs|vs)$/, loader: ['raw-loader', 'glslify'], exclude: /node_modules/ },
        // { test: /\.(glsl|frag|vert|fs|vs)$/, loader: 'glslify', exclude: /node_modules/ }
      ]
    }
  }
}