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

export const Markets_Slider_Query = `
    marketsSlider: marketsSliderComponent {
        marketsSliderSlides {
            title
            content
            buttonRequired
            buttonText
            marketLink {
                edges {
                    node {
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
