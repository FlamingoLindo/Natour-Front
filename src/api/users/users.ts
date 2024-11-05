import { User, UserPoint } from "@/interfaces/userInterface";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UserResponse {
    id: number;
    username: string;
    email: string;
    blocked: boolean;
    photo?: {
        url: string;
    } | null; // photo can be null if not available
}

interface UserPointResponse {
    id: number,
    name: string;
    websiteURL: string;
    businessHourStart: string;
    businessHourEnd: string;
    rating: number;
    active: boolean;
}

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch('http://localhost:1337/api/users?fields[0]=username&fields[1]=email&fields[2]=blocked&populate[photo][fields][0]=url&populate[photo][fields][1]=name');
        
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        
        const data: UserResponse[] = await response.json();
        
        return data.map((user) => ({
            id: user.id,
            username: user.username,
            email: user.email,
            blocked: user.blocked,
            photo: user.photo ? { url: `http://localhost:1337${user.photo.url}` } : undefined // Handle photo safely
        }));
    } catch (error) {
        toast.error('Houve um erro ao carregar os usuários!');
        console.error(error);
        return []; // Return an empty array in case of error
    }
};

export const getUserPoints = async (userId: number): Promise<UserPoint[]> => {
    try {
      const response = await fetch(`http://localhost:1337/api/users/${userId}?populate=points`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch user points');
      }
  
      const data = await response.json();
      const points: UserPointResponse[] = data.points;
      return points.map((point) => ({
        id: point.id,
        name: point.name,
        websiteURL: point.websiteURL,
        businessHourStart: point.businessHourStart,
        businessHourEnd: point.businessHourEnd,
        rating: 0, // Assuming rating is not provided in the response
        active: point.active, // Use the `active` field directly
      }));
    } catch (error) {
      toast.error('Houve um erro com os pontos!');
      console.error(error);
      return [];
    }
  };
  