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

export const Our_Values_Query = `
    ourValues: ourValuesComponent {
        values {
            title
            content
        }
    }
`;

export const Executive_Team_Query = `
    executiveTeam: executiveTeamComponent {
        members {
            member {
                edges {
                    node {
                        ... on Bio {
                        title
                        slug
                        biosPost {
                            featuredImageComponent {
                                image {
                                    node {
                                    altText
                                    sourceUrl
                                    }
                                }
                                titleJob
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const Leadership_Team_Query = `
    leadershipTeam: leadershipTeamComponent {
        members {
            member {
                edges {
                    node {
                        ... on Bio {
                        title
                        slug
                        biosPost {
                            featuredImageComponent {
                                image {
                                    node {
                                    altText
                                    sourceUrl
                                    }
                                }
                                titleJob
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const Team_Video_Query = `
    teamVideo: teamVideoComponent {
        teamVideoEmbed
    }
`;

export const Small_Call_Action_Query = `
    smallCallAction: smallCallToAction {
        title
        content
        iconImage {
          node {
            altText
            sourceUrl
          }
        }
        backgroundImage {
          node {
            altText
            sourceUrl
          }
        }
      }
`;
