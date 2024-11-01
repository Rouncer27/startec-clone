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

export const Contact_Information_Query = `
    contactInformation: contactInformationComponent {
        mainOfficeAddress
        mainOfficeFax
        mainOfficePhone
        mainOfficeTitle
        mainOfficeTollFree
        locations {
          title
          address
          fax
          phone
          tollFree
        }
      }
`;

export const Contact_Map_Query = `
    contactMap: contactMapComponent {
        intro
        mapImage {
          node {
            altText
            sourceUrl
          }
        }
      }
`;
