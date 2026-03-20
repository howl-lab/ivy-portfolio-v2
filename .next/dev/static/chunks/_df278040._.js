(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/TextCycler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextCycler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function TextCycler(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9dd568d82454fc1fc31d652194d91a0e299ce24f5354beb50c82629ca191aba") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9dd568d82454fc1fc31d652194d91a0e299ce24f5354beb50c82629ca191aba";
    }
    const { style } = t0;
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "TextCycler[useEffect()]": ()=>{
                const cycle = setInterval({
                    "TextCycler[useEffect() > setInterval()]": ()=>{
                        setVisible(false);
                        setTimeout({
                            "TextCycler[useEffect() > setInterval() > setTimeout()]": ()=>{
                                setIndex(_TextCyclerUseEffectSetIntervalSetTimeoutSetIndex);
                                setVisible(true);
                            }
                        }["TextCycler[useEffect() > setInterval() > setTimeout()]"], FADE_MS);
                    }
                }["TextCycler[useEffect() > setInterval()]"], DISPLAY_MS + FADE_MS);
                return ()=>clearInterval(cycle);
            }
        })["TextCycler[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = visible ? 1 : 0;
    let t4;
    if ($[3] !== style || $[4] !== t3) {
        t4 = {
            display: "inline-block",
            opacity: t3,
            transition: `opacity ${FADE_MS}ms ease`,
            ...style
        };
        $[3] = style;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = LINES[index];
    let t6;
    if ($[6] !== t4 || $[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/components/TextCycler.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
}
_s(TextCycler, "vmT8oEFNR/HPx0nQUu82NE5xu6U=");
_c = TextCycler;
function _TextCyclerUseEffectSetIntervalSetTimeoutSetIndex(i) {
    return (i + 1) % LINES.length;
}
var _c;
__turbopack_context__.k.register(_c, "TextCycler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TextCycler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/TextCycler.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
function PineTree(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055";
    }
    const { size: t1 } = t0;
    const size = t1 === undefined ? 28 : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            display: "inline-block"
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "12,2 20,18 4,18"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "10",
            y: "18",
            width: "4",
            height: "4"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== size) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "#0015FF",
            style: t2,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[4] = size;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
}
_c = PineTree;
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
function Media(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055";
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
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 126,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: "",
            style: base
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 126,
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
_c1 = Media;
// ─── About modal ────────────────────────────────────────────────────────────
function AboutModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055";
    }
    const { onClose } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            position: "fixed",
            inset: 0,
            zIndex: 9980,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: _AboutModalDivOnClick,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 16,
                        color: "#111",
                        lineHeight: 1.7,
                        marginBottom: 16
                    },
                    children: "Fascinated by how things work + why they exist"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 172,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 16,
                        color: "#111",
                        lineHeight: 1.7,
                        marginBottom: 16
                    },
                    children: "I have worked in a variety of spaces from education to gaming and startup to big companies. Storytelling and turning complexity into play is my jam."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 177,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 16,
                        color: "#111",
                        lineHeight: 1.7,
                        marginBottom: 24
                    },
                    children: "I love inanimate objects, nature, and my pup."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 182,
                    columnNumber: 162
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        marginBottom: 32
                    },
                    children: EXPERIENCE.map(_AboutModalEXPERIENCEMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 187,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 15,
                        color: "#0015FF",
                        marginBottom: 32
                    },
                    children: "ivychang02@gmail.com"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 192,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: COURIER,
                        fontSize: 16,
                        color: "#888"
                    },
                    children: "Copyrighted ©2026"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 196,
                    columnNumber: 34
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== onClose) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClose,
            style: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 207,
            columnNumber: 10
        }, this);
        $[3] = onClose;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c2 = AboutModal;
