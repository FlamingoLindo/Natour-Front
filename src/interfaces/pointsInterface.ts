export interface Point {
    id: number,
    name: string;
    websiteURL: string;
    businessHourStart: string;
    businessHourEnd: string;
    rating: number;
    active: boolean;
}

export interface PointIdResponseInterface {
    id: number;
    name: string;
    active: boolean;
    latitude: number;
    longitude: number;
    address: string;
    number: number;
    websiteURL: string;
    businessHourStart: string | null;
    businessHourEnd: string | null;
    rating: number;
    user: {
        Userid: number;
        username: string | null;
        email: string | null;
    } | null;
}