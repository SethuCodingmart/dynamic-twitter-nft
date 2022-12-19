const Twitter = require("../utils/Twitter.json");
const ethers = require("ethers");
const CONTRACT_ADDRESS = "0xC81892F0581841fB16C9e088614395098a052494";

const mintNFT = async (url) => {
  try {
    console.log({ url });
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Twitter.abi,
        signer
      );
      console.log("Going to pop wallet now to pay gas...");
      let tx = await contract.register(url);
      const receipt = await tx.wait();
      console.log(receipt);
      if (receipt.status === 1) {
        console.log("NFT minted! https://mumbai.polygonscan.com/tx/" + tx.hash);
      } else {
        return "Transaction failed! Please try again";
      }
    }
  } catch (error) {
    console.log({ error });
    return error;
  }
};

const connectWallet = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      throw {
        message: "Get MetaMask -> https://metamask.io/",
      };
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    // Fancy method to request access to account.
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    // Boom! This should print out public address once we authorize Metamask.
    console.log("Connected", accounts[0]);
    return accounts[0];
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const checkWalletConnected = async () => {
  const { ethereum } = window;
  if (!ethereum) {
    console.log("Make sure you have MetaMask!");
    return null;
  } else {
    console.log("We have the ethereum object", ethereum);
  }

  const accounts = await ethereum.request({ method: "eth_accounts" });

  if (accounts.length > 0) {
    const account = accounts[0];
    console.log("Found an authorized account:", account);
    return account;
  } else {
    console.log("No authorized account found");
    return null;
  }
};
export { checkWalletConnected, connectWallet, mintNFT };
