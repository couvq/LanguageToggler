import React, { useState } from "react";
import LanguageToggler from "./components/LanguageToggler";
import TextChangeArea from "./components/TextChangeArea";
import data from './data/data';

const App = () => {
    const [language, setLanguage] = useState('en'); // we'll start out in english 
    const [text, setText] = useState('Hi, My name is Quentin. I am 22 years old and I work as a software engineer.');


    const languageToggler = (e) => {
        setLanguage(e.target.value);
        // TODO: when language changes, text must change as well

        setText(prevState => {
            if(prevState === 'Hi, My name is Quentin. I am 22 years old and I work as a software engineer.') {
                setText(data[1]);
            }
            else {
                setText(data[0]);
            }
        })
    }

    return (
        <>
            <LanguageToggler language={language} setLanguage={languageToggler} />
            <TextChangeArea  text={text}/>
        </>
    );
}

export default App;