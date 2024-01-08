import { Employee } from "../utils/types";

const apiUrl = process.env.REACT_APP_API_URL!;
const api_key = process.env.REACT_APP_API_KEY!;

const fetchFromApi = async (): Promise<Employee[] | undefined> => {

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${api_key}`,
            },
        });

        if (response.ok) {
            const data: Employee[] = await response.json();
            console.log('API Response:');
            console.log(data);
        
            return data;
        } else {
            console.error('Error fetching data:', response.statusText);
            return undefined;
        }
    } catch (error: any) {
        console.error('Error:', error.message);
        return undefined;
    }

}

export {
    fetchFromApi
}