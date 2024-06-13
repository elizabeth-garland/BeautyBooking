// src/app.tsx
import React from 'react';
import TalentUserPage from './Pages/TalentUserPage.tsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TalentBusinessPage from './Pages/TalentBusinessPage.tsx';

const App: React.FC = () => {
    // For demonstration, using a static userId. Replace this with dynamic logic as needed.
    const router = createBrowserRouter(
        [
            {
                path: "api/talent/user/:userId",
                element: <TalentUserPage></TalentUserPage>,
                index: true
            },
            {
                path: "api/talent/business/:businessId",
                element: <TalentBusinessPage></TalentBusinessPage>,
                index: true
            }
        ]
    )

    return (
        <>
        <RouterProvider router = {router}/>
        </>
    );
};

export default App;