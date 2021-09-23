export default async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    try {
        return await fetch(url).then(response => response.json()).then(data => {
            return data
        })
    }
    catch (error) {
        return error.message;
    }
    
}