import axios from "axios";

export const getBlockData = async () => {
  try {
    const response = await axios.get("https://node.poxscan.io/api/blocksdata");
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getBlockTableData = async (pageNo) => {
  console.log(pageNo);
  try {
    const response = await axios.get(
      `https://node.poxscan.io/api/getblocks?page=${pageNo}&limit=10`
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAccountsData = async () => {
  try {
    const response = await axios.get(
      "https://node.poxscan.io/api/account/stats"
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAccountTableData = async (pageNo) => {
  console.log(pageNo);
  try {
    const response = await axios.get(
      `https://node.poxscan.io/api/account/list?limit=10&page=${pageNo}`
    );
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getContractTableData = async (pageNo) => {
  try {
    const response = await axios.post(
      "https://governance.poxscan.io/dev/verifiedcontract",

      {
        pageNos: pageNo,
        pageLimit: 10,
      }
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllContractTableData = async () => {
  try {
    const response = await axios.post(
      "https://governance.poxscan.io/dev/getcontracts",
      {
        pageNos: 0,
        pageLimit: 10,
      }
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getTransferTableDataOfPoxTransfer = async (pageNo) => {
  try {
    const response = await axios.post(
      "https://node.poxscan.io/api/transaction",
      {
        " page": pageNo,
        limit: 10,
        filter: "POX",
      }
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getTransferTableDataOfPRC20Transfer = async (pageNo) => {
  try {
    const response = await axios.post(
      "https://governance.poxscan.io/blockchain/getcontractdata",
      {
        typefilter: "type",
        filter: "PRC20",
        pageLimit: 10,
        pageNos: pageNo,
        getStats: false,
      }
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getBlockchainNodeMapData = async () => {
  try {
    const response = await axios.get("https://node.poxscan.io/api/nodeinfo");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTransactionStatsData = async () => {
  try {
    const response = await axios.get(
      "https://node.poxscan.io/api/transaction/stats"
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getTransactionTableData = async (pageNo) => {
  try {
    const response = await axios.post(
      "https://node.poxscan.io/api/transaction",
      {
        end_timestamp: 1721125787352,
        page: pageNo,
        limit: 10,
      }
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getBlockDetailPageData = async (id) => {
  try {
    const response = await axios.get(
      `https://node.poxscan.io/api/block?block=${id}`
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getTokenTransactionsDetailData = async (pageNo) => {
  try {
    const response = await axios.post(
      "https://node.poxscan.io/api/transaction",
      {
        page: pageNo,
        limit: 10,
        address: "PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm",
      }
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getTokenDetailData = async (id) => {
  try {
    const response = await axios.get(
      `https://node.poxscan.io/api/account/detail?address=${id}`
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getContractDetailData = async (id) => {
  try {
    const response = await axios.get(
      `https://governance.poxscan.io/blockchain/contractpage?contractAddress=${id}`
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getProducerDetailData = async (id) => {
  try {
    const response = await axios.get(
      `https://node.poxscan.io/api/account/detail?address=${id}`
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};
