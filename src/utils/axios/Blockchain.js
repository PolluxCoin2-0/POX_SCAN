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

export const getTransferTableData = async() => {
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

export const getBlockchainNodeMapData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/nodeinfo")
        return (response?.data);
    } catch (error) {
        console.log(error)
    }
}

