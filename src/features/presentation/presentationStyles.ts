import { styled, Button, Stack } from "@mui/material";

export const DownloadCV = styled(Button)({
    width: 200,
    borderRadius: 20,
    color: '#5dc739',
    borderColor: '#5dc739',
    marginTop: 20,
    ':hover': {
        backgroundColor: 'white',
        borderColor: '#5dc739',
        transform: 'scale(1.1)'    
    },
    animation: 'fade 3s normal forwards',
    '@keyframes fade': {
        'from': {
            opacity: 0
        },
        'to': {
            opacity: 1
        }
    }
}) as typeof Button

export const StackAnimation = styled(Stack)({
    animation: 'fade 3s normal forwards',
    '@keyframes fade': {
        'from': {
            opacity: 0
        },
        'to': {
            opacity: 1
        }
    }
}) as typeof Stack