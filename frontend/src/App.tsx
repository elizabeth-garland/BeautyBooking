// src/app.tsx
import React from 'react';
import TalentUserPage from './Pages/TalentUserPage.tsx';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from './Components/NavBar/Navbar.tsx';
import About from './Components/About/About.tsx';
import Contact from './Components/Contact/Contact.tsx';
import Services from './Components/Services/Services.tsx';
import Gallery from './Components/Gallery/Gallery.tsx';

const App: React.FC = () => {
    // For demonstration, using a static userId. Replace this with dynamic logic as needed.
    const router = createBrowserRouter(
        [
            {
                path: "api/talent/user/:userId",
                element: <TalentUserPage></TalentUserPage>,
                index: true
            }
        ]
    )

    // return (
    //     <>
    //     <Navbar></Navbar>
    //     <RouterProvider router = {router}/>
    //     </>
    // );
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

export default App;