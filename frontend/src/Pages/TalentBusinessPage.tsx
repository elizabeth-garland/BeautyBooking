import React, { useState, useEffect } from 'react';
import './TalentBusinessPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/TalentBusiness/NavBar/Navbar.tsx';
import About from '../Components/TalentBusiness/About/About.tsx';
import Contact from '../Components/TalentBusiness/Contact/Contact.tsx';
import Gallery from '../Components/TalentBusiness/Gallery/Gallery.tsx';
import Services from '../Components/TalentBusiness/Services/Services.tsx';
import { TalentUser } from './TalentUserPage.tsx';

export interface TalentBusiness {
    // Define the properties of the TalentBusiness object based on your DTO
    businessId: string;
    businessName: string;
    bio: string;
    location: string;
    contactNumber: string;
    userId: string;
    talentUser: TalentUser;
}


const HomePage: React.FC = () => {
    const { businessId } = useParams<{ businessId: string }>();
    const [business, setBusiness] = useState<TalentBusiness | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5222/api/talent/business/${businessId}`);
                console.log(response.data.result);
                setBusiness(response.data.result);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };
    
        fetchData();
    }, [businessId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    
    if (error) {
        return <div className="error">{error}</div>;
    }
    
    return (
        <>
        <Navbar></Navbar>
        <About></About>
        <Contact></Contact>
        <Services></Services>
        <Gallery></Gallery>
        </>
    );
};

export default HomePage;
