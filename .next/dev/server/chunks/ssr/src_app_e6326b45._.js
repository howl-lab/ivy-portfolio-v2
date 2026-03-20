module.exports = [
"[project]/src/app/components/TextCycler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextCycler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LINES = [
    "building experiences & storytelling with play",
    "Generalist. 8+ yr experience",
    "0-1 tools + big ideas + interfaces"
];
const DISPLAY_MS = 3000;
const FADE_MS = 400;
function TextCycler({ style }) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cycle = setInterval(()=>{
            setVisible(false);
            setTimeout(()=>{
                setIndex((i)=>(i + 1) % LINES.length);
                setVisible(true);
            }, FADE_MS);
        }, DISPLAY_MS + FADE_MS);
        return ()=>clearInterval(cycle);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease`,
            ...style
        },
        children: LINES[index]
    }, void 0, false, {
        fileName: "[project]/src/app/components/TextCycler.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
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
                expandedText: "67% user start call (+13% from beginning) but only 0.3% next day retention rate.",
                expandedImages: [
                    {
                        src: "/images/presence/landing-site1.jpg",
                        caption: "Roulette interaction (randomized avatars)"
                    }
                ],
                subCard: {
                    title: "Phase 2: Customization (user create)",
                    expandedText: "Only 18.97% desktop user complete flow vs. 8% mobile BUT first time seeing organic retention (eg. 200 return users in one day)",
                    expandedImages: [
                        {
                            src: "/images/presence/landing-site2.mp4",
                            caption: "Creation (letting user create)"
                        }
                    ]
                }
            },
            {
                title: "Design System",
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
                expandedText: "Even though the product is a developer tool, I designed the interface to be friendly for both technical and non-technical audiences",
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
                expandedText: "Designed within the extension's limited vertical side panel and Lucid's architectural backend",
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
                expandedText: "Responsible for building and maintaining Webflow for seamless marketing alignment and integrated brand identity into different touchpoints of the product and company",
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
            "companion app",
            "web",
            "gaming",
            "15M+ players"
        ],
        summary: [
            "Designed a web-based application, ",
            {
                text: "License Plate Creator",
                url: "https://www.rockstargames.com/gta-online/license-plates"
            },
            ", that lets player personalize in-game plates out-of-console \n \n Part of the innovation Marketing team on a design team of 3. Defined the majority of application interface and interactions; built off GTA's main design system"
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
                expandedText: "Storytelling is a major aspect of GTA brand identity. \n • Technical constraints: hosting large 3D assets can make canvas rendering laggy which interrupts the flow \n • Design solution: I proposed a two column layout in which the canvas and panel only has to render once at the start and move across the browser per flow",
                expandedImages: [
                    {
                        src: "/images/gta/gta1.mp4",
                        caption: "I crafted the experience to feel seamless, paying particular attention to the transition motion"
                    },
                    {
                        src: "/images/gta/gta2.jpg",
                        caption: "Infused the branding of Los Santos (console in-game Auto Shop) into the web space, drawing on the narrative of moving into an auto shop, creating plates, and leaving the shop."
                    }
                ]
            },
            {
                title: "User-centric states",
                expandedText: "I designed with the value of building trust, which meant giving guest players the ability to demo the application and supporting return players in what to do next",
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
                title: "Copywriting as education",
                expandedText: "I recognized in certain cases that yes, UI and UX can guide, but there are also times in which copywriting is critical. \n • I pushed for inserting as much instructional and contextual tone wherever possible \n • We were working with limited API metadata — I wanted to help players understand (remove tension) the invisible dependencies between web and console",
                expandedImages: [
                    {
                        src: "/images/gta/gta-copy1.mp4",
                        caption: "Limitation: player must go claim their created plate in console before they can create another one on web"
                    }
                ]
            }
        ]
    },
    {
        id: "museum-of-arts-and-design",
        label: "Museum of Arts & Design",
        tags: [
            "digital exhibition",
            "accessibility",
            "award-winning"
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
                expandedText: "A big question for the project was: 'How do we represent what was normally live in digital form?'",
                expandedImages: [
                    {
                        src: "/images/mad/mad1.jpg",
                        caption: "Took stock of all 14 artists who have unique mediums and statements for who they are (sculpture is a very physical material)"
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
                expandedText: "Two comments from the museum led my direction: \n • MAD's curations of the exhibition evoke sense of participation over possession \n • Craft is a journey, so the time and labor are as much part of the process as the finished pieces \n I used my own handwriting as part of the organic element, keeping the tone very visual and sculptural",
                expandedImages: [
                    {
                        src: "/images/mad/mad-story1.jpg",
                        caption: "I wanted to evoke a sense of museum-goer participation and the organic process that craft embodies"
                    },
                    {
                        src: "/images/mad/mad-story2.mp4",
                        caption: "I storyboarded an interaction for the hero welcome that gave context to the exhibition — as visitors hovered over dots, there is a reveal of an artist's work."
                    }
                ]
            },
            {
                title: "Website design",
                expandedText: "I worked directly with the FE engineer and Design Director on implementation of the site with focus on accessibility, assets hosting, links, and components",
                expandedImages: [
                    {
                        src: "/images/mad/mad-web1.mp4",
                        caption: "Used special animation and motion to infuse elements of the story we are telling"
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
            "rebrand",
            "education",
            "Google",
            "mobile"
        ],
        summary: [
            "Rebranding the AI-powered app, ",
            {
                text: "Socratic",
                url: "https://en.wikipedia.org/wiki/Socratic_(Google)"
            },
            ", to help students with their homework by providing educational resources like videos, definitions, Q&A, links and more \n \n Launched 2019: ",
            {
                text: "Google's blog",
                url: "https://blog.google/products-and-platforms/products/education/socratic-by-google/#:~:text=To%20help%20students%20working%20on,them%20work%20through%20their%20questions."
            },
            " and ",
            {
                text: "TIME",
                url: "https://time.com/4650119/socratic-app-homework-iphone/"
            },
            ". App sunsetted 2024."
        ],
        sidebar: {
            problem: "Regular Google search can be daunting for younger learners and Google just acquired an AI educational app called Socratic",
            why: "The app uses a combination of OCR, AI and machine learning to surface relevant learning resources (eg. websites, videos, links) for students",
            proposal: "Rebrand the app as a learning-focused search by Google, ready for back to school in fall",
            outcome: "Launched: August 2019. 4.9 ⭐️ on app store. Daily active users from 120K in Sept. 2019 to 750K in April 2020 (+525%). Sunsetted: October 2024"
        },
        contributions: [
            {
                title: "Established visual styleguide",
                expandedText: "Rebrand the app to feel Googley and fun; make the new app feel like part of Google's product ecosystem \n Ensured the system is scaleable; paired graphic and text concepts across learning content",
                expandedImages: [
                    {
                        src: "/images/socratic/socratic1.jpg",
                        caption: "I came up with a graphic style based on fidelity and delight for Gen Z and Alpha audiences"
                    },
                    {
                        src: "/images/socratic/socratic2.mp4",
                        caption: "I created a brand new custom font within 2 weeks for content creation so the team had full control of characters and symbols"
                    },
                    {
                        src: "/images/socratic/socratic3.jpg",
                        caption: "Created a complimentary theme for Socratic from Google Material's color guideline"
                    }
                ]
            },
            {
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
            },
            {
                title: "First-party content creation",
                expandedText: "Led another visual designer and worked directly with pedagogy experts on first party content creation. In the span of 4 months, we created over 900 explainer cards across subjects like math, science, physics, biology, and history. 30-40% of usage surfaced an explainer card.",
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
                        src: "/images/socratic/socratic-content3.mp4",
                        caption: "Snippet of final product"
                    }
                ]
            },
            {
                title: "Custom math keyboard",
                expandedText: "Socratic & Lens are both Google products that used cameras as main source of input. Sometimes, the OCR technology would fail. This caused students to get stuck in their end-to-end journey or experience bad query results. \n \n Led design work and cross-team alignments on a custom math keyboard so that students can manually address OCR errors.",
                expandedImages: [
                    {
                        src: "/images/socratic/socratic-keyboard1.mp4",
                        caption: "Adoption into Google Search (eg. search math solver) in 2025"
                    },
                    {
                        src: "/images/socratic/socratic-keyboard2.mp4",
                        caption: "Closely collaborated with engineering to implement and troubleshoot functionality (eg. LaTex font) and UXR team to guide design interactions (eg. cursor UX)"
                    },
                    {
                        src: "/images/socratic/socratic-keyboard3.jpg",
                        caption: "Snippet of final feature released on Lens in 2020"
                    }
                ]
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
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TextCycler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/TextCycler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/projects.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const PT_SANS = '"PT Sans", sans-serif';
const COURIER = '"Courier New", Courier, monospace';
const EXPERIENCE = [
    {
        company: "Presence",
        role: "Principal Designer"
    },
    {
        company: "Upwork",
        role: "Sr. Product Designer, Innovation Team"
    },
    {
        company: "Headroom",
        role: "Lead UI/UX Designer"
    },
    {
        company: "GTA",
        role: "Sr. Interaction Designer, Marketing Team"
    },
    {
        company: "Godfrey Dadich Partners",
        role: "Product Designer, Digital Team"
    },
    {
        company: "Google",
        role: "Visual Designer, Education"
    }
];
// ─── Pine tree SVG ──────────────────────────────────────────────────────────
function PineTree({ size = 28 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "#0015FF",
        style: {
            display: "inline-block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "12,2 20,18 4,18"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "18",
                width: "4",
                height: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
const TREES = [
    {
        left: "4%",
        top: "18%"
    },
    {
        left: "13%",
        top: "8%"
    },
    {
        left: "24%",
        top: "22%"
    },
    {
        left: "68%",
        top: "12%"
    },
    {
        left: "79%",
        top: "26%"
    },
    {
        left: "88%",
        top: "10%"
    },
    {
        left: "94%",
        top: "30%"
    }
];
// ─── Media helper ───────────────────────────────────────────────────────────
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
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this) : // eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: "",
        style: base
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
// ─── About modal ────────────────────────────────────────────────────────────
function AboutModal({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClose,
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 9980,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: (e)=>e.stopPropagation(),
            style: {
                background: "#fff",
                width: "min(480px, 90vw)",
                maxHeight: "70vh",
                overflowY: "auto",
                padding: "32px 36px",
                fontFamily: PT_SANS,
                animation: "fadeIn 0.2s ease forwards"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 16,
                        color: "#111",
                        lineHeight: 1.7,
                        marginBottom: 16
                    },
                    children: "Fascinated by how things work + why they exist"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 16,
                        color: "#111",
                        lineHeight: 1.7,
                        marginBottom: 16
                    },
                    children: "I have worked in a variety of spaces from education to gaming and startup to big companies. Storytelling and turning complexity into play is my jam."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 16,
                        color: "#111",
                        lineHeight: 1.7,
                        marginBottom: 24
                    },
                    children: "I love inanimate objects, nature, and my pup."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        marginBottom: 32
                    },
                    children: EXPERIENCE.map(({ company, role })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 16,
                                        color: "#111",
                                        fontWeight: 400
                                    },
                                    children: company
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 16,
                                        color: "#888"
                                    },
                                    children: role
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, company, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 15,
                        color: "#0015FF",
                        marginBottom: 32
                    },
                    children: "ivychang02@gmail.com"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: COURIER,
                        fontSize: 16,
                        color: "#888"
                    },
                    children: "Copyrighted ©2026"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
// ─── Project card ────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const tabs = project.contributions.slice(0, 3);
    const activeContribution = tabs[activeTab];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/${project.id}`,
        className: "project-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-text",
                        style: {
                            flex: "0 0 52%",
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: PT_SANS,
                                    fontWeight: 700,
                                    fontStyle: "italic",
                                    fontSize: "clamp(20px, 2.2vw, 26px)",
                                    color: "#111",
                                    marginBottom: 10
                                },
                                children: project.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: PT_SANS,
                                    fontSize: 16,
                                    color: "#555",
                                    lineHeight: 1.6,
                                    marginBottom: 24
                                },
                                children: project.cardDescription
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 8
                                },
                                children: tabs.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `rect-btn${activeTab === i ? " rect-btn--active-blue" : ""}`,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setActiveTab(i);
                                        },
                                        style: {
                                            textAlign: "left",
                                            width: "fit-content"
                                        },
                                        children: c.title
                                    }, c.title, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-image",
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "100%",
                                aspectRatio: "4/3",
                                borderRadius: 12,
                                overflow: "hidden",
                                background: "#d8d8d8"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Media, {
                                src: activeContribution?.hoverImage ?? ""
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            activeContribution?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "impact-text",
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "36%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "left",
                    fontFamily: PT_SANS,
                    fontStyle: "italic",
                    fontSize: 14,
                    color: "#0015FF",
                    maxWidth: 160,
                    lineHeight: 1.4,
                    pointerEvents: "none",
                    zIndex: 2
                },
                children: activeContribution.description
            }, activeTab, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
function HomePage() {
    const [aboutOpen, setAboutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: "100vh",
                    background: "#ebebeb"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            position: "relative",
                            height: 260,
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center"
                        },
                        children: [
                            TREES.map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: "absolute",
                                        ...pos,
                                        lineHeight: 0,
                                        zIndex: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PineTree, {
                                        size: 26
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: PT_SANS,
                                            fontSize: "clamp(14px, 1.2vw, 16px)",
                                            color: "#111",
                                            marginBottom: 8
                                        },
                                        children: [
                                            "hi, i'm",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                onClick: ()=>setAboutOpen((o)=>!o),
                                                style: {
                                                    fontStyle: "italic",
                                                    textDecoration: "underline",
                                                    textUnderlineOffset: 3,
                                                    cursor: "none"
                                                },
                                                children: "ivy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: PT_SANS,
                                            fontSize: "clamp(13px, 1.1vw, 15px)",
                                            color: "#111",
                                            minHeight: "1.6em"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TextCycler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            maxWidth: 1400,
                            margin: "0 auto",
                            padding: "0 clamp(20px, 6vw, 120px) 80px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 20
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: project
                            }, project.id, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            aboutOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutModal, {
                onClose: ()=>setAboutOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 344,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_app_e6326b45._.js.map