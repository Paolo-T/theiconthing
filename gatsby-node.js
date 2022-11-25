const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
   // Query for markdown nodes to use in creating pages.
   const { data } = await graphql(`
      query data {
         allProjectDataJson {
            edges {
               node {
                  slug
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
   data.allProjectDataJson.edges.forEach((edge) => {
      createPage({
         path: "/projects/" + edge.node.slug,
         component: path.resolve(`./src/4_templates/projectDetails.js`),
         //In your blog post template's graphql query, you can use pagePath
         // as a GraphQL variable to query for data from the markdown file.
         context: { slug: edge.node.slug },
      })
   })
}
