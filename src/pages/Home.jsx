import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset2 from '../assets/images/images.jpg';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';

const BackgroundImage = styled(Box)({
    backgroundImage: `url(${Sunset2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1 // Places it behind other content
});

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '65%',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
});

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
});

const Home = () => {
    const [result, setResult] = useState({});

    return (
        <>
            <BackgroundImage />
            <Component>
                <Image />
                <Box style={{ width: '73%', height: '80%' }}>
                    <Form setResult={setResult} />
                    <Information result={result} />
                </Box>
            </Component>
        </>
    );
};

export default Home;
