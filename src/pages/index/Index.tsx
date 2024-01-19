import React from 'react';
import reactLogo from '/src/assets/react.svg';
import viteLogo from '/public/vite.svg';


export const Index: React.FC = () => {
    return (
        <div>
            <img src={reactLogo} alt="React logo" />
            <h1>Hello friends!</h1>
            <img src={viteLogo} alt="Vite logo" />
        </div>
    );
};

