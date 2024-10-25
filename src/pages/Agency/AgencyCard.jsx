import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import useAgencyImage from '../../hooks/useAgencyImage';

const AgencyCard = ({ agency }) => {

    const {
        agencyName,
        agency_id,
        numberOfVehicles,
        userEmail,
    } = agency

    const { agencyImage } = useAgencyImage(userEmail)
    const navigate = useNavigate();



    console.log(agency)

    const gotoDetails = (id) => {
        navigate(`/agencyDetails/${id}`)
    }

    return (
        <div className='flex border rounded-xl lg:w-[50%] mx-auto shadow-xl px-5 py-2 items-center justify-between hover:scale-110 duration-500 cursor-pointer border-primary'
            onClick={() => gotoDetails(agency.agency_id)}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto' }}>
                    
                    <Typography component="div" variant="p">
                    Agency Name: {agencyName}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                    </Typography>
                </CardContent>

                <CardContent sx={{ flex: '1 0 auto' }}>
                    
                    <Typography component="div" variant="p">
                    Agency Id: {agency_id}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                    </Typography>
                </CardContent>

                <CardContent sx={{ flex: '1 0 auto' }}>
                    
                    <Typography component="div" variant="p">
                    No of Vehicle: {numberOfVehicles}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                    </Typography>
                </CardContent>

                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                </Box>
            </Box>
            <div className='h-36 w-36 rounded-full overflow-hidden border border-primary'>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={agencyImage}
                    alt="Live from space album cover"

                />
            </div>
        </div>
    );
};

export default AgencyCard;