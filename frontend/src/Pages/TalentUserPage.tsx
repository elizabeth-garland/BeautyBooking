import React, { useState, useEffect } from 'react';
import Profile from '../Components/TalentUser.tsx/Profile.tsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export interface TalentUser {
    // Define the properties of the TalentUser object based on your DTO
    userId: string;
    name: string;
    bio: string;
    location: string;
    contactNumber: string;
    email: string;
}


const HomePage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<TalentUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5222/api/talent/user/${userId}`);
                console.log(response.data.result);
                setUser(response.data.result);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };
    
        fetchData();
    }, [userId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    
    if (error) {
        return <div className="error">{error}</div>;
    }
    
    return (
        <div className="container">
            {user ? (
                <div className="profile">
                    <Profile user={user} />
                </div>
            ) : (
                <div className="no-data">No user data found</div>
            )}
        </div>
    );
};

export default HomePage;
