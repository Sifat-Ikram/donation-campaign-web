import PropTypes from 'prop-types';
import { useState } from 'react';

const Banner = ({handleSearchBtn}) => {
    const [value, setValue] = useState([]);
    
    const handleSearch = (event) =>{
        setValue(event.target.value.toLowerCase());
    }

    return (
        <div>
            <div className=" h-96">
                <img className="h-96 w-full opacity-5" src="https://i.ibb.co/YfTQg9V/Getty-Images-1214206519-300x180.jpg" alt="" />
            </div>
            <div className="absolute -my-96">
                <div className="flex flex-col justify-center items-center h-96 space-y-5 lg:ml-72 md:ml-14 text-center">
                    <h1 className="text-black text-5xl font-inter font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center items-center">
                        <input type="text" value={value} onChange={handleSearch} placeholder="Type here" className="px-2 py-2 w-80 bordered rounded-l-lg" />
                        <button className="text-base font-semibold text-white px-5 py-2 bg-[#FF444A] rounded-r-lg" onClick={() => handleSearchBtn(value)}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleSearchBtn: PropTypes.func.isRequired
};

export default Banner;