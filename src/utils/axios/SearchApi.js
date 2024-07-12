import axios from "axios";

export const getSearchData=async(query)=>{
    try {
        const response = await axios.get(`https://node.poxscan.io/api/search?term=${query}&type=`);
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}