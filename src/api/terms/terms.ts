import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = process.env.NEXT_PUBLIC_API_KEY 

export const getTerms = async () => {
    try {
        const response = await fetch(`${apiUrl}/terms/1`);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch terms');
        }
    } catch (error) {
        toast.error('Houve um erro ao mostrar os termos!');
        console.error(error);
        return null;
    }
};

export const updateTerms = async (platafromTerm: string, privacyPolitics: string) => {
    try {
        const response = await fetch(`${apiUrl}/terms/1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                data: {
                    platafromTerm,
                    privacyPolitics,
                }
            }),
        });

        if (response.ok) {
            const data = await response.json();
            toast.success('Termos atualizados com sucesso!');
            return data;
        } else {
            throw new Error('Failed to update terms');
        }
    } catch (error) {
        toast.error('Houve um erro ao atualizar os termos!');
        console.error(error);
    }
};