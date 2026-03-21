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
          "Developed a SDK tool to showcase Headroom's AI capabilities and streamline to teams",
        hoverImage: "/images/headroom/sdk-tool.jpg",
      },
      {
        title: "Lucidspark extension",
        description:
          "Led the integrated design collaboration with Lucidspark, reaching 30M+ potential users",
        hoverImage: "/images/headroom/lucid-spark.jpg",
      },
      {
        title: "The Headroom brand",
        description:
          "Defining the brand through design system, marketing materials, and product interface",
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
        title: "Architectured artist data",
        description: "Structured 14 artist data into 4 media categories",
        hoverImage: "/images/mad/mad.jpg",
      },
      {
        title: "Elements of storytelling",
        description:
          "I designed an interactive experience to introduce visitors to the site and award",
        hoverImage: "/images/mad/mad-story.jpg",
      },
      {
        title: "Website design",
        description:
          "I defined a narrative-first and hands-on interaction system and visual language",
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
          "I defined the visual style, tone, and elements for the rebrand",
        hoverImage: "/images/socratic/socratic.jpg",
      },
      {
        title: "First-party content creation",
        description:
          "I collaborated with pedagogy team and led creation of 900+ content cards",
        hoverImage: "/images/socratic/socratic-content.jpg",
      },
      {
        title: "Custom math keyboard",
        description: "Cross-team collaborated on Google’s first math keyboard",
        hoverImage: "/images/socratic/socratic-content.jpg",
      },
    ],
  },
];
