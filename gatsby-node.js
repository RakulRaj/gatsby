const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      members: allStrapiMembers {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.members.nodes.forEach(members => {
    createPage({
      path: `/board/${members.slug}`,
      component: path.resolve(`src/templates/board-members-template.js`),
      context: {
        slug: members.slug,
      },
    })
  })
}
