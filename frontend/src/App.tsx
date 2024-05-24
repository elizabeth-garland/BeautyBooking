// src/app.tsx
import React from 'react';
import TalentUserPage from './Pages/TalentUserPage.tsx';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

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

    return (
        <div>
            <RouterProvider router = {router}/>
        </div>
    );
};

export default App;