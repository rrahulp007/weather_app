import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material';

// Styled components
const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20
});

const Heading = styled(Typography)({
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 30,
    color: '#3f51b5', // Blue color for the heading
});

const Information = ({ result }) => {

    return (
        <Box 
            style={{
                margin: '30px 60px',
                backgroundColor: '#BCF5D4', // Light gray background
                padding: '20px',
                borderRadius: '8px', // Rounded corners
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
            }}
        >
            <Heading>Prasad Weather</Heading>
            {result && Object.keys(result).length > 0 ?
                <Box>
                    <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
                    <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
                    <Row><Opacity />Humidity: {result.main.humidity}</Row>
                    <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
                    <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
                    <Row><Dehaze />Condition: {result.weather[0].main}</Row>
                    <Row><Cloud />Clouds: {result.clouds.all}%</Row>
                </Box>
                : <Error>Please enter the values to check weather</Error>
            }
        </Box>
    )
}

export default Information;
