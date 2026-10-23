import axios, { isAxiosError, type AxiosResponse } from "axios";

// axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//     console.log(response.data);
// });

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: string;
};


const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.message);
            return;
        }
        if (error instanceof Error) {
            console.log(error.message);
            return;
        }
        console.log(error);
    }
}

fetchData();

/* 
{ 
    userId: 1, 
    id: 1, 
    title: 'delectus aut autem', 
    completed: false 
}
*/

