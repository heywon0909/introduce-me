import Box from '@mui/material/Box'
import { BunneyLoading } from 'bunney-ui/BunneyLoading'

export const Loading = () => {

    return (
         <Box sx={{ display: 'flex',width:'auto',height:'87vh',justifyContent:'center',alignItems:'center' }}>
            <BunneyLoading />
        </Box>
     )
}