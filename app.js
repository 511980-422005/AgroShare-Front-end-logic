 
const BASE_URL = 'http://localhost:3000';
// Function 1: Submitting Farmer Login Information
const farmerLoginData = {
    email: "farmer123@example.com",
    password: "farmerPass123",
    phoneNumber: "9876543210",
    otp: "123456"
};

async function submitFarmerLogin() {
    try {
        const response = await axios.post(`${BASE_URL}/farmerLoginInfo`, farmerLoginData);
        await submitFarmerID({ phoneNumber: farmerLoginData.phoneNumber });
        
    } catch (error) {
        console.error('Error during farmer login:', error);
    }
}

// Function 2: Submitting Investor Login Information
const investorLoginData = {
    email: "investor456@example.com",
    password: "investorPass456",
    phoneNumber: "1234567890",
    otp: "654321"
};

async function submitInvestorLogin() {
    try {
        const response = await axios.post(`${BASE_URL}/investorLoginInfo`, investorLoginData);
          
            await submitInvestorID({ phoneNumber: investorLoginData.phoneNumber });
        
    } catch (error) {
        console.error('Error during investor login:', error);
    }
}

// Function 3: Submitting Farmer ID
async function submitFarmerID(data) {
    try {
        const response = await axios.post(`${BASE_URL}/farmerID`, data);
        console.log('Farmer ID response:', response.data);
    } catch (error) {
        console.error('Error submitting farmer ID:', error);
    }
}

// Function 4: Submitting Investor ID
async function submitInvestorID(data) {
    try {
        const response = await axios.post(`${BASE_URL}/investorID`, data);
        console.log('Investor ID response:', response.data);
    } catch (error) {
        console.error('Error submitting investor ID:', error);
    }
}

// Function 5: Farmer Side Applied Share Details
const farmerAppliedShareData = {
    totalAmount: "50000",//poojana invester and former id na avangaloda phone number thaa phone number elango ta vangi inga vechu anupanu same for investers
    percentage_of_former: 50,
    percentage_of_former: 50,
    cropName: "Organic Wheat",
    durationStart:"04/02/2025",
    durationEnd:"24/08/2025"
};

async function submitFarmerAppliedShareDetails() {
    try {
        const response = await axios.post(`${BASE_URL}/farmerAppliedShare`, farmerAppliedShareData);
        console.log('Farmer applied share response:', response.data);
    } catch (error) {
        console.error('Error applying share details:', error);
    }
}

// Function 6: Investor Side Homepage Getting Shares
async function getInvestorHomepageShares() {
    try {
        const response = await axios.get(`${BASE_URL}/investorHomepageShares`);
        console.log('Investor homepage shares response:', response.data);
    } catch (error) {
        console.error('Error getting shares for investor homepage:', error);
    }
}

// Function 7: Investor Buying Shares Details
const investorBuyingSharesData = {
    investerId:"1234567890",//inverster opt ku oru phone number kuduthangala antha number tha ID
    shareName: "Organic Wheat",
    quantity: 10
};

async function submitInvestorBuyingSharesDetails() {
    try {
        const response = await axios.post(`${BASE_URL}/investorBuyingShares`, investorBuyingSharesData);
        console.log('Investor buying shares response:', response.data);
    } catch (error) {
        console.error('Error buying shares:', error);
    }
}


//ithu vendam


// // Function 8: Farmer Paying Share Amount
// const farmerPayingShareAmountData = {
//     totalAmount: 10000,   
    
// };

// async function submitFarmerPayingShareAmount() {
//     try {
//         const response = await axios.post(`${BASE_URL}/farmerPayingShareAmount`, farmerPayingShareAmountData);
//         console.log('Farmer paying share amount response:', response.data);
//     } catch (error) {
//         console.error('Error paying share amount:', error);
//     }
// }

// Function 9: Getting Investor Wallet Amount
async function getInvestorWalletAmount() {
    try {
        const response = await axios.get(`${BASE_URL}/investorWalletAmount`);//itha vechu invester ooda wallet ah ni update pananum ithu tha nama project ooda last step
        console.log('Investor wallet amount response:', response.data);
    } catch (error) {
        console.error('Error getting investor wallet amount:', error);
    }
}

// Function 10: Farmer Sharing Profit Amount
const farmerSharingProfitAmountData = {
    investorShare: 7000// elango ta 'formertotalamount' venum  nu kely  atha inga potu enaku anupanum
};

async function submitFarmerSharingProfitAmount() {
    try {
        const response = await axios.post(`${BASE_URL}/farmerProfitShare`, farmerSharingProfitAmountData);
        console.log('Farmer sharing profit amount response:', response.data);
    } catch (error) {
        console.error('Error sharing profit amount:', error);
    }
}

// Example function calls
async function runExample() {
    await submitFarmerLogin();
    await submitInvestorLogin();
    await submitFarmerAppliedShareDetails();
    await submitInvestorBuyingSharesDetails();
    // await submitFarmerPayingShareAmount();
    await getInvestorWalletAmount();
    await submitFarmerSharingProfitAmount();
    await getInvestorHomepageShares();
}

runExample();
