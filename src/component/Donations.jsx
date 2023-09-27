import { useEffect, useState } from "react";
import Donation from "./Donation";
import PropTypes from 'prop-types';


const Donations = ({value}) => {
    const [donation, setDonation] = useState([]);
    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonation(data));
    }, [])
    
    const getFilteredCategory =()=>{
        if(!value){
            return donation;
        }
        else{
            return donation.filter(item => item.category.toLowerCase().includes(value));
        }
    }
    const filteredCategory = getFilteredCategory();
    return (
        <div>
            <div className="grid lg:grid-cols-4 grid-cols-2 max-w-6xl mx-auto gap-5 mb-10">
                { 
                    filteredCategory.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
               }
            </div>
        </div>
    );
};

Donation.propTypes = {
    value: PropTypes.array
};

export default Donations;