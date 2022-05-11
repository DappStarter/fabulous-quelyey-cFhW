require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid arch outer sugar warrior ridge remind concert grace glow flock vibrant'; 
let testAccounts = [
"0x7c219524ef04cfb32d04d1b67649d05bca71381f6344c237e799184b67eac31e",
"0x37cf98b68f4ad12dd42cb10e19ac31cae84ab83c0bad6d6409899a40d7dca645",
"0x0958d5370a3c86a65ff0d9f015780c677ed5e8663e9ed2d7d805f8e6ed732dfc",
"0x37a9b660dfc6735044ac9e4466cb75b3fd7176d94a09c3ff2a3195e473a3bba1",
"0x3bcac438b1712e3928d2b469e7fdb784b58c65efa6a8eafbdb29c3de80d3e6fd",
"0xe5bc8a314605dac9acc5a2b849daae62aea81bef6f0a43ec80fbed341da93a31",
"0x78c54aeee42c68c7012d75d00096b158de8402b4392858372859426d190ca4e0",
"0x76468f5318cbe7350bfe95bb16d03b1d80e0b159dc2aeb1ddc20e1c50bde9f79",
"0x8d9770e92d46c775e2f77c1e6d2e89e676060aab826619414ce4c472991f7b5e",
"0x5c40c7f1571b3a4bc423c599fbd2fe15e8e12af03bffe72711cf597d838f09fa"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


