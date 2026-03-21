module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECTS",
    ()=>PROJECTS,
    "SIDEBAR_ITEMS",
    ()=>SIDEBAR_ITEMS
]);
const PROJECTS = [
    {
        id: "presence-ai",
        label: "Presence AI",
        tags: [
            "0-1",
            "GenAI",
            "conversational",
            "avatar"
        ],
        summary: [
            "As the founding designer on a team of mostly engineers, I was responsible for the design of a 0-1 product: interactions, design system, and user interface. I also supported the team in research, analytics, and  product strategies.\n Company goal: 500K-1M MAU + 20% 5min session time and 10% for 10min"
        ],
        sidebar: {
            problem: "How do we elevate human and AI conversation? (eg. format or cadence)",
            why: "The conversational space is mostly saturated by text-based interactions",
            proposal: "Multimodal consumer-facing live digital avatar application (generative video + audio)",
            outcome: "Product validation resulted in a coded beta with 4K DAU before sunsetting. \n Ultimately, the experiment showed: casino behavior, high cost per avatar and technical requirements"
        },
        contributions: [
            {
                title: "Landing page",
                cardTitle: "Phase 1: Roulette interaction",
                expandedText: "67% user start call (+13% from beginning) but only 0.3% next day retention rate.",
                expandedImages: [
                    {
                        src: "/images/presence/landing-site1.jpg",
                        caption: "Roulette interaction (randomized avatars)"
                    }
                ],
                subCard: {
                    title: "Phase 2: Customization (user create)",
                    expandedText: "Only 18.97% desktop user complete the creation flow vs. 8% mobile BUT first time seeing organic retention (eg. 200 return users in one day)",
                    expandedImages: [
                        {
                            src: "/images/presence/landing-site2.mp4",
                            caption: "Creation (letting user create)"
                        }
                    ]
                }
            },
            {
                title: "Design system",
                cardTitle: "Building for speed",
                expandedText: "I spun up a flexible design system that allowed engineers to build efficiently and push to production every 2 weeks to get real user feedback and learn usage and opportunity through data",
                expandedImages: [
                    {
                        src: "/images/presence/design-system1.jpg",
                        caption: "Flexible design system for iterations"
                    },
                    {
                        src: "/images/presence/design-system2.jpg",
                        caption: "Keep the system in alignment with Engineer's component codebase"
                    }
                ],
                subCard: {
                    title: "Prompting language",
                    expandedText: "This resulted and helped the team in: \n • Creating a backend tagging system for metadata \n • Front-end filtering feature for user \n • Internal platform for the team to auto-generate avatars (tied together video, voice and image generations from different APIs)",
                    expandedImages: [
                        {
                            src: "/images/presence/prompting1.jpg",
                            caption: "Taxonomy guide"
                        },
                        {
                            src: "/images/presence/prompting2.jpg",
                            caption: "Bringing language to our backend system prompting for video and image generation"
                        },
                        {
                            src: "/images/presence/prompting3.mp4",
                            caption: "Designed a backend interface for internal creation of avatars, tying together image, video, and audio generation pipeline"
                        }
                    ]
                }
            },
            {
                title: "Conversation interface",
                cardTitle: "Conversation interface",
                expandedText: "Worked with various technical limitations and designed a product focused on user creation \n • Based on 350 sample users: 82% reach 10m on desktop vs. 42% on mobile \n • To reduce cost, the product shifted from video-first to text and voice-first with video generation features in text mode (eg. $0.75 per 5s video vs. $0.08 per image)",
                expandedImages: [
                    {
                        src: "/images/presence/convo-ui1.mp4",
                        caption: "Tech limitation: Avatar's audio status is hard to assess \n → Design solution: Voice indicator to give visual cues and for team to debug more easily"
                    },
                    {
                        src: "/images/presence/convo-ui2.mp4",
                        caption: "Tech limitation: Lipsync is not perfect and video mode cost a lot \n → Design solution: Emphasize text and audio"
                    }
                ]
            }
        ]
    },
    {
        id: "headroom",
        label: "Headroom",
        tags: [
            "B2B",
            "AI",
            "collaboration",
            "acquired"
        ],
        summary: [
            {
                text: "Acquired",
                url: "https://investors.upwork.com/news-releases/news-release-details/upwork-reports-fourth-quarter-and-full-year-2023-financial"
            },
            " by Upwork in November 2023. \n \n As the sole and lead designer on the team, I facilitated collaboration between Heads of Product, Engineering, and Marketing on a platform that makes it easy to leverage multimodal AI to create collaborative experiences"
        ],
        sidebar: {
            problem: "How do we help people collaborate more easily?",
            why: "The pandemic fast-tracked remote collaboration and people are spending more time in meetings trying to take notes than being present",
            proposal: "AI-powered collaboration with capabilities like summaries, replay, highlight, auto transcripts, action items and search",
            outcome: "Collaboration with Lucidspark launched July 2023. Developer platform pivoted in 3 months, acquired by Upwork November 29 2023"
        },
        contributions: [
            {
                title: "Developer tool",
                cardTitle: "SDK playground + dashboard",
                expandedText: "When the team pivoted to a developer platform product, I designed the user interface making it friendly for both technical and non-technical audiences to build with Headroom technology in their application through API",
                expandedImages: [
                    {
                        src: "/images/headroom/sdk1.mp4",
                        caption: "Dashboard overview"
                    },
                    {
                        src: "/images/headroom/sdk2.mp4",
                        caption: "Playground (sessions based on room ID)"
                    },
                    {
                        src: "/images/headroom/sdk3.mp4",
                        caption: "Pricing calculator to gauge billing based on credit usages"
                    }
                ]
            },
            {
                title: "Lucidspark extension",
                cardTitle: "B2B collaboration opportunity",
                expandedText: "I led the design refactor to integrate Headroom's AI meeting capabilities into Lucid's virtual whiteboard application. \n \n • Designed within the limited vertical side panel \n • Structured flow interactions based on Lucid's backend",
                expandedImages: [
                    {
                        src: "/images/headroom/lucid1.jpg",
                        caption: "Distilled core values of Headroom into features for the extension through new components and UI"
                    },
                    {
                        src: "/images/headroom/lucid2.mp4",
                        caption: "An example feature based on Lucid's backend architecture was the ability to copy a summary card of the meeting right into the board"
                    }
                ]
            },
            {
                title: "The Headroom brand",
                cardTitle: "Defined Headroom through product and marketing",
                expandedText: "I built and maintained a Webflow website with Head of Marketing for SEO discovery and outreach to B2B partners \n \n • Responsible for seamless alignment between marketing and product \n • Integrated brand identity into different touchpoints of the product and company",
                expandedImages: [
                    {
                        src: "/images/headroom/headroom1.jpg",
                        caption: "I shaped the design system, typography, and visual language (inspired by retro delight 👾)"
                    },
                    {
                        src: "/images/headroom/headroom2.jpg",
                        caption: "Designed website for SEO discovery and outreach to B2B partners"
                    }
                ]
            }
        ]
    },
    {
        id: "grand-theft-auto",
        label: "Grand Theft Auto",
        tags: [
            "gaming",
            "web",
            "marketing",
            "webGL"
        ],
        summary: [
            "Designed a web-based application, ",
            {
                text: "License Plate Creator",
                url: "https://www.rockstargames.com/gta-online/license-plates"
            },
            ", that lets player personalize in-game plates out-of-console \n \n Part of the innovation Marketing team on a design team of 3. Defined the majority of the interface and interactions; built off GTA's main design system"
        ],
        sidebar: {
            problem: "The studio wanted to create 'companion apps' that let players enjoy in-game contents out of their console. The 2013 companion app, iFruit, has 2.2 stars rating / 400K reviews and was very buggy.",
            why: "There are over 100 million players and over 740 vehicles in the game. UXR showed vehicles as a valuable touchpoint for personalization",
            proposal: "A companion experience on the browser where users can create their license plate",
            outcome: "The License Plate Creator was launched in 2023 to over 15 million players and received positive feedback"
        },
        contributions: [
            {
                title: "Story-driven UX",
                cardTitle: "",
                expandedText: "World building and narratives are major aspects of GTA's brand identity \n \n • I infused the branding of Los Santos (in-game's console Auto Shop) into the web space, drawing on the feeling of entering an auto workshop, creating plates, and leaving the shop.",
                expandedImages: [
                    {
                        src: "/images/gta/gta1.mp4",
                        caption: "I was keen on the experience to feel seamless, paying particular attention to how the plate (main object) transition through motion"
                    }
                ],
                subCard: {
                    title: "",
                    expandedText: "Technical constraints: hosting large 3D assets can make canvas rendering laggy which interrupts the flow \n \n Design solution: I proposed a two column layout in which the canvas and panel only has to render once at the start and move across the browser per flow",
                    expandedImages: [
                        {
                            src: "/images/gta/gta2.jpg",
                            caption: ""
                        }
                    ]
                }
            },
            {
                title: "Player states",
                cardTitle: "User-centric states",
                expandedText: "To make sure I am attuned to players, I designed with their needs in mind, which meant ex. giving guest players the ability to demo the application and supporting return players in what to do next",
                expandedImages: [
                    {
                        src: "/images/gta/gta-states1.jpg",
                        caption: "Guest player demoed the application, plate in the background showed as preview"
                    },
                    {
                        src: "/images/gta/gta-states2.jpg",
                        caption: "Account player's zero state showed a sample plate + CTA to create"
                    },
                    {
                        src: "/images/gta/gta-states3.jpg",
                        caption: "Account player who has created a plate sees call to action to pick up plate in-game"
                    }
                ]
            },
            {
                title: "Copywriting with clarity ",
                cardTitle: "Conveying directions and dependencies through copy",
                expandedText: "• Championed clarity and instructional tone to remove tension around invisible web-to-console dependencies \n • We had to work with limited API metadata — I wanted to help players 'understand' (remove tension) the invisible dependencies between web and console \n • My mantra was 'Don't leave the user hanging'",
                expandedImages: [
                    {
                        src: "/images/gta/gta-copy1.mp4",
                        caption: "Convey limitation: player must go claim their created plate in-console before they can create another one on web"
                    }
                ]
            }
        ]
    },
    {
        id: "museum-of-arts-and-design",
        label: "Museum of Arts & Design",
        tags: [
            "exhibition",
            "web",
            "museum"
        ],
        summary: [
            "As the studio's first product designer, I co-created directly with the Design Director to craft a ",
            {
                text: "digital exhibition",
                url: "https://madmuseum.org/burke-prize-2021/"
            },
            " for the Burke Prize 2021, with the aim to focus on accessibility and showcase artists' work in narrative form. \n \n Won Museum Association of NY's 2022 Awards of Merit for ",
            {
                text: "Excellence in Design",
                url: "https://www.newyorkalmanack.com/2022/03/museum-association-of-ny-announces-2022-awards-of-merit/"
            },
            " and shortlisted for Best Digital Product Innovation for the Digiday Media Awards"
        ],
        sidebar: {
            problem: "The exhibition normally takes place onsite at New York, but due to Covid, had to be remote",
            why: "The Burke Prize, a biannual contemporary art prize for a new generation of artists working in a world of expanded media with a foundation in glass, fiber, clay, metal, or wood.",
            proposal: "A digital exhibition that introduced all 14 artists and their work",
            outcome: "Launched 2022 🚀 and received accolades"
        },
        contributions: [
            {
                title: "Architectured artist data",
                cardTitle: "",
                expandedText: "14 artists representing 'a new generation of artists working in a world of expanded media. \n A big question for the project was: 'How do we represent what was normally live in digital form?'",
                expandedImages: [
                    {
                        src: "/images/mad/mad1.jpg",
                        caption: "Took stock of all 14 artists who have unique mediums and statements for who they are (note: sculpture is a very physical medium)"
                    },
                    {
                        src: "/images/mad/mad2.jpg",
                        caption: "I composed a system for organizing and structuring all the artifacts"
                    },
                    {
                        src: "/images/mad/mad3.jpg",
                        caption: "Based on the system, I came up with 4 media categories and designed specific components for each"
                    }
                ]
            },
            {
                title: "Elements of storytelling",
                cardTitle: "Capturing what the award and exhibition is about",
                expandedText: "Two comments from the museum led  the storytelling direction I went on to define: \n 1. MAD's curations of the exhibition evoke sense of participation over possession \n 2. Craft is a journey, so the time and labor are as much part of the process as the finished pieces",
                expandedImages: [
                    {
                        src: "/images/mad/mad-story1.jpg",
                        caption: "I wanted to evoke a sense of museum-goer participation and the organic process that craft embodies. I also designed some scribbles and handwriting as part of the organic element"
                    },
                    {
                        src: "/images/mad/mad-story2.mp4",
                        caption: "I storyboarded an interaction for the hero welcome that gave context to the exhibition — as visitors hovered over dots, there is a reveal of an artist's work"
                    }
                ]
            },
            {
                title: "Website design",
                cardTitle: "Art direction for the interface",
                expandedText: "I worked directly with FE engineer and Design Director on implementation of the site with focus on accessibility, assets hosting, links, and components",
                expandedImages: [
                    {
                        src: "/images/mad/mad-web1.mp4",
                        caption: "Used special animation and motion to infuse storytelling elements"
                    },
                    {
                        src: "/images/mad/mad-web2.jpg",
                        caption: "I created components specific to each of the media types"
                    }
                ]
            }
        ]
    },
    {
        id: "socratic",
        label: "Socratic",
        tags: [
            "GenAI",
            "education",
            "Google",
            "app"
        ],
        summary: [
            "I led visual design on the Socratic team to rebrand the AI-powered app, ",
            {
                text: "Socratic",
                url: "https://en.wikipedia.org/wiki/Socratic_(Google)"
            },
            ", that help students with their homework by providing educational resources like videos, definitions, Q&A, links and more \n \n Launched 2019: ",
            {
                text: "Google's blog",
                url: "https://blog.google/products-and-platforms/products/education/socratic-by-google/#:~:text=To%20help%20students%20working%20on,them%20work%20through%20their%20questions."
            },
            " and ",
            {
                text: "TIME",
                url: "https://time.com/4650119/socratic-app-homework-iphone/"
            },
            ". \n Socratic moved to the Google app in 2024."
        ],
        sidebar: {
            problem: "Regular Google search can be daunting for younger learners and Google just acquired an AI educational app called Socratic",
            why: "The app uses a combination of OCR, AI and machine learning to surface relevant learning resources (eg. websites, videos, links) for students",
            proposal: "Rebrand the app as a learning-focused search by Google, ready for back to school in fall",
            outcome: "Launched: August 2019. 4.9 ⭐️ on app store. Daily active users from 120K in Sept. 2019 to 750K in April 2020 (+525%)"
        },
        contributions: [
            {
                title: "Visual styleguide",
                cardTitle: "Refreshed visual language + defined styleguide",
                expandedText: "• Rebrand the app to feel Googley and fun \n • Ensured the system is scaleable \n • Developed delightful tone and colorful for Gen Z and Alpha audiences \n • Harmonized with the rest of Google's products \n Paired graphic and text concepts across learning content \n Created a custom font in 2 weeks to be used for content creation",
                expandedImages: [
                    {
                        src: "/images/socratic/socratic1.jpg",
                        caption: "I came up with a graphic style based on fidelity and delight for Gen Z and Alpha audiences"
                    },
                    {
                        src: "/images/socratic/socratic2.mp4",
                        caption: "Problem: most fonts do not offer full coverage of symbols and characters, esp. when it comes to math and the sciences. Design solution: I custom made one so the team has full control and coverage"
                    },
                    {
                        src: "/images/socratic/socratic3.jpg",
                        caption: "Distilled a complimentary theme for Socratic from Google Material's color guideline"
                    }
                ],
                subCard: {
                    title: "Storytelling with logo",
                    expandedText: "Rebooted the logo and brought that into product messaging and moments of delight",
                    expandedImages: [
                        {
                            src: "/images/socratic/logo1.jpg",
                            caption: "Full range of characters and strengthen brand association"
                        },
                        {
                            src: "/images/socratic/logo2.mp4",
                            caption: "Designed short animations and motion guidelines for how the logo would move"
                        }
                    ]
                }
            },
            {
                title: "First-party content creation",
                cardTitle: "",
                expandedText: "Led another visual designer and worked directly with pedagogy experts on first party content creation. \n \n • In the span of 4 months, we created over 900 explainer cards across subjects like math, science, physics, biology, and history \n • 30-40% of usage surfaced an explainer card",
                expandedImages: [
                    {
                        src: "/images/socratic/socratic-content1.jpg",
                        caption: "Tight loop of create, review, and QA testing"
                    },
                    {
                        src: "/images/socratic/socratic-content2.jpg",
                        caption: "Designed for readability and understandability on vertical mobile space"
                    },
                    {
                        src: "/images/socratic/socratic-content3.jpg",
                        caption: "left to right: browse by subject, dive into topics within subject, detail learning about topic"
                    },
                    {
                        src: "/images/socratic/socratic-content3.mp4",
                        caption: "Snippet of final product"
                    }
                ]
            },
            {
                title: "Custom math keyboard",
                cardTitle: "",
                expandedText: "Socratic & Lens are both Google products that used camera as main source of input. \n \n Problem: sometime, the OCR (Optical Characrer Recognization) technology would fail. This caused students to get stuck in their end-to-end journey or experience bad query results. \n \n Design solution: led design work and cross-team alignments on a custom math keyboard so that students can manually address OCR errors",
                expandedImages: [
                    {
                        src: "/images/socratic/socratic-keyboard1.mp4",
                        caption: "Adoption into Google Search (eg. search math solver) in 2025"
                    }
                ],
                subCard: {
                    title: "",
                    expandedText: "Most digital mathematic symbols are rendered using LaTeX font \n \n Rendering with LaTeX has its limits: \n • The font showed up wonky when applied raw against the native system font \n • LaTeX was not designed to be interactive \n \n Design solutions: Recycled LaTeX to create versions of symbol made for editing \n • Testing the cursor movement implementation \n • Turned to UXR with studies on cursor and keyboards (mobile UX)",
                    expandedImages: [
                        {
                            src: "/images/socratic/socratic-keyboard2.mp4",
                            caption: "Closely collaborated with engineering to implement and troubleshoot functionality"
                        },
                        {
                            src: "/images/socratic/socratic-keyboard3.jpg",
                            caption: "Snippet of final feature released on Lens in 2020"
                        }
                    ]
                }
            }
        ]
    }
];
const SIDEBAR_ITEMS = [
    "problem",
    "why",
    "proposal",
    "outcome"
];
}),
"[project]/src/app/[projectId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/projects.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const PT_SANS = '"TT Commons Pro", sans-serif';
const COURIER = '"TT Commons Pro Mono", monospace';
// ─── Media helper ────────────────────────────────────────────────────────────
function Media({ src, style }) {
    if (!src) return null;
    const base = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        ...style
    };
    return src.endsWith(".mp4") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        src: src,
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        style: base
    }, void 0, false, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this) : // eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: "",
        style: base
    }, void 0, false, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
