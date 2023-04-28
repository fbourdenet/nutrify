import { OpenFoodFacts } from "../types/OpenFoodFacts";
import axios from 'axios';

const getFoodsByName = async (name: string) => {
    const products: OpenFoodFacts[] = (await axios.get("https://fr.openfoodfacts.org/cgi/search.pl?search_terms=" + name + "&search_simple=1&json=1")).data.products;
    return products
}
export {
    getFoodsByName,
}