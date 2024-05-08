import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import NoteArea from './components/NoteArea';

function App(){
    return (
        <div>
            <Header />
            <NoteArea />
            <Footer />
        </div>
    );
}

export default App;