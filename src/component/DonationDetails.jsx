import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find( donation => donation.id === idInt);
    console.log(donation);
    // const { title, price, text_color, image } = donation;
    return (
        <div>
            <div className="w-52 border-3 mx-auto">
                {/* <div>
                    <img src={image} className="w-60" alt={title} />
                   <h1>{title}</h1>
                </div> */}
                
            </div>
        </div>
    );
};

export default DonationDetails;