// ─── Project card ────────────────────────────────────────────────────────────
function _AboutModalEXPERIENCEMap(t0) {
    const { company, role } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 16,
                    color: "#111",
                    fontWeight: 400
                },
                children: company
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 226,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 16,
                    color: "#888"
                },
                children: role
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 230,
                columnNumber: 24
            }, this)
        ]
    }, company, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 222,
        columnNumber: 10
    }, this);
}
function _AboutModalDivOnClick(e) {
    return e.stopPropagation();
}
function ProjectCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055";
    }
    const { project } = t0;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let T0;
    let activeContribution;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== activeTab || $[2] !== project.cardDescription || $[3] !== project.contributions || $[4] !== project.id || $[5] !== project.label) {
        const tabs = project.contributions.slice(0, 3);
        activeContribution = tabs[activeTab];
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        t8 = `/${project.id}`;
        t9 = "project-card";
        t7 = "card-inner";
        t3 = "card-text";
        let t10;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = {
                flex: "0 0 52%",
                minWidth: 0
            };
            t10 = {
                fontFamily: PT_SANS,
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                color: "#111",
                marginBottom: 10
            };
            $[17] = t10;
            $[18] = t4;
        } else {
            t10 = $[17];
            t4 = $[18];
        }
        if ($[19] !== project.label) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: t10,
                children: project.label
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 290,
                columnNumber: 12
            }, this);
            $[19] = project.label;
            $[20] = t5;
        } else {
            t5 = $[20];
        }
        let t11;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = {
                fontFamily: PT_SANS,
                fontSize: 16,
                color: "#555",
                lineHeight: 1.6,
                marginBottom: 24
            };
            $[21] = t11;
        } else {
            t11 = $[21];
        }
        if ($[22] !== project.cardDescription) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: t11,
                children: project.cardDescription
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 310,
                columnNumber: 12
            }, this);
            $[22] = project.cardDescription;
            $[23] = t6;
        } else {
            t6 = $[23];
        }
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = {
                display: "flex",
                flexDirection: "column",
                gap: 8
            };
            $[24] = t1;
        } else {
            t1 = $[24];
        }
        let t12;
        if ($[25] !== activeTab) {
            t12 = ({
                "ProjectCard[tabs.map()]": (c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `rect-btn${activeTab === i ? " rect-btn--active-blue" : ""}`,
                        onClick: {
                            "ProjectCard[tabs.map() > <button>.onClick]": (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                setActiveTab(i);
                            }
                        }["ProjectCard[tabs.map() > <button>.onClick]"],
                        style: {
                            textAlign: "left",
                            width: "fit-content"
                        },
                        children: c.title
                    }, c.title, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 329,
                        columnNumber: 46
                    }, this)
            })["ProjectCard[tabs.map()]"];
            $[25] = activeTab;
            $[26] = t12;
        } else {
            t12 = $[26];
        }
        t2 = tabs.map(t12);
        $[1] = activeTab;
        $[2] = project.cardDescription;
        $[3] = project.contributions;
        $[4] = project.id;
        $[5] = project.label;
        $[6] = T0;
        $[7] = activeContribution;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        T0 = $[6];
        activeContribution = $[7];
        t1 = $[8];
        t2 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t10;
    if ($[27] !== t1 || $[28] !== t2) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[27] = t1;
        $[28] = t2;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t10 || $[31] !== t3 || $[32] !== t4 || $[33] !== t5 || $[34] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            style: t4,
            children: [
                t5,
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t3;
        $[32] = t4;
        $[33] = t5;
        $[34] = t6;
        $[35] = t11;
    } else {
        t11 = $[35];
    }
    let t12;
    let t13;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            flex: 1,
            minWidth: 0
        };
        t13 = {
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: 12,
            overflow: "hidden",
            background: "#d8d8d8"
        };
        $[36] = t12;
        $[37] = t13;
    } else {
        t12 = $[36];
        t13 = $[37];
    }
    const t14 = activeContribution?.hoverImage ?? "";
    let t15;
    if ($[38] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-image",
            style: t12,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t13,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Media, {
                    src: t14
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 419,
                    columnNumber: 68
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 419,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[38] = t14;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== t11 || $[41] !== t15 || $[42] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t11,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[40] = t11;
        $[41] = t15;
        $[42] = t7;
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== activeContribution || $[45] !== activeTab) {
        t17 = activeContribution?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            lineNumber: 437,
            columnNumber: 46
        }, this);
        $[44] = activeContribution;
        $[45] = activeTab;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    let t18;
    if ($[47] !== T0 || $[48] !== t16 || $[49] !== t17 || $[50] !== t8 || $[51] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            href: t8,
            className: t9,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[47] = T0;
        $[48] = t16;
        $[49] = t17;
        $[50] = t8;
        $[51] = t9;
        $[52] = t18;
    } else {
        t18 = $[52];
    }
    return t18;
}
_s(ProjectCard, "9RTnV4k8xQ8Z7mmUeyiKoXdA+A8=");
_c3 = ProjectCard;
function HomePage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86250cd6c671174d3a1313d0d4526bcadfe6fbdb42b1a060b830f75730b68055";
    }
    const [aboutOpen, setAboutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            minHeight: "100vh",
            background: "#ebebeb"
        };
        t1 = {
            position: "relative",
            height: 260,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        };
        t2 = TREES.map(_HomePageTREESMap);
        t3 = {
            position: "relative",
            zIndex: 1
        };
        t4 = {
            fontFamily: PT_SANS,
            fontSize: "clamp(14px, 1.2vw, 16px)",
            color: "#111",
            marginBottom: 8
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    style: t1,
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: t3,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: t4,
                                    children: [
                                        "hi, i'm",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            onClick: {
                                                "HomePage[<em>.onClick]": ()=>setAboutOpen(_HomePageEmOnClickSetAboutOpen)
                                            }["HomePage[<em>.onClick]"],
                                            style: {
                                                fontStyle: "italic",
                                                textDecoration: "underline",
                                                textUnderlineOffset: 3,
                                                cursor: "none"
                                            },
                                            children: "ivy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 91
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 65
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: PT_SANS,
                                        fontSize: "clamp(13px, 1.1vw, 15px)",
                                        color: "#111",
                                        minHeight: "1.6em"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TextCycler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 540,
                                        columnNumber: 14
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 528,
                            columnNumber: 49
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 528,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    style: {
                        maxWidth: 1400,
                        margin: "0 auto",
                        padding: "0 clamp(20px, 6vw, 120px) 80px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 20
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].map(_HomePagePROJECTSMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 540,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 528,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== aboutOpen) {
        t6 = aboutOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutModal, {
            onClose: {
                "HomePage[<AboutModal>.onClose]": ()=>setAboutOpen(false)
            }["HomePage[<AboutModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 554,
            columnNumber: 23
        }, this);
        $[7] = aboutOpen;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true);
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_s1(HomePage, "MwmwJKZ7e1jm7ddUokZRbDvjBOw=");
_c4 = HomePage;
function _HomePagePROJECTSMap(project) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
        project: project
    }, project.id, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 573,
        columnNumber: 10
    }, this);
}
function _HomePageEmOnClickSetAboutOpen(o) {
    return !o;
}
function _HomePageTREESMap(pos, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            position: "absolute",
            ...pos,
            lineHeight: 0,
            zIndex: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PineTree, {
            size: 26
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 584,
            columnNumber: 6
        }, this)
    }, i, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 579,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "PineTree");
__turbopack_context__.k.register(_c1, "Media");
__turbopack_context__.k.register(_c2, "AboutModal");
__turbopack_context__.k.register(_c3, "ProjectCard");
__turbopack_context__.k.register(_c4, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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

//# sourceMappingURL=_df278040._.js.map