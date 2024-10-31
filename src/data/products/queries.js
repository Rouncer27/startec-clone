export const Hero_Image_Query = `
    heroImage: heroImageComponent {
        heroTitle
        heroContent
        heroImage {
            node {
                altText
                sourceUrl
            }
        }
    }
    
`;

export const Products_Categories_Query = `
    productsCategories: productsCategoriesComponent {
        categories {
          title
          content
          sectionId
          products {
            product {
              edges {
                node {
                  ... on Product {
                    title
                    productPost {
                      productContentComponent {
                        content
                        buttonText
                        buttonRequired
                        buttonLink {
                          edges {
                            node {
                              slug
                              uri
                            }
                          }
                        }
                        image {
                          node {
                            altText
                            sourceUrl
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
`;

export const Small_Call_Action_Query = `
    smallCallAction: smallCallToAction {
        title
        content
        backgroundImage {
            node {
                altText
                sourceUrl
            }
        }
        iconImage {
            node {
                altText
                sourceUrl
            }
        }
    }
`;
