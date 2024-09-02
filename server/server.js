const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors()); 
server.use(express.json());

let farmers = {};
let investors = {};
let shares = [];
let walletAmount = 5000;

server.post('/farmerLoginInfo', (req, res) => {
    const { email, password, phoneNumber, otp } = req.body;

    if (email === 'farmer123@example.com' && password === 'farmerPass123' && otp === '123456') {
        farmers[phoneNumber] = { email, password, otp };
        res.status(200).json('Yess');
    } else {
        res.status(401).json('Invalid credentials');
    }
});

server.post('/investorLoginInfo', (req, res) => {
    const { email, password, phoneNumber, otp } = req.body;

    if (email === 'investor456@example.com' && password === 'investorPass456' && otp === '654321') {
        investors[phoneNumber] = { email, password, otp };
        res.status(200).json('Yess');
    } else {
        res.status(401).json('Invalid credentials');
    }
});

server.post('/farmerID', (req, res) => {
    const { phoneNumber, id } = req.body;

    if (farmers[phoneNumber]) {
        farmers[phoneNumber].id = id;
        res.status(200).json({ message: 'Farmer ID received' });
    } else {
        res.status(404).json('Farmer not found');
    }
});

server.post('/investorID', (req, res) => {
    const { phoneNumber, id } = req.body;

    if (investors[phoneNumber]) {
        investors[phoneNumber].id = id;
        res.status(200).json({ message: 'Investor ID received' });
    } else {
        res.status(404).json('Investor not found');
    }
});

server.post('/farmerAppliedShare', (req, res) => {
    const appliedShare = req.body;

    shares.push(appliedShare);
    res.status(200).json({ message: 'Farmer applied share details received' });
});

server.get('/investorHomepageShares', (req, res) => {
    res.status(200).json(shares);
});

server.post('/investorBuyingShares', (req, res) => {
    const { shareName, quantity, pricePerShare, totalAmount } = req.body;

    if (walletAmount >= totalAmount) {
        walletAmount -= totalAmount;
        res.status(200).json({ message: 'Shares purchased successfully' });
    } else {
        res.status(400).json('Insufficient funds');
    }
});

server.post('/farmerPayingShareAmount', (req, res) => {
    const { totalAmount, breakdown } = req.body;

    walletAmount += breakdown.investorShare;
    res.status(200).json({ message: 'Payment processed successfully' });
});

server.get('/investorWalletAmount', (req, res) => {
    res.status(200).json({ amount: walletAmount });
});

server.post('/farmerProfitShare', (req, res) => {
    const { investorShare } = req.body;

    walletAmount += investorShare;
    res.status(200).json({ message: 'Profit shared successfully' });
});

const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
