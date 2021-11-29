import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function Secret() {
  const { data: session, status } = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/secret');
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <main>
        <h1>You are not signed in, please sign in first</h1>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h1>Protected Page</h1>
        <p>{content}</p>
      </div>
    </main>
  );
}
