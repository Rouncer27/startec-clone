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

export const Intro_Query = `
    intro: introComponent {
        title
        content
        displayLetsConnectIcon
    }
`;
