import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationAmount } from "./localStorage";
import DonatedItems from "./DonatedItems";


const DonatedDetails = () => {
    const donations = useLoaderData();
    const [donatedAmount, setDonatedAmount] = useState([]);
    const [donationLength, setDonationLength] = useState(4)

    useEffect(() => {
        const storedDonationIds = getStoredDonationAmount();
        if (donations.length > 0) {
            const storedDonation = [];
            for (const id of storedDonationIds) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    storedDonation.push(donation);
                }
            }
            setDonatedAmount(storedDonation);
        }
    }, [])
    return (
        <div className="mb-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 px-24 gap-8 my-20">
                {
                    donatedAmount.slice(0, donationLength).map(donation => <DonatedItems key={donation.id} donation={donation}></DonatedItems>)
                }
            </div>
            <div className="flex justify-center items-center">
                <div className={donationLength === donatedAmount.length ?  'hidden' : ''}>
                    <button className="text-base font-semibold text-white px-5 py-2 bg-[#009444] rounded-lg" onClick={() => setDonationLength(donatedAmount.length)}>See All</button>
                </div>
            </div>
        </div>
    );
};

export default DonatedDetails;