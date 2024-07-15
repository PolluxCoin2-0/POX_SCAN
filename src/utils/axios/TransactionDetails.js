import axios from "axios";

export const getTransactionDetailsData = async() => {
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction",
            {
                "page": 0, 
                "address": "PJ4GrZTvQvtYTi41PJTCVkxpwJSGijpLj2"
            }
        )
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTransferDetailData = async() => {
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction",
            {
                "page": 0, 
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

export const getAccountDetailData = async() => {
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction", 
            {
                "hash": "e0dc64d335e8a60096a649a9bfe67ba93e59eb9c5bbf9f769d0a5e02888281c8"
                }
        )
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}