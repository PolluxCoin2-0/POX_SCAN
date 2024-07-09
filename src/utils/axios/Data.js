import axios from "axios";

// API's for Pox Page
export const getPoxPriceTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/poxPrice");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getPoxSupplyTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/supplytrend");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getMarketCapTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/markettrend");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getPoxGeneratedTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/getgenvsburn");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getPoxStakedTableData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/governance/tvlgraph");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

// API'S FOR Network page

export const getProtocolRevenueTableData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/governance/tvlgraph");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getEnergyConsumptionTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/energyCons");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getBandwidthConsumptionTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/bandwidthCons");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getAvgBlockSizeTableData = async() => {
    try {
        const response= await axios.get("https://node.poxscan.io/data/avgBlockSize");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getOnChainSizeTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/onChainData");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getSrVoteTableData = async() => {
    try {
        const response = await axios.post("https://governance.poxscan.io/governance/getWitnessData");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTotalAccountTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/stats");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getActiveAccountTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/stats");
        return (response?.data);
    } catch (error) {
        console.log('error', error);
    }
}

export const getNewAccountTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/stats");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}


export const getPoxHolderTableData = async() => {
    try {
        const  response = await axios.get("https://node.poxscan.io/data/poxHolders");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTransactionTrendTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/txnTrend");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getCommulativeTableData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/txnCum");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getContractCallTableData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/token/contractCallsbyDate");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTopContractTableData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/token/topcontractbycalls");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getRankingAccountData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/data/TopAccounts?day=1");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getRankingTokenData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/token/toptokens?day=1");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getRankingContractData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/token/topcontractbycalls?day=1");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}