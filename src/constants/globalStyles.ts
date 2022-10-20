import { styled, Box } from '@mui/material';

export const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
}) as typeof Box

export const Divider = styled(Box)({
    width: '90%',
    height: 1,
    backgroundColor: 'lightGrey',
    position: 'absolute',
    bottom: 0
}) as typeof Box