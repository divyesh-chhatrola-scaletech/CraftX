module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/src/content/translation.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANDING_CONTENT",
    ()=>LANDING_CONTENT
]);
const LANDING_CONTENT = {
    en: {
        hero: {
            subtitle: "HERO SECTION",
            titlePart1: "More Relevant Jobs.",
            titlePart2: "Less Office Work.",
            titleHighlight: "Automated Excellence",
            description: "Customer requests, quotes and job planning –",
            whatsappText: "all through WhatsApp.",
            subDescription: "CraftX helps roofing companies automatically collect customer requests, create quotes faster and organize jobs more efficiently.",
            features: [
                "Complete job requests",
                "Faster quotes",
                "Fewer phone calls",
                "Up to 30% less office work"
            ],
            ctaHeader: "Book a demo",
            ctaPrimary: "Book a Free 20-Minute Demo",
            ctaSecondary: "Learn More"
        },
        features: {
            voiceRecognition: "Voice Recognition",
            voiceRecognitionDesc: "Advanced AI-powered voice recognition for natural customer interactions",
            availability: "24/7 Availability",
            availabilityDesc: "Round-the-clock support so your customers never have to wait",
            documentation: "Intelligent Documentation",
            documentationDesc: "Automatic ticket creation and knowledge base integration",
            chatbots: "AI Chatbots",
            chatbotsDesc: "Intelligent conversational AI that understands customer needs",
            speed: "Lightning Fast",
            speedDesc: "Response times under one second with optimized AI processing",
            security: "Enterprise Security",
            securityDesc: "Bank-level encryption and compliance with data privacy standards"
        },
        problem: {
            title: "THE PROBLEM",
            headline: "Roofing companies lose time – and jobs.",
            description: "Many roofing businesses face the same daily challenges:",
            points: [
                "Customers call with incomplete information",
                "Photos or addresses are missing",
                "Quotes take too long to prepare",
                "Information gets lost between WhatsApp, phone calls and notes"
            ],
            summary: "Today many customers contact several roofing companies at the same time.",
            conclusion: "The company that responds fastest often wins the job."
        },
        solution: {
            title: "THE SOLUTION",
            description: "CraftX organizes customer requests automatically through WhatsApp.",
            points: [
                "Choose the required service",
                "Upload roof photos or videos",
                "Share their address",
                "Select their preferred start date"
            ],
            summary: "All information is automatically stored. You immediately receive a complete request.",
            mockup: {
                greeting: "Hello Welcome to CraftX! We're here to help with all your roofing needs. What can we do for you today? Please choose the specific service you need help with ",
                selected: "Roof Cleaning & Gutter Cleaning",
                photoRequest: "Please upload photos or videos of the affected area",
                photoUploaded: "IMG_8492.jpg",
                placeholder: "Type a message..."
            }
        },
        usp: {
            badge: "KEY USP",
            title: "Only relevant and complete jobs reach your team.",
            description: "CraftX ensures that customer requests are complete before they become jobs, so your team does not waste time on incomplete or unsuitable requests.",
            points: [
                {
                    title: "Pre-qualified",
                    description: 'Only complete requests become jobs'
                },
                {
                    title: "Complete Information",
                    description: "All details collected upfront"
                },
                {
                    title: "Relevant Jobs Only",
                    description: "Focus on the right opportunities"
                }
            ],
            summary: "Your team focuses only on the right jobs.",
            imagePlaceholder: "Replace with your image",
            imageSize: "Recommended: 512x512px"
        },
        workflow: {
            title: "The entire workflow – through WhatsApp",
            steps: [
                {
                    title: "Customer submits request",
                    description: "The customer starts a request via WhatsApp."
                },
                {
                    title: "Request is automatically collected",
                    description: "The system asks all necessary questions."
                },
                {
                    title: "Quote is prepared",
                    description: "Quotes can be created quickly based on complete information."
                },
                {
                    title: "Job is scheduled",
                    description: "The right team and time slot are planned."
                },
                {
                    title: "Job site documentation",
                    description: "Your team shares photos and updates via WhatsApp."
                },
                {
                    title: "Invoice is generated",
                    description: "After completion the system automatically creates the job report and invoice."
                }
            ]
        },
        benefits: {
            title: "Less office work. More focus on roofing.",
            subtitle: "Many companies save over 30% office time per week because:",
            points: [
                "Fewer phone calls",
                "Information is collected automatically",
                "Faster quotes",
                "Automated invoicing"
            ],
            blocks: [
                {
                    title: "No lost information",
                    description: "All job data is stored in one place:",
                    list: [
                        "Photos",
                        "Address",
                        "Customer details",
                        "Job reports",
                        "Quotes",
                        "Invoices"
                    ]
                },
                {
                    title: "Customers can reach you anytime",
                    description: "Your digital assistant works: 24 hours a day – 7 days a week. Even when:",
                    list: [
                        "You are on the job site",
                        "The office is closed",
                        "It's the weekend"
                    ]
                }
            ],
            summary: "No request gets lost.",
            stats: [
                {
                    value: "30%",
                    label: "Less office work"
                },
                {
                    value: "2x",
                    label: "Faster response time"
                },
                {
                    value: "100%",
                    label: "Complete job requests"
                }
            ]
        },
        pricing: {
            title: "Simple pricing for roofing operations",
            description: "From AI workflows to WhatsApp automation, CraftX helps businesses manage operations from one platform.",
            monthly: "MONTHLY",
            yearly: "YEARLY",
            save: "SAVE UP TO 20%",
            promoBanner: "Now for the launch of CraftX AI: Every standard plan saves up to 20% with an annual contract. For a limited time only.",
            recommendation: "RECOMMENDATION",
            plans: [
                {
                    name: "Starter Plan",
                    price: "€199",
                    priceYearly: "€1,910",
                    originalPrice: "€199",
                    originalPriceYearly: "€2,388",
                    period: "/ month",
                    periodYearly: "/ year",
                    savePlanTitle: "(save up to 20% for yearly plan)",
                    savePlanTitleYearly: "(20% discount included)",
                    cta: "Book a Demo",
                    popular: false,
                    badge: "",
                    features: [
                        "Workflow automation",
                        "WhatsApp integration",
                        "CRM access",
                        "AI-assisted workflows",
                        "Team access",
                        "Instant notifications",
                        "Analytics dashboard",
                        "Monthly support"
                    ],
                    footer: "Includes starter AI credits of 30 days. Meta Business account required."
                },
                {
                    name: "Craft-X Custom",
                    price: "Tailored",
                    period: "Pricing",
                    periodYearly: "Pricing",
                    cta: "Talk to Us",
                    popular: true,
                    badge: "Most Popular",
                    features: [
                        "Customized workflows",
                        "Customized automations",
                        "Custom configurations",
                        "Dedicated support",
                        "3rd party Integration",
                        "Custom reporting",
                        "Automation consulting"
                    ],
                    footer: "Buy AI Credits from us / Own yours. Meta Business account required."
                },
                {
                    name: "Extend Craft-X",
                    price: "Add-ons",
                    period: "Add-ons",
                    periodYearly: "Add-ons",
                    cta: "Talk to Us",
                    popular: false,
                    badge: "",
                    features: [
                        {
                            title: "Managed Services",
                            description: "We manage operations on your behalf, corporate trainings, and personalized tool onboarding for every new user."
                        },
                        {
                            title: "Bring your own cloud",
                            description: "Full freedom and support to deploy CraftX directly on your organization's cloud infrastructure."
                        }
                    ],
                    footer: "Flexible add-ons tailored to your infrastructure and team management needs."
                }
            ]
        },
        whatsappExample: {
            title: "Customers contact you through WhatsApp.",
            description: "Customers simply scan a QR code or send a WhatsApp message to start a request. They are guided step by step to send photos, address and job details so you receive a complete request from the start.",
            qrCodePlacement: "QR Code Placement:",
            placementItems: [
                {
                    icon: "truck",
                    label: "Company vans"
                },
                {
                    icon: "fileText",
                    label: "Flyers"
                },
                {
                    icon: "creditCard",
                    label: "Business cards"
                },
                {
                    icon: "globe",
                    label: "Website"
                },
                {
                    icon: "mail",
                    label: "Email signature"
                }
            ],
            summary: "Every place where your company appears can become a customer contact point."
        },
        cta: {
            title: "See how CraftX works in practice.",
            description: "In a short demo we show you:",
            points: [
                "How customers submit requests via WhatsApp",
                "How quotes are created automatically",
                "How jobs are organized"
            ],
            button: "Book a 20-Minute Demo"
        },
        howItWorks: {
            subtitle: "HOW IT WORKS",
            title: "The entire workflow – through WhatsApp",
            description: "All steps are connected in one simple workflow.",
            steps: [
                {
                    title: "Customer submits request",
                    description: "The customer starts a request via WhatsApp."
                },
                {
                    title: "Request is automatically collected",
                    description: "The system asks all necessary questions."
                },
                {
                    title: "Quote is prepared",
                    description: "Quotes can be created quickly based on complete information."
                },
                {
                    title: "Job is scheduled",
                    description: "The right team and time slot are planned."
                },
                {
                    title: "Job site documentation",
                    description: "Your team shares photos and updates via WhatsApp."
                },
                {
                    title: "Invoice is generated",
                    description: "After completion the system automatically creates the job report and invoice."
                }
            ]
        },
        stats: {
            customerInteractions: "Customer Interactions",
            uptime: "Uptime SLA",
            costReduction: "Cost Reduction"
        },
        testimonials: {
            title: "Customer Success Stories",
            subtitle: "See how leading companies transform their customer support with CraftX",
            stories: [
                {
                    quote: "CraftX has transformed our customer support operations. We've reduced response times by 90% while improving customer satisfaction.",
                    author: "Sarah Johnson",
                    role: "Head of Customer Success, TechCorp"
                },
                {
                    quote: "The AI's ability to understand context and deliver precise solutions is remarkable. Our team can now focus on complex issues while the AI handles routine inquiries.",
                    author: "Michael Chen",
                    role: "CTO, InnovateLab"
                },
                {
                    quote: "Implementation was seamless and the ROI was immediate. We've reduced operational costs by 85% while maintaining 24/7 availability.",
                    author: "Emily Rodriguez",
                    role: "VP Operations, GlobalSoft"
                }
            ]
        },
        brands: {
            techCorp: "TechCorp",
            innovateLab: "InnovateLab",
            globalSoft: "GlobalSoft",
            dataFlow: "DataFlow"
        },
        aiCapabilities: {
            badge: "CraftX AI Capabilities",
            heading: "AI-Powered Excellence",
            headingHighlight: "Smart Automation",
            description: "Advanced AI features that transform how roofing companies operate, making every job smarter and more efficient.",
            capabilities: [
                {
                    title: "Voice-Powered Job Capture",
                    description: "Customers can simply send a WhatsApp voice note describing the problem. CraftX AI automatically converts speech into structured job details, so every inquiry is captured instantly without manual typing.",
                    emoji: "\uD83C\uDF99\uFE0F"
                },
                {
                    title: "Predictive Job Duration",
                    description: "CraftX AI predicts how long a job will take based on job type, complexity, and job data. This helps you plan schedules better and avoid overbooking your team.",
                    emoji: "\u23F1\uFE0F"
                },
                {
                    title: "Intelligent Roofer Assignment",
                    description: "CraftX AI automatically recommends the best roofer for each job based on skills, availability, and workload \u2014 ensuring the right person is assigned every time.",
                    emoji: "\uD83D\uDC77"
                },
                {
                    title: "AI Inquiry Intelligence",
                    description: "CraftX AI understands customer answers and automatically maps them to the correct job details, ensuring inquiries are organised and ready for action.",
                    emoji: "\uD83E\uDDE0"
                },
                {
                    title: "Smart Job Prioritisation",
                    description: "CraftX AI identifies which jobs need attention first by analysing urgency, deadlines, and job value \u2014 helping teams focus on the work that matters most.",
                    emoji: "\u26A1",
                    badge: "Coming Soon"
                }
            ]
        },
        conclusion: {
            subtitle: "CONCLUSION",
            title: "CraftX is like a digital employee for your business.",
            description: "It:",
            points: [
                "Handles customer inquiries",
                "Collects all important information",
                "Filters suitable jobs",
                "Organizes deployments",
                "Documents job sites",
                "Creates invoices"
            ],
            summary: "And all simply via WhatsApp.",
            craftXAssistant: 'CraftX Assistant',
            today: 'Today'
        },
        finalCTA: {
            badge: "1-on-1 Presentation",
            title: "Individual presentation by a specialist",
            titleLine1: "Individual presentation",
            titleLine2: "by a specialist",
            subtitle: "Schedule an appointment now!",
            button: "Book a Demo"
        },
        footer: {
            copyright: "© CraftX 2026",
            backButton: "Back",
            links: [
                {
                    label: "Imprint",
                    href: "/en/imprint"
                },
                {
                    label: "Privacy Policy",
                    href: "/en/privacy"
                },
                {
                    label: "Terms & Conditions",
                    href: "/en/terms"
                }
            ],
            rightsReserved: "All rights reserved.",
            description: "AI-powered WhatsApp automation for roofing companies."
        },
        imprint: {
            title: "Legal Notice / Imprint",
            sections: [
                {
                    title: "Information according to § 5 German Telemedia Act (TMG)",
                    content: [
                        "CraftX is a web-based software solution and a product of:",
                        "<strong>XIDEAS GmbH</strong>",
                        "Lahnstraße 22",
                        "60326 Frankfurt am Main",
                        "Germany",
                        "<strong>Commercial Register:</strong> HRB 121865",
                        "<strong>Register Court:</strong> District Court Frankfurt am Main",
                        "<strong>VAT Identification Number pursuant to §27a German VAT Act:</strong><br>DE344390476</br>"
                    ]
                },
                {
                    title: "Contact",
                    content: [
                        "Email: hello@craft-x.de",
                        "Website: www.craft-x.de"
                    ]
                },
                {
                    title: "Managing Director",
                    content: [
                        "Slawomir Rybarczyk"
                    ]
                },
                {
                    title: "Responsible for content pursuant to § 18 para. 2 MStV",
                    content: [
                        "Slawomir Rybarczyk"
                    ]
                },
                {
                    title: "EU Online Dispute Resolution",
                    content: [
                        'The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" class="text-(--color-accent-orange) hover:underline">https://ec.europa.eu/consumers/odr</a>',
                        "Our email address can be found above in this legal notice.",
                        "We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board."
                    ]
                },
                {
                    title: "Liability for Content",
                    content: [
                        "As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG.",
                        "However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information.",
                        "Obligations to remove or block the use of information under general laws remain unaffected."
                    ]
                },
                {
                    title: "Liability for Links",
                    content: [
                        "Our website contains links to external third-party websites over whose content we have no influence.",
                        "Therefore, we cannot assume any liability for such external content.",
                        "The respective provider or operator of the linked pages is always responsible for their content."
                    ]
                }
            ]
        },
        privacy: {
            title: "Privacy Policy",
            sections: [
                {
                    title: "1. Controller",
                    content: [
                        "The controller responsible for the processing of personal data within the meaning of the General Data Protection Regulation (GDPR) is:",
                        "<strong>XIDEAS GmbH</strong>",
                        "CraftX",
                        "Frankfurt am Main",
                        "Germany",
                        'E-Mail: <a href="mailto:hello@craft-x.de" class="text-(--color-accent-orange) hover:underline">hello@craft-x.de</a>',
                        'Website: <a href="https://craft-x.de" target="_blank" class="text-(--color-accent-orange) hover:underline">https://craft-x.de</a>'
                    ]
                },
                {
                    title: "2. General Information on Data Processing",
                    content: [
                        "The protection of personal data is a top priority for CraftX.",
                        "CraftX has been designed and operated with privacy, security, and reliability as core principles.",
                        "Personal data is processed exclusively in accordance with:",
                        "• The General Data Protection Regulation (GDPR)",
                        "• The German Federal Data Protection Act (BDSG)",
                        "• And all other applicable data protection laws."
                    ]
                },
                {
                    title: "3. Types of Data Processed",
                    content: [
                        "When using CraftX, the following categories of personal data may be processed in particular:",
                        "• Master data (e.g. name, company, phone number, email address)",
                        "• Communication data",
                        "• Usage and access data",
                        "• Project and order-related data",
                        "• Uploaded files, photos, and documentation",
                        "• Location and deployment information",
                        "• Technical log data",
                        "• Authentication data",
                        "• Contents of messages and communications within the platform.",
                        "Data is processed solely for the purpose of providing and improving the offered services."
                    ]
                },
                {
                    title: "4. Purposes of Processing",
                    content: [
                        "Personal data is processed in particular for the following purposes:",
                        "• Provision and operation of the CraftX platform",
                        "• Automation of operational workflows",
                        "• Communication and order management",
                        "• Workforce and scheduling management",
                        "• Documentation and organization of business processes",
                        "• Improvement of the platform and system security",
                        "• Error analysis and system monitoring",
                        "• Fulfillment of legal obligations."
                    ]
                },
                {
                    title: "5. Legal Bases for Processing",
                    content: [
                        "Personal data is processed on the basis of:",
                        "• Art. 6(1)(b) GDPR (performance of a contract)",
                        "• Art. 6(1)(f) GDPR (legitimate interests)",
                        "• Art. 6(1)(c) GDPR (legal obligations)",
                        "• And, where applicable, consent pursuant to Art. 6(1)(a) GDPR.",
                        "<br/>",
                        "CraftX's legitimate interests include in particular:",
                        "• Secure and efficient operation of the platform",
                        "• Optimization of digital business processes",
                        "• System security",
                        "• Prevention of misuse",
                        "• And technical development of services."
                    ]
                },
                {
                    title: "6. Hosting and Infrastructure",
                    content: [
                        "CraftX is hosted exclusively within the European Union.",
                        "The infrastructure is operated in certified data centers that implement, among others, the following security standards:",
                        "• ISO 27001 certification",
                        "• Physical access controls",
                        "• Redundant power and network systems",
                        "• Continuous monitoring",
                        "• Intrusion detection systems.",
                        "All production systems are located within the European Union."
                    ]
                },
                {
                    title: "7. Encryption and Data Security",
                    content: [
                        "All data transmissions between users and the CraftX platform are encrypted using up-to-date SSL/TLS technology.",
                        "In addition, technical and organizational security measures are implemented to protect personal data against:",
                        "• Unauthorized access",
                        "• Loss",
                        "• Manipulation",
                        "• Disclosure",
                        "• Or destruction.",
                        "Stored sensitive data is encrypted and securely stored."
                    ]
                },
                {
                    title: "8. Access Control and Authentication",
                    content: [
                        "CraftX uses extensive security measures to protect user accounts and systems, including:",
                        "• Secure password policies",
                        "• Role-based access control (RBAC)",
                        "• Support for Two-Factor Authentication (2FA)",
                        "• Session management",
                        "• Automatic timeouts.",
                        "Access to internal administrative systems is restricted to authorized personnel only and is logged and monitored."
                    ]
                },
                {
                    title: "9. AI-Supported Processing",
                    content: [
                        "CraftX may use functions based on artificial intelligence (AI) or automated analysis.",
                        "Content may be automatically:",
                        "• Analyzed",
                        "• Structured",
                        "• Prioritized",
                        "• Or processed.",
                        "AI-supported processing is used solely to support operational workflows and improve platform functionality.",
                        "CraftX does not make automated decisions with legal effect within the meaning of Art. 22 GDPR."
                    ]
                },
                {
                    title: "10. Data Processing Agreement pursuant to Art. 28 GDPR",
                    content: [
                        "Where CraftX processes personal data on behalf of business customers, this is governed by a Data Processing Agreement (DPA) pursuant to Art. 28 GDPR.",
                        "The respective customer remains the data controller within the meaning of the GDPR."
                    ]
                },
                {
                    title: "11. Data Sharing and Third-Party Providers",
                    content: [
                        "CraftX uses selected technical service providers and subprocessors that are required to meet high security and data protection standards.",
                        "All service providers are contractually obligated to comply with GDPR requirements.",
                        "An up-to-date list of subprocessors can be provided upon request.",
                        "Personal data is shared only:",
                        "• For the performance of contractual obligations",
                        "• Due to legal requirements",
                        "• Or on the basis of applicable legal grounds.",
                        "CraftX does not sell personal data to third parties."
                    ]
                },
                {
                    title: "12. Data Transfers Outside the EEA",
                    content: [
                        "Where personal data is processed outside the European Economic Area (EEA), this shall only take place in compliance with applicable GDPR requirements.",
                        "Appropriate safeguards are implemented, including:",
                        "• EU Standard Contractual Clauses (SCCs)",
                        "• Or other legally recognized protection mechanisms."
                    ]
                },
                {
                    title: "13. Backups and Data Protection",
                    content: [
                        "Regular automated backups are performed to ensure data availability and integrity.",
                        "Backups:",
                        "• Are encrypted",
                        "• Stored within the European Union",
                        "• And maintained in separate secure storage environments.",
                        "<br>",
                        "CraftX maintains internal procedures for:",
                        "• Data recovery",
                        "• Disaster recovery",
                        "• And business continuity management."
                    ]
                },
                {
                    title: "14. System Monitoring and Security Management",
                    content: [
                        "CraftX systems are continuously monitored in order to detect:",
                        "• Unusual activities",
                        "• Security risks",
                        "• And potential attacks at an early stage.",
                        "Security updates and patches are applied regularly.",
                        "Additionally, periodic internal reviews of security measures and infrastructure are conducted."
                    ]
                },
                {
                    title: "15. Storage Duration and Deletion",
                    content: [
                        "Personal data is stored only as long as:",
                        "• Necessary for the respective purposes",
                        "• Legally required",
                        "• Or necessary for contract fulfillment.",
                        "After termination of the contractual relationship, customers may request export of their data within 30 days.",
                        "After this period, CraftX is entitled to permanently delete personal data unless statutory retention obligations apply."
                    ]
                },
                {
                    title: "16. Rights of Data Subjects",
                    content: [
                        "Within the framework of applicable law, data subjects have the following rights in particular:",
                        "• Right of access pursuant to Art. 15 GDPR",
                        "• Right to rectification pursuant to Art. 16 GDPR",
                        "• Right to erasure pursuant to Art. 17 GDPR",
                        "• Right to restriction of processing pursuant to Art. 18 GDPR",
                        "• Right to data portability pursuant to Art. 20 GDPR",
                        "• Right to object pursuant to Art. 21 GDPR",
                        "• Right to withdraw consent",
                        "• Right to lodge a complaint with a supervisory authority."
                    ]
                },
                {
                    title: "17. Customer Responsibilities",
                    content: [
                        "Customers are responsible for:",
                        "• Keeping login credentials confidential",
                        "• Ensuring that only authorized users access the platform",
                        "• Complying with internal security policies",
                        "• And activating Two-Factor Authentication (2FA) where available."
                    ]
                },
                {
                    title: "18. Incident Management and Data Breaches",
                    content: [
                        "In the event of a personal data breach affecting customer data, CraftX will notify affected customers without undue delay in accordance with GDPR requirements.",
                        "CraftX maintains internal procedures for:",
                        "• Detection",
                        "• Assessment",
                        "• Documentation",
                        "• and handling of security incidents."
                    ]
                },
                {
                    title: "19. Changes to this Privacy Policy",
                    content: [
                        "CraftX reserves the right to amend this Privacy Policy where necessary due to:",
                        "• Technical developments",
                        "• Legal changes",
                        "• Or new platform features.",
                        "The current version is always available on the website."
                    ]
                },
                {
                    title: "20. Contact",
                    content: [
                        "For questions regarding privacy or the processing of personal data, contact may be made at any time:",
                        "<strong>XIDEAS GmbH / CraftX</strong>",
                        'E-Mail: <a href="mailto:hello@craft-x.de" class="text-(--color-accent-orange) hover:underline">hello@craft-x.de</a>',
                        'Website: <a href="https://craft-x.de" target="_blank" class="text-(--color-accent-orange) hover:underline">https://craft-x.de</a>'
                    ]
                }
            ]
        },
        terms: {
            title: "Terms & Conditions",
            sections: [
                {
                    title: "1. Scope of Application",
                    content: [
                        "These General Terms and Conditions (GTC) apply to all agreements between XIDEAS GmbH (hereinafter “CraftX”) and its customers regarding the use of the web-based software platform CraftX and all related services.",
                        "CraftX is intended exclusively for entrepreneurs/business customers within the meaning of Section 14 of the German Civil Code (BGB).",
                        "Conflicting, deviating, or supplementary terms and conditions of the customer shall not apply unless CraftX expressly agrees to them in writing."
                    ]
                },
                {
                    title: "2. Subject Matter of the Agreement",
                    content: [
                        "CraftX provides a cloud-based software solution accessible via the internet.",
                        "The platform is intended in particular for:",
                        "• Digital communication",
                        "• Automated order and workflow processing",
                        "• AI-supported analysis and structuring of requests",
                        "• Workforce scheduling and team coordination",
                        "• Documentation of operational processes",
                        "• Management of customer and project data",
                        "• Automation of digital business processes.",
                        "<br>",
                        "The software may include features based on artificial intelligence (AI), automation technologies, and third-party services.",
                        "<br>",
                        "The specific scope of services is determined exclusively by:",
                        "• The current service description",
                        "• The selected subscription plan",
                        "• And the technical documentation provided by CraftX.",
                        "CraftX does not owe any specific economic or business success."
                    ]
                },
                {
                    title: "3. Registration and User Account",
                    content: [
                        "Use of CraftX requires the creation of a user account.",
                        "The customer agrees to:",
                        "• Provide truthful and complete information",
                        "• Keep access credentials confidential",
                        "• Prevent unauthorized third-party access.",
                        "The customer is responsible for all activities carried out via their account, insofar as they are attributable to the customer.",
                        "CraftX reserves the right to temporarily or permanently suspend accounts in cases of violations of these GTC, misuse, or unlawful use."
                    ]
                },
                {
                    title: "4. Conclusion of Contract",
                    content: [
                        "The presentation of services on the website or within the platform does not constitute a binding offer.",
                        "A contract is concluded through:",
                        "• Confirmation of registration by CraftX",
                        "• Activation of the account",
                        "• Or subscription to a paid plan.",
                        "CraftX reserves the right to reject registrations without stating reasons."
                    ]
                },
                {
                    title: "5. Contract Term and Termination",
                    content: [
                        "Subscriptions are concluded for the selected billing period.",
                        "Unless otherwise agreed, the contract shall automatically renew for the previously selected billing period unless terminated prior to expiration.",
                        "Termination may be made within the platform or in text form.",
                        "The right to extraordinary termination for good cause remains unaffected."
                    ]
                },
                {
                    title: "6. Prices and Payment Terms",
                    content: [
                        "The prices displayed on the website or within the platform at the time of booking shall apply.",
                        "Unless otherwise agreed:",
                        "• All payments are due in advance",
                        "• Billing is carried out monthly or annually depending on the selected plan.",
                        "<br>",
                        "In the event of payment default, CraftX is entitled to:",
                        "• Temporarily suspend access to the platform",
                        "• Restrict services",
                        "• And terminate the contract for cause."
                    ]
                },
                {
                    title: "7. Customer Obligations",
                    content: [
                        "The customer agrees to:",
                        "• Use CraftX only in compliance with applicable law",
                        "• Refrain from uploading or distributing unlawful, offensive, harmful, or copyright-infringing content",
                        "• Not circumvent security mechanisms",
                        "• Not conduct automated attacks, load tests, or manipulation attempts",
                        "• Not misuse or disrupt the platform.",
                        "<br>",
                        "In particular, the following are prohibited:",
                        "• Reverse engineering",
                        "• Scraping",
                        "• Unauthorized API usage",
                        "• Reproduction or redistribution of the software.",
                        "<br>",
                        "The customer remains solely responsible for:",
                        "• All uploaded content",
                        "• The legality of data processing",
                        "• Compliance with data protection obligations toward their own end customers."
                    ]
                },
                {
                    title: "8. AI Functions and Automated Processing",
                    content: [
                        "CraftX may provide AI-supported functions for the analysis, structuring, prioritization, or generation of content.",
                        "AI-generated results are intended solely to support operational processes.",
                        "CraftX assumes no warranty or liability for:",
                        "• Accuracy",
                        "• Completeness",
                        "• Timeliness",
                        "• Or suitability of automatically generated content or recommendations.",
                        "The customer remains responsible for independently reviewing all automatically generated results.",
                        "Automated decisions do not replace professional, legal, or business assessments by the customer."
                    ]
                },
                {
                    title: "9. Third-Party Providers and External Services",
                    content: [
                        "CraftX partially relies on third-party services and interfaces, including:",
                        "• Hosting providers",
                        "• Communication services",
                        "• AI providers",
                        "• Messaging and API platforms (e.g., WhatsApp/Meta).",
                        "<br>",
                        "The availability and functionality of such third-party services are outside CraftX’s control.",
                        "CraftX assumes no liability for:",
                        "• Outages",
                        "• Restrictions",
                        "• API changes",
                        "• Suspensions",
                        "• Price changes",
                        "• Or technical modifications by external providers."
                    ]
                },
                {
                    title: "10. Availability and Maintenance",
                    content: [
                        "CraftX endeavors to provide the highest possible platform availability but does not guarantee uninterrupted or error-free access.",
                        "The following are excluded from availability obligations:",
                        "• Maintenance periods",
                        "• Security updates",
                        "• Technical disruptions outside CraftX’s control",
                        "• Outages of third-party providers or telecommunications services",
                        "• Force majeure events.",
                        "<br>",
                        "Planned maintenance work will be announced in advance where reasonably possible."
                    ]
                },
                {
                    title: "11. Data Export and Data Deletion",
                    content: [
                        "Following termination of the contract, the customer may request the release/export of stored data within 30 days.",
                        "The data will be provided for download in a commonly used digital file format determined by CraftX.",
                        "After 30 days following termination, CraftX is entitled to permanently and irrevocably delete all customer data unless statutory retention obligations require otherwise.",
                        "There is no entitlement to extended data storage."
                    ]
                },
                {
                    title: "12. Data Protection and Data Processing",
                    content: [
                        "Personal data is processed in accordance with the CraftX Privacy Policy.",
                        "Where CraftX processes personal data on behalf of the customer, a Data Processing Agreement (DPA) pursuant to Art. 28 GDPR will be provided.",
                        "The customer remains the data controller within the meaning of the GDPR."
                    ]
                },
                {
                    title: "13. Intellectual Property and Usage Rights",
                    content: [
                        "All rights to the software, systems, technical infrastructure, and all CraftX content remain exclusively with CraftX.",
                        "The customer receives for the duration of the contract a:",
                        "• Simple",
                        "• Non-exclusive",
                        "• Non-transferable",
                        "• Revocable right",
                        "To use the platform in accordance with the contract.",
                        "Any transfer, sublicensing, or commercial exploitation of the software beyond the contractual purpose is prohibited."
                    ]
                },
                {
                    title: "14. Liability",
                    content: [
                        "CraftX shall be fully liable:",
                        "• In cases of intent or gross negligence",
                        "• For damages arising from injury to life, body, or health",
                        "• Under the provisions of the German Product Liability Act.",
                        "<br>",
                        "In cases of slightly negligent breach of essential contractual obligations (cardinal obligations), CraftX shall only be liable for foreseeable damages typical for the contract.",
                        "Except where mandatory statutory liability applies, liability shall be limited to the total fees paid by the customer during the 12 months preceding the damaging event.",
                        "<br>",
                        "Liability for:",
                        "• Indirect damages",
                        "• Loss of profits",
                        "• Data loss",
                        "• Business interruption",
                        "• Unrealized savings",
                        "• Or consequential damages",
                        "Is excluded to the maximum extent permitted by law."
                    ]
                },
                {
                    title: "15. Amendments to the GTC",
                    content: [
                        "CraftX reserves the right to amend these GTC for legitimate reasons, including:",
                        "• Legal changes",
                        "• Technical developments",
                        "• Platform enhancements",
                        "• Changes to third-party services or APIs.",
                        "Customers will be informed of changes in text form in due time.",
                        "If the customer does not object within 30 days after notification, the changes shall be deemed accepted.",
                        "CraftX will separately inform the customer of the right to object and the consequences of silence.",
                        "In the event of an objection, CraftX may terminate the contract at the next possible date."
                    ]
                },
                {
                    title: "16. Reference Use",
                    content: [
                        "CraftX is entitled to use the customer’s company name and logo for reference and marketing purposes unless the customer expressly objects."
                    ]
                },
                {
                    title: "17. Governing Law and Jurisdiction",
                    content: [
                        "These GTC shall be governed by the laws of the Federal Republic of Germany excluding the UN Convention on Contracts for the International Sale of Goods (CISG).",
                        "The exclusive place of jurisdiction for all disputes arising out of or in connection with this contractual relationship shall be Frankfurt am Main, Germany, provided the customer is a merchant, legal entity under public law, or special fund under public law."
                    ]
                }
            ]
        },
        navigation: {
            features: "Features",
            product: "Product",
            pricing: "Pricing",
            login: "Login",
            getStarted: "Get Started",
            benefits: "Benefits",
            problem: "Problem",
            solution: "Solution",
            howItWorks: "How it works"
        }
    },
    de: {
        hero: {
            subtitle: "HERO SECTION",
            titlePart1: "Mehr passende Aufträge.",
            titlePart2: "Weniger Büroarbeit.",
            titleHighlight: "Automatisierte Spitzenleistung",
            description: "Kundenanfragen, Angebote und Aufträge –",
            whatsappText: "automatisch über WhatsApp.",
            subDescription: "CraftX hilft Dachdeckerbetrieben dabei, Kundenanfragen automatisch aufzunehmen, Angebote schneller zu erstellen und Aufträge effizient zu organisieren. Der Kunde stellt seine Anfrage einfach über WhatsApp – alle Informationen werden automatisch gesammelt und im System gespeichert.",
            features: [
                "Vollständige Kundenanfragen",
                "Schnellere Angebote",
                "Weniger Telefonate",
                "Bis zu 30 % weniger Büroarbeit"
            ],
            ctaHeader: "Jetzt Demo buchen",
            ctaPrimary: "Jetzt kostenlose Demo buchen (20 Minuten)",
            ctaSecondary: "Mehr erfahren"
        },
        navigation: {
            features: "Funktionen",
            product: "Produkt",
            pricing: "Preise",
            login: "Anmelden",
            getStarted: "Jetzt starten",
            benefits: "Vorteile",
            problem: "Problem",
            solution: "Lösung",
            howItWorks: "So funktioniert's"
        },
        features: {
            voiceRecognition: "Spracherkennung",
            voiceRecognitionDesc: "Fortschrittliche KI-gestützte Spracherkennung für natürliche Kundeninteraktionen",
            availability: "24/7 Verfügbarkeit",
            availabilityDesc: "Rund um die Uhr Unterstützung, damit Ihre Kunden nie warten müssen",
            documentation: "Intelligente Dokumentation",
            documentationDesc: "Automatische Ticket-Erstellung und Wissensdatenbank-Integration",
            chatbots: "KI-Chatbots",
            chatbotsDesc: "Intelligente Konversations-KI, die die Kundenbedürfnisse versteht",
            speed: "Blitzschnell",
            speedDesc: "Antwortzeiten unter einer Sekunde mit optimierter KI-Verarbeitung",
            security: "Unternehmenssicherheit",
            securityDesc: "Bankenverschlüsselung und Compliance mit Datenschutzstandards"
        },
        problem: {
            title: "DAS PROBLEM",
            headline: "Viele Dachdecker verlieren Zeit – und Aufträge.",
            description: "Viele Dachdeckerbetriebe kämpfen täglich mit den gleichen Problemen:",
            points: [
                "Kunden rufen an – aber es fehlen wichtige Infos",
                "Fotos oder genaue Adressen fehlen oft",
                "Angebote dauern zu lange in der Erstellung",
                "Infos gehen zwischen WhatsApp, Anrufen und Notizen schnell verloren"
            ],
            summary: "Viele Kunden fragen heute mehrere Betriebe gleichzeitig an.",
            conclusion: "Der Betrieb, der am schnellsten antwortet, bekommt oft den Auftrag."
        },
        solution: {
            title: "DIE LÖSUNG",
            description: "CraftX organisiert Kundenanfragen automatisch über WhatsApp.",
            points: [
                "die gewünschte Leistung auswählen ",
                "Fotos oder Videos vom Dach senden ",
                "seine Adresse teilen ",
                "seinen Wunschtermin angeben "
            ],
            summary: "Alle Informationen werden automatisch im System gespeichert. Sie erhalten sofort eine vollständige Anfrage.",
            mockup: {
                greeting: "Willkommen bei CraftX! Wir helfen Ihnen gerne bei allen Fragen rund ums Dach. Was können wir heute für Sie tun? Bitte wählen Sie nun den genauen Leistungen aus, bei dem Sie Unterstützung benötigen",
                selected: "Dach- und Dachrinnenreinigung",
                photoRequest: "Bitte laden Sie Fotos oder Videos des betroffenen Bereichs hoch?",
                photoUploaded: "IMG_8492.jpg",
                placeholder: "Nachricht eingeben..."
            }
        },
        usp: {
            badge: "KILLER USP",
            title: "Nur passende und vollständige Aufträge landen bei eurem Team.",
            description: "CraftX stellt sicher, dass Kundenanfragen vollständig sind, bevor daraus Aufträge werden – damit euer Team keine Zeit mit unvollständigen oder unpassenden Anfragen verliert.",
            points: [
                {
                    title: "Vorqualifiziert",
                    description: "Nur vollständige Anfragen werden zu Aufträgen"
                },
                {
                    title: "Vollständige Informationen",
                    description: "Alle wichtigen Details direkt von Anfang an erfasst"
                },
                {
                    title: "Nur relevante Aufträge",
                    description: "Fokus auf die richtigen Anfragen"
                }
            ],
            summary: "Euer Team konzentriert sich nur auf die passenden Aufträge.",
            imagePlaceholder: "Ersetzen Sie mit Ihrem Bild",
            imageSize: "Empfohlen: 512x512px"
        },
        howItWorks: {
            subtitle: "SO FUNKTIONIERT ES",
            title: "Der komplette Ablauf – direkt über WhatsApp",
            description: "Alle Schritte laufen in einem einfachen, durchgängigen Ablauf zusammen.",
            steps: [
                {
                    title: "Kunde stellt eine Anfrage",
                    description: "Der Kunde startet seine Anfrage ganz einfach über WhatsApp."
                },
                {
                    title: "Die Anfrage wird automatisch erfasst",
                    description: "Das System stellt alle wichtigen Fragen und hakt bei fehlenden Infos automatisch nach."
                },
                {
                    title: "Angebot wird erstellt",
                    description: "Angebote können auf Basis vollständiger Infos schnell und genauer erstellt werden."
                },
                {
                    title: "Auftrag wird geplant",
                    description: "Das passende Team und der richtige Termin werden direkt eingeplant."
                },
                {
                    title: "Baustelle wird dokumentiert",
                    description: "Dein Team teilt Fotos und Updates direkt über WhatsApp."
                },
                {
                    title: "Rechnung wird automatisch erstellt",
                    description: "Nach Abschluss erstellt das System automatisch den Arbeitsbericht und die Rechnung."
                }
            ]
        },
        testimonials: {
            title: "Kundenerfolge",
            subtitle: "Sehen Sie, wie führende Unternehmen ihren Kundensupport mit CraftX transformieren",
            stories: [
                {
                    quote: "CraftX hat unsere Kundensupport-Operationen transformiert. Wir haben die Reaktionszeiten um 90 % reduziert und gleichzeitig die Kundenzufriedenheit verbessert.",
                    author: "Sarah Johnson",
                    role: "Leiterin Kundenerfolg, TechCorp"
                },
                {
                    quote: "Die Fähigkeit der KI, Kontext zu verstehen und präzise Lösungen zu liefern, ist bemerkenswert. Unser Team kann sich nun auf komplexe Probleme konzentrieren, während die KI Routineanfragen bearbeitet.",
                    author: "Michael Chen",
                    role: "CTO, InnovateLab"
                },
                {
                    quote: "Die Implementierung war nahtlos und der ROI war sofort spürbar. Wir haben die Betriebskosten um 85 % gesenkt und behalten gleichzeitig eine 24/7-Verfügbarkeit.",
                    author: "Emily Rodriguez",
                    role: "VP Operations, GlobalSoft"
                }
            ]
        },
        workflow: {
            title: "Der gesamte Workflow – über WhatsApp",
            steps: [
                {
                    title: "Kunde reicht Anfrage",
                    description: "Der Kunde startet eine Anfrage über WhatsApp."
                },
                {
                    title: "Anfrage wird automatisch erfasst",
                    description: "Das System stellt alle notwendigen Fragen."
                },
                {
                    title: "Angebot wird vorbereitet",
                    description: "Angebote können schnell auf Basis vollständiger Informationen erstellt werden."
                },
                {
                    title: "Auftrag wird geplant",
                    description: "Das richtige Team und der passende Zeitfenster werden geplant."
                },
                {
                    title: "Baustellen-Dokumentation",
                    description: "Ihr Team teilt Fotos und Updates über WhatsApp."
                },
                {
                    title: "Rechnung wird erstellt",
                    description: "Nach Abschluss erstellt das System automatisch den Arbeitsbericht und die Rechnung."
                }
            ]
        },
        benefits: {
            title: "Weniger Büroarbeit. Mehr Fokus aufs Handwerk.",
            subtitle: "Betriebe sparen über 30 % Bürozeit pro Woche.",
            points: [
                "Weniger Telefonate",
                "Infos werden automatisch erfasst",
                "Angebote schneller erstellt",
                "Rechnungen automatisch vorbereitet werden"
            ],
            blocks: [
                {
                    title: "Keine verlorenen Informationen",
                    description: "Alle Daten eines Auftrags sind an einem Ort:",
                    list: [
                        "Fotos",
                        "Adresse",
                        "Kundendaten",
                        "Arbeitsberichte",
                        "Angebote",
                        "Rechnungen"
                    ]
                },
                {
                    title: "Kunden können Sie jederzeit erreichen",
                    description: "Ihr digitaler Assistent arbeitet: 24 Stunden am Tag – 7 Tage die Woche. Auch wenn Sie:",
                    list: [
                        "Du bist auf der Baustelle",
                        "Das Büro ist nicht besetzt",
                        "Es ist Wochenende"
                    ]
                }
            ],
            summary: "Keine Anfrage geht verloren.",
            stats: [
                {
                    value: "30%",
                    label: "Weniger Büroarbeit"
                },
                {
                    value: "2x",
                    label: "Schnellere Rückmeldungen"
                },
                {
                    value: "100%",
                    label: "Vollständige Auftragsanfragen"
                }
            ]
        },
        pricing: {
            title: "Einfache Preise für Dachdeckerbetriebe",
            description: "Von KI-Workflows bis WhatsApp-Automatisierung – CraftX hilft Betrieben, den Betrieb über eine Plattform zu steuern.",
            monthly: "MONATLICH",
            yearly: "JÄHRLICH",
            save: "BIS ZU 20% SPAREN",
            promoBanner: "Jetzt zum Start von CraftX AI: Jede Standardlizenz spart bis zu 20 % bei einem Jahresvertrag. Nur für kurze Zeit.",
            recommendation: "EMPFOHLENE OPTION",
            plans: [
                {
                    name: "Starter Plan",
                    price: "€199",
                    priceYearly: "€1.908",
                    originalPrice: "€199",
                    originalPriceYearly: "€2.388",
                    period: "/ Monat",
                    periodYearly: "/ Jahr",
                    savePlanTitle: "(bis zu 20% sparen bei jährlicher Zahlung)",
                    savePlanTitleYearly: "(20% Rabatt enthalten)",
                    cta: "Jetzt Demo buchen",
                    popular: false,
                    badge: "",
                    features: [
                        "Workflow-Automatisierung",
                        "WhatsApp-Integration",
                        "CRM-Zugang",
                        "KI-gestützte Workflows",
                        "Team-Zugang",
                        "Sofortige Benachrichtigungen",
                        "Analyse-Dashboard",
                        "Monatlicher Support"
                    ],
                    footer: "Enthält Starter-KI-Guthaben für 30 Tage. Meta-Business-Konto erforderlich."
                },
                {
                    name: "Craft-X Custom",
                    price: "Tailored",
                    period: "Preise",
                    periodYearly: "Preise",
                    cta: "Sprechen Sie uns an",
                    popular: true,
                    badge: "Am beliebtesten",
                    features: [
                        "Maßgeschneidert Workflows",
                        "Maßgeschneidert Automatisierungen",
                        "Individuelle Konfigurationen",
                        "Dedizierter Support",
                        "Drittanbieter-Integration",
                        "Individuelles Berichtswesen",
                        "Automatisierungsberatung"
                    ],
                    footer: "Kaufen Sie KI-Guthaben von uns / Eigene nutzen. Meta-Business-Konto erforderlich."
                },
                {
                    name: "Craft-X erweitern",
                    price: "Zusatzleistungen",
                    period: "Zusatzleistungen",
                    periodYearly: "Zusatzleistungen",
                    cta: "Sprechen Sie uns an",
                    popular: false,
                    badge: "",
                    features: [
                        {
                            title: "Verwaltete Services",
                            description: "Wir übernehmen die Betriebsführung in Ihrem Namen, Firmenschulungen & persönliches Onboarding für jeden neuen Nutzer."
                        },
                        {
                            title: "Eigene Cloud nutzen",
                            description: "Volle Flexibilität zur Bereitstellung von CraftX direkt auf Ihrer eigenen Cloud-Infrastruktur."
                        }
                    ],
                    footer: "Maßgeschneiderte Erweiterungen für Ihre Team- und Infrastrukturanforderungen."
                }
            ]
        },
        whatsappExample: {
            title: "Kunden melden sich über WhatsApp bei dir.",
            description: "Kunden scannen einfach einen QR-Code oder schreiben euch über WhatsApp, um eine Anfrage zu starten. Sie werden Schritt für Schritt durch den Prozess geführt – mit Fotos, Adresse und allen wichtigen Details, sodass ihr von Anfang an eine vollständige Anfrage bekommt.",
            qrCodePlacement: "QR-Code-Platzierung:",
            placementItems: [
                {
                    icon: "truck",
                    label: "Firmenfahrzeuge"
                },
                {
                    icon: "fileText",
                    label: "Flyer"
                },
                {
                    icon: "creditCard",
                    label: "Visitenkarten"
                },
                {
                    icon: "globe",
                    label: "Website"
                },
                {
                    icon: "mail",
                    label: "E-Mail-Signatur"
                }
            ],
            summary: "Überall, wo eure Firma sichtbar ist, kann ein neuer Kundenkontakt entstehen."
        },
        cta: {
            title: "Sieh dir an, wie CraftX in der Praxis funktioniert.",
            description: "In einer kurzen Demo zeigen wir dir:",
            points: [
                "Wie Kunden Anfragen über WhatsApp stellen",
                "Wie daraus automatisch Angebote entstehen",
                "Wie Aufträge organisiert werden"
            ],
            button: "Jetzt Demo buchen"
        },
        stats: {
            customerInteractions: "Kundeninteraktionen",
            uptime: "Verfügbarkeits-SLA",
            costReduction: "Kostenreduktion"
        },
        brands: {
            techCorp: "TechCorp",
            innovateLab: "InnovateLab",
            globalSoft: "GlobalSoft",
            dataFlow: "DataFlow"
        },
        aiCapabilities: {
            badge: "CraftX KI-Funktionen",
            heading: "KI-gestützte Spitzenleistung",
            headingHighlight: "Intelligente Automatisierung",
            description: "Fortschrittliche KI-Funktionen, die den Arbeitsalltag von Dachdeckerbetrieben komplett verändern – für einfachere Abläufe und effizientere Aufträge.",
            capabilities: [
                {
                    title: "Sprachgest\u00FCtzte Auftragserfassung",
                    description: "Kunden können einfach eine WhatsApp-Sprachnachricht schicken und ihr Problem schildern.Die CraftX KI wandelt das automatisch in strukturierte Auftragsdetails um – so wird jede Anfrage sofort erfasst, ganz ohne Tippen.",
                    emoji: "\uD83C\uDF99\uFE0F"
                },
                {
                    title: "Voraussichtliche Auftragsdauer",
                    description: "CraftX KI sagt voraus, wie lange ein Auftrag dauern wird, basierend auf Auftragstyp,Komplexität und Auftragsdaten. Dies hilft Ihnen, Zeitpläne besser zu planen und eine Überbuchung Ihrer Teams zu vermeiden.",
                    emoji: "\u23F1\uFE0F"
                },
                {
                    title: "Intelligente Zuweisung von Dachdeckern",
                    description: "Die CraftX KI schlägt automatisch den passenden Dachdecker für jeden Auftrag vor – basierend auf Fähigkeiten, Verfügbarkeit und aktueller Auslastung. So wird jeder Job direkt dem richtigen Mann zugeteilt.",
                    emoji: "\uD83D\uDC77"
                },
                {
                    title: "KI-gestützte Anfrageanalyse",
                    description: "Die CraftX KI versteht die Antworten der Kunden und ordnet sie automatisch den passenden Auftragsdetails zu. So sind alle Anfragen sauber strukturiert und direkt bereit zur Bearbeitung.",
                    emoji: "\uD83E\uDDE0"
                },
                {
                    title: "Smarte Priorisierung von Aufträgen",
                    description: "CraftX KI identifiziert, welche Auftr\u00E4ge zuerst Aufmerksamkeit ben\u00F6tigen, indem Dringlichkeit, Fristen und Auftragswert analysiert werden \u2013 hilft Teams, sich auf die Arbeit zu konzentrieren, die am wichtigsten ist.",
                    emoji: "\u26A1",
                    badge: "Demnächst"
                }
            ]
        },
        predictiveDuration: {
            title: "Voraussichtliche Auftragsdauer",
            description: "CraftX KI sagt voraus, wie lange ein Auftrag dauern wird, basierend auf Auftragstyp, Komplexit\u00E4t und Auftragsdaten. Dies hilft Ihnen, Zeitpl\u00E4ne besser zu planen und eine \u00DCberbuchung Ihres Teams zu vermeiden."
        },
        intelligentAssignment: {
            title: "Intelligente Zuweisung von Dachdeckern",
            description: "CraftX KI empfiehlt automatisch den besten Dachdecker f\u00FCr jeden Auftrag basierend auf F\u00E4higkeiten, Verf\u00FCgbarkeit und Arbeitslast \u2013 stellt sicher, dass jedes Mal die richtige Person zugewiesen wird."
        },
        smartPrioritisation: {
            title: "Smarte Priorisierung von Aufträgen",
            description: "CraftX KI identifiziert, welche Auftr\u00E4ge zuerst Aufmerksamkeit ben\u00F6tigen, indem Dringlichkeit, Fristen und Auftragswert analysiert werden \u2013 hilft Teams, sich auf die Arbeit zu konzentrieren, die am wichtigsten ist."
        },
        inquiryIntelligence: {
            title: "KI-gestützte Anfrageanalyse",
            description: "CraftX KI versteht Kundenantworten und ordnet sie automatisch den richtigen Auftragsdetails zu, stellt sicher, dass Anfragen organisiert und f\u00FCr die Bearbeitung bereit sind."
        },
        conclusion: {
            subtitle: "FAZIT",
            title: "CraftX ist wie ein digitaler Mitarbeiter für euren Betrieb.",
            description: "Er:",
            points: [
                "Nimmt Kundenanfragen entgegen",
                "Sammelt alle wichtigen Informationen",
                "Filtert passende Auftr\u00E4ge",
                "Organisiert Eins\u00E4tze",
                "Dokumentiert Baustellen",
                "Erstellt Rechnungen"
            ],
            summary: "Und das einfach über WhatsApp.",
            craftXAssistant: 'CraftX Assistent',
            today: 'Heute'
        },
        finalCTA: {
            badge: "1-zu-1 Präsentation",
            title: "Individuelle Präsentation durch einen Spezialisten",
            titleLine1: "Individuelle Präsentation",
            titleLine2: "durch einen Spezialisten",
            subtitle: "Termin jetzt vereinbaren!",
            button: "Book a Demo"
        },
        footer: {
            copyright: "© CraftX 2026",
            backButton: "Zurück",
            links: [
                {
                    label: "Impressum",
                    href: "/de/imprint"
                },
                {
                    label: "Datenschutz",
                    href: "/de/privacy"
                },
                {
                    label: "AGB",
                    href: "/de/terms"
                }
            ],
            rightsReserved: "Alle Rechte vorbehalten.",
            description: "KI-gestützte WhatsApp-Automatisierung für Dachdeckerbetriebe."
        },
        imprint: {
            title: "Impressum",
            sections: [
                {
                    title: "Angaben gemäß § 5 TMG",
                    content: [
                        "CraftX ist eine webbasierte Softwarelösung und ein Produkt der:",
                        "<strong>XIDEAS GmbH</strong>",
                        "Lahnstraße 22",
                        "60326 Frankfurt am Main",
                        "Deutschland",
                        "<strong>Handelsregister:</strong> HRB 121865",
                        "<strong>Registergericht:</strong> Amtsgericht Frankfurt am Main",
                        "<strong>Umsatzsteuer-ID gemäß §27a UStG:</strong><br>DE344390476</br>"
                    ]
                },
                {
                    title: "Kontakt",
                    content: [
                        "E-Mail: hello@craft-x.de",
                        "Website: www.craft-x.de"
                    ]
                },
                {
                    title: "Geschäftsführung",
                    content: [
                        "Slawomir Rybarczyk"
                    ]
                },
                {
                    title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
                    content: [
                        "Slawomir Rybarczyk"
                    ]
                },
                {
                    title: "EU-Streitschlichtung",
                    content: [
                        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" class="text-(--color-accent-orange) hover:underline">https://ec.europa.eu/consumers/odr</a>',
                        "Unsere E-Mail-Adresse finden Sie oben im Impressum.",
                        "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
                    ]
                },
                {
                    title: "Haftung für Inhalte",
                    content: [
                        "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
                        "Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
                        "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt."
                    ]
                },
                {
                    title: "Haftung für Links",
                    content: [
                        "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.",
                        "Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.",
                        "Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
                    ]
                }
            ]
        },
        privacy: {
            title: "Datenschutzerklärung",
            sections: [
                {
                    title: "1. Verantwortlicher",
                    content: [
                        "Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
                        "<strong>XIDEAS GmbH</strong>",
                        "CraftX",
                        "Frankfurt am Main",
                        "Deutschland",
                        'E-Mail: <a href="mailto:hello@craft-x.de" class="text-(--color-accent-orange) hover:underline">hello@craft-x.de</a>',
                        'Website: <a href="https://craft-x.de" target="_blank" class="text-(--color-accent-orange) hover:underline">https://craft-x.de</a>'
                    ]
                },
                {
                    title: "2. Allgemeine Hinweise zur Datenverarbeitung",
                    content: [
                        "Der Schutz personenbezogener Daten hat für CraftX höchste Priorität.",
                        "CraftX wurde unter Berücksichtigung von Datenschutz, Sicherheit und Zuverlässigkeit entwickelt und betrieben.",
                        "Die Verarbeitung personenbezogener Daten erfolgt ausschließlich im Einklang mit:",
                        "• Der Datenschutz-Grundverordnung (DSGVO)",
                        "• Dem Bundesdatenschutzgesetz (BDSG)",
                        "• Sowie sonstigen anwendbaren Datenschutzvorschriften."
                    ]
                },
                {
                    title: "3. Art der verarbeiteten Daten",
                    content: [
                        "Im Rahmen der Nutzung von CraftX können insbesondere folgende personenbezogene Daten verarbeitet werden:",
                        "• Stammdaten (z. B. Name, Firma, Telefonnummer, E-Mail-Adresse)",
                        "• Kommunikationsdaten",
                        "• Nutzungs- und Zugriffsdaten",
                        "• Projekt- und Auftragsdaten",
                        "• hochgeladene Dateien, Fotos und Dokumentationen",
                        "• Standort- und Einsatzinformationen",
                        "• Technische Logdaten",
                        "• Authentifizierungsdaten",
                        "• Inhalte von Nachrichten und Kommunikationsvorgängen innerhalb der Plattform",
                        "Die Verarbeitung erfolgt ausschließlich im Rahmen der Bereitstellung und Verbesserung der angebotenen Dienstleistungen."
                    ]
                },
                {
                    title: "4. Zwecke der Verarbeitung",
                    content: [
                        "Die Verarbeitung personenbezogener Daten erfolgt insbesondere zu folgenden Zwecken:",
                        "• Bereitstellung und Betrieb der CraftX-Plattform",
                        "• Automatisierung betrieblicher Abläufe",
                        "• Kommunikation und Auftragsmanagement",
                        "• Team- und Einsatzplanung",
                        "• Dokumentation und Organisation von Arbeitsprozessen",
                        "• Verbesserung der Plattform und Systemsicherheit",
                        "• Fehleranalyse und Systemüberwachung",
                        "• Erfüllung gesetzlicher Verpflichtungen"
                    ]
                },
                {
                    title: "5. Rechtsgrundlagen der Verarbeitung",
                    content: [
                        "Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von:",
                        "• Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)",
                        "• Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)",
                        "• Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Verpflichtungen)",
                        "• Sowie gegebenenfalls auf Grundlage erteilter Einwilligungen gemäß Art. 6 Abs. 1 lit. a DSGVO.",
                        "<br>",
                        "Das berechtigte Interesse von CraftX besteht insbesondere in:",
                        "• Dem sicheren und effizienten Betrieb der Plattform",
                        "• Der Optimierung digitaler Geschäftsprozesse",
                        "• Der Systemsicherheit",
                        "• Der Missbrauchsverhinderung",
                        "• Sowie der technischen Weiterentwicklung der Dienstleistungen."
                    ]
                },
                {
                    title: "6. Hosting und Infrastruktur",
                    content: [
                        "CraftX wird ausschließlich innerhalb der Europäischen Union gehostet.",
                        "Die Infrastruktur wird in zertifizierten Rechenzentren betrieben, die unter anderem folgende Sicherheitsstandards erfüllen:",
                        "• ISO 27001-Zertifizierung",
                        "• Physische Zugangskontrollen",
                        "• Redundante Strom- und Netzwerksysteme",
                        "• Kontinuierliches Monitoring",
                        "• Intrusion-Detection-Systeme",
                        "Sämtliche Produktionssysteme befinden sich innerhalb der Europäischen Union."
                    ]
                },
                {
                    title: "7. Verschlüsselung und Datensicherheit",
                    content: [
                        "Die Übertragung sämtlicher Daten zwischen Nutzern und der CraftX-Plattform erfolgt verschlüsselt mittels aktueller SSL-/TLS-Technologie.",
                        "Zusätzlich werden technische und organisatorische Sicherheitsmaßnahmen eingesetzt, um personenbezogene Daten vor:",
                        "• Unbefugtem Zugriff",
                        "• Verlust",
                        "• Manipulation",
                        "• Offenlegung",
                        "• Oder Zerstörung zu schützen.",
                        "Gespeicherte sensible Daten werden verschlüsselt verarbeitet und sicher gespeichert."
                    ]
                },
                {
                    title: "8. Zugriffsschutz und Authentifizierung",
                    content: [
                        "CraftX verwendet umfangreiche Sicherheitsmaßnahmen zum Schutz von Nutzerkonten und Systemen, insbesondere:",
                        "• Sichere Passwort-Richtlinien",
                        "• Rollenbasierte Zugriffskontrollen (RBAC)",
                        "• Unterstützung von Zwei-Faktor-Authentifizierung (2FA)",
                        "• Sitzungsmanagement",
                        "• Automatische Timeouts.",
                        "Der Zugriff auf interne Administrationssysteme ist ausschließlich autorisierten Personen gestattet und wird protokolliert und überwacht."
                    ]
                },
                {
                    title: "9. KI-gestützte Verarbeitung",
                    content: [
                        "CraftX kann Funktionen einsetzen, die auf künstlicher Intelligenz (KI) oder automatisierter Analyse basieren.",
                        "Dabei können Inhalte automatisiert:",
                        "• Analysiert",
                        "• Strukturiert",
                        "• Priorisiert",
                        "• Oder verarbeitet werden.",
                        "Die KI-gestützte Verarbeitung erfolgt ausschließlich zur Unterstützung betrieblicher Abläufe und Optimierung der Plattformfunktionen.",
                        "Automatisierte Entscheidungen mit rechtlicher Wirkung im Sinne von Art. 22 DSGVO werden durch CraftX nicht getroffen."
                    ]
                },
                {
                    title: "10. Auftragsverarbeitung gemäß Art. 28 DSGVO",
                    content: [
                        "Soweit CraftX personenbezogene Daten im Auftrag von Geschäftskunden verarbeitet, erfolgt dies im Rahmen eines Auftragsverarbeitungsvertrags (AVV) gemäß Art. 28 DSGVO.",
                        "Der jeweilige Kunde bleibt datenschutzrechtlich Verantwortlicher im Sinne der DSGVO."
                    ]
                },
                {
                    title: "11. Datenweitergabe und Drittanbieter",
                    content: [
                        "CraftX nutzt ausgewählte technische Dienstleister und Unterauftragsverarbeiter („Subprocessor“), die hohe Sicherheits- und Datenschutzstandards erfüllen müssen.",
                        "Sämtliche eingesetzten Dienstleister werden vertraglich zur Einhaltung der DSGVO verpflichtet.",
                        "Eine aktuelle Liste der eingesetzten Subprocessor kann auf Anfrage bereitgestellt werden.",
                        "<br>",
                        "Eine Weitergabe personenbezogener Daten erfolgt ausschließlich:",
                        "• Zur Vertragserfüllung",
                        "• Aufgrund gesetzlicher Verpflichtungen",
                        "• Oder auf Grundlage entsprechender Rechtsgrundlagen.",
                        "CraftX verkauft keine personenbezogenen Daten an Dritte."
                    ]
                },
                {
                    title: "12. Datenübermittlung außerhalb des EWR",
                    content: [
                        "Sofern personenbezogene Daten außerhalb des Europäischen Wirtschaftsraums (EWR) verarbeitet werden, erfolgt dies ausschließlich unter Einhaltung der gesetzlichen Vorgaben der DSGVO.",
                        "Dabei werden geeignete Garantien eingesetzt, insbesondere:",
                        "• EU-Standardvertragsklauseln (SCCs)",
                        "• Oder andere gesetzlich anerkannte Schutzmechanismen."
                    ]
                },
                {
                    title: "13. Backups und Datensicherung",
                    content: [
                        "Zur Sicherstellung von Verfügbarkeit und Integrität der Daten werden regelmäßige automatisierte Backups durchgeführt.",
                        "Backups:",
                        "• Werden verschlüsselt gespeichert",
                        "• Befinden sich innerhalb der Europäischen Union",
                        "• Und werden in separaten sicheren Speicherumgebungen aufbewahrt.",
                        "<br>",
                        "CraftX unterhält interne Verfahren zur:",
                        "• Wiederherstellung von Daten",
                        "• Notfallbewältigung",
                        "• Und Sicherstellung der Geschäftskontinuität."
                    ]
                },
                {
                    title: "14. Systemüberwachung und Sicherheitsmanagement",
                    content: [
                        "Die Systeme von CraftX werden kontinuierlich überwacht, um:",
                        "• Ungewöhnliche Aktivitäten",
                        "• Sicherheitsrisiken",
                        "• Und potenzielle Angriffe frühzeitig zu erkennen.",
                        "Sicherheitsupdates und Patches werden regelmäßig eingespielt.",
                        "Zusätzlich erfolgen regelmäßige interne Überprüfungen der Sicherheitsmaßnahmen und Infrastruktur."
                    ]
                },
                {
                    title: "15. Speicherdauer und Löschung",
                    content: [
                        "Personenbezogene Daten werden nur so lange gespeichert, wie dies:",
                        "• Für die jeweiligen Zwecke erforderlich ist",
                        "• Gesetzlich vorgeschrieben ist",
                        "• Oder zur Vertragserfüllung notwendig ist.",
                        "Nach Beendigung des Vertragsverhältnisses können Kunden innerhalb von 30 Tagen die Herausgabe ihrer Daten verlangen.",
                        "Nach Ablauf dieser Frist ist CraftX berechtigt, personenbezogene Daten dauerhaft zu löschen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen."
                    ]
                },
                {
                    title: "16. Rechte betroffener Personen",
                    content: [
                        "Betroffene Personen haben im Rahmen der gesetzlichen Voraussetzungen insbesondere folgende Rechte:",
                        "• Auskunft gemäß Art. 15 DSGVO",
                        "• Berichtigung gemäß Art. 16 DSGVO",
                        "• Löschung gemäß Art. 17 DSGVO",
                        "• Einschränkung der Verarbeitung gemäß Art. 18 DSGVO",
                        "• Datenübertragbarkeit gemäß Art. 20 DSGVO",
                        "• Widerspruch gemäß Art. 21 DSGVO",
                        "• Widerruf erteilter Einwilligungen",
                        "• Beschwerde bei einer Datenschutzaufsichtsbehörde."
                    ]
                },
                {
                    title: "17. Verantwortlichkeit der Kunden",
                    content: [
                        "Kunden sind verpflichtet:",
                        "• Zugangsdaten vertraulich zu behandeln",
                        "• Nur autorisierte Nutzer einzusetzen",
                        "• Interne Sicherheitsrichtlinien einzuhalten",
                        "• Sowie – soweit verfügbar – Zwei-Faktor-Authentifizierung (2FA) zu aktivieren."
                    ]
                },
                {
                    title: "18. Incident Management und Datenschutzverletzungen",
                    content: [
                        "Im Falle einer Verletzung des Schutzes personenbezogener Daten wird CraftX betroffene Kunden unverzüglich im Rahmen der gesetzlichen Anforderungen der DSGVO informieren.",
                        "CraftX unterhält interne Prozesse zur:",
                        "• Erkennung",
                        "• Bewertung",
                        "• Dokumentation",
                        "• Und Behandlung von Sicherheitsvorfällen."
                    ]
                },
                {
                    title: "19. Änderungen dieser Datenschutzerklärung",
                    content: [
                        "CraftX behält sich vor, diese Datenschutzerklärung anzupassen, sofern dies aufgrund:",
                        "• Technischer Entwicklungen",
                        "• Rechtlicher Änderungen",
                        "• Oder neuer Funktionen der Plattform erforderlich wird.",
                        "Die jeweils aktuelle Version ist jederzeit auf der Website abrufbar."
                    ]
                },
                {
                    title: "20. Kontakt",
                    content: [
                        "Bei Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten kann jederzeit Kontakt aufgenommen werden:",
                        "<strong>XIDEAS GmbH / CraftX</strong>",
                        'E-Mail: <a href="mailto:hello@craft-x.de" class="text-(--color-accent-orange) hover:underline">hello@craft-x.de</a>',
                        'Website: <a href="https://craft-x.de" target="_blank" class="text-(--color-accent-orange) hover:underline">https://craft-x.de</a>'
                    ]
                }
            ]
        },
        terms: {
            title: "AGB",
            sections: [
                {
                    title: "1. Geltungsbereich",
                    content: [
                        "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Verträge zwischen der XIDEAS GmbH (nachfolgend „CraftX“) und ihren Kunden über die Nutzung der webbasierten Softwareplattform CraftX sowie aller damit verbundenen Leistungen.",
                        "Das Angebot von CraftX richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB.",
                        "Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden finden keine Anwendung, es sei denn, CraftX stimmt ihrer Geltung ausdrücklich schriftlich zu."
                    ]
                },
                {
                    title: "2. Vertragsgegenstand",
                    content: [
                        "CraftX stellt eine cloudbasierte Softwarelösung zur Verfügung, die über das Internet zugänglich ist.",
                        "Die Plattform dient insbesondere:",
                        "• Der digitalen Kommunikation",
                        "• Der automatisierten Auftrags- und Workflow-Verarbeitung",
                        "• Der KI-gestützten Analyse und Strukturierung von Anfragen",
                        "• Der Einsatzplanung und Teamkoordination",
                        "• Der Dokumentation betrieblicher Abläufe",
                        "• Der Verwaltung von Kunden- und Projektdaten",
                        "• Der Automatisierung digitaler Geschäftsprozesse",
                        "<br>",
                        "Die Software kann Funktionen enthalten, die auf künstlicher Intelligenz (KI), Automatisierungstechnologien sowie Diensten Dritter basieren.",
                        "<br>",
                        "Der konkrete Leistungsumfang ergibt sich ausschließlich aus:",
                        "• Der jeweils aktuellen Leistungsbeschreibung",
                        "• Dem gebuchten Tarif",
                        "• Sowie der technischen Dokumentation von CraftX.",
                        "Ein bestimmter wirtschaftlicher Erfolg wird nicht geschuldet."
                    ]
                },
                {
                    title: "3. Registrierung und Nutzerkonto",
                    content: [
                        "Die Nutzung von CraftX setzt die Erstellung eines Nutzerkontos voraus.",
                        "Der Kunde verpflichtet sich:",
                        "• Ausschließlich wahrheitsgemäße und vollständige Angaben zu machen",
                        "• Zugangsdaten vertraulich zu behandeln",
                        "• Unbefugten Zugriff Dritter zu verhindern.",
                        "Der Kunde haftet für sämtliche Aktivitäten, die über sein Nutzerkonto erfolgen, sofern diese von ihm zu vertreten sind.",
                        "CraftX ist berechtigt, Nutzerkonten bei Verstößen gegen diese AGB, Missbrauch oder rechtswidriger Nutzung vorübergehend oder dauerhaft zu sperren."
                    ]
                },
                {
                    title: "4. Vertragsschluss",
                    content: [
                        "Die Darstellung der Leistungen auf der Website oder innerhalb der Plattform stellt kein verbindliches Angebot dar.",
                        "Ein Vertrag kommt zustande durch:",
                        "• Die Bestätigung der Registrierung durch CraftX",
                        "• Die Aktivierung des Accounts",
                        "• Oder die Buchung eines kostenpflichtigen Tarifs.",
                        "CraftX behält sich vor, Registrierungen ohne Angabe von Gründen abzulehnen."
                    ]
                },
                {
                    title: "5. Vertragslaufzeit und Kündigung",
                    content: [
                        "Abonnements werden für den jeweils gewählten Abrechnungszeitraum abgeschlossen.",
                        "Sofern nicht anders vereinbart, verlängert sich der Vertrag automatisch um den zuletzt gewählten Abrechnungszeitraum, sofern er nicht vor Ablauf gekündigt wird.",
                        "Die Kündigung kann innerhalb der Plattform oder in Textform erfolgen.",
                        "Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt."
                    ]
                },
                {
                    title: "6. Preise und Zahlungsbedingungen",
                    content: [
                        "Es gelten die jeweils zum Zeitpunkt der Buchung auf der Website oder innerhalb der Plattform angegebenen Preise.",
                        "Sofern nicht anders vereinbart:",
                        "• Sind sämtliche Zahlungen im Voraus fällig",
                        "• Erfolgt die Abrechnung je nach gewähltem Tarif monatlich oder jährlich.",
                        "<br>",
                        "Bei Zahlungsverzug ist CraftX berechtigt:",
                        "• Den Zugang zur Plattform vorübergehend zu sperren",
                        "• Leistungen einzuschränken",
                        "• Sowie den Vertrag außerordentlich zu kündigen."
                    ]
                },
                {
                    title: "7. Pflichten des Kunden",
                    content: [
                        "Der Kunde verpflichtet sich:",
                        "• CraftX ausschließlich im Einklang mit geltendem Recht zu nutzen",
                        "• Keine rechtswidrigen, beleidigenden, schädlichen oder urheberrechtsverletzenden Inhalte hochzuladen oder zu verbreiten",
                        "• Keine Sicherheitsmechanismen zu umgehen",
                        "• Keine automatisierten Angriffe, Lasttests oder Manipulationsversuche vorzunehmen",
                        "• Die Plattform nicht missbräuchlich oder störend zu verwenden.",
                        "<br>",
                        "Untersagt sind insbesondere:",
                        "• Reverse Engineering",
                        "• Scraping",
                        "• Unerlaubte API-Nutzung",
                        "• Vervielfältigung oder Weitergabe der Software.",
                        "<br>",
                        "Der Kunde bleibt allein verantwortlich für:",
                        "• Sämtliche hochgeladenen Inhalte",
                        "• Die Rechtmäßigkeit der Datenverarbeitung",
                        "• Die Einhaltung datenschutzrechtlicher Vorschriften gegenüber seinen Endkunden."
                    ]
                },
                {
                    title: "8. KI-Funktionen und automatisierte Verarbeitung",
                    content: [
                        "CraftX kann KI-gestützte Funktionen zur Analyse, Strukturierung, Priorisierung oder Generierung von Inhalten bereitstellen.",
                        "KI-basierte Ergebnisse dienen ausschließlich der Unterstützung betrieblicher Abläufe.",
                        "CraftX übernimmt keine Gewähr für:",
                        "• Die Richtigkeit",
                        "• Vollständigkeit",
                        "• Aktualität",
                        "• Oder Eignung automatisch erzeugter Inhalte oder Empfehlungen.",
                        "Der Kunde bleibt verpflichtet, sämtliche automatisiert erzeugten Ergebnisse eigenverantwortlich zu prüfen.",
                        "Automatisierte Entscheidungen ersetzen keine fachliche, rechtliche oder wirtschaftliche Bewertung durch den Kunden."
                    ]
                },
                {
                    title: "9. Drittanbieter und externe Dienste",
                    content: [
                        "CraftX nutzt teilweise Dienste und Schnittstellen Dritter, insbesondere:",
                        "• Hostinganbieter",
                        "• Kommunikationsdienste",
                        "• KI-Dienste",
                        "• Messaging- und API-Plattformen (z. B. WhatsApp/Meta).",
                        "<br>",
                        "Die Verfügbarkeit und Funktionalität solcher Drittanbieter liegt außerhalb des Einflussbereichs von CraftX.",
                        "CraftX übernimmt keine Haftung für:",
                        "• Ausfälle",
                        "• Einschränkungen",
                        "• API-Änderungen",
                        "• Sperrungen",
                        "• Preisänderungen",
                        "• oder technische Anpassungen externer Anbieter."
                    ]
                },
                {
                    title: "10. Verfügbarkeit und Wartung",
                    content: [
                        "CraftX bemüht sich um eine möglichst hohe Verfügbarkeit der Plattform, schuldet jedoch keine jederzeitige oder unterbrechungsfreie Nutzung.",
                        "Nicht zur Verfügbarkeit zählen insbesondere:",
                        "• Wartungszeiten",
                        "• Sicherheitsupdates",
                        "• Technische Störungen außerhalb des Einflussbereichs von CraftX",
                        "• Ausfälle von Drittanbietern oder Telekommunikationsdiensten",
                        "• Fälle höherer Gewalt.",
                        "<br>",
                        "Geplante Wartungsarbeiten werden – soweit möglich – vorab angekündigt."
                    ]
                },
                {
                    title: "11. Datenexport und Datenlöschung",
                    content: [
                        "Der Kunde kann nach Vertragsbeendigung innerhalb von 30 Tagen die Herausgabe seiner gespeicherten Daten verlangen.",
                        "Die Bereitstellung erfolgt in einem von CraftX festgelegten gängigen digitalen Dateiformat zum Download.",
                        "Nach Ablauf von 30 Tagen nach Vertragsende ist CraftX berechtigt, sämtliche Kundendaten dauerhaft und unwiderruflich zu löschen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
                        "Ein Anspruch auf längere Speicherung besteht nicht."
                    ]
                },
                {
                    title: "12. Datenschutz und Auftragsverarbeitung",
                    content: [
                        "Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung von CraftX.",
                        "Sofern CraftX personenbezogene Daten im Auftrag des Kunden verarbeitet, wird ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO bereitgestellt.",
                        "Der Kunde bleibt datenschutzrechtlich Verantwortlicher im Sinne der DSGVO."
                    ]
                },
                {
                    title: "13. Geistiges Eigentum und Nutzungsrechte",
                    content: [
                        "Alle Rechte an der Software, den Systemen, der technischen Infrastruktur sowie sämtlichen Inhalten von CraftX verbleiben ausschließlich bei CraftX.",
                        "Der Kunde erhält für die Vertragslaufzeit ein:",
                        "• Einfaches",
                        "• Nicht ausschließliches",
                        "• Nicht übertragbares",
                        "• Widerrufliches Nutzungsrecht",
                        "Zur vertragsgemäßen Nutzung der Plattform.",
                        "Eine Weitergabe, Unterlizenzierung oder kommerzielle Verwertung der Software außerhalb des Vertragszwecks ist unzulässig."
                    ]
                },
                {
                    title: "14. Haftung",
                    content: [
                        "CraftX haftet unbeschränkt:",
                        "• Bei Vorsatz und grober Fahrlässigkeit",
                        "• Bei Schäden aus der Verletzung von Leben, Körper oder Gesundheit",
                        "• Nach den Vorschriften des Produkthaftungsgesetzes.",
                        "<br>",
                        "Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) haftet CraftX ausschließlich auf den vertragstypischen, vorhersehbaren Schaden.",
                        "Die Haftung ist – außer in Fällen zwingender gesetzlicher Haftung – der Höhe nach auf die vom Kunden in den letzten 12 Monaten vor Eintritt des Schadensereignisses gezahlten Vergütungen begrenzt.",
                        "<br>",
                        "Eine Haftung für:",
                        "• Mittelbare Schäden",
                        "• Entgangenen Gewinn",
                        "• Datenverlust",
                        "• Betriebsunterbrechungen",
                        "• Ausgebliebene Einsparungen",
                        "• Oder Folgeschäden",
                        "Ist im gesetzlich zulässigen Umfang ausgeschlossen."
                    ]
                },
                {
                    title: "15. Änderungen der AGB",
                    content: [
                        "CraftX ist berechtigt, diese AGB aus sachlichen Gründen zu ändern, insbesondere bei:",
                        "• Rechtlichen Änderungen",
                        "• Technischen Weiterentwicklungen",
                        "• Erweiterungen der Plattform",
                        "• Änderungen von Drittanbietern oder APIs.",
                        "<br>",
                        "Änderungen werden dem Kunden rechtzeitig in Textform mitgeteilt.",
                        "Widerspricht der Kunde den Änderungen nicht innerhalb von 30 Tagen nach Mitteilung, gelten die Änderungen als angenommen.",
                        "CraftX wird den Kunden gesondert auf das Widerspruchsrecht und die Folgen des Schweigens hinweisen.",
                        "Im Falle eines Widerspruchs ist CraftX berechtigt, den Vertrag zum nächstmöglichen Zeitpunkt ordentlich zu kündigen."
                    ]
                },
                {
                    title: "16. Referenznennung",
                    content: [
                        "CraftX ist berechtigt, den Kundennamen sowie das Unternehmenslogo des Kunden zu Referenz- und Marketingzwecken zu verwenden, sofern der Kunde dem nicht ausdrücklich widerspricht."
                    ]
                },
                {
                    title: "17. Anwendbares Recht und Gerichtsstand",
                    content: [
                        "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).",
                        "Gerichtsstand für sämtliche Streitigkeiten aus oder im Zusammenhang mit diesem Vertragsverhältnis ist Frankfurt am Main, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist."
                    ]
                }
            ]
        }
    }
};
}),
"[project]/src/hooks/useTranslation.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
;
;
const useTranslation = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { lang } = router.query;
    const currentLang = lang || "en";
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][currentLang] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"].en;
    const t = (key)=>{
        const keys = key.split(".");
        let value = content;
        for (const k of keys){
            value = value?.[k];
        }
        return value !== undefined ? value : key;
    };
    return {
        t,
        lang: currentLang
    };
};
}),
"[project]/src/components/footer/Footer.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const Footer = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const links = t("footer.links");
    const description = t("footer.description");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "footer-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "footer-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "footer-top-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            className: "footer-brand-col",
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "footer-logo-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "footer-logo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo-white.svg",
                                            alt: "CraftX Logo",
                                            fill: true,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "footer-description",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/footer/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            className: "footer-nav-col",
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "footer-nav-heading",
                                    children: "Links"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                    className: "footer-nav-links",
                                    children: Array.isArray(links) && links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "footer-nav-item",
                                            children: link.label
                                        }, index, false, {
                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/footer/Footer.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            className: "footer-contact-col",
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "footer-nav-heading",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "footer-contact-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "mailto:hello@craft-x.de",
                                            className: "footer-nav-item",
                                            children: "hello@craft-x.de"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "https://www.craft-x.de",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "footer-nav-item",
                                            children: "www.craft-x.de"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/footer/Footer.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/footer/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "footer-watermark-container",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "footer-watermark-text",
                        children: "CRAFTX"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer/Footer.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/footer/Footer.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "footer-separator"
                }, void 0, false, {
                    fileName: "[project]/src/components/footer/Footer.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                    className: "footer-bottom-row",
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "footer-copyright",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "footer-copyright-brand",
                                    children: "CraftX"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                ". ",
                                t("footer.rightsReserved")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/footer/Footer.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "footer-legal-links",
                            children: Array.isArray(links) && links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "footer-legal-item",
                                    children: link.label
                                }, index, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer/Footer.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "footer-powered-by",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "footer-powered-label",
                                    children: "Powered by"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/ST_Logo_Light_H.png",
                                    alt: "Scaletech Logo",
                                    width: 120,
                                    height: 28,
                                    className: "footer-scaletech-logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/footer/Footer.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/footer/Footer.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/footer/Footer.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/footer/Footer.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/images/ai-capabilities/cap-01-voice.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cap-01-voice.2c7adb22.jpg");}),
