import axios from "axios";

export const getTvlPriceData = async() => {
    try {
        const response= await axios.get("https://governance.poxscan.io/governance/tvlgraph");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}