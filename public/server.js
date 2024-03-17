const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Assuming you're using axios for API requests

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Calculate reward points based on distance and efficiency
//Efficiency being time of travel
function calculateReward(Distance, Efficiency) {
    return Distance * Efficiency;
}

// POST endpoint to handle form submission from frontend
app.post('/calculate-reward', async (req, res) => {
    try {
        const { Distance, Efficiency } = req.body;

        // Validate input data
        if (!Distance || !Efficiency || typeof Distance !== 'number' || typeof Efficiency !== 'number' || Distance <= 0 || Efficiency <= 0) {
            throw new Error('Invalid input data. Distance and efficiency must be positive numbers.');
        }
         //Tesla API Validation

         /*

         document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const token = await authenticateTeslaAPI();
        const carData = await getTeslaCarData(token);

        // Extract required data
        const requiredData = {
            distance: carData.estimated_distance,
            efficiency: carData.estimated_efficiency
            // ... any other required data
        };

        // Send data to your server
        await sendDataToServer(requiredData);
        alert('Data sent successfully');
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send data');
    }
});

async function authenticateTeslaAPI() {
    // Implement authentication with Tesla API
    // Ensure to handle credentials securely
}

async function getTeslaCarData(token) {
    // Fetch car data using Tesla API
    // Remember to handle user's credentials securely
}

async function sendDataToServer(data) {
    await fetch('https://yourserver.com/api/teslaData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
         */

        // Calculate reward points
        const rewardPoints = calculateReward(Distance, Efficiency);

        // Log incoming request data and calculated reward points
        console.log('Incoming Request Data:', { Distance, Efficiency });
        console.log('Calculated Reward Points:', rewardPoints);

        // Send request to smart contract API
        const apiResponse = await axios.post('https://api.vorj.app/main/v2/erc20/contracts/0x4DFD71b95ebd9c0D8eDA0379e0ef2413d7f54BF7/mint', 
        {
            exponent: 0,
            address: "0xdC89E361B206dCFb378ed7BC7Ba933Bb141f5C6F",
            amount: rewardPoints.toString()
        },
        {
            'x-api-key':'a7855952c42432de583e8c30c88d5320fee1d2f31c84d8b3108ab3f5b6c26245'
        });

        // Return the calculated reward points
        res.json({ rewardPoints });
    } catch (error) {
        console.error('Error calculating reward points:', error.message);
        res.status(400).json({ error: `error is this ${JSON.stringify(error, null, 2)}` });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



