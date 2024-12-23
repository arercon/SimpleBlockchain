const { Block } = require('./block.class')
const { Blockchain } = require('./blockchain.class')

console.log('Creating blockchain');
let jChain = new Blockchain();

mine();

function mine() {
    console.log('---------Starting to mine a new block------------')
    let block = new Block(Date.now(), { 'Jannek': 100, 'Marius': 50 },);
    block.mine();
    jChain.addBlock(block)
    console.log(jChain.chain);
    mine();
}