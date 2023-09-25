import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationAmount } from "./localStorage";
import DonatedItems from "./DonatedItems";


const DonatedDetails = () => {
    const donations = useLoaderData();
    const [donatedAmount, setDonatedAmount] = useState([]);
    
    useEffect( () =>{
        const storedDonationIds = getStoredDonationAmount();
        if(donations.length > 0){
            const storedDonation = [];
            for(const id of storedDonationIds){
                const donation = donations.find( donation => donation.id === id);
                if(donation){
                    storedDonation.push(donation);
                }
            }
            console.log(storedDonation);
            setDonatedAmount(storedDonation);
        }
    }, [])
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 px-24 gap-8 my-20">
                {
                    donatedAmount.map( donation => <DonatedItems key={donation.id} donation={donation}></DonatedItems>)
                }
            </div>
        </div>
    );
};

export default DonatedDetails;