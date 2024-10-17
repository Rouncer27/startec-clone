export const Main_Menu_Query = `
     menu(id: "Main Menu", idType: NAME) {
        menuItems(first: 99999) {
            nodes {
                label
                uri
                parentId
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

export const Mobile_Menu_Query = `
     mobile: menu(id: "Main Mobile", idType: NAME) {
        menuItems(first: 99999) {
            nodes {
                label
                uri
                parentId
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
