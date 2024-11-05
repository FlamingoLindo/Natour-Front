export interface User {
    id: number;         
    username: string;    
    email: string;      
    blocked: boolean;    
    photo?: {
        url: string;
    } | null; // photo can be null if not available
}

export interface UserPoint {
    id: number,
    name: string;
    websiteURL: string;
    businessHourStart: string;
    businessHourEnd: string;
    rating: number;
    active: boolean;
}