const path = require('path')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, 'src/components'),
        "@data": path.resolve(__dirname, 'src/data'),
        "@images": path.resolve(__dirname, 'src/images'),
        "@pages": path.resolve(__dirname, 'src/pages'),
        "@utils": path.resolve(__dirname, 'src/utils'),
        "@styles": path.resolve(__dirname, 'src/styles'),
      },
    },
  })
}