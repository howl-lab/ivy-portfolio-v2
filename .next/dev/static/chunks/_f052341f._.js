(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
                title: "Conversation UI",
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
                title: "Architectured artist information",
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
                title: "Elements of Storytelling",
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
            outcome: "Launched: August 2019. 4.9 ⭐️ on app store. Daily active users from 120K in Sept. 2019 to 750K in April 2020 (+525%). Sunsetted: October 2024"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/[projectId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PT_SANS = '"TT Commons Pro", sans-serif';
const COURIER = '"TT Commons Pro Mono", monospace';
// ─── Media helper ────────────────────────────────────────────────────────────
function Media(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "db9f6fd8d972e8c05d13864a18bef83cbf305b9da66e68b298cfa052d4d895e7") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db9f6fd8d972e8c05d13864a18bef83cbf305b9da66e68b298cfa052d4d895e7";
    }
    const { src, style } = t0;
    if (!src) {
        return null;
    }
    let t1;
    if ($[1] !== style) {
        t1 = {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            ...style
        };
        $[1] = style;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const base = t1;
    let t2;
    if ($[3] !== base || $[4] !== src) {
        t2 = src.endsWith(".mp4") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            src: src,
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            style: base
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 44,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: "",
            style: base
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 44,
            columnNumber: 128
        }, this);
        $[3] = base;
        $[4] = src;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = Media;
// ─── Project Context modal ───────────────────────────────────────────────────
function ProjectContextModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "db9f6fd8d972e8c05d13864a18bef83cbf305b9da66e68b298cfa052d4d895e7") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db9f6fd8d972e8c05d13864a18bef83cbf305b9da66e68b298cfa052d4d895e7";
    }
    const { sidebar, onClose, anchorRef } = t0;
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== anchorRef) {
        t1 = ({
            "ProjectContextModal[useEffect()]": ()=>{
                const update = {
                    "ProjectContextModal[useEffect() > update]": ()=>{
                        if (window.innerWidth < 640) {
                            setIsMobile(true);
                            setPos({
                                x: 0,
                                y: 0
                            });
                        } else {
                            setIsMobile(false);
                            if (anchorRef.current) {
                                const rect = anchorRef.current.getBoundingClientRect();
                                setPos({
                                    x: rect.right - 360,
                                    y: rect.bottom + 8
                                });
                            } else {
                                setPos({
                                    x: window.innerWidth - 400,
                                    y: 80
                                });
                            }
                        }
                    }
                }["ProjectContextModal[useEffect() > update]"];
                update();
                window.addEventListener("resize", update);
                return ()=>window.removeEventListener("resize", update);
            }
        })["ProjectContextModal[useEffect()]"];
        t2 = [
            anchorRef
        ];
        $[1] = anchorRef;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!pos) {
        return null;
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            problem: "Problem",
            why: "Why",
            proposal: "Proposal",
            outcome: "Outcome"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const LABELS = t3;
    let t4;
    if ($[5] !== isMobile || $[6] !== pos) {
        t4 = isMobile ? {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9990,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 0,
            width: "90vw",
            maxWidth: 360
        } : {
            position: "fixed",
            top: pos.y,
            left: pos.x,
            zIndex: 9990,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 0,
            width: 360,
            maxWidth: "90vw"
        };
        $[5] = isMobile;
        $[6] = pos;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            padding: "14px 20px",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontFamily: PT_SANS,
                fontWeight: 700,
                fontSize: 14,
                color: "#111",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
            },
            children: "Project Context"
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 170,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            background: "none",
            border: "none",
            cursor: "none",
            color: "#888",
            fontSize: 16,
            lineHeight: 1,
            padding: "0 2px"
        };
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t5,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: t7,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/app/[projectId]/page.tsx",
                    lineNumber: 201,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[11] = onClose;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            padding: "20px 20px 24px"
        };
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== sidebar) {
        t10 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_ITEMS"].map({
            "ProjectContextModal[SIDEBAR_ITEMS.map()]": (key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            lineNumber: 221,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: PT_SANS,
                                fontSize: 16,
                                color: "#111",
                                lineHeight: 1.6
                            },
                            children: sidebar[key]
                        }, void 0, false, {
                            fileName: "[project]/src/app/[projectId]/page.tsx",
                            lineNumber: 227,
                            columnNumber: 29
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/src/app/[projectId]/page.tsx",
                    lineNumber: 219,
                    columnNumber: 58
                }, this)
        }["ProjectContextModal[SIDEBAR_ITEMS.map()]"]);
        $[14] = sidebar;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11 || $[19] !== t4 || $[20] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-card",
            style: t4,
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t4;
        $[20] = t8;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    return t12;
}
_s(ProjectContextModal, "for/g8nJXj9e/6LyWheXHS4OQbE=");
_c1 = ProjectContextModal;
// ─── Contribution content card ────────────────────────────────────────────────
function ContributionCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "db9f6fd8d972e8c05d13864a18bef83cbf305b9da66e68b298cfa052d4d895e7") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db9f6fd8d972e8c05d13864a18bef83cbf305b9da66e68b298cfa052d4d895e7";
    }
    const { contribution } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            display: "flex",
            flexDirection: "column",
            gap: 16
        };
        t2 = {
            background: "#fff",
            borderRadius: 16,
            padding: "32px 36px",
            animation: "fadeIn 0.2s ease forwards"
        };
        t3 = {
            fontFamily: PT_SANS,
            fontWeight: 700,
            fontSize: "clamp(16px, 1.8vw, 16px)",
            color: "#111",
            marginBottom: 12
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    const t4 = contribution.cardTitle ?? contribution.title;
    let t5;
    if ($[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            fontFamily: PT_SANS,
            fontSize: 16,
            color: "#444",
            lineHeight: 1.5,
            marginBottom: 28,
            maxWidth: 860,
            whiteSpace: "pre-line"
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== contribution.expandedText) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t6,
            children: contribution.expandedText
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 328,
            columnNumber: 10
        }, this);
        $[7] = contribution.expandedText;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== contribution.expandedImages) {
        t8 = contribution.expandedImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 16
            },
            children: contribution.expandedImages.map(_ContributionCardContributionExpandedImagesMap)
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 336,
            columnNumber: 41
        }, this);
        $[9] = contribution.expandedImages;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t5 || $[12] !== t7 || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t2,
            children: [
                t5,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 348,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== contribution.subCard) {
        t10 = contribution.subCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "#fff",
                borderRadius: 16,
                padding: "32px 36px",
                animation: "fadeIn 0.2s ease forwards"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                    lineNumber: 363,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    lineNumber: 369,
                    columnNumber: 43
                }, this),
                contribution.subCard.expandedImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 16
                    },
                    children: contribution.subCard.expandedImages.map(_ContributionCardContributionSubCardExpandedImagesMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/[projectId]/page.tsx",
                    lineNumber: 377,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 358,
            columnNumber: 35
        }, this);
        $[15] = contribution.subCard;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    return t11;
}
_c2 = ContributionCard;
// ─── Case study page ──────────────────────────────────────────────────────────
function _ContributionCardContributionSubCardExpandedImagesMap(img_0, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    aspectRatio: "4/3",
                    background: "#d8d8d8",
                    overflow: "hidden",
                    marginBottom: 8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Media, {
                    src: img_0.src
                }, void 0, false, {
                    fileName: "[project]/src/app/[projectId]/page.tsx",
                    lineNumber: 409,
                    columnNumber: 8
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 403,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: COURIER,
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line"
                },
                children: img_0.caption
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 409,
                columnNumber: 39
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 401,
        columnNumber: 10
    }, this);
}
function _ContributionCardContributionExpandedImagesMap(img, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    aspectRatio: "4/3",
                    background: "#d8d8d8",
                    overflow: "scroll",
                    marginBottom: 8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Media, {
                    src: img.src
                }, void 0, false, {
                    fileName: "[project]/src/app/[projectId]/page.tsx",
                    lineNumber: 426,
                    columnNumber: 8
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 420,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                lineNumber: 426,
                columnNumber: 37
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 418,
        columnNumber: 10
    }, this);
}
function CaseStudyPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "db9f6fd8d972e8c05d13864a18bef83cbf305b9da66e68b298cfa052d4d895e7") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db9f6fd8d972e8c05d13864a18bef83cbf305b9da66e68b298cfa052d4d895e7";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const projectId = params?.projectId;
    let t0;
    if ($[1] !== projectId) {
        t0 = ({
            "CaseStudyPage[PROJECTS.find()]": (p)=>p.id === projectId
        })["CaseStudyPage[PROJECTS.find()]"];
        $[1] = projectId;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].find(t0);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [contextOpen, setContextOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const contextBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[3] !== setContextOpen) {
        t1 = ({
            "CaseStudyPage[useEffect()]": ()=>{
                setActiveTab(0);
                setContextOpen(false);
            }
        })["CaseStudyPage[useEffect()]"];
        $[3] = setContextOpen;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== projectId) {
        t2 = [
            projectId
        ];
        $[5] = projectId;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!project) {
        let t3;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: PT_SANS
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Project not found."
                }, void 0, false, {
                    fileName: "[project]/src/app/[projectId]/page.tsx",
                    lineNumber: 489,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 483,
                columnNumber: 12
            }, this);
            $[7] = t3;
        } else {
            t3 = $[7];
        }
        return t3;
    }
    const activeContribution = project.contributions[activeTab];
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            minHeight: "100vh",
            background: "#ebebeb"
        };
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            style: {
                position: "fixed",
                top: 24,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: PT_SANS,
                fontSize: 14,
                color: "#888",
                textDecoration: "none",
                transition: "color 0.15s",
                zIndex: 100,
                pointerEvents: "auto"
            },
            onMouseEnter: _CaseStudyPageLinkOnMouseEnter,
            onMouseLeave: _CaseStudyPageLinkOnMouseLeave,
            children: "← back home"
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 513,
            columnNumber: 10
        }, this);
        t5 = {
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 clamp(20px, 6vw, 120px) 100px"
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "32px 0 28px"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 531,
            columnNumber: 10
        }, this);
        t7 = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 24,
            marginBottom: 40,
            flexWrap: "wrap"
        };
        t8 = {
            fontFamily: PT_SANS,
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(22px, 4vw, 28px)",
            color: "#111",
            marginBottom: 16
        };
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            display: "flex",
            gap: 8,
            flexWrap: "wrap"
        };
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const t10 = `rect-btn${contextOpen ? " rect-btn--active-blue" : ""}`;
    let t11;
    if ($[15] !== setContextOpen) {
        t11 = ({
            "CaseStudyPage[<button>.onClick]": ()=>setContextOpen(_CaseStudyPageButtonOnClickSetContextOpen)
        })["CaseStudyPage[<button>.onClick]"];
        $[15] = setContextOpen;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            flexShrink: 0,
            marginTop: 4
        };
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t10 || $[19] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: contextBtnRef,
            className: t10,
            onClick: t11,
            style: t12,
            children: "Project Context"
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 596,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    let t15;
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            textAlign: "left",
            marginBottom: 32
        };
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            lineNumber: 611,
            columnNumber: 11
        }, this);
        t16 = {
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
        };
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
    } else {
        t14 = $[21];
        t15 = $[22];
        t16 = $[23];
    }
    let t17;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 24
        };
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== activeTab) {
        t18 = ({
            "CaseStudyPage[project.contributions.map()]": (c, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `rect-btn${activeTab === i_0 ? " rect-btn--active-black" : ""}`,
                    onClick: {
                        "CaseStudyPage[project.contributions.map() > <button>.onClick]": ()=>setActiveTab(i_0)
                    }["CaseStudyPage[project.contributions.map() > <button>.onClick]"],
                    children: c.title
                }, c.title, false, {
                    fileName: "[project]/src/app/[projectId]/page.tsx",
                    lineNumber: 653,
                    columnNumber: 65
                }, this)
        })["CaseStudyPage[project.contributions.map()]"];
        $[25] = activeTab;
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    const t19 = project.contributions.map(t18);
    let t20;
    if ($[27] !== t17 || $[28] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t17,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t19;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] !== activeContribution || $[31] !== activeTab) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContributionCard, {
            contribution: activeContribution
        }, activeTab, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 674,
            columnNumber: 11
        }, this);
        $[30] = activeContribution;
        $[31] = activeTab;
        $[32] = t21;
    } else {
        t21 = $[32];
    }
    let t22;
    if ($[33] !== contextOpen || $[34] !== project || $[35] !== setContextOpen) {
        t22 = contextOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectContextModal, {
            sidebar: project.sidebar,
            onClose: {
                "CaseStudyPage[<ProjectContextModal>.onClose]": ()=>setContextOpen(false)
            }["CaseStudyPage[<ProjectContextModal>.onClose]"],
            anchorRef: contextBtnRef
        }, void 0, false, {
            fileName: "[project]/src/app/[projectId]/page.tsx",
            lineNumber: 683,
            columnNumber: 26
        }, this);
        $[33] = contextOpen;
        $[34] = project;
        $[35] = setContextOpen;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: t3,
        children: [
            t4,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t5,
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t7,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: t8,
                                        children: project.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 693,
                                        columnNumber: 71
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: t9,
                                        children: project.tags.map(_CaseStudyPageProjectTagsMap)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[projectId]/page.tsx",
                                        lineNumber: 693,
                                        columnNumber: 106
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 693,
                                columnNumber: 66
                            }, this),
                            t13
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 693,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t14,
                        children: [
                            t15,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: t16,
                                children: project.summary.map(_CaseStudyPageProjectSummaryMap)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[projectId]/page.tsx",
                                lineNumber: 693,
                                columnNumber: 215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[projectId]/page.tsx",
                        lineNumber: 693,
                        columnNumber: 193
                    }, this),
                    t20,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[projectId]/page.tsx",
                lineNumber: 693,
                columnNumber: 30
            }, this),
            t22
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 693,
        columnNumber: 10
    }, this);
}
_s1(CaseStudyPage, "E6uaWppIpKXH2vgFy0jSKpZ5VUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c3 = CaseStudyPage;
function _CaseStudyPageProjectSummaryMap(seg, i) {
    return typeof seg === "string" ? seg : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
        lineNumber: 696,
        columnNumber: 42
    }, this);
}
function _CaseStudyPageButtonOnClickSetContextOpen(o) {
    return !o;
}
function _CaseStudyPageProjectTagsMap(tag) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tag-pill",
        children: tag
    }, tag, false, {
        fileName: "[project]/src/app/[projectId]/page.tsx",
        lineNumber: 706,
        columnNumber: 10
    }, this);
}
function _CaseStudyPageLinkOnMouseLeave(e_0) {
    return e_0.currentTarget.style.color = "#888";
}
function _CaseStudyPageLinkOnMouseEnter(e) {
    return e.currentTarget.style.color = "#111";
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Media");
__turbopack_context__.k.register(_c1, "ProjectContextModal");
__turbopack_context__.k.register(_c2, "ContributionCard");
__turbopack_context__.k.register(_c3, "CaseStudyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=_f052341f._.js.map