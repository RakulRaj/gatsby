const axios = require('axios')

const path = require('path')

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

  const resultData = await graphql(`
    {
      events: allStrapiEvents {
        nodes {
          slug
        }
      }
    }
  `)
  resultData.data.events.nodes.forEach(event => {
    createPage({
      path: `/board/${event.slug}`,
      component: path.resolve(`src/templates/event-template.js`),
      context: {
        slug: event.slug,
      },
    })
  })
}
