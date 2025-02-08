import { Point } from '@/interfaces/pointsInterface';
import { PointIdResponseInterface } from '@/interfaces/pointsInterface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PointResponse {
    id: number,
    name: string;
    websiteURL: string;
    businessHourStart: string;
    businessHourEnd: string;
    rating: number;
    active: boolean;
}

interface PointIdResponse {
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

export const getPoints = async (): Promise<Point[]> => {
    try {
        const response = await fetch('http://localhost:1337/api/points?fields[0]=name&fields[1]=active&fields[2]=websiteURL&fields[3]=businessHourStart&fields[4]=businessHourEnd&populate[ratings][fields][0]');

        if (!response.ok) {
            throw new Error('Failed to fetch points');
        }

        const data = await response.json();
        const points = data.data; // Access the `data` array

        return points.map((point: any) => ({
            id: point.id,
            name: point.attributes.name,
            websiteURL: point.attributes.websiteURL,
            businessHourStart: point.attributes.businessHourStart,
            businessHourEnd: point.attributes.businessHourEnd,
            rating: point.rating,
            active: point.attributes.active
        }));
    } catch (error) {
        toast.error('Houve um erro ao carregar os pontos!');
        console.error(error);
        return [];
    }
};

export const getPointById = async (pointId: number): Promise<PointIdResponseInterface | null> => {
    try {
        const response = await fetch(`http://localhost:1337/api/points/${pointId}?populate=*`);

        if (!response.ok) {
            throw new Error('Failed to load point');
        }

        const data = await response.json();
        const point = data.data;

        return {
            id: point.id,
            name: point.attributes.name,
            active: point.attributes.active,
            latitude: point.attributes.latitude,
            longitude: point.attributes.longitude,
            address: point.attributes.address,
            number: point.attributes.number,
            websiteURL: point.attributes.websiteURL,
            businessHourStart: point.attributes.businessHourStart,
            businessHourEnd: point.attributes.businessHourEnd,
            rating: point.attributes.rating,
            user: {
                Userid: point.attributes.user?.data?.id ?? null,
                username: point.attributes.user?.data?.attributes?.username ?? null,
                email: point.attributes.user?.data?.attributes?.email ?? null,
            },
        };
    } catch (error) {
        console.error('Error fetching point:', error);
        return null;
    }
};

