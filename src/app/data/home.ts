export interface HomeContribution {
  title: string;
  description: string;
  hoverImage?: string;
}

export interface HomeProject {
  id: string;
  label: string;
  tags: string[];
  cardDescription: string;
  contributions: HomeContribution[];
}

export const HOME_PROJECTS: HomeProject[] = [
  {
    id: "presence-ai",
    label: "Presence AI",
    tags: ["0-1", "GenAI", "conversational", "avatar"],
    cardDescription:
      "Led everything design for the consumer-facing realtime avatar",
    contributions: [
      {
        title: "Landing page",
        description: "Proof of concept application with 4K DAU reached",
        hoverImage: "/images/presence/landing-site.jpg",
      },
      {
        title: "Building for speed",
        description:
          "Defined design system and guided prompting language for team to push to production every 2 weeks",
        hoverImage: "/images/presence/design-system.mp4",
      },
      {
        title: "Conversation interface",
        description:
          "Designed conversation interfaces that reached 75% in 5min call",
        hoverImage: "/images/presence/convo-ui.mp4",
      },
    ],
  },
  {
    id: "headroom",
    label: "Headroom",
    tags: ["B2B", "AI", "collaboration", "acquired"],
    cardDescription:
      "Acquired by Upwork in 2023. Sole designer on the platform for AI-powered collaborative experiences.",
    contributions: [
      {
        title: "Developer tool",
        description:
          "Designed a friendly interface for both technical and non-technical audiences around Headroom's API and SDK",
        hoverImage: "/images/headroom/sdk-tool.jpg",
      },
      {
        title: "Lucidspark extension",
        description:
          "Led B2B collaboration integrating Headroom's AI into Lucid's whiteboard, reaching 30M+ potential users",
        hoverImage: "/images/headroom/lucid-spark.jpg",
      },
      {
        title: "The Headroom brand",
        description:
          "Built brand presence through design system, Webflow site, and integrated product identity",
        hoverImage: "/images/headroom/headroom.jpg",
      },
    ],
  },
  {
    id: "grand-theft-auto",
    label: "Grand Theft Auto",
    tags: ["companion app", "web", "gaming", "15M+ players"],
    cardDescription:
      "Defined interactions for the web-based application that lets player create license plates out-of-console",
    contributions: [
      {
        title: "Story-driven UX",
        description: "Crafted a narrative-based flow reaching 15M+ players",
        hoverImage: "/images/gta/gta.mp4",
      },
      {
        title: "Interactive interface design",
        description:
          "Mapped different player states — guest demo, zero state, return player — for a smooth experience",
        hoverImage: "/images/gta/gta-states.jpg",
      },
      {
        title: "Copywriting with clarity",
        description:
          "Championed for clarity and transparency in the overall experience",
        hoverImage: "/images/gta/gta-copy.mp4",
      },
    ],
  },
  {
    id: "museum-of-arts-and-design",
    label: "Museum of Arts & Design",
    tags: ["digital exhibition", "accessibility", "award-winning"],
    cardDescription:
      "Crafted a digital experience for the biannual contemporary art award, The Burke Prize",
    contributions: [
      {
        title: "Architectured artist information",
        description: "Structured 14 artist data into 4 media categories",
        hoverImage: "/images/mad/mad.jpg",
      },
      {
        title: "Elements of storytelling",
        description:
          "Wove curatorial narrative through interactive moments using handwriting as an organic design element",
        hoverImage: "/images/mad/mad-story.jpg",
      },
      {
        title: "Website design",
        description:
          "Defined an art-first interaction system, working directly with the FE engineer on accessibility and components",
        hoverImage: "/images/mad/mad-web.jpg",
      },
    ],
  },
  {
    id: "socratic",
    label: "Socratic",
    tags: ["rebrand", "education", "Google", "mobile"],
    cardDescription:
      "Rebranding the AI-powered app to help students with their homework by providing educational resources",
    contributions: [
      {
        title: "Established visual styleguide",
        description:
          "Defined the new visual system for the rebrand — graphic style, custom font, and Material-aligned color theme",
        hoverImage: "/images/socratic/socratic.jpg",
      },
      {
        title: "First-party content creation",
        description:
          "Led creation of 900+ explainer cards across subjects — 30-40% of all usage surfaced a card",
        hoverImage: "/images/socratic/socratic-content.jpg",
      },
      {
        title: "Custom math keyboard",
        description:
          "Led creation of 900+ explainer cards across subjects — 30-40% of all usage surfaced a card",
        hoverImage: "/images/socratic/socratic-content.jpg",
      },
    ],
  },
];
