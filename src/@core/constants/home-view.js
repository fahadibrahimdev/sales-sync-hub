import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: '“Sales is never easy!” Unless you have SalesSync Hub',
    text: 'SalesSync Hub is a state of the art app that optimizes progress of sales professionals, and helps manage entire teams by offering a myriad of automated tools and features in one place.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Discover Features',
    features: [
        {
            title: 'Integrate with CRM',
            description: 'Download lead details and upload call notes directly.',
            icon: 'processes'
        },
        {
            title: 'Record and Transcribe',
            description: 'Record calls simultaneously and transcribe into documents.',
            icon: 'styled-speaker'
        },
        {
            title: 'Call Leads Automatically',
            description: 'SalesSync Hub will call leads automatically based on uploaded lead lists.',
            icon: 'business-growth'
        },
        {
            title: 'Voice Recognition',
            description: 'Dial from Anywhere/Conversations on the go.',
            icon: 'globe-hand'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'In a world where notepads and offline spreadsheets are becoming outdated, a lot of call center sales personnel still have to rely on these tools to get by with their daily tasks. SalesSync Hub bridges the gap between missing features in modern CRM systems and what it takes for sales people to stay ahead of the game.',
        'The app employs innovative features such as transcribing, compiling, and automating cold calls to not only save time and effort for users but also to make it easier for sales professionals to transfer clients and projects between them without the hassle. SalesSync Hub also offers a helping hand to managers who can track the progress of their team objectively, an in-app model within SalesSync Hub.',
        'By taking the unproductive small tasks out of working in a sales force, SalesSync Hub helps you manage high volumes of calls easily, boosting operations everyday.'
    ],
}

export const benefitsContent = {
    heading: 'A Revolutionary App that requires you to make no changes',
    text: 'You do not have to change the way you work, or archive years of business data just to switch to SalesSync Hub and its model. SalesSync Hub is compatible with existing softwares such as HubSpot, Interseller, and Salesforce.',
    benefits: [
        {
            title: 'Automatic Compilation of Data',
            description: 'Saves you time in uploading data and making it visually coherent by doing it for you.',
            icon: 'www-online'
        },
        {
            title: 'Manage Salesperson Progress',
            description: 'SalesSync Hub offers statistics on each employee and their progress. It also helps managers transfer call notes between them and the salespeople.',
            icon: 'time-stat'
        },
        {
            title: 'User Friendly',
            description: 'SalesSync Hub is created to be navigable and intuitive in design, where the app skin is decluttered to focus primarily on action icons.',
            icon: 'multiple-users'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'What plans are available to me?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Is SalesSync Hub Compatible with Android or iOS?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Focus on the Selling and Less on Admin',
    text: 'Sign up to download SalesSync Hub as soon as it launches on the app store.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}`,
    ctaBtn: 'Download App',
    accent: 'Dispensary Sign Up',
    tertiary: 'Pre Sign-up'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
