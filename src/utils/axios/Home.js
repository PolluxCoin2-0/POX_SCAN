import axios from "axios";

export const getTvlPriceData = async() => {
    try {
        const response= await axios.get("https://governance.poxscan.io/governance/tvlgraph");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTrendingSearchData = async() => {
    try {
         const response = await axios.get("https://node.poxscan.io/api/status");
         return (response?.data);
    } catch (error) {
        console.log("error", error);
        
    }
}