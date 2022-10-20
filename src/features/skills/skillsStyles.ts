import { styled, Grid, Typography, TypographyProps, GridProps } from '@mui/material';

interface StyledGridProps extends GridProps {
    inView?: boolean;
}

export const CustomGridItem = styled(Grid)<StyledGridProps>(({ inView }) => (
    inView && {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        animation: 'fade 2s normal forwards',
        '@keyframes fade': {
            'from': {
                opacity: 0
            },
            'to': {
                opacity: 1
            }
        }
    }))

interface StyledTypographyProps extends TypographyProps {
    inView?: boolean;
}

export const TypographyAnimation = styled(Typography)<StyledTypographyProps>(({ inView }) => (
    inView && {
        animation: 'slide 1s ease normal forwards',
        '@keyframes slide': {
            'from': {
                transform: 'translateX(-30vw)',
                opacity: 0
            },
            'to': {
                transform: 'translateX(0px)',
                opacity: 1
            }
        }
    }))