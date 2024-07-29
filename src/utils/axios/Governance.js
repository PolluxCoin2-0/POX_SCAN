import axios from "axios";

export const getSuperTableData = async() => {
    try {
        const response = await axios.post("https://governance.poxscan.io/governance/getWitnessData",
            {}
        );
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getPartnersTableData = async() => {
    try {
        const response = await axios.post("https://governance.poxscan.io/governance/getWitnessDataP", 
            {
                "pageNos": 0, 
                "pageSize": 10
            }

        );

        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getVotesData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/governance/votesData");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getVotesTableData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/governance/getvoteslist?pageNo=0&pageLimit=10&term=");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getNetworkParameterData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/governance/networkParameters");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getCommitteeProposalData = async() => {
    try {
        const response = await axios.get("https://governance.poxscan.io/governance/getProposal");
        return (response?.data);
    } catch (error) {
        console.log("error", error);
    }
}

export const getSuperBlocksData = async() => {
    try {
        const response = await axios.post("https://testnet-governance.poxscan.io/governance/getWitnessData");
    } catch (error) {
        console.log("error", error);
    }
}