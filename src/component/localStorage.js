const getStoredDonationAmount = () =>{
    const storedDonationAmount = localStorage.getItem('Donation-amount');
    if(storedDonationAmount){
        return JSON.parse(storedDonationAmount);
    }
    return [];
}


const savedDonationAmount = id =>{
    const storedDonationAmount = getStoredDonationAmount();
    const exist = storedDonationAmount.find(donationId => donationId === id);
    if(!exist){
        storedDonationAmount.push(id);
        localStorage.setItem('Donation-amount', JSON.stringify(storedDonationAmount));
    }
}

export { savedDonationAmount, getStoredDonationAmount}