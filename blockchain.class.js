class Blockchain {
    constructor() {
        this.chain = [];
    }

    addBlock(block) {
        const lastBlock = this.getLastBlock();
        block.lastHash = lastBlock ? lastBlock.createHash() : null;
        block.mine();
        this.chain.push(Object.freeze(block));
    }

    isValid() {
        let invalidBlock = this.chain.find((currBlock, i) => {
            let prevBlock = this.chain[i - 1];
            return prevBlock && prevBlock.createHash() != currBlock.lastHash;
        })
        if (invalidBlock) {
            return false;
        } else {
            return true;
        }
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
}

module.exports = { Blockchain };