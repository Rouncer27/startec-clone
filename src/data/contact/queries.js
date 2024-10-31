export const Hero_Image_Query = `
    heroImage: heroImageComponent {
        heroTitle
        heroImage {
            node {
                altText
                sourceUrl
            }
        }
    }
`;
