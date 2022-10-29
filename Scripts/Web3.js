import abi from "../abi/abi.json" assert {type: "json"};

// SC: 0xb1613CEBFCCE54484aBbB603C0b2B5204B3F4bd2

const blockchain = new Promise((res, rej) => {

    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        rej("You should install Metamask to use it!");
    }

    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0xb1613CEBFCCE54484aBbB603C0b2B5204B3F4bd2");

    // Get my Metamask address
    web3.eth.getAccounts().then((accounts) => {
        console.log("-> My account is: ", accounts[0]);
    });

    // Get the current supply of NFT Tokens
    web3.eth.requestAccounts().then((accounts) => {
        contract.methods.totalSupply().call({ from: accounts[0] }).then((supply) => {
            console.log("-> Current supply of NFT Tokens is: ", supply);
        });
    });

    // Get the Maximum supply of NFT Tokens
    web3.eth.requestAccounts().then((accounts) => {
        contract.methods.maxSupply().call({ from: accounts[0] }).then((maxsupply) => {
            console.log("-> Maximum supply of NFT Tokens is: ", maxsupply);
        });
    });

    // Get the owner of the plot
    web3.eth.requestAccounts().then((accounts) => {
        contract.methods.ownerOf(tokenId).call({from: accounts[0] }).then((data) => {
            console.log("-> Owner of plot: ", data);
        });
    });

    // Get your buildings made in the Metaverse
    web3.eth.requestAccounts().then((accounts) => {
        contract.methods.plots().call({ from: accounts[0] }).then((data) => {
            console.log("-> Your plot detailes are: ", data);
        });
    });

    // Get all the plots made in the Metaverse 
    web3.eth.requestAccounts().then((accounts) => {
        contract.methods.totalSupply().call({ from: accounts[0] }).then((supply) => {
            contract.methods.getPlots().call({ from: accounts[0] }).then((data) => {
                res({ supply: supply, plot: data });
                console.log(data);
            });
        });
    });
});

export default blockchain;