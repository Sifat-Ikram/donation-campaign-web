

const DonatedItems = ({ donation }) => {
    const { id, image, title, price, category, category_bg, card_bg, text_color } = donation;
    console.log(donation);
    return (
        <div className="flex gap-10 rounded-lg" style={{ backgroundColor: card_bg }}>
            <div>
                <img src={image} className="h-52 w-52" />
            </div>
            <div>
                <div className="py-8 space-y-1">
                    <h2 className="text-sm font-normal font-inter w-20 text-center rounded-md" style={{ color: text_color, backgroundColor: category_bg }}>{category}</h2>
                    <h2 className="text-lg font-semibold font-inter">{title}</h2>
                    <p className="text-base font-semibold" style={{ color: text_color }}>{price}</p>
                </div>
                <div>
                    <button className="text-lg font-semibold px-5 py-2 text-white rounded-md" style={{backgroundColor: text_color}}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonatedItems;