
export default async function Home() {
    const res = await fetch('http://localhost:3000/api/auth');
    const data = await res.json();


    console.log(data);
    return (
        <div>
            {
                JSON.stringify(data)
            }
        </div>
    );
}
