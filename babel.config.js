module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  overrides: [
    {
      plugins: [
        [
            //enables private methods
            "@babel/plugin-transform-private-methods"
        ]
      ]
    }
  ]
}
