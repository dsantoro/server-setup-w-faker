import React, { useState, useEffect } from 'react';

function App() {
  const [apiResponse, setApiResponse] = useState({});

  const apiFetch = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setApiResponse(data);
  }

  useEffect(() => {
    apiFetch();
  }, []);

  const { users } = apiResponse;

  return (
    <div>
      {users?.map(user => <p key={user.id}>{user.name} <br /><strong>{user.email}</strong></p>)}
    </div>
  );
}

export default App;
