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

export const getResourceDetailsData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/governance/resourcedetails");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
        
    }
}

export const getTrendingSearchGraphData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/token0");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getStakedData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/governance/getstakedata");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getTransactionGraphData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/txngraph");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getPriceChartGraphData = async() => {
    try {
        const response = await axios.get("https://node.poxscan.io/api/priceChart");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getStableCoinGraphData = async() => {
    try {
        const response = await axios.get ("https://node.poxscan.io/api/graphdata");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getNewAndActiveAndTotalAccounts = async() => {
    try {
        const response = await axios.get ("https://node.poxscan.io/api/stats");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
};
