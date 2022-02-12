import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Input } from '@mui/material';

const LanguageToggler = ({ language, setLanguage}) => {

    return (
        <>
            <FormControl>
                <InputLabel>Switch Language</InputLabel>
                <Select value={language} onChange={setLanguage}>
                    <MenuItem value='en'>English</MenuItem>
                    <MenuItem value='fr'>French</MenuItem>
                    <MenuItem value='es'>Spanish</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default LanguageToggler;