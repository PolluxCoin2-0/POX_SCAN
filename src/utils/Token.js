import axios from "axios";

export const getPoxData = async() => {
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction",
            {
                " page": 0, 
             "limit": 10, 
             "filter": "POX"
             }
        );
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}
 
export const getHoldersData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/account/list?limit=10&page=0");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getUsdxData = async() => {
    try {
        const response = await axios.post("https://governance.poxscan.io/blockchain/contractdetail",
            {
                "contractAddress": "PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm", 
               " pageSize": 10, 
                "pageNos": 0
            }
        );
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getUsdxHolderData = async() => {
    try {
        const response = await axios.post("https://governance.poxscan.io/blockchain/getcontractholders",
            {
                " contractAddress": "PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm",
             " pageNos": 0, 
              "pageSize": 10
             }
             
        )
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getHoldersSlidersStatsData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/account/stats");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}