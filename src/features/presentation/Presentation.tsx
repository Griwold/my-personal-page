import React from 'react';
import { Typography, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import { Container, Divider } from '../../constants/globalStyles';
import { DownloadCV, StackAnimation } from './presentationStyles';

const Presentation = () => {

    return (
        <Container>
            <Stack width={'80%'}>
                <StackAnimation>
                    <Typography variant='h2'>
                        Hola! Me llamo Francisco Griguol
                    </Typography>
                    <Typography variant='subtitle1' width={'60%'}>
                        Tengo 24 años. Soy programador full-stack, mi mayor desarrollo esta abocado en front-end
                        pero actualmente me encuentro en el crecimiento de mis habilidades como back-end.
                        Me gusta participar de proyectos de principio a fin y aportar mis idea.
                        Considero que soy una persona entusiasta y apasionada, en constante aprendisaje.
                    </Typography>
                </StackAnimation>
                <DownloadCV href={require('../../cv/CV-Francisco-Griguol.pdf')} download={'CV Francisco Griguol'} variant="outlined" endIcon={<DownloadIcon />}>
                    Descargar CV
                </DownloadCV>
            </Stack>
            <Divider />
        </Container>
    );
};

export default Presentation;