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

export const Post_Content_Query = `
    mainContent 
`;

export const Post_Gallery_Images_Query = `
    imageGalleryRequired
      imageGallery {
        edges {
          node {
            altText
            sourceUrl
          }
        }
      }
`;

export const Post_Categories_Query = `
    categories {
        edges {
            node {
                name
                slug
            }
        }
    }
`;
