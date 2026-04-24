'use client'
import { signOut, useSession } from '@/lib/auth-client';
import { LogoAcrobat } from '@gravity-ui/icons';
import Link from 'next/link';
import React, { use } from 'react';

const Navbar = () => {



    const { data, isPending } = useSession();
    if (isPending) {
        return <span>Loading...</span>
    }
    const user = data?.user;

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <LogoAcrobat />
                    <p className="font-bold">ACME</p>
                </div>
                <ul className="flex items-center gap-4">
                    <div>
                        {user && <h1>welcome {user.name}</h1>}
                    </div>
                    <div>
                        {user ?  '' : <li><Link href={'/auth/signin'}>SignIn</Link></li> }
                    </div>
                    <div>
                        {user ? <h1 onClick={()=>signOut()}>SignOut</h1> : <Link href={'/auth/signup'}>SignUp</Link>}
                    </div>
                    <Link href={'/dashboard'}>Dashboard</Link>
                </ul>
            </header>
        </nav>
        // {/* With right-aligned content */ }
        // <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        //     <header className="flex h-16 items-center justify-between px-6">
        //         <div>Logo</div>
        //         <ul className="flex items-center gap-4">
        //             <li><Button>Sign Up</Button></li>
        //         </ul>
        //     </header>
        // </nav>
    );
};

export default Navbar;