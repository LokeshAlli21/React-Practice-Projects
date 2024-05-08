import React, { StrictMode } from 'react';
import ReactDom from 'react-dom/client';

import App from './App';

//1. Create a new React app.

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);