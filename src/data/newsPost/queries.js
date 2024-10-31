export const News_Posts_Intro_Query = `
    newsPostsIntro: newsPosts {
        excerpt
        featuredImage {
            node {
                altText
                sourceUrl
            }
        }
    }   
`;

export const News_Posts_Categories_Query = `
    categories: categories(first: 9999999) {
        nodes {
            name
            slug
            uri
        }
    }  
`;
