import { useLoaderData, useParams } from "react-router-dom";
import { savedDonationAmount } from "./localStorage";
import swal from 'sweetalert';


const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    const { title, price, text_color, image, description } = donation;

    const handlerAddPrice = () => {
        savedDonationAmount(idInt);
        swal("Good job!", "Your have donated successful", "success");
    }

    return (
        <div>
            <div>
                <div className="w-96 mx-auto mb-10">
                    <img src={image} className="h-80 relative" alt={title} />
                    <div className="-mt-10 fixed bg-[#00000080] z-0 w-96">
                        <button onClick={handlerAddPrice} className="px-5 py-2 rounded-lg" style={{ backgroundColor: text_color }}>Donate: {price}</button>
                    </div>

                </div>
                <div className="pl-40 space-y-5">
                    <h1 className="text-[#0B0B0B] font-bold text-3xl">{title}</h1>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default DonationDetails;