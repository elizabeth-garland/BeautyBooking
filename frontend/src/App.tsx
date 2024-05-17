// src/app.tsx
import React from 'react';
import TalentUserPage from './Pages/TalentUserPage.tsx';

const App: React.FC = () => {
    // For demonstration, using a static userId. Replace this with dynamic logic as needed.
    const userId = "0c06346c-e2b4-4877-98ab-cce14ebcd41d";

    return (
        <div>
            <TalentUserPage userId={userId} />
        </div>
    );
};

export default App;