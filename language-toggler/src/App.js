import React, { useState } from "react";
import LanguageToggler from "./components/LanguageToggler";
import TextChangeArea from "./components/TextChangeArea";

const App = () => {
    const [language, setLanguage] = useState('en'); // we'll start out in english 

    const languageToggler = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <>
            <LanguageToggler language={language} setLanguage={languageToggler} />
            <TextChangeArea language={language} />
        </>
    );
}

export default App;