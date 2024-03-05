import categories from "../mockData/categories.json"
import items from "../mockData/items.json"

const fetchCategories = () => {
    return new Promise((resolve, reject) => {
        // Simulating fetching data from an API
        setTimeout(() => resolve(categories), 100);
    });
}

const fetchItems = () =>{
    return new Promise((resolve, reject) => {
        // Simulating fetching data from an API
        setTimeout(() => resolve(items), 100);
    });
}

export default {
    fetchCategories,
    fetchItems
}
