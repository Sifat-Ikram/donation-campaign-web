import { Chart } from "react-google-charts";
import { getStoredDonationAmount } from "./localStorage";



const collectedDonation = getStoredDonationAmount();
export const data = [
    ["Task", "Hours per Day"],
    ["", 0],
    ["Total Donation", 12],
    ["", 0],
    ["My Donation", collectedDonation.length],
  ];

const Statistics = () => {
    return (
            <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"400px"}
          />
    );
};

export default Statistics;