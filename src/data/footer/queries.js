export const Footer_Menu_Query = `
     menu(id: "Footer Menu", idType: NAME) {
        menuItems(first: 99999) {
            nodes {
                label
                uri
                parentId
                cssClasses
                childItems {
                    nodes {
                        label
                        uri
                    }
                }
            }
        }
    }
`;

export const Social_Media_Links_Query = `
     socialMediaLinks: siteWideSettings {
        socialMedia {
            facebookLink
            linkedinLink
            youTubeLink
        }
    }
`;

export const Logo_Options_Query = `
     mainLogo: siteWideSettings {
        logoOptions {
            mainLogo {
                node {
                    altText
                    sourceUrl
                }
            }
        }
    }
`;
