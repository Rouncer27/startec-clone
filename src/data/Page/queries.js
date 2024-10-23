export const Page_Seo_Query = `
    seoMetaTags {
        seoMetaInformation {
            metaImage {
                node {
                    altText
                    sourceUrl
                }
            }
            metaTitle
            metaDescription
        }
    }
`;
