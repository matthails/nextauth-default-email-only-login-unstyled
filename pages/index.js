import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign In</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <div>
            You can now access our super secret pages.
            <button>
              <Link href="/secret">To the secret</Link>
            </button>
            <button onClick={signOut}>Sign Out</button>
          </div>
        </>
      )}
    </div>
  );
}
