interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data: Todo = await response.json();
        console.log(data); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

    } catch (error: any) {
        if (error instanceof Error) {
            console.log(error.message);
            return;
        }
        console.log(error);
        return
    }
}

fetchData();
