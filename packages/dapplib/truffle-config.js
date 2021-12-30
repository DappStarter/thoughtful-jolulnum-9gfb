require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad heavy kiwi bubble success'; 
let testAccounts = [
"0xf8709709462f2aa4c53d116d9c498920426a86fb749611b4c28e470d2ef075cc",
"0xf82dc0572622c281e24b7a7fc14afe29f53983f14280904cbe34e540f40d85ac",
"0xeb2c84b54cd0fe577c187ce5b0d05d836806cfaf6fe110674a073402cc2389f3",
"0xb9051beee715536771064f22cd15cd2b429588ffed9081c73687c1db02d24ee6",
"0x35aa258745adec56982b8ea543b97b83e2aee76200a1d6dcf7faa19347570e6a",
"0x84e13457b1c55b2c1e0c5a28cf1df8ed4dc8d74c9ff2a32d986124512d84d20f",
"0x5c33e78dc92af2435dafb304cdaa52c67bb361ab77da13d8ea4e4165c4c357e4",
"0x0f072cad0b769de40a11861a101eee4eaae38310da3fafbfe6ecf8e575862b04",
"0x80d03b60bbc005d747ad420a953b46b2926811e864e21317fbb6757f22620844",
"0xf2148550f3619f18e570e422f0a5764e85215961995d87fb7a69a8a0166896ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

