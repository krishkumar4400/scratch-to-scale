import React from 'react'
import Card from './components/Card';
import User from './components/User';

const App = () => {
  const user = ["user1", "user2", "user3", "user4"];
  const nums = [10,20,30,40,50];
  return (
    <>
      <div className="text-4xl text-blue-600">
        {user.map(function (u) {
          return <h1 key={u}>{u}</h1>;
        })}
      </div>
      <div>
        {nums.filter(function (n) {
          return n > 20;
        })}
      </div>

      <div>
        {/* <Card /> */}
        {
          Card(10)
        }
        <Card user="krish" age={21} />
      </div>
      <div>
        {
          user.map(function(u) {
            return <User user={u} />;
          })
        }
      </div>
    </>
  );
}

export default App
