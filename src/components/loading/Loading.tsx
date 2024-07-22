import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export const Loading = () => {
    return (
         <Box sx={{ display: 'flex',width:'auto',height:'87vh',justifyContent:'center',alignItems:'center' }}>
            <CircularProgress />
        </Box>
     )
}