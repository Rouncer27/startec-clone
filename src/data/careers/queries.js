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

export const Intro_Query = `
    intro: introComponent {
        content
    }
`;

export const Careers_Embed_Query = `
    careersEmbed: careersEmbedComponent {
        careersEmbed
    }
`;
