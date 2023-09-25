import { useEffect, useState } from "react";
import Donation from "./Donation";


const Donations = () => {
    const [donation, setDonation] = useState([]);

    useEffect(() =>{
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonation(data));
    },[])
    return (
        <div>
            <div className="grid lg:grid-cols-4 grid-cols-2 max-w-6xl mx-auto gap-5 mb-10">
               {
                donation.map( donation => <Donation key={donation.id} donation={donation}></Donation>)
               }
            </div>
        </div>
    );
};

export default Donations;