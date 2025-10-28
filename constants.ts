import { Candidate, CandidateSource, KanbanStatus, AvailabilityStatus } from './types';

export const CANDIDATES: Candidate[] = [
    {
        id: 1,
        name: 'Aisha Sharma',
        designation: 'Digital Marketing Manager',
        email: 'aisha.sharma@example.com',
        phone: '+971 50 123 4567',
        source: CandidateSource.LINKEDIN,
        aiScore: 9.8,
        status: KanbanStatus.SOURCED,
        skills: ['SEO/SEM', 'Google Analytics', 'Content Strategy', 'PPC Campaigns', 'Social Media Marketing', 'HubSpot'],
        experience: [
            { title: 'Digital Marketing Specialist', company: 'Creative Solutions Dubai', duration: '2020 - 2023' },
            { title: 'Marketing Assistant', company: 'Global Media Inc.', duration: '2018 - 2020' }
        ],
        availability: AvailabilityStatus.IMMEDIATELY_AVAILABLE,
    },
    {
        id: 2,
        name: 'Ben Carter',
        designation: 'Senior Marketing Specialist',
        email: 'ben.carter@example.com',
        phone: '+971 55 987 6543',
        source: CandidateSource.TIMELESS_DB,
        aiScore: 9.5,
        status: KanbanStatus.SOURCED,
        skills: ['Email Marketing Automation', 'Lead Generation', 'CRM Management', 'A/B Testing', 'Data Analysis'],
        experience: [
            { title: 'Marketing Specialist', company: 'Innovate Tech', duration: '2019 - Present' },
            { title: 'Junior Marketing Associate', company: 'Bright Spark Agency', duration: '2017 - 2019' }
        ],
        availability: AvailabilityStatus.NOTICE_PERIOD,
    },
    {
        id: 3,
        name: 'Chloe Davis',
        designation: 'Growth Marketing Head',
        email: 'chloe.davis@example.com',
        phone: '+971 52 876 5432',
        source: CandidateSource.NAUKRI_GULF,
        aiScore: 9.2,
        status: KanbanStatus.SOURCED,
        skills: ['Growth Hacking', 'User Acquisition', 'Conversion Rate Optimization (CRO)', 'Viral Marketing', 'Analytics'],
        experience: [
            { title: 'Growth Manager', company: 'ScaleUp Ventures', duration: '2021 - Present' },
            { title: 'Product Marketing Manager', company: 'NextGen Apps', duration: '2018 - 2021' }
        ],
        availability: AvailabilityStatus.OPEN_TO_WORK,
    },
    {
        id: 4,
        name: 'David Rodriguez',
        designation: 'SEO & SEM Expert',
        email: 'david.r@example.com',
        phone: '+971 56 234 5678',
        source: CandidateSource.LINKEDIN,
        aiScore: 9.1,
        status: KanbanStatus.SOURCED,
        skills: ['Keyword Research', 'On-Page & Off-Page SEO', 'Google Ads', 'Technical SEO', 'Link Building', 'Ahrefs/SEMrush'],
        experience: [
            { title: 'SEO Manager', company: 'Rank High Digital', duration: '2020 - Present' },
            { title: 'SEM Specialist', company: 'AdWorks Pro', duration: '2017 - 2020' }
        ],
        availability: AvailabilityStatus.IMMEDIATELY_AVAILABLE,
    },
    {
        id: 5,
        name: 'Emily White',
        designation: 'Content Marketing Lead',
        email: 'emily.white@example.com',
        phone: '+971 50 345 6789',
        source: CandidateSource.TIMELESS_DB,
        aiScore: 8.9,
        status: KanbanStatus.SOURCED,
        skills: ['Content Creation', 'Copywriting', 'Blogging', 'Content Calendar Management', 'SEO Writing', 'Storytelling'],
        experience: [
            { title: 'Content Strategist', company: 'StoryWeavers Co.', duration: '2019 - Present' },
            { title: 'Content Writer', company: 'Digital Scribes', duration: '2016 - 2019' }
        ],
        availability: AvailabilityStatus.NOTICE_PERIOD,
    },
    {
        id: 6,
        name: 'Fahad Al-Marri',
        designation: 'Digital Marketing Analyst',
        email: 'fahad.almarri@example.com',
        phone: '+971 55 456 7890',
        source: CandidateSource.NAUKRI_GULF,
        aiScore: 7.8,
        status: KanbanStatus.SOURCED,
        skills: ['Data Visualization', 'Google Tag Manager', 'SQL', 'Excel', 'Marketing Analytics', 'Tableau'],
        experience: [
            { title: 'Marketing Data Analyst', company: 'Data Insights LLC', duration: '2021 - Present' },
            { title: 'Business Analyst Intern', company: 'Future Corp', duration: '2020 - 2021' }
        ],
        availability: AvailabilityStatus.OPEN_TO_WORK,
    },
    {
        id: 7,
        name: 'Grace Lee',
        designation: 'Social Media Manager',
        email: 'grace.lee@example.com',
        phone: '+971 52 567 8901',
        source: CandidateSource.LINKEDIN,
        aiScore: 7.5,
        status: KanbanStatus.SOURCED,
        skills: ['Community Management', 'Content Curation', 'Social Media Advertising', 'Influencer Marketing', 'Hootsuite'],
        experience: [
            { title: 'Social Media Manager', company: 'Connect Social', duration: '2020 - Present' },
            { title: 'Community Manager', company: 'BuzzHub', duration: '2018 - 2020' }
        ],
        availability: AvailabilityStatus.IMMEDIATELY_AVAILABLE,
    },
    {
        id: 8,
        name: 'Henry Wilson',
        designation: 'PPC Specialist',
        email: 'henry.wilson@example.com',
        phone: '+971 56 678 9012',
        source: CandidateSource.TIMELESS_DB,
        aiScore: 7.2,
        status: KanbanStatus.SOURCED,
        skills: ['Google Ads', 'Facebook Ads', 'Bid Management', 'Campaign Optimization', 'Landing Page Optimization'],
        experience: [
            { title: 'PPC Campaign Manager', company: 'ClickThru Experts', duration: '2019 - Present' },
            { title: 'Digital Marketing Intern', company: 'Online Presence', duration: '2018 - 2019' }
        ],
        availability: AvailabilityStatus.NOTICE_PERIOD,
    },
     {
        id: 9,
        name: 'Isabella Garcia',
        designation: 'Marketing Coordinator',
        email: 'isabella.g@example.com',
        phone: '+971 50 789 0123',
        source: CandidateSource.NAUKRI_GULF,
        aiScore: 8.5,
        status: KanbanStatus.SOURCED,
        skills: ['Event Planning', 'Project Management', 'Vendor Negotiation', 'Budget Tracking', 'Mailchimp'],
        experience: [
            { title: 'Marketing Coordinator', company: 'Apex Events', duration: '2020 - Present' },
            { title: 'Marketing Assistant', company: 'Sunrise Corp', duration: '2018 - 2020' }
        ],
        availability: AvailabilityStatus.OPEN_TO_WORK,
    },
    {
        id: 10,
        name: 'Jamal Khan',
        designation: 'Brand Manager',
        email: 'jamal.khan@example.com',
        phone: '+971 55 890 1234',
        source: CandidateSource.LINKEDIN,
        aiScore: 9.0,
        status: KanbanStatus.SCHEDULED,
        skills: ['Brand Strategy', 'Market Research', 'Product Positioning', 'Competitive Analysis', 'Brand Identity'],
        experience: [
            { title: 'Assistant Brand Manager', company: 'Prestige Brands', duration: '2019 - Present' },
            { title: 'Marketing Executive', company: 'Legacy Goods', duration: '2017 - 2019' }
        ],
        availability: AvailabilityStatus.NOTICE_PERIOD,
    }
];