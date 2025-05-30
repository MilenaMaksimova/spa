import { API_URL } from './config';

export async function getAllCategories() {
    const res = await fetch(API_URL + 'categories.php');
    return await res.json();
}
