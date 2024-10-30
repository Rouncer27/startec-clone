export const Related_Porjects_Query = `
  marketsRelated: marketsRelatedComponent {
    marketsRelated {
      edges {
        node {
          slug
           ... on Market {
              title
            }
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

export const Project_Content_Query = `
    mainContent: mainContentComponent {
        content
      }
`;
