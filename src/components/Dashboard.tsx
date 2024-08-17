"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

export default function Dashboard() {

   const { data: session } = useSession();

  return (
    <>
      <div className='m-20'>
         <div>Dashboard</div>

                  {
                     session ?
                        <div>
                           <img src={session?.user?.image as string} alt={session?.user?.name as string} className='rounded-full w-20 h-20' />
                           <p>Welcome Back</p>
                           <p>{session?.user?.email}</p>
                           <button className='bg-red-500' onClick={() => signOut({ callbackUrl: `/` })}>Log out</button>
                        </div> 
                        
                     :  <div>
                           <div>Not signed in</div>
                           <div>Sign in to access your dashboard</div>
                           <div className='space-x-4'>
                              <button onClick={() => signIn('google')} className='bg-yellow-400 text-black rounded-md p-1'>Sign in With Google</button>
                              <button onClick={() => signIn('github')} className='bg-black text-white rounded-md p-1'>Sign In With Github</button>
                           </div>
                     </div>  
                  }
         </div>

    </>
  )
}
