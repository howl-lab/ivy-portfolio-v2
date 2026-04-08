interface ExpandedImage {
  src: string;
  caption: string;
}

type SummarySegment = string | { text: string; url: string };

interface SubCard {
  title: string;
  expandedText: string;
  expandedImages?: ExpandedImage[];
}

export interface Contribution {
  title: string;
  cardTitle?: string;
  expandedText: string;
  expandedImages?: ExpandedImage[];
  subCard?: SubCard;
}

interface Sidebar {
  problem: string;
  proposal: string;
}

export interface Project {
  id: string;
  label: string;
  tags: string[];
  summary: SummarySegment[];
  sidebar: Sidebar;
  contributions: Contribution[];
}

export const PROJECTS: Project[] = [
  {
    id: "presence-ai",
    label: "Presence AI",
    tags: ["0-1", "GenAI", "conversational", "avatar"],
    summary: [
      "As the founding designer on a team of mostly engineers, I was responsible for the design of a 0-1 product: interactions, design system, and user interface. I also supported the team in research, analytics, and product strategies.",
    ],
    sidebar: {
      problem:
        "The conversational space is mostly saturated by text-based interactions. How do we elevate human and AI conversation? (eg. format or cadence)",
      proposal:
        "Multimodal consumer-facing realtime digital avatar application (generative video + audio)",
    },
    contributions: [
      {
        title: "Landing page",
        cardTitle: "Phase 1: Roulette interaction",
        expandedText:
          "67% user start call (+13% from beginning) but only 0.3% next day retention rate.",
        expandedImages: [
          {
            src: "/images/presence/landing-site1.jpg",
            caption: "Roulette interaction (randomized avatars)",
          },
        ],
        subCard: {
          title: "Phase 2: Customization (user create)",
          expandedText:
            "Only 18.97% desktop user complete the creation flow vs. 8% mobile BUT first time seeing organic retention (eg. 200 return users in one day)",
          expandedImages: [
            {
              src: "/images/presence/landing-site2.mp4",
              caption: "Creation (letting user create)",
            },
          ],
        },
      },
      {
        title: "Design system",
        cardTitle: "Building for speed",
        expandedText:
          "I spun up a flexible design system that allowed engineers to build efficiently and push to production every 2 weeks to get real user feedback and learn usage and opportunity through data",
        expandedImages: [
          {
            src: "/images/presence/design-system1.jpg",
            caption: "Flexible design system for iterations",
          },
          {
            src: "/images/presence/design-system2.jpg",
            caption:
              "Keep the system in alignment with Engineer's component codebase",
          },
        ],
        subCard: {
          title: "Prompting language",
          expandedText:
            "This resulted and helped the team in: \n • Creating a backend tagging system for metadata \n • Front-end filtering feature for user \n • Internal platform for the team to auto-generate avatars (tied together video, voice and image generations from different APIs)",
          expandedImages: [
            {
              src: "/images/presence/prompting1.jpg",
              caption: "Taxonomy guide",
            },
            {
              src: "/images/presence/prompting2.jpg",
              caption:
                "Bringing language to our backend system prompting for video and image generation",
            },
            {
              src: "/images/presence/prompting3.mp4",
              caption:
                "Designed a backend interface for internal creation of avatars, tying together image, video, and audio generation pipeline",
            },
          ],
        },
      },
      {
        title: "Conversation interface",
        cardTitle: "Conversation interface",
        expandedText:
          "Worked with various technical limitations and designed a product focused on user creation \n • Based on 350 sample users: 82% reach 10m on desktop vs. 42% on mobile \n • To reduce cost, the product shifted from video-first to text and voice-first with video generation features in text mode (eg. $0.75 per 5s video vs. $0.08 per image)",
        expandedImages: [
          {
            src: "/images/presence/convo-ui1.mp4",
            caption:
              "Tech limitation: Avatar's audio status is hard to assess \n → Design solution: Voice indicator to give visual cues and for team to debug more easily",
          },
          {
            src: "/images/presence/convo-ui2.mp4",
            caption:
              "Tech limitation: Lipsync is not perfect and video mode cost a lot \n → Design solution: Emphasize text and audio",
          },
        ],
      },
    ],
  },
  {
    id: "headroom",
    label: "Headroom",
    tags: ["B2B", "AI", "collaboration", "acquired"],
    summary: [
      "As the sole and lead designer on the team, I facilitated collaboration between Heads of Product, Engineering, and Marketing on a product that makes it easy to leverage multimodal AI to create collaborative experiences and led design on an extension collaboration with Lucid. \n \n ☞ Collaboration with Lucidspark launched July 2023. Developer platform pivoted in 3 months. ",
      {
        text: "Acquired",
        url: "https://investors.upwork.com/news-releases/news-release-details/upwork-reports-fourth-quarter-and-full-year-2023-financial",
      },
      " by Upwork November 2023",
    ],
    sidebar: {
      problem:
        "The pandemic fast-tracked remote meetings and people are spending more time trying to take notes than being present. How do we help people collaborate more easily?",
      proposal:
        "AI-powered collaboration platform with capabilities like summaries, replay, highlight, auto transcripts, action items and search",
    },
    contributions: [
      {
        title: "Developer tool",
        cardTitle: "SDK playground + dashboard",
        expandedText:
          "When the team pivoted to a developer platform product, I designed the user interface making it friendly for both technical and non-technical audiences to build with Headroom technology in their application through API",
        expandedImages: [
          { src: "/images/headroom/sdk1.mp4", caption: "Dashboard overview" },
          {
            src: "/images/headroom/sdk2.mp4",
            caption: "Playground (sessions based on room ID)",
          },
          {
            src: "/images/headroom/sdk3.mp4",
            caption:
              "Pricing calculator to gauge billing based on credit usages",
          },
        ],
      },
      {
        title: "Lucidspark extension",
        cardTitle: "B2B collaboration opportunity",
        expandedText:
          "I led the design refactor to integrate Headroom's AI meeting capabilities into Lucid's virtual whiteboard application. \n \n • Designed within the limited vertical side panel \n • Structured flow interactions based on Lucid's backend",
        expandedImages: [
          {
            src: "/images/headroom/lucid1.jpg",
            caption:
              "Distilled core values of Headroom into features for the extension through new components and UI",
          },
          {
            src: "/images/headroom/lucid2.mp4",
            caption:
              "An example feature based on Lucid's backend architecture was the ability to copy a summary card of the meeting right into the board",
          },
        ],
      },
      {
        title: "The Headroom brand",
        cardTitle: "Defined Headroom through product and marketing",
        expandedText:
          "I built and maintained a Webflow website with Head of Marketing for SEO discovery and outreach to B2B partners \n \n • Responsible for seamless alignment between marketing and product \n • Integrated brand identity into different touchpoints of the product and company",
        expandedImages: [
          {
            src: "/images/headroom/headroom1.jpg",
            caption:
              "I shaped the design system, typography, and visual language (inspired by retro delight 👾)",
          },
          {
            src: "/images/headroom/headroomcore.mp4",
            caption: "",
          },
          {
            src: "/images/headroom/headroom2.jpg",
            caption:
              "Designed website for SEO discovery and outreach to B2B partners",
          },
        ],
      },
    ],
  },
  {
    id: "grand-theft-auto",
    label: "Grand Theft Auto",
    tags: ["gaming", "web", "marketing", "webGL"],
    summary: [
      "Designed a web-based application, ",
      {
        text: "License Plate Creator",
        url: "https://www.rockstargames.com/gta-online/license-plates",
      },
      ", that lets player personalize plates on the web to be applied in-console \n \n Part of the innovation Marketing team on a design team of 3. Defined the majority of the interface and interactions; built off GTA's main design system \n \n ☞ The License Plate Creator was launched in 2023 to over millions of players and received positive feedbacks",
    ],
    sidebar: {
      problem:
        "The studio wanted to create 'companion apps' that let players enjoy in-game contents out of their console. The 2013 companion app, iFruit, has 2.2 stars rating / 400K reviews and was very buggy. It was shut down in 2022. ",
      proposal:
        "There are over 18 million players and over 740 vehicles in the game. UXR showed vehicles as a valuable touchpoint for personalization and expression. Create a companion experience on the browser where users can create license plates off-console",
    },
    contributions: [
      {
        title: "Story-driven UX",
        cardTitle: "",
        expandedText:
          "World building and narratives are major aspects of GTA's brand identity \n \n • I infused the branding of Los Santos (in-game's console Auto Shop) into the web space, drawing on the feeling of entering an auto workshop, creating plates, and leaving the shop.",
        expandedImages: [
          {
            src: "/images/gta/gta1.mp4",
            caption:
              "I was keen on the experience to feel seamless, paying particular attention to how the plate (main object) transition through motion",
          },
        ],
        subCard: {
          title: "",
          expandedText:
            "Technical constraints: hosting large 3D assets can make canvas rendering laggy which interrupts the flow \n \n Design solution: I proposed a two column layout in which the canvas and panel only has to render once at the start and move across the browser per flow",
          expandedImages: [{ src: "/images/gta/gta2.jpg", caption: "" }],
        },
      },
      {
        title: "Player states",
        cardTitle: "User-centric states",
        expandedText:
          "To make sure I am attuned to players, I designed with their needs in mind, which meant ex. giving guest players the ability to demo the application and supporting return players in what to do next",
        expandedImages: [
          {
            src: "/images/gta/gta-states1.jpg",
            caption:
              "Guest player demoed the application, plate in the background showed as preview",
          },
          {
            src: "/images/gta/gta-states2.jpg",
            caption:
              "Account player's zero state showed a sample plate + CTA to create",
          },
          {
            src: "/images/gta/gta-states3.jpg",
            caption:
              "Account player who has created a plate sees call to action to pick up plate in-game",
          },
        ],
      },
      {
        title: "Copywriting with clarity ",
        cardTitle: "Conveying directions and dependencies through copy",
        expandedText:
          "• Championed clarity and instructional tone to remove tension around invisible web-to-console dependencies \n • We had to work with limited API metadata — I wanted to help players 'understand' (remove tension) the invisible dependencies between web and console \n • My mantra was 'Don't leave the user hanging'",
        expandedImages: [
          {
            src: "/images/gta/gta-copy1.mp4",
            caption:
              "Convey limitation: player must go claim their created plate in-console before they can create another one on web",
          },
        ],
      },
    ],
  },
  {
    id: "museum-of-arts-and-design",
    label: "Museum of Arts & Design",
    tags: ["exhibition", "web", "museum"],
    summary: [
      "As the studio's first product designer, I co-created directly with the Design Director to craft a ",
      {
        text: "digital exhibition",
        url: "https://madmuseum.org/burke-prize-2021/",
      },
      " for the Burke Prize 2021, with the aim to focus on accessibility and showcase artists' work in digital narrative form. \n \n ☞ Launched in 2022 and won Museum Association of NY's 2022 Awards of Merit for ",
      {
        text: "Excellence in Design",
        url: "https://www.newyorkalmanack.com/2022/03/museum-association-of-ny-announces-2022-awards-of-merit/",
      },
      " and shortlisted for Best Digital Product Innovation for the Digiday Media Awards",
    ],
    sidebar: {
      problem:
        "The Burke Prize, a biannual contemporary art prize for new artists working with expanded media (glass, fiber, clay, metal, or wood). Normally take place onsite at New York, but due to Covid, had to be remote",
      proposal:
        "An online exhibition that introduced all 14 artists and their work, with the winner being revealed online.",
    },
    contributions: [
      {
        title: "Architectured artist data",
        cardTitle: "",
        expandedText:
          "14 artists representing 'a new generation of artists working in a world of expanded media. \n A big question for the project was: 'How do we represent what was normally live in digital form?'",
        expandedImages: [
          {
            src: "/images/mad/mad1.jpg",
            caption:
              "Took stock of all 14 artists who have unique mediums and statements for who they are (note: sculpture is a very physical medium)",
          },
          {
            src: "/images/mad/mad2.jpg",
            caption:
              "I composed a system for organizing and structuring all the artifacts",
          },
          {
            src: "/images/mad/mad3.jpg",
            caption:
              "Based on the system, I came up with 4 media categories and designed specific components for each",
          },
        ],
      },
      {
        title: "Elements of storytelling",
        cardTitle: "Capturing what the award and exhibition is about",
        expandedText:
          "Two comments from the museum led  the storytelling direction I went on to define: \n 1. MAD's curations of the exhibition evoke sense of participation over possession \n 2. Craft is a journey, so the time and labor are as much part of the process as the finished pieces",
        expandedImages: [
          {
            src: "/images/mad/mad-story1.jpg",
            caption:
              "I wanted to evoke a sense of museum-goer participation and the organic process that craft embodies. I also designed some scribbles and handwriting as part of the organic element",
          },
          {
            src: "/images/mad/mad-story2.mp4",
            caption:
              "I storyboarded an interaction for the hero welcome that gave context to the exhibition — as visitors hovered over dots, there is a reveal of an artist's work",
          },
        ],
      },
      {
        title: "Website design",
        cardTitle: "Art direction for the interface",
        expandedText:
          "I worked directly with FE engineer and Design Director on implementation of the site with focus on accessibility, assets hosting, links, and components",
        expandedImages: [
          {
            src: "/images/mad/mad-web1.mp4",
            caption:
              "Used special animation and motion to infuse storytelling elements",
          },
          {
            src: "/images/mad/mad-web2.jpg",
            caption: "I created components specific to each of the media types",
          },
        ],
      },
    ],
  },
  {
    id: "socratic",
    label: "Socratic",
    tags: ["GenAI", "education", "Google", "app"],
    summary: [
      "I joind in Spring and led visual design on the Socratic team to rebrand the AI-powered app, ",
      {
        text: "Socratic",
        url: "https://en.wikipedia.org/wiki/Socratic_(Google)",
      },
      ", that help students with their homework by providing educational resources like videos, definitions, Q&A, links and more \n \n ☞ Launched Fall 2019: ",
      {
        text: "Google's blog",
        url: "https://blog.google/products-and-platforms/products/education/socratic-by-google/#:~:text=To%20help%20students%20working%20on,them%20work%20through%20their%20questions.",
      },
      " and ",
      {
        text: "TIME",
        url: "https://time.com/4650119/socratic-app-homework-iphone/",
      },
      ". Socratic moved to the Google app in 2024.",
    ],
    sidebar: {
      problem:
        "Regular Google search can be daunting for younger learners and Google just acquired an app called Socratic, that uses a combination of OCR, AI and machine learning to surface relevant learning resources (eg. websites, videos, links) for students. ",
      proposal:
        "Rebrand the app, inside and out, as a learning-focused search by Google to be launch for students in the Fall.",
    },
    contributions: [
      {
        title: "Visual styleguide",
        cardTitle: "Refreshed visual language + defined styleguide",
        expandedText:
          "• Rebrand the app to feel Googley and fun \n • Ensured the system is scaleable \n • Developed delightful tone and colorful for Gen Z and Alpha audiences \n • Harmonized with the rest of Google's products \n Paired graphic and text concepts across learning content \n Created a custom font in 2 weeks to be used for content creation",
        expandedImages: [
          {
            src: "/images/socratic/socratic1.jpg",
            caption:
              "I came up with a graphic style based on fidelity and delight for Gen Z and Alpha audiences",
          },
          {
            src: "/images/socratic/socratic2.mp4",
            caption:
              "Problem: most fonts do not offer full coverage of symbols and characters, esp. when it comes to math and the sciences. Design solution: I custom made one so the team has full control and coverage",
          },
          {
            src: "/images/socratic/socratic3.jpg",
            caption:
              "Distilled a complimentary theme for Socratic from Google Material's color guideline",
          },
        ],
        subCard: {
          title: "Storytelling with logo",
          expandedText:
            "Rebooted the logo and brought that into product messaging and moments of delight",
          expandedImages: [
            {
              src: "/images/socratic/logo1.jpg",
              caption:
                "Full range of characters and strengthen brand association",
            },
            {
              src: "/images/socratic/logo2.mp4",
              caption:
                "Designed short animations and motion guidelines for how the logo would move",
            },
          ],
        },
      },
      {
        title: "First-party content creation",
        cardTitle: "",
        expandedText:
          "Led another visual designer and worked directly with pedagogy experts on first party content creation. \n \n • In the span of 4 months, we created over 900 explainer cards across subjects like math, science, physics, biology, and history \n • 30-40% of usage surfaced an explainer card",
        expandedImages: [
          {
            src: "/images/socratic/socratic-content1.jpg",
            caption: "Tight loop of create, review, and QA testing",
          },
          {
            src: "/images/socratic/socratic-content2.jpg",
            caption:
              "Designed for readability and understandability on vertical mobile space",
          },
          {
            src: "/images/socratic/socratic-content3.jpg",
            caption:
              "left to right: browse by subject, dive into topics within subject, detail learning about topic",
          },
          {
            src: "/images/socratic/socratic-content3.mp4",
            caption: "Snippet of final product",
          },
        ],
      },
      {
        title: "Custom math keyboard",
        cardTitle: "",
        expandedText:
          "Socratic & Lens are both Google products that used camera as main source of input. \n \n Problem: sometime, the OCR (Optical Characrer Recognization) technology would fail. This caused students to get stuck in their end-to-end journey or experience bad query results. \n \n Design solution: led design work and cross-team alignments on a custom math keyboard so that students can manually address OCR errors",
        expandedImages: [
          {
            src: "/images/socratic/socratic-keyboard1.mp4",
            caption:
              "Adoption into Google Search (eg. search math solver) in 2025",
          },
        ],
        subCard: {
          title: "",
          expandedText:
            "Most digital mathematic symbols are rendered using LaTeX font \n \n Rendering with LaTeX has its limits: \n • The font showed up wonky when applied raw against the native system font \n • LaTeX was not designed to be interactive \n \n Design solutions: Recycled LaTeX to create versions of symbol made for editing \n • Testing the cursor movement implementation \n • Turned to UXR with studies on cursor and keyboards (mobile UX)",
          expandedImages: [
            {
              src: "/images/socratic/socratic-keyboard2.mp4",
              caption:
                "Closely collaborated with engineering to implement and troubleshoot functionality",
            },
            {
              src: "/images/socratic/socratic-keyboard3.jpg",
              caption: "Snippet of final feature released on Lens in 2020",
            },
          ],
        },
      },
    ],
  },
];