// ─── Project Context modal ───────────────────────────────────────────────────
function ProjectContextModal({ sidebar, onClose, anchorRef }) {
    const [desktopPos, setDesktopPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const update = ()=>{
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);
            if (!mobile) {
                const x = anchorRef.current ? anchorRef.current.getBoundingClientRect().right - 360 : window.innerWidth - 400;
                const y = anchorRef.current ? anchorRef.current.getBoundingClientRect().bottom + 8 : 80;
                setDesktopPos({
                    x,
                    y
                });
            }
        };
        update();
        window.addEventListener("resize", update);
        return ()=>window.removeEventListener("resize", update);
    }, [
        anchorRef
    ]);
    if (isMobile === null) return null;
    const LABELS = {
        problem: "Problem",
        why: "Why",
        proposal: "Proposal",
        outcome: "Outcome"
    };
    const card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-card",
        style: {
            background: "#fff",
            border: "1px solid #0015ff",
            borderRadius: 0,
            width: isMobile ? "90vw" : 360,
            maxWidth: isMobile ? 400 : "90vw",
            maxHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            ...isMobile ? {} : {
                position: "fixed",
                top: desktopPos?.y ?? 80,
                left: desktopPos?.x ?? window.innerWidth - 400,
                zIndex: 9990
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "20px 20px 24px",
                overflowY: "auto",
                flex: 1
            },
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_ITEMS"].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: PT_SANS,
                                fontSize: 14,
                                color: "#888",
                                textTransform: "uppercase",
                                marginBottom: 6
                            },
                            children: LABELS[key]
                        }, void 0, false, {
                            fileName: "[project]/src/app/[projectId]/page.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: PT_SANS,
                                fontSize: 16,
                                color: "#111",
                                lineHeight: 1.6
                            },
                            children: sidebar[key]
                        }, void 0, false, {
                            fileName: "[project]/src/app/[projectId]/page.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/src/app/[projectId]/page.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClose,
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 9990,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: (e)=>e.stopPropagation(),
                children: card
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 9989
                }
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            card
        ]
    }, void 0, true);
}
// ─── Contribution content card ────────────────────────────────────────────────
function ContributionCard({ contribution }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#fff",
                    borderRadius: 16,
                    padding: "32px 36px",
                    animation: "fadeIn 0.2s ease forwards"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: PT_SANS,
                            fontWeight: 700,
                            fontSize: "clamp(16px, 1.8vw, 16px)",
                            color: "#111",
                            marginBottom: 12
                        },
                        children: contribution.cardTitle ?? contribution.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: PT_SANS,
                            fontSize: 16,
                            color: "#444",
                            lineHeight: 1.5,
                            marginBottom: 28,
                            maxWidth: 860,
                            whiteSpace: "pre-line"
                        },
                        children: contribution.expandedText
                    }, void 0, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    contribution.expandedImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 16
                        },
                        children: contribution.expandedImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "100%",
                                            aspectRatio: "4/3",
                                            background: "#d8d8d8",
                                            overflow: "scroll",
                                            marginBottom: 8
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Media, {
                                            src: img.src
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[projectId]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: COURIER,
                                            fontSize: 14,
                                            color: "#555",
                                            lineHeight: 1.5,
                                            whiteSpace: "pre-line"
                                        },
                                        children: img.caption
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            contribution.subCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#fff",
                    borderRadius: 16,
                    padding: "32px 36px",
                    animation: "fadeIn 0.2s ease forwards"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: PT_SANS,
                            fontWeight: 700,
                            fontSize: "clamp(16px, 1.8vw, 16px)",
                            color: "#111",
                            marginBottom: 12
                        },
                        children: contribution.subCard.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: PT_SANS,
                            fontSize: 16,
                            color: "#444",
                            lineHeight: 1.5,
                            marginBottom: 28,
                            maxWidth: 860,
                            whiteSpace: "pre-line"
                        },
                        children: contribution.subCard.expandedText
                    }, void 0, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this),
                    contribution.subCard.expandedImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 16
                        },
                        children: contribution.subCard.expandedImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "100%",
                                            aspectRatio: "4/3",
                                            background: "#d8d8d8",
                                            overflow: "hidden",
                                            marginBottom: 8
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Media, {
                                            src: img.src
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[projectId]/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: COURIER,
                                            fontSize: 14,
                                            color: "#555",
                                            lineHeight: 1.5,
                                            whiteSpace: "pre-line"
                                        },
                                        children: img.caption
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 270,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 268,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
function CaseStudyPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const projectId = params?.projectId;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].find((p)=>p.id === projectId);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [contextOpen, setContextOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const contextBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reset tab when project changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setActiveTab(0);
        setContextOpen(false);
    }, [
        projectId
    ]);
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: PT_SANS
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Project not found."
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 330,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 321,
            columnNumber: 7
        }, this);
    }
    const activeContribution = project.contributions[activeTab];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "#ebebeb"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                style: {
                    position: "fixed",
                    top: 24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: COURIER,
                    fontSize: 14,
                    color: "#888",
                    textDecoration: "none",
                    transition: "text-decoration 0.15s",
                    zIndex: 100,
                    pointerEvents: "auto"
                },
                onMouseEnter: (e)=>e.currentTarget.style.textDecoration = "underline",
                onMouseLeave: (e)=>e.currentTarget.style.textDecoration = "none",
                children: "← back home"
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1400,
                    margin: "0 auto",
                    padding: "0 clamp(20px, 6vw, 120px) 100px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "32px 0 28px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 24,
                            marginBottom: 40,
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: PT_SANS,
                                            fontWeight: 700,
                                            fontStyle: "italic",
                                            fontSize: "clamp(22px, 4vw, 28px)",
                                            color: "#111",
                                            marginBottom: 16
                                        },
                                        children: project.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 8,
                                            flexWrap: "wrap"
                                        },
                                        children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tag-pill",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: contextBtnRef,
                                className: `rect-btn${contextOpen ? " rect-btn--active-blue" : ""}`,
                                onClick: ()=>setContextOpen((o)=>!o),
                                style: {
                                    flexShrink: 0,
                                    marginTop: 4
                                },
                                children: "Project Context"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "left",
                            marginBottom: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: PT_SANS,
                                    fontWeight: 700,
                                    fontSize: "clamp(16px, 1.6vw, 20px)",
                                    color: "#111",
                                    marginBottom: 16
                                },
                                children: "My Contributions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: PT_SANS,
                                    fontSize: 16,
                                    color: "#444",
                                    lineHeight: 1.5,
                                    maxWidth: 800,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    whiteSpace: "pre-line"
                                },
                                children: project.summary.map((seg, i)=>typeof seg === "string" ? seg : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: seg.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            color: "#0015FF",
                                            textDecoration: "underline",
                                            textUnderlineOffset: 3
                                        },
                                        children: seg.text
                                    }, i, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 8,
                            flexWrap: "wrap",
                            marginBottom: 24
                        },
                        children: project.contributions.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `rect-btn${activeTab === i ? " rect-btn--active-black" : ""}`,
                                onClick: ()=>setActiveTab(i),
                                children: c.title
                            }, c.title, false, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContributionCard, {
                        contribution: activeContribution
                    }, activeTab, false, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            contextOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectContextModal, {
                sidebar: project.sidebar,
                onClose: ()=>setContextOpen(false),
                anchorRef: contextBtnRef
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 500,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__81963c3b._.js.map