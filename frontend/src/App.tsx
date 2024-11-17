// import React from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Form from './components/Form';
// import './App.css'; // Make sure to create this CSS file for custom styles

// const App: React.FC = () => {
 
//   return (
//     <div className="app-container">
//       <Header />
//       {/* <Header discounts={discounts} totalPrice={totalPrice} onDiscountChange={handleDiscountChange} /> */}
//       <div className="main-content">
//         <div className="form-column">
//           <Form />
//         </div>
//         <div className="coverage-column">
//           {/* <Sidebar coverages={coverages} onCoverageChange={handleCoverageChange} /> */}
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState, useCallback } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  function Somefunc() {
    // Using closure to access up-to-date state in fetchData
    const fetchData = useCallback(async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users')
        ]);

        if (!postsResponse.ok || !usersResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const postsData: Post[] = await postsResponse.json();
        const usersData: User[] = await usersResponse.json();

        setPosts(postsData);
        setUsers(usersData);
      } catch (err) {
        setError((err as Error).message);
      }
    }, []); // dependencies can be controlled for fetchData

    useEffect(() => {
      fetchData();
    }, [fetchData]);

  return (
    <div>
      <h1>Posts and Users</h1>
      {error && <p>Error: {error}</p>}
      
      <section>
        <h2>Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Users</h2>
        {users.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

return (
  <div>
    <Somefunc />
  </div>
);
};





export default App;
