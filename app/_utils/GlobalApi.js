const { gql } = require("graphql-request")

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async () => {
    const query = gql`
    query MyQuery {
        courseLists {
          slug
          name
          id
          free
          description
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              youtubeUrl
            }
          }
          totalChapters
        }
      }
    `

    const result = await req(MASTER_URL, query);
    return result;
}

export default {
    getAllCourseList
};