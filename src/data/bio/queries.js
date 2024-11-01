export const Featured_Image_Query = `
    featuredImage: featuredImageComponent {
        titleJob
        linkedinReqiured
        linkedin
        image {
            node {
                altText
                sourceUrl
            }
        }
    }
`;

export const Main_Bio_Query = `
    mainBio: mainBioComponent {
        content
    }
`;
