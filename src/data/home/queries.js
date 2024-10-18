export const Hero_Slider_Query = `
    heroSlider: heroSliderComponent {
        heroSliderSlides {
            title
            content
            buttonLink
            buttonText
            buttonRequired
            image {
                node {
                    altText
                    sourceUrl
                }
            }
        }
    }
    
`;

export const Markets_Slider_Query = `
    marketsSlider: marketsSliderComponent {
        marketsSliderSlides {
            title
            content
            buttonRequired
            buttonText
            marketLink {
                nodes {
                    ... on Page {
                    id
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
`;

export const Content_Title_Logo_Query = `
   contentTitleLogo: contentTitleLogoComponent {
    title
    content
    buttonText
    displayLetsConnectCard
    buttonLink {
        edges {
            node {
                ... on Page {
                id
                uri
                }
            }
        }
    }
        iconLogo {
            node {
            altText
            sourceUrl
            }
        }
    }
`;

export const Content_Side_Image_Side_Query = `
   contentSideImageSide:  contentSideImageSideComponents {
    topSmallTitle
    mainTitle
    mainContent
    buttonText
    buttonLink {
        nodes {
            ... on Page {
                id
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
`;

export const Three_Image_Row_Query = `
   threeImagesRow: threeImagesRowComponent {
        blocks {
            content
            title
            image {
                node {
                    altText
                    sourceUrl
                }
            }
        }
    }
`;

export const Hero_Call_Out_Query = `
   heroCallOut: heroCallOutComponent {
        title
        content
        heroImage {
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
