class Blockchain {
    constructor() {
        this.chain = [];
    }

    async addBlock(block, nodeID) {
        let lastBlock = this.getLastBlock();
        block.data.moneyTable = lastBlock ? lastBlock.data.moneyTable : [];
        block.lastHash = lastBlock ? lastBlock.createHash() : '';
        try {
            await block.mine();
            broadcaster.notify(nodeID);
            this.chain.push(Object.freeze(block));
            log(`Node ${nodeID} mined a block. Total blocks: ${this.chain.length}`);
        } catch (error) {
            console.log(error);
        }
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