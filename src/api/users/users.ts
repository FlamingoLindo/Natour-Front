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
    username: string;
    email: string;
    photo: string | null;
    blocked: boolean,
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
    const response = await fetch(
      `http://localhost:1337/api/users/${userId}?populate[photo][fields]=id&populate[photo][fields]=name&populate[photo][fields]=url&populate[points]=*&populate[ratings]=*`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user points");
    }

    const data = await response.json();

    // Extract user data from the response (this is the top-level user information)
    const { username, email, photo, blocked } = data; // Get user details
    const photoUrl = photo ? `http://localhost:1337${photo.url}` : null; // Build full photo URL

    const points: UserPointResponse[] = data.points || []; // Ensure points exists

    // Return the points along with the user information
    return points.map((point) => ({
      username, 
      email,    
      photo: photoUrl, 
      blocked,
      id: point.id,
      name: point.name,
      websiteURL: point.websiteURL,
      businessHourStart: point.businessHourStart,
      businessHourEnd: point.businessHourEnd,
      rating: point.rating,
      active: point.active,
    }));
  } catch (error) {
    toast.error("Houve um erro com os pontos!");
    console.error(error);
    return [];
  }
};

