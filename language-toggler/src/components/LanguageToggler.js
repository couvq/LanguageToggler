import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Input } from '@mui/material';

const LanguageToggler = () => {
    const [language, setLanguage] = useState('en'); // we'll start out in english 

    return (
        <>
            <FormControl>
                <InputLabel>Switch Language</InputLabel>
                <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <MenuItem value='en'>English</MenuItem>
                    <MenuItem value='fr'>French</MenuItem>
                    <MenuItem value='es'>Spanish</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default LanguageToggler;