import Box from '@mui/material/Box'
import { BunneyLoading } from 'bunney-ui/BunneyLoading'

export const Loading = () => (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '90vh',
                top: 0,
                left: 0,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
            }}
        >
            <BunneyLoading />
        </Box>
    )
