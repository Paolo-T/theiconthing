const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
   // Query for markdown nodes to use in creating pages.
   const { data } = await graphql(`
      query data {
         allTemplateDataJson {
            edges {
               node {
                  slug
                  template
               }
            }
         }
      }
   `)

   // Handle errors
   if (data.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
   }

   // Create pages for each markdown file.
   data.allTemplateDataJson.edges.forEach((edge) => {
      let templatePath
      if (edge.node.template === "work") {
         templatePath = path.resolve(`./src/4_templates/workDetails.js`)
      } else if (edge.node.template === "article") {
         templatePath = path.resolve(`./src/4_templates/articleDetails.js`)
      }
      createPage({
         path: edge.node.slug,
         component: templatePath,
         context: { slug: edge.node.slug },
         //In your blog post template's graphql query, you can use pagePath
         // as a GraphQL variable to query for data from the markdown file.
      })
   })
}
