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

export const Small_Call_Action_Query = `
  smallCallAction: smallCallToAction {
    title
    content
    backgroundImage {
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