"[project]/src/assets/images/ai-capabilities/cap-01-voice.jpg.mjs { IMAGE => \"[project]/src/assets/images/ai-capabilities/cap-01-voice.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$01$2d$voice$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ai-capabilities/cap-01-voice.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$01$2d$voice$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCzdavq7arDGLuUQJujkdXIDnbnj8q51U03OmVLW1rH/9k="
};
}),
"[project]/src/assets/images/ai-capabilities/cap-02-predictive.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cap-02-predictive.f8205c81.jpg");}),
"[project]/src/assets/images/ai-capabilities/cap-02-predictive.jpg.mjs { IMAGE => \"[project]/src/assets/images/ai-capabilities/cap-02-predictive.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$02$2d$predictive$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ai-capabilities/cap-02-predictive.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$02$2d$predictive$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCHVTe6leQfvbqW237ZFcZ2YHOCen/165+aPVnTyS+yj//Z"
};
}),
"[project]/src/assets/images/ai-capabilities/cap-03-assignment.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cap-03-assignment.976636d6.jpg");}),
"[project]/src/assets/images/ai-capabilities/cap-03-assignment.jpg.mjs { IMAGE => \"[project]/src/assets/images/ai-capabilities/cap-03-assignment.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$03$2d$assignment$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ai-capabilities/cap-03-assignment.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$03$2d$assignment$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBX8Ta5caitvBI5WOURl37g4B6dKybvq2bRXLpY/9k="
};
}),
"[project]/src/assets/images/ai-capabilities/cap-04-inquiry.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cap-04-inquiry.da8ccc79.jpg");}),
"[project]/src/assets/images/ai-capabilities/cap-04-inquiry.jpg.mjs { IMAGE => \"[project]/src/assets/images/ai-capabilities/cap-04-inquiry.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$04$2d$inquiry$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ai-capabilities/cap-04-inquiry.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$04$2d$inquiry$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCfV9T1G7vwftby2TRbdnQFuTg46/d9am7tYpI//9k="
};
}),
"[project]/src/assets/images/ai-capabilities/cap-05-priority.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cap-05-priority.066b72c8.jpg");}),
"[project]/src/assets/images/ai-capabilities/cap-05-priority.jpg.mjs { IMAGE => \"[project]/src/assets/images/ai-capabilities/cap-05-priority.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$05$2d$priority$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/ai-capabilities/cap-05-priority.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$05$2d$priority$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBmpa7dS2Kol7JL5iyebEGPACk854P4VjJy0VzeKjq7H//Z"
};
}),
"[project]/src/components/landing-page/AICapabilities.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AICapabilities",
    ()=>AICapabilities
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$01$2d$voice$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$01$2d$voice$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ai-capabilities/cap-01-voice.jpg.mjs { IMAGE => "[project]/src/assets/images/ai-capabilities/cap-01-voice.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$02$2d$predictive$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$02$2d$predictive$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ai-capabilities/cap-02-predictive.jpg.mjs { IMAGE => "[project]/src/assets/images/ai-capabilities/cap-02-predictive.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$03$2d$assignment$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$03$2d$assignment$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ai-capabilities/cap-03-assignment.jpg.mjs { IMAGE => "[project]/src/assets/images/ai-capabilities/cap-03-assignment.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$04$2d$inquiry$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$04$2d$inquiry$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ai-capabilities/cap-04-inquiry.jpg.mjs { IMAGE => "[project]/src/assets/images/ai-capabilities/cap-04-inquiry.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$05$2d$priority$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$05$2d$priority$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/ai-capabilities/cap-05-priority.jpg.mjs { IMAGE => "[project]/src/assets/images/ai-capabilities/cap-05-priority.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
const AICapabilities = ({ lang })=>{
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][lang].aiCapabilities;
    const capabilities = [
        {
            ...content.capabilities[0],
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$01$2d$voice$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$01$2d$voice$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            ...content.capabilities[1],
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$02$2d$predictive$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$02$2d$predictive$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            ...content.capabilities[2],
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$03$2d$assignment$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$03$2d$assignment$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            ...content.capabilities[3],
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$04$2d$inquiry$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$04$2d$inquiry$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            ...content.capabilities[4],
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$05$2d$priority$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$ai$2d$capabilities$2f$cap$2d$05$2d$priority$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        }
    ];
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const handleNext = ()=>{
        setCurrentIndex((prev)=>prev < capabilities.length - 1 ? prev + 1 : prev);
    };
    const handlePrev = ()=>{
        setCurrentIndex((prev)=>prev > 0 ? prev - 1 : prev);
    };
    const counterLabel = `0${currentIndex + 1} / 0${capabilities.length}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "ai-capabilities",
        className: "bg-[#F7F5F0] py-[70px] lg:py-[100px] flex justify-center w-full px-4 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: " relative container-1404 h-[480px] sm:h-[560px] lg:h-[700px] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                    initial: false,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 1.02
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.7,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "absolute inset-0 z-0 bg-[#1A1A1A]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: capabilities[currentIndex].image,
                            alt: capabilities[currentIndex].title,
                            fill: true,
                            className: "object-cover object-center",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, currentIndex, false, {
                        fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-10 pointer-events-none",
                    style: {
                        background: "rgba(12, 13, 23, 0.60)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute top-8 right-8 z-20 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].span, {
                            initial: {
                                opacity: 0,
                                y: -4
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: 4
                            },
                            transition: {
                                duration: 0.35,
                                ease: "easeOut"
                            },
                            className: "text-white/90 text-[13px] lg:text-[15px] font-medium tracking-widest tabular-nums",
                            children: counterLabel
                        }, currentIndex, false, {
                            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute top-8 left-8 right-8 lg:right-auto z-20 flex flex-col items-start pointer-events-none lg:max-w-[700px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-5 lg:mb-6 pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full bg-[#FE850C]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-white text-[11px] lg:text-[13px] font-bold tracking-widest uppercase",
                                    children: content.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-white leading-[1.02] mb-3 lg:mb-4 tracking-tight text-[32px] sm:text-[40px] lg:text-[56px]",
                            children: content.heading
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-white/85 text-[14px] lg:text-[17px] leading-[1.55] font-medium max-w-[520px]",
                            children: content.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-[64px] left-8 right-8 lg:bottom-[72px] lg:right-auto z-20 pointer-events-none lg:max-w-[560px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -12
                            },
                            transition: {
                                duration: 0.4,
                                ease: "easeOut"
                            },
                            className: "pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-bold text-[22px] lg:text-[30px] leading-[1.08] mb-2 lg:mb-3",
                                    children: capabilities[currentIndex].title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-white/75 text-[13px] lg:text-[15px] leading-[1.6]",
                                    children: capabilities[currentIndex].description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, currentIndex, true, {
                            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-5 left-8 right-8 lg:bottom-6 z-20 flex items-center",
                    style: {
                        gap: "15px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: handlePrev,
                                    disabled: currentIndex === 0,
                                    className: "w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-black/25 hover:bg-black/45 border border-white/25 text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed",
                                    "aria-label": "Previous capability",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-4 h-4 lg:w-5 lg:h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: handleNext,
                                    disabled: currentIndex === capabilities.length - 1,
                                    className: "w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-black/25 hover:bg-black/45 border border-white/25 text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed",
                                    "aria-label": "Next capability",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4 lg:w-5 lg:h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0 h-[2px] bg-white/20 rounded-full relative overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                className: "absolute inset-y-0 left-0 bg-[#FE850C] rounded-full",
                                initial: {
                                    width: 0
                                },
                                animate: {
                                    width: `${(currentIndex + 1) / capabilities.length * 100}%`
                                },
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/AICapabilities.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/landing-page/BenefitsSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "BenefitsSection",
    ()=>BenefitsSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.js [ssr] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [ssr] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-user.js [ssr] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [ssr] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$off$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-off.js [ssr] (ecmascript) <export default as CalendarOff>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
// ── CountUp hook ─────────────────────────────────────────────────────────────
const useCountUp = (end, duration = 2, start = false)=>{
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!start) return;
        let t0 = null;
        const tick = (ts)=>{
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / (duration * 1000), 1);
            setCount(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(tick);
            else setCount(end);
        };
        requestAnimationFrame(tick);
    }, [
        end,
        duration,
        start
    ]);
    return count;
};
// ── Animated metric value ─────────────────────────────────────────────────────
const AnimatedMetric = ({ value, inView })=>{
    const numeric = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    const count = useCountUp(numeric, 2, inView);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        className: "text-[#FE850C] font-black tabular-nums block",
        style: {
            fontSize: "clamp(40px, 4.5vw, 64px)",
            lineHeight: 1
        },
        children: [
            count,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const BenefitsSection = ({ lang })=>{
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][lang].benefits;
    // Refs for stat count-up
    const statRef0 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const statRef1 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const statRef2 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const inView0 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["useInView"])(statRef0, {
        once: true
    });
    const inView1 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["useInView"])(statRef1, {
        once: true
    });
    const inView2 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["useInView"])(statRef2, {
        once: true
    });
    const statRefs = [
        statRef0,
        statRef1,
        statRef2
    ];
    const inViews = [
        inView0,
        inView1,
        inView2
    ];
    const leftIcons = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
            className: "w-4 h-4 text-[#FE850C]"
        }, "c", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "w-4 h-4 text-[#FE850C]"
        }, "m", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 67,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"], {
            className: "w-4 h-4 text-[#FE850C]"
        }, "u", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 68,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    const availIcons = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"], {
            className: "w-4 h-4 text-[#FE850C]"
        }, "h", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 72,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "w-4 h-4 text-[#FE850C]"
        }, "b", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 73,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$off$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarOff$3e$__["CalendarOff"], {
            className: "w-4 h-4 text-[#FE850C]"
        }, "cal", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 74,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    // Right panel bullet icons (White for orange background)
    const bulletIcons = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
            className: "w-5 h-5 text-white shrink-0"
        }, "p", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 79,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
            className: "w-5 h-5 text-white shrink-0"
        }, "br", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 80,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "w-5 h-5 text-white shrink-0"
        }, "z", false, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "benefits",
        className: "bg-[var(--bg-offwhite)] w-full relative py-20 lg:py-28 px-4 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container-1404",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 28
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.55,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-black/5 h-full flex flex-col justify-center relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-[32px] sm:text-[40px] lg:text-[48px] font-black leading-[1.15] tracking-tight text-[#0C0D17] mb-12",
                                        children: content.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-10",
                                        children: content.blocks.slice(0, 2).map((block, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-[#FE850C] text-[12px] font-bold tracking-widest uppercase mb-6",
                                                        children: block.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                        className: "flex flex-col gap-4",
                                                        children: block.list.slice(0, 3).map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center gap-4 text-[14px] lg:text-[15px] text-[#0C0D17]/80",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center justify-center w-8 h-8 rounded-full bg-black/5 border border-black/10 flex-none",
                                                                        children: i === 0 ? leftIcons[j] : availIcons[j]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                                        lineNumber: 114,
                                                                        columnNumber: 28
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: item
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 28
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, j, true, {
                                                                fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                lineNumber: 107,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-[var(--orange)] to-[var(--orange-end)] rounded-[32px] p-8 lg:p-12 text-white shadow-[0_20px_40px_-10px_rgba(254,133,12,0.4)] h-full flex flex-col justify-center relative overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-[72px] lg:text-[96px] font-black leading-none mb-4 tracking-tight",
                                            children: "30%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-[20px] lg:text-[24px] leading-[1.3] mb-8",
                                            children: content.subtitle.split(" because:")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            className: "flex flex-col gap-4",
                                            children: content.points.slice(0, 3).map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-4 text-[15px] lg:text-[16px] font-medium text-white/95",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center justify-center flex-none",
                                                            children: bulletIcons[i]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: point
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                content.stats && content.stats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "w-full mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-black/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/10",
                            children: content.stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    ref: statRefs[i],
                                    className: "flex flex-col items-center text-center gap-2 px-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AnimatedMetric, {
                                            value: stat.value,
                                            inView: inViews[i]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                            lineNumber: 163,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-[#0C0D17]/70 font-semibold text-[13px] uppercase tracking-wider",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                            lineNumber: 164,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                                    lineNumber: 158,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                            lineNumber: 156,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/BenefitsSection.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/landing-page/ConclusionSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ConclusionSection",
    ()=>ConclusionSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const ConclusionSection = ({ lang })=>{
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][lang].conclusion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "bg-[var(--bg-offwhite)] relative overflow-clip px-4 lg:px-6",
        style: {
            paddingTop: "100px",
            paddingBottom: "100px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-full h-[150%] bg-[radial-gradient(circle_at_top_right,rgba(254,133,12,0.03)_0%,transparent_35%)] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container-1404 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-[44%] flex flex-col justify-center text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                },
                                className: "max-w-[520px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FE850C]/20 bg-[#FE850C]/10 mb-6 w-fit",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-[#FE850C] tracking-[0.12em] uppercase",
                                            children: content.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-[40px] lg:text-[60px] border-l-[3px] border-[#FE850C] pl-6 lg:pl-8 font-extrabold text-[#14161B] mb-0 leading-[1.05] tracking-tight",
                                        children: content.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-[46%] flex justify-center lg:justify-end lg:-mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.1,
                                    ease: "easeOut"
                                },
                                className: "relative w-full max-w-[580px] rounded-[32px] bg-[#0b141a] overflow-hidden shadow-[0_16px_40px_-12px_rgba(0,0,0,0.15)] border border-black/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-[#202c33] px-6 py-4 flex items-center justify-between border-b border-white/5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-linear-to-br from-[#FE850C]/80 to-[#FE850C] p-[2px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full bg-[#111b21] rounded-full flex items-center justify-center border-2 border-[#111b21]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "24",
                                                            height: "24",
                                                            className: "text-white",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                d: "M11.95 2L1 5.9v4.06c0 6.63 4.67 12.87 10.95 14.04c6.28-1.17 10.95-7.41 10.95-14.04V5.9L11.95 2zm8.95 7.96c0 5.48-3.79 10.6-8.95 11.91c-5.16-1.31-8.95-6.43-8.95-11.91V7.12l8.95-3.15l8.95 3.15v2.84z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "text-[#e9edef] font-semibold text-lg",
                                                            children: content.craftXAssistant
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-[#8696a0] text-sm flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 rounded-full bg-[#FE850C] animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Online"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative p-6 sm:p-8 min-h-[400px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 opacity-[0.03] bg-[url('https://static.whatsapp.net/rsrc.php/v3/yl/r/r_QNEWG-2X.png')] mix-blend-overlay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "bg-[#182229] border border-white/5 text-[#8696a0] text-[10px] sm:text-xs px-3 py-1 rounded-md uppercase tracking-wider font-medium",
                                                            children: content.today
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    content.points.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 10,
                                                                scale: 0.98
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0,
                                                                scale: 1
                                                            },
                                                            viewport: {
                                                                once: true
                                                            },
                                                            transition: {
                                                                delay: 0.15 + index * 0.1,
                                                                duration: 0.4,
                                                                ease: "easeOut"
                                                            },
                                                            className: `self-start relative bg-[#202c33] text-[#e9edef] px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl shadow-sm max-w-[95%] sm:max-w-[85%] hover:border-[#FE850C]/30 border border-transparent transition-colors group ${index === 0 ? "rounded-tl-none" : ""}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "text-[15px] sm:text-[17px] leading-[1.4]",
                                                                        children: point
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-[#8696a0] self-end mt-1 select-none",
                                                                        children: [
                                                                            "11:",
                                                                            10 + index
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                        lineNumber: 115,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, index, false, {
                                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10,
                                                            scale: 0.98
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0,
                                                            scale: 1
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            delay: 0.35 + content.points.length * 0.1,
                                                            duration: 0.4,
                                                            ease: "easeOut"
                                                        },
                                                        className: "self-end relative bg-[#005c4b] text-[#e9edef] px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl rounded-br-none shadow-sm max-w-[85%] mt-4 group hover:bg-[#006855] transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "text-[18px] sm:text-[20px] font-bold tracking-wide text-white mb-1 leading-[1.3]",
                                                                    children: content.summary
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-end gap-1 text-[11px] text-white/70 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "11:",
                                                                                10 + content.points.length
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                            lineNumber: 139,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 16 15",
                                                                            width: "16",
                                                                            height: "15",
                                                                            className: "fill-[#53bdeb] ml-1",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                                lineNumber: 146,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                            lineNumber: 140,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/landing-page/ConclusionSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/shared/constants.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT_LINKS",
    ()=>CONTACT_LINKS
]);
const CONTACT_LINKS = {
    hubspotDemo: "https://meetings.hubspot.com/slawo"
};
}),
"[project]/src/components/ui/PrimaryCTA.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "PrimaryCTA",
    ()=>PrimaryCTA
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [ssr] (ecmascript) <export default as ArrowUpRight>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const PrimaryCTA = ({ text, icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
    className: "w-5 h-5 text-white",
    strokeWidth: 2.5
}, void 0, false, {
    fileName: "[project]/src/components/ui/PrimaryCTA.tsx",
    lineNumber: 13,
    columnNumber: 10
}, ("TURBOPACK compile-time value", void 0)), className = "", textClassName = "text-[#14161B]", ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].a, {
        whileHover: {
            scale: 1.02
        },
        whileTap: {
            scale: 0.98
        },
        className: `group relative inline-flex items-center justify-between gap-4 p-1.5 pl-6 bg-[var(--color-accent-orange)] hover:bg-[#e07208] rounded-full cursor-pointer transition-colors duration-300 ${className}`,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: `${textClassName} font-bold text-sm lg:text-base leading-none`,
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PrimaryCTA.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-none w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#14161B] flex items-center justify-center overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "transition-transform duration-300 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PrimaryCTA.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PrimaryCTA.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PrimaryCTA.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/images/how-it-work.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/how-it-work.9f861b7e.png");}),
"[project]/src/assets/images/how-it-work.png.mjs { IMAGE => \"[project]/src/assets/images/how-it-work.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$work$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/how-it-work.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$work$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 800,
    height: 627,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAsElEQVR42h3K0U7CMABA0aoIkdq1rINuY5O5EUuUkEhQDBFIIEAI//87vRAeztsRDy3J47PE2pjV9J0mT4icxpgeuisR7c4r3ReFNZqmSPkaj6iqnHo05C1LEbExDLKCOLaMnWFWpcz9kP3Ss/ieIozukbgCnWRMvOdyOnA+bjmuf1h8NregFH2X34KjLAtWf7/sNv8s5zPKvkU8tWVoddRdFJnQ1HXwH5OQDlyIpApX/ac/wk8ya9kAAAAASUVORK5CYII="
};
}),
"[project]/src/components/landing-page/FinalCTASection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "FinalCTASection",
    ()=>FinalCTASection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PrimaryCTA.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$work$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$work$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/how-it-work.png.mjs { IMAGE => "[project]/src/assets/images/how-it-work.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const FinalCTASection = ({ lang })=>{
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][lang].finalCTA;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "bg-[var(--bg-offwhite)] relative py-12 lg:py-20 px-4 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container-1404",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-[32px] lg:rounded-[40px] shadow-xl border border-black/5 overflow-hidden flex flex-col lg:flex-row items-stretch lg:h-[500px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-[45%] p-8 sm:p-10 lg:p-12 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-[32px] sm:text-[40px] lg:text-[44px] font-black text-[#0C0D17] leading-[1.15] tracking-tight",
                                children: [
                                    content.titleLine1 || "Individual presentation",
                                    " ",
                                    content.titleLine2 || "by a specialist"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "pt-8 mt-10 lg:mt-auto border-t border-black/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-[18px] lg:text-[20px] font-bold text-[#0C0D17] mb-5",
                                        children: content.subtitle || "Schedule an appointment now!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PrimaryCTA"], {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CONTACT_LINKS"].hubspotDemo,
                                            target: "_blank",
                                            text: content.button || "Book a Demo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-[55%] border-t lg:border-t-0 lg:border-l border-black/5 relative min-h-[300px] lg:min-h-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$work$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$work$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "CraftX Workflow",
                            className: "absolute inset-0 w-full h-full object-cover object-left",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/FinalCTASection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/images/hero-cinematic.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/hero-cinematic.67d16261.jpg");}),
"[project]/src/assets/images/hero-cinematic.jpg.mjs { IMAGE => \"[project]/src/assets/images/hero-cinematic.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$hero$2d$cinematic$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/hero-cinematic.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$hero$2d$cinematic$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1376,
    height: 768,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDh7fWL9bHZ9oYqxOQeaxcFe5vzNRR//9k="
};
}),
"[project]/src/components/landing-page/HeroSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$hero$2d$cinematic$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$hero$2d$cinematic$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/hero-cinematic.jpg.mjs { IMAGE => "[project]/src/assets/images/hero-cinematic.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PrimaryCTA.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
;
;
const HeroSection = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const titlePart1 = t("hero.titlePart1");
    const titlePart2 = t("hero.titlePart2");
    const titleHighlight = t("hero.titleHighlight");
    const description = t("hero.description");
    const whatsappText = t("hero.whatsappText");
    const subDescription = t("hero.subDescription");
    const ctaPrimary = t("hero.ctaPrimary");
    const ctaHeader = t("hero.ctaHeader");
    const features = t("hero.features");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative w-full bg-transparent pt-[90px] pb-6 px-4 lg:px-6 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.97
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: 0.8,
                ease: [
                    0.23,
                    1,
                    0.32,
                    1
                ]
            },
            className: "relative container-1404 rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[640px] lg:min-h-[700px] lg:h-[700px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$hero$2d$cinematic$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$hero$2d$cinematic$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "German roofer working at golden hour with CraftX app",
                            fill: true,
                            priority: true,
                            className: "object-cover object-center animate-ken-burns",
                            sizes: "(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 1404px"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-[#0C0D17]/90 via-[#0C0D17]/70 to-[#0C0D17]/35"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-[#0C0D17]/85 via-transparent to-[#0C0D17]/20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 w-[500px] h-[300px] bg-[var(--orange)]/15 rounded-full blur-[120px] pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-col h-full min-h-[inherit] px-6 md:px-11 pt-12 pb-10 md:py-12 lg:py-14 justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "max-w-[620px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 14
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.1
                                    },
                                    className: "badge-orange mb-6",
                                    children: "CraftX Platform"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].h1, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.15
                                    },
                                    className: "font-bold leading-[1.05] tracking-tight mb-5",
                                    style: {
                                        fontSize: "clamp(36px, 5vw, 68px)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--fg-dark)] block",
                                            children: titlePart1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--fg-dark)] block",
                                            children: titlePart2
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "hero-gradient-text block mt-1",
                                            children: titleHighlight
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.25
                                    },
                                    className: "text-base md:text-lg text-[var(--fg-dark-muted)] leading-relaxed max-w-[500px] mb-7",
                                    children: [
                                        description,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[var(--orange)]",
                                            children: whatsappText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.35
                                    },
                                    className: "flex flex-wrap gap-x-6 gap-y-2 mb-9",
                                    children: Array.isArray(features) && features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-[var(--fg-dark-muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-3.5 h-3.5 text-[var(--orange)] flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: f
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.45
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PrimaryCTA"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CONTACT_LINKS"].hubspotDemo,
                                        target: "_blank",
                                        text: ctaPrimary || ctaHeader
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.6
                            },
                            className: "grid grid-cols-2 sm:grid-cols-4 gap-px mt-8 sm:mt-10 lg:mt-auto bg-white/[0.06] rounded-2xl overflow-hidden",
                            children: [
                                {
                                    stat: "30%",
                                    label: "Less office work"
                                },
                                {
                                    stat: "2×",
                                    label: "Faster response time"
                                },
                                {
                                    stat: "100%",
                                    label: "Complete job requests"
                                },
                                {
                                    stat: "24/7",
                                    label: "Digital availability"
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center sm:items-start px-5 py-4 bg-[#0C0D17]/60 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-2xl sm:text-3xl font-bold text-[var(--orange)] leading-tight",
                                            children: item.stat
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-[var(--fg-dark-muted)] mt-0.5 font-medium",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/HeroSection.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing-page/HeroSection.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/HeroSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/images/usp-image.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/usp-image.d555b5fd.png");}),
"[project]/src/assets/images/usp-image.png.mjs { IMAGE => \"[project]/src/assets/images/usp-image.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$usp$2d$image$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/usp-image.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$usp$2d$image$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1080,
    height: 1104,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42lWO3UrCYABAvweo5bZvBqPpfnLhAish6WeuKCMy0OVPRFOoLEOJ7KKfV4hueoueoRfT21N5E14czs25OEKX1kSTS6iayZ+NdBZj0Z0i085ELKQ0ZMZE+jZyxcZws+jGfyR03cArFQiqEdZeET1wZ4PyUZ1k8EpyN+Cm/0CjeUkrbhBXDujHJ4ho/5ik06F7fcbj6InhbY+rdo2L+imfowRhOy75IM+yn2O1uE6wscZWGLJbDnnrtRGp38mUqmJ5HrnKDpnDTaJWk/Nale+PIWJuXhkrioLl2JgFfzoZbJd4ue/y9f48/gFYBWfMP3SoBwAAAABJRU5ErkJggg=="
};
}),
"[project]/src/components/landing-page/KillerUSPSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "KillerUSPSection",
    ()=>KillerUSPSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$usp$2d$image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$usp$2d$image$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/usp-image.png.mjs { IMAGE => "[project]/src/assets/images/usp-image.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const KillerUSPSection = ({ lang })=>{
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][lang].usp;
    const points = content.points;
    const icons = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
            className: "w-5 h-5 text-[#FE850C]"
        }, "filter", false, {
            fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
            className: "w-5 h-5 text-[#FE850C]"
        }, "target", false, {
            fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
            lineNumber: 24,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
            className: "w-5 h-5 text-[#FE850C]"
        }, "check", false, {
            fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "bg-[#F7F5F0] py-5 lg:py-6 relative overflow-hidden px-4 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container-1404",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-[#0C0D17] rounded-[32px] md:rounded-[40px] p-6 md:px-8 md:pt-8 md:pb-7 lg:px-10 lg:pt-9 lg:pb-8 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-5 lg:gap-y-6 items-start mb-7 lg:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col order-1 lg:col-start-1 lg:row-start-1 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151722] border border-white/10 mb-3 lg:mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-[#FE850C]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold text-white uppercase tracking-[0.15em]",
                                                    children: content.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "font-bold text-white leading-[1.05] mb-3 lg:mb-4 max-w-[600px] tracking-tight text-[32px] md:text-[44px] lg:text-[54px]",
                                            children: content.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-white/70 text-[15px] md:text-[17px] lg:text-[18px] leading-[1.45] md:leading-[1.5] max-w-[500px] font-medium",
                                            children: content.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                className: "flex justify-center lg:justify-end items-center order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 z-10 w-full",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-[400px] lg:max-w-[420px] xl:max-w-[440px] hover:scale-[1.02] transition-transform duration-700 ease-out",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$usp$2d$image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$usp$2d$image$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "CraftX USP Illustration",
                                        className: "w-full h-auto object-contain drop-shadow-2xl",
                                        sizes: "(max-width: 1024px) 100vw, 50vw",
                                        quality: 90
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                className: "flex flex-col order-3 lg:col-start-1 lg:row-start-2 z-10",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.15
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "p-4 md:py-4 md:px-5 bg-[#151722] border border-white/[0.06] rounded-[16px] border-l-[3px] border-l-[#FE850C] flex items-center min-h-[68px] md:min-h-[72px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-white font-semibold text-base md:text-[17px] leading-snug",
                                        children: content.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 z-10 relative",
                        children: points.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1
                                },
                                className: "flex flex-row items-center gap-3 md:gap-4 p-4 lg:p-5 bg-[#151722]/50 border border-white/[0.06] rounded-[20px] hover:bg-[#151722] transition-colors duration-300 h-full min-h-[72px] md:min-h-[110px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-9 h-9 md:w-[38px] md:h-[38px] rounded-xl bg-[#1A1C28] border border-white/[0.08] flex items-center justify-center",
                                        children: icons[index]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-white font-bold text-[15px] md:text-[17px] mb-0.5 tracking-tight leading-[1.35] md:leading-[1.4]",
                                                children: point.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-white/60 text-[13px] md:text-[14px] leading-[1.35] md:leading-[1.4] font-medium",
                                                children: point.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/KillerUSPSection.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/images/problem_1_call_1789382987263.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/problem_1_call_1789382987263.17b1d811.jpg");}),
"[project]/src/assets/images/problem_1_call_1789382987263.jpg.mjs { IMAGE => \"[project]/src/assets/images/problem_1_call_1789382987263.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_1_call_1789382987263$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/problem_1_call_1789382987263.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_1_call_1789382987263$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1200,
    height: 896,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDEs9Wv5GCxXcqIgYncxJI7enrWUopFwbZ//9k="
};
}),
"[project]/src/assets/images/problem_2_address_1789383001044.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/problem_2_address_1789383001044.59e38887.jpg");}),
"[project]/src/assets/images/problem_2_address_1789383001044.jpg.mjs { IMAGE => \"[project]/src/assets/images/problem_2_address_1789383001044.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_2_address_1789383001044$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/problem_2_address_1789383001044.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_2_address_1789383001044$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1200,
    height: 896,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmh4y1QW0JhuriN1yGPnH5uKwtub6aH//Z"
};
}),
"[project]/src/assets/images/problem_3_quote_1789383017488.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/problem_3_quote_1789383017488.c1c596bd.jpg");}),
"[project]/src/assets/images/problem_3_quote_1789383017488.jpg.mjs { IMAGE => \"[project]/src/assets/images/problem_3_quote_1789383017488.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_3_quote_1789383017488$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/problem_3_quote_1789383017488.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_3_quote_1789383017488$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1200,
    height: 896,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDj/Eojkv45pFHmzw+aSF9ePWlZWJ8j/9k="
};
}),
"[project]/src/assets/images/problem_4_whatsapp_1789383046139.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/problem_4_whatsapp_1789383046139.8eafa8d8.jpg");}),
"[project]/src/assets/images/problem_4_whatsapp_1789383046139.jpg.mjs { IMAGE => \"[project]/src/assets/images/problem_4_whatsapp_1789383046139.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_4_whatsapp_1789383046139$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/problem_4_whatsapp_1789383046139.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_4_whatsapp_1789383046139$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1200,
    height: 896,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDndT8Q3n9kCy8+VTLHk7WO0jkEdalJtg2kj//Z"
};
}),
"[project]/src/components/landing-page/ProblemSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProblemSection",
    ()=>ProblemSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_1_call_1789382987263$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$problem_1_call_1789382987263$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/problem_1_call_1789382987263.jpg.mjs { IMAGE => "[project]/src/assets/images/problem_1_call_1789382987263.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_2_address_1789383001044$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$problem_2_address_1789383001044$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/problem_2_address_1789383001044.jpg.mjs { IMAGE => "[project]/src/assets/images/problem_2_address_1789383001044.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_3_quote_1789383017488$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$problem_3_quote_1789383017488$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/problem_3_quote_1789383017488.jpg.mjs { IMAGE => "[project]/src/assets/images/problem_3_quote_1789383017488.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_4_whatsapp_1789383046139$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$problem_4_whatsapp_1789383046139$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/problem_4_whatsapp_1789383046139.jpg.mjs { IMAGE => "[project]/src/assets/images/problem_4_whatsapp_1789383046139.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sticky-note.js [ssr] (ecmascript) <export default as StickyNote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
;
;
;
const ProblemSection = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const problems = [
        {
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_1_call_1789382987263$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$problem_1_call_1789382987263$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
            text: t("problem.points.0")
        },
        {
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_2_address_1789383001044$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$problem_2_address_1789383001044$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
            text: t("problem.points.1")
        },
        {
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_3_quote_1789383017488$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$problem_3_quote_1789383017488$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            text: t("problem.points.2")
        },
        {
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$problem_4_whatsapp_1789383046139$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$problem_4_whatsapp_1789383046139$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"],
            text: t("problem.points.3")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "problem",
        className: "bg-[#F7F5F0] overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container-1404",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-12 mb-16 lg:mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-full lg:max-w-[45%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-100px"
                                    },
                                    className: "inline-flex items-center gap-2.5 bg-white rounded-full px-4 py-1.5 border border-gray-100/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 rounded-full bg-[#FE850C]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-[#0C0D17] font-semibold tracking-[0.12em] text-[11px] uppercase pt-0.5",
                                            children: t("problem.title")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].h2, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-100px"
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.1,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    className: "text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-black text-[#0C0D17] leading-[1.05] tracking-[-0.03em] mb-6",
                                    children: t("problem.headline")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2
                                    },
                                    className: "text-lg md:text-xl text-gray-700 font-medium leading-[1.4] tracking-tight",
                                    children: t("problem.description")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-100px"
                            },
                            transition: {
                                duration: 0.7,
                                delay: 0.3
                            },
                            className: "w-full lg:max-w-[40%] bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] p-6 sm:p-8 lg:p-10 relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute left-0 top-0 bottom-0 w-[4px] bg-[#FE850C]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-[18px] md:text-[22px] font-medium text-[#0C0D17] leading-[1.5] tracking-[-0.01em]",
                                    children: t("problem.conclusion")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 mb-4 lg:mb-8",
                    children: problems.map((prob, idx)=>{
                        const Icon = prob.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-50px"
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1 + idx * 0.1,
                                ease: "easeOut"
                            },
                            className: "flex flex-col bg-white rounded-[24px] p-2.5 pb-6 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-full aspect-[4/3] rounded-[18px] overflow-hidden mb-5 relative bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: prob.image,
                                        alt: `Problem ${idx + 1}`,
                                        fill: true,
                                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
                                        className: "object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center group-hover:scale-[1.04] group-hover:rotate-[0.5deg]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[#FE850C]/10 flex items-center justify-center mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                className: "w-4 h-4 text-[#FE850C]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold text-[#0C0D17] leading-[1.4] tracking-tight pr-2",
                                            children: prob.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/ProblemSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/images/solution-section/solution-1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/solution-1.1b7bc895.png");}),
"[project]/src/assets/images/solution-section/solution-1.png.mjs { IMAGE => \"[project]/src/assets/images/solution-section/solution-1.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/solution-section/solution-1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 644,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgUlEQVR42g3LSw7CIBAAUI7pzo0/EopAhGLHxikiHWyxG72CSxMTj+DaM+kBHnt+vtP9VqZCdB7KhSjRkHdescfrfWpc53RwGq1Aqw52G9CzMUG08mgkKG5Ws2A41Sr+Bah5NGuQGzAiNho1712VcM+CX44ZcoQO62sPbbWITmDrfu2IOw59FLYAAAAAAElFTkSuQmCC"
};
}),
"[project]/src/assets/images/solution-section/solution-2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/solution-2.ebead4e6.png");}),
"[project]/src/assets/images/solution-section/solution-2.png.mjs { IMAGE => \"[project]/src/assets/images/solution-section/solution-2.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/solution-section/solution-2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 750,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AJ+AbZx/bI94ZHNcT19FQD4vLSMhJDEsLgCnhHCjg26Pd2OCcmeCdHNXTk5EOjpPQ0IApIJuoYNvhG9dknponoR1mH1uim9jfGVcAKaCcpp9a4VwX5t+app9bZx+bph7a5Z5agCaenKTcmWCa1uUeGaXeWmcf26bfW2TdWYAZFZXlnFli25hj3RllHVkpIFsn35rlHRj+flATAQpQysAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/solution-section/solution-3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/solution-3.22dc236b.png");}),
"[project]/src/assets/images/solution-section/solution-3.png.mjs { IMAGE => \"[project]/src/assets/images/solution-section/solution-3.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/solution-section/solution-3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 853,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AIuVk4Cs04y652F9lnaJl77U3gBra2V6gH2GlZ1ndX59g4O4xckAa2lndnJwgX98h4d/eHZrhIZ5AGtkXHVsZn93c4qDf5eVjZKRgQBwbWV1b2qCfn+NiYaMgHWNfmkAaG1sd3l3dWxkcllFinNbnJF3AF1YT2xXQ2JFL2xVQbuvkauefgBKOCpQNiRKOi2Ti3TWyqSvon77TEYMmCN0+AAAAABJRU5ErkJggg=="
};
}),
"[project]/src/components/landing-page/SolutionSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SolutionSection",
    ()=>SolutionSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/solution-section/solution-1.png.mjs { IMAGE => "[project]/src/assets/images/solution-section/solution-1.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/solution-section/solution-2.png.mjs { IMAGE => "[project]/src/assets/images/solution-section/solution-2.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/solution-section/solution-3.png.mjs { IMAGE => "[project]/src/assets/images/solution-section/solution-3.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
;
;
;
;
const SolutionSection = ({ lang })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][lang].solution;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    // Pure IntersectionObserver for clean scroll architecture
    // Active for BOTH desktop and mobile to ensure same active-state logic without programmatic scrolling
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const stepIndex = Number(entry.target.getAttribute("data-step"));
                    setActiveStep(stepIndex);
                }
            });
        }, {
            root: null,
            // Trigger when the element crosses the middle 20% of the viewport
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0
        });
        const stages = document.querySelectorAll(".solution-stage");
        stages.forEach((stage)=>observer.observe(stage));
        return ()=>{
            stages.forEach((stage)=>observer.unobserve(stage));
            observer.disconnect();
        };
    }, []);
    const icons = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
            className: "w-5 h-5 text-[var(--orange)]"
        }, "smartphone", false, {
            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
            lineNumber: 55,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
            className: "w-5 h-5 text-[var(--orange)]"
        }, "camera", false, {
            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
            lineNumber: 56,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "w-5 h-5 text-[var(--orange)]"
        }, "location", false, {
            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
            lineNumber: 57,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
            className: "w-5 h-5 text-[var(--orange)]"
        }, "calendar", false, {
            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
            lineNumber: 58,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    const photos = [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$solution$2d$section$2f$solution$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    ];
    const renderChatContent = (step)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 absolute inset-0 p-5 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.35,
                        ease: "easeOut"
                    },
                    className: "self-start max-w-[85%] px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-tl-sm text-xs text-[var(--fg-dark-muted)] leading-relaxed shadow-sm",
                    children: t("solution.mockup.greeting")
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                    children: [
                        step >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -8
                            },
                            transition: {
                                duration: 0.35,
                                ease: "easeOut"
                            },
                            className: "self-end max-w-[80%] px-4 py-3 bg-[var(--orange)]/15 border border-[var(--orange)]/25 rounded-2xl rounded-tr-sm text-xs text-[var(--fg-dark)] font-medium shadow-sm",
                            children: t("solution.mockup.selected")
                        }, "selected", false, {
                            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        step >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -8
                            },
                            transition: {
                                duration: 0.35,
                                ease: "easeOut",
                                delay: 0.05
                            },
                            className: "self-start max-w-[85%] px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-tl-sm text-xs text-[var(--fg-dark-muted)] leading-relaxed shadow-sm",
                            children: t("solution.mockup.photoRequest")
                        }, "photoRequest", false, {
                            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        step >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -8
                            },
                            transition: {
                                duration: 0.35,
                                ease: "easeOut"
                            },
                            className: "self-end w-full max-w-[90%] rounded-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex gap-2.5 justify-end",
                                children: photos.map((photo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative shrink-0 w-24 h-[72px] rounded-xl overflow-hidden border border-[var(--border-orange)] shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: photo,
                                            alt: `Roofing work ${i + 1}`,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                            lineNumber: 114,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, "photos", false, {
                            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        step >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -8
                            },
                            transition: {
                                duration: 0.35,
                                ease: "easeOut"
                            },
                            className: "self-end max-w-[80%] px-4 py-3 bg-[var(--orange)]/15 border border-[var(--orange)]/25 rounded-2xl rounded-tr-sm text-xs text-[var(--fg-dark)] font-medium shadow-sm",
                            children: t("solution.mockup.photoUploaded")
                        }, "photoUploaded", false, {
                            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "solution",
        ref: containerRef,
        className: "bg-[#F7F5F0] relative overflow-hidden py-20 lg:py-28 px-4 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container-1404 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-[50%] flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2.5 bg-white rounded-full px-4 h-8 border border-gray-100/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] mb-6 self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 rounded-full bg-[#FE850C]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-[#0C0D17] font-semibold tracking-[0.12em] text-[11px] uppercase pt-0.5",
                                        children: content.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-[36px] md:text-[44px] lg:text-[52px] font-black text-[#0C0D17] leading-[1.05] tracking-[-0.02em] mb-6 lg:max-w-[90%]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-gray-700 font-medium leading-[1.4] tracking-tight mb-8 lg:mb-16 lg:max-w-[90%]",
                                children: content.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col w-full grid auto-rows-fr",
                                style: {
                                    display: "grid",
                                    gridTemplateRows: "repeat(4, 1fr)"
                                },
                                children: content.points.map((point, idx)=>{
                                    const isActive = activeStep === idx;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        "data-step": idx,
                                        className: `solution-stage flex items-center gap-4 lg:gap-6 min-h-[64px] lg:min-h-[100px] py-3 lg:py-8 transition-all duration-500 w-full ${isActive ? "opacity-100 translate-x-2 lg:translate-x-4" : "opacity-40 translate-x-0"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative flex flex-col items-center justify-center min-w-[50px] lg:min-w-[60px] flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: `text-[12px] font-bold tracking-widest transition-colors ${isActive ? "text-[#FE850C]" : "text-gray-400"}`,
                                                        children: [
                                                            "0",
                                                            idx + 1,
                                                            " / 04"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: `w-1.5 h-1.5 rounded-full bg-[#FE850C] absolute -bottom-3.5 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 flex items-center justify-center mt-0.5",
                                                children: icons[idx]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                lineNumber: 195,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: `text-lg md:text-[20px] font-semibold tracking-tight leading-snug transition-colors duration-300 ${isActive ? "text-[#0C0D17]" : "text-gray-600"}`,
                                                    children: point
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                lineNumber: 200,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                        lineNumber: 174,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-[50%] flex flex-col items-center lg:items-end mt-12 lg:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-start gap-3 p-5 lg:p-6 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 border-l-[4px] border-l-[#FE850C] rounded-[16px] mb-12 w-full max-w-[400px] lg:mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5 text-[#FE850C] shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-[#0C0D17] font-semibold text-[15px] leading-relaxed",
                                        children: content.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-[360px] lg:max-w-[400px] lg:sticky pb-10 lg:pb-0",
                                style: {
                                    top: "calc(var(--header-height, 90px) + 32px)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#FE850C]/10 rounded-[40px] blur-[80px] pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative w-full overflow-hidden flex flex-col mx-auto h-[580px] lg:h-[550px]",
                                        style: {
                                            background: "#0F111A",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                            borderRadius: "44px",
                                            boxShadow: "0 25px 80px -15px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 20px rgba(0,0,0,0.5)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-[6px] bg-white/10 rounded-full z-20"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 w-full mt-8 mb-16",
                                                children: renderChatContent(activeStep)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 px-5 pb-8 pt-4 bg-[#0F111A]/90 backdrop-blur-md border-t border-white/[0.04]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-full bg-white/[0.04] rounded-full flex items-center px-4 text-[13px] font-medium text-white/30",
                                                    children: t("solution.mockup.placeholder")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex lg:hidden items-start gap-3 p-5 bg-white shadow-sm border border-gray-100 border-l-[4px] border-l-[#FE850C] rounded-[16px] mt-8 w-full max-w-[360px] mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-5 h-5 text-[#FE850C] shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-[#0C0D17] font-semibold text-[15px] leading-relaxed",
                                children: content.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/SolutionSection.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/landing-page/PricingSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "PricingSection",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PrimaryCTA.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/constants.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const PricingSection = ({ lang })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [billingCycle, setBillingCycle] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("yearly");
    const content = t("pricing");
    if (!content || !content.plans) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "pricing",
        className: "bg-[var(--bg-offwhite)] relative overflow-hidden px-4 lg:px-6",
        style: {
            paddingTop: "160px",
            paddingBottom: "120px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container-1404 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 max-w-[1000px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-left flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].h2, {
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut"
                                    },
                                    className: "text-[40px] md:text-[56px] lg:text-[64px] font-black mb-4 tracking-tight text-[#14161B] leading-[1.05]",
                                    children: content.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.1,
                                        ease: "easeOut"
                                    },
                                    className: "text-gray-600 text-lg lg:text-xl leading-relaxed",
                                    children: content.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                                ease: "easeOut"
                            },
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center p-1.5 rounded-full bg-white border border-gray-200 shadow-sm relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setBillingCycle("monthly"),
                                        className: `relative z-10 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer ${billingCycle === "monthly" ? "text-[#14161B]" : "text-gray-500 hover:text-gray-900"}`,
                                        children: [
                                            billingCycle === "monthly" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                layoutId: "active-pricing-tab",
                                                className: "absolute inset-0 bg-gray-100 rounded-full border border-gray-200/50",
                                                transition: {
                                                    duration: 0.3,
                                                    ease: "easeOut"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "relative z-10",
                                                children: content.monthly || "MONTHLY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setBillingCycle("yearly"),
                                        className: `relative z-10 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer flex items-center gap-2 ${billingCycle === "yearly" ? "text-[#14161B]" : "text-gray-500 hover:text-gray-900"}`,
                                        children: [
                                            billingCycle === "yearly" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                layoutId: "active-pricing-tab",
                                                className: "absolute inset-0 bg-gray-100 rounded-full border border-gray-200/50",
                                                transition: {
                                                    duration: 0.3,
                                                    ease: "easeOut"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "relative z-10",
                                                children: content.yearly || "YEARLY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: `relative z-10 text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full transition-colors duration-300 ${billingCycle === "yearly" ? "bg-[var(--color-accent-orange)] text-white" : "bg-[var(--color-accent-orange)]/10 text-[var(--color-accent-orange)] border border-[var(--color-accent-orange)]/20"}`,
                                                children: content.save || "SAVE UP TO 20%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                (()=>{
                    const mainPlans = content.plans.slice(0, 2);
                    const addonPlan = content.plans[2] || content.plans.find((p)=>p.name === "Add-ons" || p.name === "Zusatzleistungen");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6 lg:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",
                                children: mainPlans.map((plan, index)=>{
                                    const isHighlighted = plan.popular;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 24
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.1 * (index + 1),
                                            ease: "easeOut"
                                        },
                                        className: `relative rounded-[32px] transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between p-8 lg:p-10 ${isHighlighted ? "bg-[#0C0D17] border border-[var(--color-accent-orange)]/50 shadow-[0_16px_40px_rgba(0,0,0,0.15)] z-10" : "bg-white border border-gray-200 shadow-sm"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center text-center mb-8",
                                                        children: [
                                                            plan.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-center mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: `inline-block px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border ${isHighlighted ? "bg-[var(--color-accent-orange)]/10 text-[var(--color-accent-orange)] border-[var(--color-accent-orange)]/20" : "bg-gray-100 text-gray-500 border-gray-200"}`,
                                                                    children: plan.badge
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: `text-2xl lg:text-3xl font-extrabold tracking-tight ${isHighlighted ? "text-white" : "text-[#14161B]"}`,
                                                                    children: plan.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "mb-8 flex flex-col items-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                                                                    mode: "wait",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                                        initial: {
                                                                            opacity: 0
                                                                        },
                                                                        animate: {
                                                                            opacity: 1
                                                                        },
                                                                        exit: {
                                                                            opacity: 0
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-baseline justify-center gap-2.5 flex-wrap",
                                                                                children: [
                                                                                    billingCycle === "yearly" && plan.priceYearly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                                className: `line-through text-xl lg:text-2xl font-bold ${isHighlighted ? "text-gray-500" : "text-gray-400"}`,
                                                                                                children: plan.originalPriceYearly || plan.originalPrice || plan.price
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                                lineNumber: 203,
                                                                                                columnNumber: 39
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                                className: `text-5xl lg:text-[56px] font-black tracking-tight leading-none ${isHighlighted ? "text-white" : "text-[#14161B]"}`,
                                                                                                children: plan.priceYearly
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                                lineNumber: 206,
                                                                                                columnNumber: 39
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                        className: `text-5xl lg:text-[56px] font-black tracking-tight leading-none ${isHighlighted ? "text-white" : "text-[#14161B]"}`,
                                                                                        children: plan.price
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                        lineNumber: 211,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium text-sm lg:text-base ml-1 ${isHighlighted ? "text-gray-400" : "text-gray-500"}`,
                                                                                        children: billingCycle === "yearly" ? plan.periodYearly || plan.period : plan.period
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                        lineNumber: 215,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            plan.savePlanTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[var(--color-accent-orange)] font-semibold text-sm",
                                                                                    children: billingCycle === "yearly" ? plan.savePlanTitleYearly || "(20% discount included)" : plan.savePlanTitle || "(save up to 20% for yearly plan)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                    lineNumber: 221,
                                                                                    columnNumber: 37
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                lineNumber: 220,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, plan.priceYearly ? billingCycle + index : index, true, {
                                                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PrimaryCTA"], {
                                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CONTACT_LINKS"].hubspotDemo,
                                                                target: "_blank",
                                                                text: plan.cta,
                                                                textClassName: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: `w-full h-px mb-8 ${isHighlighted ? "bg-white/10" : "bg-gray-200"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8",
                                                        children: plan.features.map((feature, fIndex)=>{
                                                            const isObject = typeof feature === "object" && feature !== null;
                                                            const title = isObject ? feature.title : feature;
                                                            const description = isObject ? feature.description : undefined;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: `w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isHighlighted ? "bg-[var(--color-accent-orange)]/10" : "bg-gray-100"}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: `w-3 h-3 ${isHighlighted ? "text-[var(--color-accent-orange)]" : "text-[#14161B]"}`,
                                                                            strokeWidth: 3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 text-left",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: `text-base font-semibold block leading-snug ${isHighlighted ? "text-gray-100" : "text-[#14161B]"}`,
                                                                                children: title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                lineNumber: 257,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                className: `text-sm mt-1.5 leading-relaxed font-normal ${isHighlighted ? "text-gray-400" : "text-gray-500"}`,
                                                                                children: description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                                lineNumber: 261,
                                                                                columnNumber: 37
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, fIndex, true, {
                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                lineNumber: 165,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "pt-2 mt-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: `text-xs leading-relaxed ${isHighlighted ? "text-gray-500" : "text-gray-400"}`,
                                                    children: plan.footer
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                lineNumber: 273,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            addonPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 24
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.3,
                                    ease: "easeOut"
                                },
                                className: "w-full relative p-8 lg:p-10 rounded-[32px] bg-[#0C0D17] shadow-xl mt-8 lg:mt-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 lg:mb-10 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "w-full lg:w-1/2 flex flex-col justify-start",
                                                    children: [
                                                        addonPlan.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-5 bg-white/5 text-gray-300 border border-white/10 w-fit",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                    className: "w-3.5 h-3.5 text-[var(--color-accent-orange)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                addonPlan.badge
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "text-[32px] lg:text-[40px] font-black tracking-tight text-white leading-[1.15]",
                                                            children: addonPlan.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        addonPlan.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-white/80 font-semibold text-lg inline-block mt-3",
                                                            children: addonPlan.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "w-full lg:w-1/2 flex flex-col justify-start lg:pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-base lg:text-lg text-gray-400 font-medium leading-relaxed mb-6",
                                                            children: addonPlan.footer
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PrimaryCTA"], {
                                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CONTACT_LINKS"].hubspotDemo,
                                                            target: "_blank",
                                                            text: addonPlan.cta,
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "w-5 h-5 text-white",
                                                                strokeWidth: 2.5
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 33
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                            lineNumber: 293,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6",
                                            children: addonPlan.features.map((feature, fIndex)=>{
                                                const isObject = typeof feature === "object" && feature !== null;
                                                const title = isObject ? feature.title : feature;
                                                const description = isObject ? feature.description : undefined;
                                                const Icon = fIndex === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-row items-start gap-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-xl bg-[var(--color-accent-orange)]/10 flex items-center justify-center shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                                className: "w-5 h-5 text-[var(--color-accent-orange)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                                    className: "text-white text-base lg:text-lg font-bold mb-1.5",
                                                                    children: title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-400 leading-relaxed font-normal",
                                                                    children: description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, fIndex, true, {
                                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                            lineNumber: 328,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                    lineNumber: 290,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                                lineNumber: 283,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
                        lineNumber: 145,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })()
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing-page/PricingSection.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/PricingSection.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/images/whatsapp-section/image-1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/image-1.dbce94de.png");}),
"[project]/src/assets/images/whatsapp-section/image-1.png.mjs { IMAGE => \"[project]/src/assets/images/whatsapp-section/image-1.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/whatsapp-section/image-1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1197,
    height: 1154,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AHV/Uv94h1v/gIxT/3V/Wf+Kk37/mKCf/5Scpv+Sm6f/AHqFTP94g1D/dYNi/6Sqrf+0uMD/vcTQ/7vCz//AxtP/AG12WP93gGr/WW5o/8C3sv/Cubr/sLnJ/7O8zP+pqLP/AJaWm/+EipH/cn2H/8HH0P/P1d7/t77N/7i/zv+ln6n/ALKrq/9/gIX/a3R8/5udpP+utL7/trzG/8DG0P+snaf/ALCcmP+lk5P/qaeu/5+Qjf9dY2v/RkxU/0dNV/9QVmL/ANitm/+Db27/enZ+/7mdk/9VUlT/O0JM/yMpMf8NEhn/ANmqlP+sin3/dVxY/7GMfP+bi4T/VFhg/zM3Pv8mKi//LliooXfu344AAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/whatsapp-section/image-2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/image-2.7673305f.png");}),
"[project]/src/assets/images/whatsapp-section/image-2.png.mjs { IMAGE => \"[project]/src/assets/images/whatsapp-section/image-2.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/whatsapp-section/image-2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1197,
    height: 1154,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR42g3OTUvCAACA4f0QDwmJRqixDD/aMNTlSrdkOwwjQXIHkyLzJklfYkFEZERkl7BTF6OPU3QQK+gkFHSKfkT/4HX3l5dHqJ/1KNg1IuIUom+MoNfNnOijYqRY12WE3LJN0D+BkUlRLlrkzSz2ikXJTDMvuhH0BRk5FuC5e8L/8I6/YZ/vn19OD7fRwi6EpbiXrDbLdafD++CNl/6Aj88vmrt19rZyCO1NZ11SOb+4ovf4SrNa5qBoYhsJjmpO8LSvsWrJNFptLm8eSMYVVElGj05SyfgQGoUECcmPJyATipvMSItEpDRWKsTtRtgxaEli0QCix4UyPc7xmsL9jkq3GqWV9zMCtPOJ9yGJ9FUAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/whatsapp-section/image-3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/image-3.1e6f194a.png");}),
"[project]/src/assets/images/whatsapp-section/image-3.png.mjs { IMAGE => \"[project]/src/assets/images/whatsapp-section/image-3.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/whatsapp-section/image-3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1197,
    height: 1154,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42g2OS0sCYQAAvx9YEoYeOoQQFR2Cog5hEJEEQphl7SkrsTy4laBZFL7yrftq2XJ7oUayUf2JaQ9zG5gRumqhaxaqYtJp6dRrXQrFNs77Cz9GGfGo9zAN26Xnis9UH7qsh+JEpCu0loYYDUf82QrfVgtFe6XZNDhNXLKwFGYysIkY9B0+7De+hg6/nwP6TxalYgNZvmFrW0JU6ybncgUpnuE+l0Ep3JKR82TzDU6O04j0xR17B2dEdiR8Yx7mfV6iK9Mc7cbYD4URzbpGo6aSSObwB4L4p5aZ8M4y7gkwN7PoJtzraqVDpdwmf10ilcoSO0wS3IiyuhbmH42iwUlAmZq/AAAAAElFTkSuQmCC"
};
}),
"[project]/src/assets/images/whatsapp-section/image-4.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/image-4.5d9cd19c.png");}),
"[project]/src/assets/images/whatsapp-section/image-4.png.mjs { IMAGE => \"[project]/src/assets/images/whatsapp-section/image-4.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/whatsapp-section/image-4.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1197,
    height: 1154,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42gWA3y8CcQDAv3+N2cyDB29mPLV5ibFRFhviGNbVA9FNJrmKrk76NRdbp7vZldLuIWO4B+PR/EEfE+Vmjrrp8OJ98+Z5tJ07bKfDQ7uLYdYQl6U1Kg0NvaQw6Pf4cPt0nr9wX38xmnXEnrxFLp8ieRpHu85h2gO67g969gZZmkMYt00uMjoLy2GCfj/VSgvr8Z24UmBodATRqDYoqhpnapV9KcZ8MMbSygFTM+sMj40jXKOMKkeQI0ns4hXhDYnZxQCTPh/S5g7iz9J4yp8QDQWw0ofUCwpKepfQ9gSJ41WEdR6llklxX1TpFRJ8tnSymkw4No185OMfhoqlKV1t9m8AAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/whatsapp-section/image-5.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/image-5.6a76be67.png");}),
"[project]/src/assets/images/whatsapp-section/image-5.png.mjs { IMAGE => \"[project]/src/assets/images/whatsapp-section/image-5.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/whatsapp-section/image-5.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1197,
    height: 1154,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42g3OXStDYQDA8eeLuVWu3MnNyszUtFJrROfENmRvp6HN2HYsHaPJ2o6ayZrGmk6bpCUpJS42xK4ouXn+fIOfUNQAdrsT++QUA0ODDI/YCG+kSOc08sW4FG6PQqXa5PyyTe2iRb15Q8O65azRJpxISKH6Vnnp9nn7/KL38U23/8vz+w8Pj69s61kppr0qT50WvU4D6/oe0zwhl0yjxXRWlqNSzMx6Oa5f0bTuODIKOFw+bA4Fp1fDo2hSON1jHJaK1MqnVAom2T2TpJ5nLWkwtxj5N3hchP0qwaUA874Q2YxOSgsSi64z7vZLUdlPUd6Nc7AZJaMblMwqRiTEzpbB6MSC/APYuLYXSLsy1wAAAABJRU5ErkJggg=="
};
}),
"[project]/src/assets/images/whatsapp-section/image-6.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/image-6.781844da.png");}),
"[project]/src/assets/images/whatsapp-section/image-6.png.mjs { IMAGE => \"[project]/src/assets/images/whatsapp-section/image-6.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$6$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/whatsapp-section/image-6.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$6$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1197,
    height: 1154,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBElEQVR42g3MPUsCcQCA8f/HMIzaHKPuQE1NPa8ktDLE4hDphY5SbAglDguNjArrLLMUh8ukhkzKFrdaWlr7SE83PNvDT3SHLzR6dSpmGqt/zpGRJyDNUCjGuW1tI9I5P/ulJLXmIZ2nax5Oi9Rz9ty65+19iJhdnOL4qsLH6Itq9YJEVCWzuoJ50+bn988WdnUM846CcULM7UJXXUR8XiR/grS2iWj3BjwPRgSDCpLsxWxa1BoWkieM0zmJKJ+ZdDuPlDbWiChR+p/fvNqFwgso8jQiFImhJVOUdzRUZZ7MVpZsvojH7eNS1xDxpRSBOZU9PYsse3CMjeNwOG1+goP1Zf4B7DKNT1C+tbUAAAAASUVORK5CYII="
};
}),
"[project]/src/components/landing-page/WhatsAppExampleSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "WhatsAppExampleSection",
    ()=>WhatsAppExampleSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/whatsapp-section/image-1.png.mjs { IMAGE => "[project]/src/assets/images/whatsapp-section/image-1.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/whatsapp-section/image-2.png.mjs { IMAGE => "[project]/src/assets/images/whatsapp-section/image-2.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/whatsapp-section/image-3.png.mjs { IMAGE => "[project]/src/assets/images/whatsapp-section/image-3.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/whatsapp-section/image-4.png.mjs { IMAGE => "[project]/src/assets/images/whatsapp-section/image-4.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/whatsapp-section/image-5.png.mjs { IMAGE => "[project]/src/assets/images/whatsapp-section/image-5.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$6$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/whatsapp-section/image-6.png.mjs { IMAGE => "[project]/src/assets/images/whatsapp-section/image-6.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
const iconMap = {
    truck: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    fileText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
        lineNumber: 21,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    creditCard: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
        lineNumber: 22,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    globe: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    mail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0))
};
const WhatsAppExampleSection = ({ lang })=>{
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][lang].whatsappExample;
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const carouselImages = [
        {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "WhatsApp Example 1"
        },
        {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "WhatsApp Example 2"
        },
        {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "WhatsApp Example 3"
        },
        {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "WhatsApp Example 4"
        },
        {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "WhatsApp Example 5"
        },
        {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$whatsapp$2d$section$2f$image$2d$6$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "WhatsApp Example 6"
        }
    ];
    // Reset index if array shrinks (e.g. during hot-reload)
    const safeIndex = currentIndex % carouselImages.length;
    // Auto-rotate images every 2 seconds
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setCurrentIndex(0);
    }, [
        carouselImages.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev + 1) % carouselImages.length);
        }, 2000);
        return ()=>clearInterval(interval);
    }, [
        carouselImages.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative",
        style: {
            backgroundColor: "var(--bg-offwhite)",
            paddingTop: "32px",
            paddingBottom: "48px",
            overflow: "clip"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-80px",
                    right: "-60px",
                    width: "360px",
                    height: "360px",
                    background: "rgba(254, 133, 12, 0.06)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: "-60px",
                    left: "-40px",
                    width: "280px",
                    height: "280px",
                    background: "rgba(254, 133, 12, 0.04)",
                    borderRadius: "50%",
                    filter: "blur(80px)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container-1404 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "wa-editorial-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.65,
                                ease: "easeOut"
                            },
                            className: "wa-left-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "wa-panel-top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "wa-pill-label",
                                            children: content.qrCodePlacement
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "wa-heading",
                                            children: content.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "wa-description",
                                            children: content.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "wa-items-grid",
                                            children: content.placementItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 8
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: 0.08 + index * 0.06,
                                                        duration: 0.4
                                                    },
                                                    className: "wa-item-card",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "wa-item-icon",
                                                            children: iconMap[item.icon]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "wa-item-label",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: 0.45,
                                        duration: 0.5
                                    },
                                    className: "wa-conclusion",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "wa-conclusion-bar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "wa-conclusion-text",
                                            children: content.summary
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.65,
                                delay: 0.12,
                                ease: "easeOut"
                            },
                            onHoverStart: ()=>setIsHovered(true),
                            onHoverEnd: ()=>setIsHovered(false),
                            className: "wa-right-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                    animate: {
                                        scale: isHovered ? 1.025 : 1
                                    },
                                    transition: {
                                        duration: 0.55,
                                        ease: "easeOut"
                                    },
                                    className: "wa-image-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                                            mode: "wait",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                exit: {
                                                    opacity: 0
                                                },
                                                transition: {
                                                    duration: 0.6,
                                                    ease: "easeInOut"
                                                },
                                                className: "wa-image-frame",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: carouselImages[safeIndex].src,
                                                    alt: carouselImages[safeIndex].alt,
                                                    fill: true,
                                                    className: `object-cover ${safeIndex === 0 ? "object-right-top" : "object-top"}`,
                                                    priority: true,
                                                    sizes: "(max-width: 768px) 100vw, 48vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, safeIndex, false, {
                                                fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "wa-image-gradient"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "wa-dots",
                                    children: carouselImages.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentIndex(index),
                                            "aria-label": `Go to slide ${index + 1}`,
                                            className: `wa-dot${index === safeIndex ? " wa-dot-active" : ""}`
                                        }, index, false, {
                                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        /* ── OUTER GRID ── */
        .wa-editorial-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 14px;
          align-items: stretch;
        }

        /* ── LEFT PANEL ── */
        .wa-left-panel {
          background-color: #FDFCF8;
          border: 1px solid rgba(20, 22, 27, 0.09);
          border-radius: 28px;
          padding: 32px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          box-shadow: 0 4px 32px -8px rgba(20, 22, 27, 0.07);
        }

        .wa-panel-top {
          display: flex;
          flex-direction: column;
        }

        /* Pill label */
        .wa-pill-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 13px;
          background: rgba(254, 133, 12, 0.10);
          border: 1px solid rgba(254, 133, 12, 0.22);
          border-radius: 9999px;
          color: #FE850C;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
          width: fit-content;
        }

        /* Heading */
        .wa-heading {
          font-size: clamp(26px, 3.2vw, 46px);
          font-weight: 800;
          color: #14161B;
          line-height: 1.12;
          letter-spacing: -0.022em;
          margin: 0 0 10px 0;
          max-width: 480px;
        }

        /* Description */
        .wa-description {
          font-size: clamp(14px, 1.2vw, 16px);
          color: rgba(20, 22, 27, 0.62);
          line-height: 1.7;
          margin: 0 0 16px 0;
          max-width: 460px;
        }

        /* ── ITEM GRID ── */
        .wa-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 0;
        }

        .wa-item-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 15px;
          background-color: #FFFFFF;
          border: 1px solid rgba(20, 22, 27, 0.09);
          border-radius: 13px;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }

        .wa-item-card:hover {
          border-color: rgba(254, 133, 12, 0.35);
          box-shadow: 0 2px 16px -4px rgba(254, 133, 12, 0.15);
        }

        .wa-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background-color: rgba(254, 133, 12, 0.12);
          color: #FE850C;
          flex-shrink: 0;
        }

        .wa-item-label {
          font-size: 13.5px;
          font-weight: 600;
          color: #14161B;
          line-height: 1.3;
        }

        /* ── CONCLUSION CALLOUT ── */
        .wa-conclusion {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 17px 20px;
          background: linear-gradient(135deg, rgba(254, 133, 12, 0.10) 0%, rgba(255, 107, 53, 0.07) 100%);
          border: 1px solid rgba(254, 133, 12, 0.20);
          border-radius: 15px;
        }

        .wa-conclusion-bar {
          width: 4px;
          align-self: stretch;
          background: linear-gradient(180deg, #FE850C 0%, #FF6B35 100%);
          border-radius: 4px;
          flex-shrink: 0;
          min-height: 20px;
        }

        .wa-conclusion-text {
          font-size: 13.5px;
          font-weight: 600;
          color: #14161B;
          line-height: 1.68;
          margin: 0;
        }

        /* ── RIGHT IMAGE PANEL ── */
        .wa-right-panel {
          border-radius: 28px;
          overflow: clip;
          position: relative;
          min-height: 600px;
          height: 100%;
          cursor: default;
          isolation: isolate;
          contain: layout paint;
        }

        .wa-image-inner {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          overflow: hidden;
        }

        .wa-image-frame {
          position: absolute;
          inset: 0;
        }

        .wa-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(12, 13, 23, 0.22) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
          border-radius: 28px;
        }

        /* ── DOTS ── */
        .wa-dots {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 2;
        }

        .wa-dot {
          height: 6px;
          width: 6px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .wa-dot-active {
          width: 20px;
          background-color: #FE850C;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .wa-editorial-grid {
            grid-template-columns: 1fr 1fr;
          }

          .wa-left-panel {
            padding: 28px 30px;
          }
        }

        @media (max-width: 768px) {
          .wa-editorial-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .wa-right-panel {
            min-height: 400px;
            position: relative;
          }

          .wa-left-panel {
            padding: 28px 22px;
          }

          .wa-items-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .wa-items-grid {
            grid-template-columns: 1fr;
          }

          .wa-left-panel {
            padding: 24px 18px;
          }

          .wa-right-panel {
            min-height: 320px;
          }
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/landing-page/WhatsAppExampleSection.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/images/how-it-works/workflow-1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/workflow-1.1b6f8e0b.png");}),
"[project]/src/assets/images/how-it-works/workflow-1.png.mjs { IMAGE => \"[project]/src/assets/images/how-it-works/workflow-1.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/how-it-works/workflow-1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 410,
    height: 297,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AKCWe/+Jcm3/jnBm/7mhl//Gsan/9fTz/+f05P/x++//AMCcgv+sdV3/p21W/5FtYP/MxcP/39/f/+bm5f/7/Pv/AMq5wP+jeG//mXZs/5J6cv/Py8n/29vb/+Xl5f/8/Pz/AMLL8P+6t9T/tKiy/5yEff/X087/5ezq/+/08P/7/fv/AK2v1P/Dpqz/tn5s/6eDdv+rt5z/wuK9/9Lyy//v/ev/AKV5cvqtiYj/qZqs/7WPhf/S08r/4u3g/+z36v/1+vT6F/OZZJb3IyAAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/how-it-works/workflow-2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/workflow-2.a2455514.png");}),
"[project]/src/assets/images/how-it-works/workflow-2.png.mjs { IMAGE => \"[project]/src/assets/images/how-it-works/workflow-2.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/how-it-works/workflow-2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 410,
    height: 297,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AK/Bv/+Gp6L/eZ6a/5SvrP/c4+L/1uDf/9Te3f/m7ur/AKm7tv+dubX/kLGs/5euqP94j4z/QGpl/zJgW/+RpqL/AN3b2P/p7+n/5O7j/9jazf94eXj/SEtK/0hLSf+YmZj/AM7Rx//X4sv/z+nF/8vgwf/J0s7/y9TV/9HR0P/LzMH/ALzRwf/r7er/8vbw/9Lby//Z5tv/+fr6/+jq5v98d27/AKzLsfrg6Nv/1OTP/7zWuP/N5NT/+Pj4/9rX1P9QR0P6oZSYoVGa2GkAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/how-it-works/workflow-3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/workflow-3.f45ff71d.png");}),
"[project]/src/assets/images/how-it-works/workflow-3.png.mjs { IMAGE => \"[project]/src/assets/images/how-it-works/workflow-3.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/how-it-works/workflow-3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 410,
    height: 297,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AKt8kv/HusL/0M/S/7Ccg/+jhWX/opKO/46Giv9WUVD/ALeru//f29v/6Ofk/6uvn/+vpob/uq+h/6GLgv96XE3/ALCvvv/a2tr/6Ojn/7Kgk/+rmYz/x8nF/6+biv+DYVL/ALe1xP/i4uL/7e3t/7avrf+kmI//uqOE/6OOdv9iXmP/ALS1x//X3+P/4eXq/9vY2//Jw8T/sJeH/5yIgv9nZnP/AJuat/q0ucz/wcbQ/7Gusf+RiIn/roVz/3xjWv9WWWz6NImNyRJQ5tgAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/how-it-works/workflow-4.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/workflow-4.087f3f18.png");}),
"[project]/src/assets/images/how-it-works/workflow-4.png.mjs { IMAGE => \"[project]/src/assets/images/how-it-works/workflow-4.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/how-it-works/workflow-4.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 820,
    height: 594,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AKrDwf9wnpj/ZpiS/528uf/U2d//7/T2//X4/f/2+Pz/AOXm5f/c3t7/5Ofm/+jr6/+tt7D/wMfJ/8nDxf/HycT/AN3b3//r6+v/+Pj4/+bj5v+moJT/pJmF/5VRRP+3e3P/AM3K0//k5OT/+/v7/9nU2/+jenb/rIJ9/39bWf+JbG7/ALq3xv/i4uL/8fHx/8PA0f9xYof/fGqM/2tfhP9gWoX/AIeCo/qwrcD/s7DD/4uGqv89NXb/Qzt6/0M7ev8+NnX6auOSu/PJpOcAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/how-it-works/workflow-5.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/workflow-5.166f9440.png");}),
"[project]/src/assets/images/how-it-works/workflow-5.png.mjs { IMAGE => \"[project]/src/assets/images/how-it-works/workflow-5.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/how-it-works/workflow-5.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 820,
    height: 594,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwklEQVR42h2MvWvCUADE33/YrVBowaGdCx26tSVLoUNRQUUdxUlw0sHRTRTBL0jUpyZIzHOQfA0hmOHnM8PBHXe/E7P5mpPyCMMw12K5wfU8giAgjmOEp4NSKi/TNNX+jOu6+L5PkiQIKfdIKXMiyzIc+4hlbbGdox5f9GBrc3+JokhTEYPBlOFozWR1wpr2EZOxiTwods4Z03T4MRrUmlU63Ta9UgHx+PB7fXkqUngu8/bxz2vlG6P1Renvk7rxfr0B8v6hz9lW2mEAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/images/how-it-works/workflow-6.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/workflow-6.8c8a4629.png");}),
"[project]/src/assets/images/how-it-works/workflow-6.png.mjs { IMAGE => \"[project]/src/assets/images/how-it-works/workflow-6.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$6$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/how-it-works/workflow-6.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$6$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 410,
    height: 297,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwUlEQVR42j3Mu2rCYABA4f85u/QNCi4d2sFCL9CWDhU0OHlFRBBdROKVeBcXURclwSiEaAwJCUiCy9HJ4WyHT9RbYzJSgtTfN/tWh9N6jWVZOI5DEAQIebCgVsiTj0bYyA128zm2beP7PmEYImZDhVKxSuz9k7YyQdd1DMPAdV3O59tQyaX4jX6QltL0p8s773ke1tFBVMsSbz8v/Me/GA17qKqKpmmYpom+PSAepefLQ/KJSPaVmtJltVTvNeXZ5QrEXJ5uj3Kz+AAAAABJRU5ErkJggg=="
};
}),
"[project]/src/components/landing-page/WorkflowStepTimeline.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "WorkflowStepTimeline",
    ()=>WorkflowStepTimeline
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [ssr] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/how-it-works/workflow-1.png.mjs { IMAGE => "[project]/src/assets/images/how-it-works/workflow-1.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/how-it-works/workflow-2.png.mjs { IMAGE => "[project]/src/assets/images/how-it-works/workflow-2.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/how-it-works/workflow-3.png.mjs { IMAGE => "[project]/src/assets/images/how-it-works/workflow-3.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/how-it-works/workflow-4.png.mjs { IMAGE => "[project]/src/assets/images/how-it-works/workflow-4.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/how-it-works/workflow-5.png.mjs { IMAGE => "[project]/src/assets/images/how-it-works/workflow-5.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$6$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/how-it-works/workflow-6.png.mjs { IMAGE => "[project]/src/assets/images/how-it-works/workflow-6.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
const stepIcons = [
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
        className: "w-4 h-4 md:w-5 md:h-5"
    }, "message", false, {
        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
        className: "w-4 h-4 md:w-5 md:h-5"
    }, "database", false, {
        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "w-4 h-4 md:w-5 md:h-5"
    }, "filetext", false, {
        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
        className: "w-4 h-4 md:w-5 md:h-5"
    }, "calendar", false, {
        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
        className: "w-4 h-4 md:w-5 md:h-5"
    }, "clipboard", false, {
        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
        className: "w-4 h-4 md:w-5 md:h-5"
    }, "receipt", false, {
        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0))
];
const stepImages = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$how$2d$it$2d$works$2f$workflow$2d$6$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
];
const WorkflowStepTimeline = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start center",
            "end center"
        ]
    });
    const scaleY = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["useSpring"])(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const steps = t("howItWorks.steps").map((step, index)=>({
            ...step,
            icon: stepIcons[index],
            image: stepImages[index]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        ref: containerRef,
        className: "bg-transparent overflow-hidden relative px-4 lg:px-6",
        style: {
            paddingTop: "var(--section-py)",
            paddingBottom: "var(--section-py)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex items-start justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "w-[600px] h-[600px] bg-[var(--orange)]/6 rounded-full blur-[140px] translate-y-1/4"
                }, void 0, false, {
                    fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container-1404 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.45,
                            ease: [
                                0.23,
                                1,
                                0.32,
                                1
                            ]
                        },
                        className: "text-center max-w-2xl mx-auto mb-10 md:mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "section-label text-center block",
                                children: t("howItWorks.subtitle")
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-[#0C0D17] mb-3 leading-tight",
                                style: {
                                    fontSize: "clamp(24px, 3.5vw, 44px)"
                                },
                                children: t("howItWorks.title")
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm md:text-base font-normal",
                                children: t("howItWorks.description")
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute left-[31px] md:left-1/2 top-8 bottom-8 w-px bg-[var(--border-light-strong)] md:block hidden -translate-x-1/2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                style: {
                                    scaleY,
                                    originY: 0
                                },
                                className: "absolute left-[31px] md:left-1/2 top-8 bottom-8 w-[2px] bg-[var(--orange)] md:block hidden -translate-x-1/2 z-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-10 md:space-y-0",
                                children: steps.map((step, index)=>{
                                    const isEven = index % 2 === 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                        initial: "hidden",
                                        whileInView: "visible",
                                        viewport: {
                                            once: true,
                                            margin: "-80px"
                                        },
                                        variants: {
                                            hidden: {
                                                opacity: 0,
                                                y: 32
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.45,
                                                    ease: [
                                                        0.23,
                                                        1,
                                                        0.32,
                                                        1
                                                    ],
                                                    staggerChildren: 0.05
                                                }
                                            }
                                        },
                                        className: "relative flex flex-col md:flex-row items-start mb-6 md:mb-10 last:mb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute left-[31px] md:left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center top-7",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                    variants: {
                                                        hidden: {
                                                            opacity: 0,
                                                            scale: 0.4,
                                                            y: 16
                                                        },
                                                        visible: {
                                                            opacity: 1,
                                                            scale: 1,
                                                            y: 0,
                                                            transition: {
                                                                duration: 0.35,
                                                                ease: [
                                                                    0.23,
                                                                    1,
                                                                    0.32,
                                                                    1
                                                                ],
                                                                delay: 0.05
                                                            }
                                                        }
                                                    },
                                                    className: "relative w-9 h-9 rounded-full bg-white border-2 border-[#FE850C] flex items-center justify-center text-[#0C0D17] font-black text-xs shadow-md hover:bg-[#FE850C] hover:text-white transition-all duration-400",
                                                    children: [
                                                        index + 1,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: `absolute top-1/2 -translate-y-1/2 h-px w-8 bg-[var(--orange)]/40 ${isEven ? "right-full mr-0.5" : "left-full ml-0.5"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: `absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--orange)]/50 ${isEven ? "right-full -translate-x-[30px]" : "left-full translate-x-[30px]"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: `w-full md:w-[46%] ${isEven ? "md:mr-auto order-2 md:order-1" : "md:ml-auto order-2"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                    variants: {
                                                        hidden: {
                                                            opacity: 0,
                                                            y: 32,
                                                            filter: "blur(6px)"
                                                        },
                                                        visible: {
                                                            opacity: 1,
                                                            y: 0,
                                                            filter: "blur(0px)",
                                                            transition: {
                                                                duration: 0.45,
                                                                ease: [
                                                                    0.23,
                                                                    1,
                                                                    0.32,
                                                                    1
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    whileHover: {
                                                        scale: 1.01,
                                                        y: -4,
                                                        transition: {
                                                            duration: 0.4,
                                                            ease: [
                                                                0.23,
                                                                1,
                                                                0.32,
                                                                1
                                                            ]
                                                        }
                                                    },
                                                    whileTap: {
                                                        scale: 0.99
                                                    },
                                                    className: "bg-white rounded-[var(--radius-card-lg)] border border-[var(--border-light)] shadow-[var(--shadow-card-light)] hover:shadow-[0_20px_60px_-15px_rgba(254,133,12,0.20)] hover:border-[var(--border-orange)] transition-all duration-500 group overflow-hidden cursor-pointer flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "p-4 md:p-5 pb-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                                    variants: {
                                                                        hidden: {
                                                                            opacity: 0,
                                                                            x: -12
                                                                        },
                                                                        visible: {
                                                                            opacity: 1,
                                                                            x: 0,
                                                                            transition: {
                                                                                duration: 0.25,
                                                                                delay: 0.08
                                                                            }
                                                                        }
                                                                    },
                                                                    className: "flex items-center gap-3 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-[#FE850C]/10 text-[#FE850C] flex items-center justify-center group-hover:bg-[#FE850C] group-hover:text-white transition-all duration-400",
                                                                            children: step.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                            className: "text-base md:text-lg font-bold text-[#0C0D17] leading-snug",
                                                                            children: step.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                                            lineNumber: 239,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].p, {
                                                                    variants: {
                                                                        hidden: {
                                                                            opacity: 0,
                                                                            y: 8
                                                                        },
                                                                        visible: {
                                                                            opacity: 1,
                                                                            y: 0,
                                                                            transition: {
                                                                                duration: 0.25,
                                                                                delay: 0.12
                                                                            }
                                                                        }
                                                                    },
                                                                    className: "text-gray-600 text-sm leading-relaxed",
                                                                    children: step.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                            variants: {
                                                                hidden: {
                                                                    opacity: 0,
                                                                    y: 16,
                                                                    scale: 0.97
                                                                },
                                                                visible: {
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    scale: 1,
                                                                    transition: {
                                                                        duration: 0.35,
                                                                        delay: 0.18
                                                                    }
                                                                }
                                                            },
                                                            className: "relative w-full aspect-[4/3] overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: step.image,
                                                                    alt: step.title,
                                                                    fill: true,
                                                                    className: "object-cover object-top",
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-t from-[var(--orange)]/18 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/landing-page/WorkflowStepTimeline.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/navbar/Navbar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PrimaryCTA.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
const Navbar = ()=>{
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isDrawerOpen, setIsDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const isLegalPage = router.pathname.includes("/imprint") || router.pathname.includes("/privacy") || router.pathname.includes("/terms");
    const navItems = [
        {
            id: "problem",
            label: t("navigation.problem")
        },
        {
            id: "solution",
            label: t("navigation.solution")
        },
        {
            id: "how-it-works",
            label: t("navigation.howItWorks")
        },
        {
            id: "about",
            label: t("navigation.benefits")
        },
        {
            id: "pricing",
            label: t("navigation.pricing")
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScrollToSection = (e, id)=>{
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsDrawerOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].header, {
                initial: {
                    y: -120,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.6,
                    ease: [
                        0.23,
                        1,
                        0.32,
                        1
                    ]
                },
                className: "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4",
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    className: `nav-pill flex items-center justify-between container-1404 pl-8 pr-2.5 h-[58px] lg:h-[60px] pointer-events-auto transition-all duration-400 !rounded-[30px] ${isScrolled ? "scrolled" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsDrawerOpen(true),
                                className: "p-2 text-gray-800 hover:text-[#FE850C] transition-colors",
                                "aria-label": "Open menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative w-28 h-9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.svg",
                                    alt: "CraftX Logo",
                                    fill: true,
                                    className: "object-contain object-left",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-6 lg:gap-8",
                            children: !isLegalPage && navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: `#${item.id}`,
                                    onClick: (e)=>handleScrollToSection(e, item.id),
                                    className: "text-[14.5px] font-medium text-gray-600 hover:text-[#0C0D17] transition-colors duration-200 whitespace-nowrap",
                                    children: item.label
                                }, item.id, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PrimaryCTA"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CONTACT_LINKS"].hubspotDemo,
                            target: "_blank",
                            text: t("hero.ctaHeader"),
                            className: "hidden sm:inline-flex w-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                children: isDrawerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "fixed inset-0 bg-black/70 z-[100] md:hidden",
                            onClick: ()=>setIsDrawerOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                x: "-100%"
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: "-100%"
                            },
                            transition: {
                                type: "spring",
                                damping: 28,
                                stiffness: 220
                            },
                            className: "fixed top-0 left-0 h-screen w-[300px] z-[101] md:hidden flex flex-col bg-[#F7F5F0] border-r border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col h-full p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-10 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative w-24 h-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/logo.svg",
                                                    alt: "CraftX Logo",
                                                    fill: true,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsDrawerOpen(false),
                                                className: "p-2 text-gray-500 hover:text-[#0C0D17] transition-colors",
                                                "aria-label": "Close menu",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                        className: "flex flex-col gap-1",
                                        children: !isLegalPage && navItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].a, {
                                                href: `#${item.id}`,
                                                initial: {
                                                    opacity: 0,
                                                    x: -16
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: i * 0.06
                                                },
                                                onClick: (e)=>handleScrollToSection(e, item.id),
                                                className: "text-base font-semibold text-gray-800 hover:text-[#FE850C] transition-colors py-3 px-2 rounded-xl hover:bg-black/5",
                                                children: item.label
                                            }, item.id, false, {
                                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                lineNumber: 157,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-auto pb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PrimaryCTA$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PrimaryCTA"], {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CONTACT_LINKS"].hubspotDemo,
                                            target: "_blank",
                                            text: t("hero.ctaHeader"),
                                            className: "w-full justify-center"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/scroll-to-top/ScrollToTop.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ScrollToTop",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const ScrollToTop = ()=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const toggleVisibility = ()=>{
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return ()=>window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].button, {
            initial: {
                opacity: 0,
                scale: 0.8,
                y: 20
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: 0.8,
                y: 20
            },
            onClick: scrollToTop,
            className: "cursor-pointer fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#fe850c] text-white shadow-2xl shadow-[#fe850c]/30 hover:bg-[#e6770b] transition-colors group",
            "aria-label": "Scroll to top",
            title: "Scroll to top",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                className: "w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
            }, void 0, false, {
                fileName: "[project]/src/components/scroll-to-top/ScrollToTop.tsx",
                lineNumber: 40,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/scroll-to-top/ScrollToTop.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/scroll-to-top/ScrollToTop.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/landing-page/[lang].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>LandingPage,
    "getStaticPaths",
    ()=>getStaticPaths,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
// Import all new SaaS components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footer/Footer.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$AICapabilities$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/AICapabilities.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$BenefitsSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/BenefitsSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$ConclusionSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/ConclusionSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$FinalCTASection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/FinalCTASection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$HeroSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/HeroSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$KillerUSPSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/KillerUSPSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$ProblemSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/ProblemSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$SolutionSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/SolutionSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$PricingSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/PricingSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$WhatsAppExampleSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/WhatsAppExampleSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$WorkflowStepTimeline$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing-page/WorkflowStepTimeline.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/Navbar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scroll$2d$to$2d$top$2f$ScrollToTop$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scroll-to-top/ScrollToTop.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/translation.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$AICapabilities$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$BenefitsSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$ConclusionSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$FinalCTASection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$HeroSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$KillerUSPSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$ProblemSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$SolutionSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$PricingSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$WhatsAppExampleSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$WorkflowStepTimeline$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scroll$2d$to$2d$top$2f$ScrollToTop$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$AICapabilities$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$BenefitsSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$ConclusionSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$FinalCTASection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$HeroSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$KillerUSPSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$ProblemSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$SolutionSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$PricingSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$WhatsAppExampleSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$WorkflowStepTimeline$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scroll$2d$to$2d$top$2f$ScrollToTop$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function LandingPage({ lang }) {
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$translation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LANDING_CONTENT"][lang].hero;
    // Set meta tags based on the hero title/description
    const pageTitle = `${content.titlePart1} | CraftX`;
    const pageDescription = content.description;
    const canonicalUrl = `https://craft-x.de/${lang}`;
    const metaTags = [
        {
            name: "description",
            content: pageDescription
        },
        {
            property: "og:title",
            content: pageTitle
        },
        {
            property: "og:description",
            content: pageDescription
        },
        {
            property: "og:url",
            content: canonicalUrl
        },
        {
            property: "og:type",
            content: "website"
        },
        {
            name: "twitter:card",
            content: "summary_large_image"
        },
        {
            name: "twitter:title",
            content: pageTitle
        },
        {
            name: "twitter:description",
            content: pageDescription
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: pageTitle
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: canonicalUrl
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    metaTags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                            ...tag
                        }, index, false, {
                            fileName: "[project]/src/pages/landing-page/[lang].tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/landing-page/[lang].tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "bg-background-agentic min-h-screen text-foreground overflow-x-hidden font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scroll$2d$to$2d$top$2f$ScrollToTop$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ScrollToTop"], {}, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$HeroSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$ProblemSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProblemSection"], {}, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$SolutionSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["SolutionSection"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$KillerUSPSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["KillerUSPSection"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$AICapabilities$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["AICapabilities"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$BenefitsSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["BenefitsSection"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$WorkflowStepTimeline$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["WorkflowStepTimeline"], {}, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$WhatsAppExampleSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["WhatsAppExampleSection"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$ConclusionSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ConclusionSection"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$PricingSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PricingSection"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2d$page$2f$FinalCTASection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["FinalCTASection"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/src/pages/landing-page/[lang].tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/landing-page/[lang].tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/landing-page/[lang].tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
const getStaticPaths = async ()=>{
    return {
        paths: [
            {
                params: {
                    lang: "en"
                }
            },
            {
                params: {
                    lang: "de"
                }
            }
        ],
        fallback: false
    };
};
const getStaticProps = async ({ params })=>{
    const langParam = params?.lang || "en";
    const lang = langParam === "de" ? "de" : "en";
    return {
        props: {
            lang
        }
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/[lang]/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$landing$2d$page$2f5b$lang$5d2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/landing-page/[lang].tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$landing$2d$page$2f5b$lang$5d2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$landing$2d$page$2f5b$lang$5d2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const SUPPORTED_LANGS = [
    "en",
    "de"
];
const getServerSideProps = async (context)=>{
    const { lang } = context.params;
    const req = context.req;
    // Get browser language from Accept-Language header
    const acceptLanguage = req?.headers["accept-language"] || "";
    const browserLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
    // Determine preferred language (German for Germany, otherwise English)
    const preferredLang = browserLang === "de" ? "de" : "en";
    // If no lang parameter, redirect based on browser language
    if (!lang) {
        return {
            redirect: {
                destination: `/${preferredLang}`,
                permanent: false
            }
        };
    }
    // If lang is not supported, redirect to preferred language
    if (!SUPPORTED_LANGS.includes(lang)) {
        return {
            redirect: {
                destination: `/${preferredLang}`,
                permanent: false
            }
        };
    }
    return {
        props: {
            lang
        }
    };
};
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$landing$2d$page$2f5b$lang$5d2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e1fabc71._.js.map