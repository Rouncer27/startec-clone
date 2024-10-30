export const Related_Porjects_Query = `
  marketsRelated: marketsRelatedComponent {
    marketsRelated {
      edges {
        node {
          slug
          }
        }
      }
    }
`;

export const Project_Excerpt_Query = `
    excerpt: projectExcerptComponent {
        content
    }
`;

export const Project_Featured_Image_Query = `
    featuredImage: featuredImageComponent {
        image {
            node {
                altText
                sourceUrl
            }
        }
    }
`;
