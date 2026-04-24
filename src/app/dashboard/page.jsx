import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DashBoardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userInfo=session?.user;
    if(!userInfo){
        return <h1>please login to access dashboard</h1>
    }
    
    return (
        <div>
            DashBoardPage
        </div>
    );
};

export default DashBoardPage;