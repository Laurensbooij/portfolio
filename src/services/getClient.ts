import { createClient } from "contentful"

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  space: process.env.CONTENTFUL_SPACE_ID || ""
})

export default client