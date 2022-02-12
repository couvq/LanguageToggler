import React from "react";
import { Container, Typography } from '@mui/material';

const TextChangeArea = ({ language }) => {

    return (
        <Container>
            <Typography variant="h2">
                Hi, My name is Quentin. I am 22 years old and I work as a software engineer. 
                {console.log(language)}
            </Typography>
        </Container>
    );
}

export default TextChangeArea;