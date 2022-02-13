import React from "react";
import { Container, Typography } from '@mui/material';

const TextChangeArea = ({ text }) => {

    return (
        <Container>
            <Typography variant="h2" >
                {text}
            </Typography>
        </Container>
    );
}

export default TextChangeArea;