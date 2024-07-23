import axios from "axios";

export const getBlockData = async ()=> {
    try {
        const response = await axios.get("https://node.poxscan.io/api/blocksdata");
        return (response?.data);
    } catch (error) {
        console.log("error", error)
    }
}

export const getBlockTableData= async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/getblocks?limit=10");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getAccountsData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/account/stats");
        return (response?.data);
    } catch (error) {
        console.log("error", error)
    }
}

export const getAccountTableData =  async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/account/list?limit=10&page=0");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getContractTableData = async() => {
    try {
        const response = await axios.post("https://governance.poxscan.io/dev/verifiedcontract",
            
                {
                    "pageNos": 0, 
                    "pageLimit": 10
                }
            
        );
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getAllContractTableData =  async() => {
    try {
        const response = await axios.post("https://governance.poxscan.io/dev/getcontracts",
            {
                "pageNos": 0, 
                "pageLimit": 10
            }
        );
        return (response?.data);
    } catch (error) {
        console.log("error", error)
    }
}

export const getTransferTableDataOfPoxTransfer = async() => {
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

export const getTransferTableDataOfPRC20Transfer = async() => {
    try {
        const response = await axios.post("https://governance.poxscan.io/blockchain/getcontractdata",
            {
                "typefilter": "type",
                "filter": "PRC20",
                "pageLimit": 10,
                "pageNos": 0,
                "getStats": false
            }
        );
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getBlockchainNodeMapData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/nodeinfo")
        return (response?.data);
    } catch (error) {
        console.log(error)
    }
}

export const getTransactionStatsData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/transaction/stats");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTransactionTableData = async()=>{
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction",{
                "end_timestamp": 1721125787352,
                "page": 0,
                "limit": 10
        })
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getBlockDetailPageData = async(id) => {
    try {
        const response = await axios.get(`https://node.poxscan.io/api/block?block=${id}`);
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTokenTransactionsDetailData = async() => {
    try {
        const response = await axios.post("https://node.poxscan.io/api/transaction",
            {
                "page": 0, 
                "limit": 10, 
                "address": "PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
            }
        )
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTokenDetailData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/account/detail?address=PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getContractDetailData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/blockchain/contractpage?contractAddress=PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getProducerDetailData = async(id) => {
    try {
        const response = await axios.get(`https://node.poxscan.io/api/account/detail?address=${id}`);
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

