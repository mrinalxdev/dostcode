const { gql, default: request } = require("graphql-request")

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master";

const getAllCourseList = async () => {
    const query = gql`
    query MyQuery {
        courseLists(first: 1000, orderBy: createdAt_DESC) {
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

    const result = await request(MASTER_URL, query);
    return result;
}

export default {
    getAllCourseList
};