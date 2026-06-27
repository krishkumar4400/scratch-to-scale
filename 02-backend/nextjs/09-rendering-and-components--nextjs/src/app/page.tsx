// 'use client';

export default async function Home() {
  console.log("I am from server");
  const url = 'https://api.github.com/users/krishkumar4400'
  const response = await fetch(url);
  console.log(response)
  const data = await response.json();
  console.log(data);
  return (
    <div>

      <p>
        {
          JSON.stringify(data)
        }
      </p>
      <hr />
    </div>
  );
}
