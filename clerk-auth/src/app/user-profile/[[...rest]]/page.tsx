"use client"
import {RedirectToSignIn, useUser} from "@clerk/nextjs";

const UserProfilePage = () => {
    const { user } = useUser();
    return (
    <>
        {user ? (
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>Welcome, {user.fullName}</h1>
            </div>
        ) : (<RedirectToSignIn />)}
    </>
    )
};

export default UserProfilePage;