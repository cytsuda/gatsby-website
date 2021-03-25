// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   createTypes(`
//     type Mdx implements Node {
//       frontmatter: MdxFrontmatter!
//     }
//     type MdxFrontmatter {
//       photoOne: File @fileByRelativePath
//       photoTwo: File @fileByRelativePath
//       photoThree: File @fileByRelativePath
//     }
//   `)
// }