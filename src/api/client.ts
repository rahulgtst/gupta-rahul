import { createClient } from "contentful";

const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

console.log("Space ID:", spaceId);
console.log("Access Token:", accessToken);
export const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN!,
});
