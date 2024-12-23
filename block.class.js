class Block {
    constructor(time = Date.now(), data = {}) {
        this.time = time;
        this.data = data;
        this.lasthash = '';
        this.nonce = 0;
        this.difficulty = '00';
    }

    createHash() {
        return sha256(this.nonce + this.lasthash + this.time + JSON.stringify(this.data));
    }

    mine() {
        let hash = this.createHash();
        while (!hash.startsWith(this.difficulty)) {
            this.nonce++;
            hash = this.createHash();
        }
    }
}