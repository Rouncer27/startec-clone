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

export const Simple_Intro_Query = `
    simpleIntro: simpleIntroComponent {
        content
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

export const Content_Title_Logo_Query = `
   contentTitleLogo: contentTitleLogoComponent {
    title
    content
    displayLetsConnectCard
    buttonRequired
    logoRequired
    buttonText
    buttonLink {
        edges {
            node {
                uri
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
