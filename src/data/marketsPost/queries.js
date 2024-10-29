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

export const Intro_Title_Query = `
    introTitle: introTitleComponent {
        title
    }
`;

export const Top_Content_Query = `
    topContent: topContentComponent {
        activateThisComponent
        content
    }
`;

export const Image_Divider_Query = `
    imageDivider: imageDividerComponent {
        activateThisComponent
        image {
            node {
                altText
                sourceUrl
            }
        }
    }
`;

export const Bottom_Content_Query = `
    bottomContent: bottomContentComponent {
        activateThisComponent
        content
    }
`;

export const Featured_Products_Query = `
    featuredProducts: featuredProductsComponents {
        title
        products {
          product {
            edges {
              node {
                ... on Product {
                    title
                    productPost {
                    productContentComponent {
                      image {
                        node {
                          altText
                          sourceUrl
                        }
                      }
                      content
                      buttonRequired
                      buttonText
                      buttonLink {
                        edges {
                          node {
                            uri
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
