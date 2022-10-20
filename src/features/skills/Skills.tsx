import React from 'react';
import { Stack, Grid, Tooltip, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

import { Container } from '../../constants/globalStyles';
import { CustomGridItem, TypographyAnimation } from './skillsStyles';
import images from '../../constants/images/index';

const skill_images = ['html', 'css', 'js', 'react', 'typescript', 'nodejs', 'expressjs', 'mongodb', 'git'];

const Skills = () => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    console.log("Estoy viendoo", inView);

    return (
        <Container>
            <Stack ref={ref} width={'80%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                    <TypographyAnimation inView={inView} variant='h3' padding={10}>Skills set</TypographyAnimation>
                <Grid container spacing={10} >
                    {skill_images.map((item: string) => (
                        <CustomGridItem inView={inView} item xs={12} sm={6} md={4} lg={3}>
                            <Tooltip title={'micho'} placement={'top'}>
                                <img src={images[`${item}`]} alt={item} height={100} width={100} />
                            </Tooltip>
                        </CustomGridItem>
                    ))}
                </Grid>
            </Stack>
        </Container>
    )
}

export default Skills;