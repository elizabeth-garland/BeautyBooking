// src/HomePage.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TalentUser {
    // Define the properties of the TalentUser object based on your DTO
    id: string;
    name: string;
    bio: string;
    location: string;
    contactNumber: string;
    email: string;
}

interface HomePageProps {
    userId: string;
}

const HomePage: React.FC<HomePageProps> = ({ userId }) => {
    const [user, setUser] = useState<TalentUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5222/api/talent/user/${userId}");
                console.log(response);
                setUser(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>User Profile for {userId}</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Bio: {user.bio}</p>
                    <p>Location: {user.location}</p>
                    <p>Contact Number: {user.contactNumber}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <div>No user data found</div>
            )}
        </div>
    );
};

export default HomePage;
