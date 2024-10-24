import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const AgencyCard = ({ agency }) => {

    const navigate = useNavigate();

    const gotoDetails = (id) => {
        navigate(`/agencyDetails/${id}`)
    }

    return (
        <div className='flex' onClick={()=>gotoDetails(agency.agency_id)}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {agency.agencyName}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        Owner:
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image=""
                alt="Live from space album cover"
            />
        </div>
    );
};

export default AgencyCard;