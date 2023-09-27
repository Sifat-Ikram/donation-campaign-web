import { useState } from "react";
import Banner from "./Banner";
import Donations from "./Donations";


const Home = () => {
    const [value, setValue] = useState([]);
    const handleSearchBtn = (event) => {
        setValue(event);
    }

    return (
        <div className="space-y-24">
            <Banner handleSearchBtn={handleSearchBtn}></Banner>
            <Donations value={value}></Donations>
        </div>
    );
};

export default Home;