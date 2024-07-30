import axios from "axios";

export const getTransactionDetailsData = async(pageNo) => {
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction",
            {
                "page": pageNo, 
                "address": "PJ4GrZTvQvtYTi41PJTCVkxpwJSGijpLj2"
            }
        )
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTransferDetailData = async(pageNo) => {
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction",
            {
                "page": pageNo, 
                "address": "PJ4GrZTvQvtYTi41PJTCVkxpwJSGijpLj2", 
                "isDecoded": true, 
                "filter": "USDX"
            }
        )
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getAccountDetailData = async(hashId) => {
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction", 
            {
                "hash": hashId, 
                }
        )
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getAccountDetailsPageData = async(address) => {
    try {
        const response = await axios.get(`https://node.poxscan.io/api/account/detail?address=${address}`);
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}