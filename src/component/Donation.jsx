import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
    const { id, image, title, category, category_bg, card_bg, text_color } = donation;
    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div className="card bg-base-100" style={{ backgroundColor: card_bg }}>
                    <figure><img src={image} alt={title} /></figure>
                    <div className="card-body flex flex-start flex-col">
                        <h2 className="text-sm font-normal font-inter w-20 text-center rounded-md" style={{ color: text_color, backgroundColor: category_bg }}>{category}</h2>
                        <h2 className="text-lg font-semibold font-inter" style={{ color: text_color }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Donation;