export enum CandidateSource {
    LINKEDIN = 'LinkedIn',
    NAUKRI_GULF = 'Naukri Gulf',
    TIMELESS_DB = 'Timeless DB',
}

export enum KanbanStatus {
    SOURCED = 'Sourced',
    NEW = 'New Applications',
    REVIEW = 'Under Review',
    SCHEDULED = 'Scheduled',
}

export enum AvailabilityStatus {
    OPEN_TO_WORK = 'Open to Work',
    IMMEDIATELY_AVAILABLE = 'Immediately Available',
    NOTICE_PERIOD = 'Notice Period: 1 Month',
}

export interface Experience {
    title: string;
    company: string;
    duration: string;
}

export interface Candidate {
    id: number;
    name: string;
    designation: string;
    email: string;
    phone: string;
    source: CandidateSource;
    aiScore: number; // 1-10
    status: KanbanStatus;
    skills: string[];
    experience: Experience[];
    availability: AvailabilityStatus;
}

export type Page = 'signin' | 'landing' | 'analyzer' | 'queue';