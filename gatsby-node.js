const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      members: allStrapiMembers {
        nodes {
          board_member{
            name
          }
        }
      }
    }
  `)

  result.data.members.nodes.forEach(members => {
    debugger
    createPage({
      path: `/board/${members.board_member[0].name}`,
      component: path.resolve(`src/templates/board-members-template.js`),
      context: {
        slug: members.board_member[0].name,

      },
    })
  })
}
