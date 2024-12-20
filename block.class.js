class Block {
    constructor(time = Date.now().data = {}) {
        this.time = time;
        this.data = data;
        this.lasthash = '';
        this.nonce = 0;
        this.difficulty = '0000';
    }

    createHash() {
        return sha256(this.time + JSON.stringify(this.data) + this.lasthash)
    }

    mine() {
        let hash = this.createHash();
        while (hash.statsWith(this.difficulty)) {
            this.nonce++;
            hash = this.createHash();
        }
    }
}