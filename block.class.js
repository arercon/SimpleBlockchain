class Block {
    constructor(time = Date.now(), data = {}) {
        this.time = time;
        this.data = data;
        this.lasthash = '';
        this.nonce = 0;
        this.difficulty = '0';
    }

    createHash() {
        return sha256(this.nonce + this.lasthash + this.time + JSON.stringify(this.data));
    }

    mine() {
        let hash = this.createHash();
        return new Promise((resolve, reject) => {
            let i = setInterval(() => {
                debugger;
                if (this.kill) {
                    clearInterval(i);
                    reject('Block mining interrupted');
                }
                if (hash.startsWith(this.difficulty)) {
                    // console.log('Block mined:', hash);
                    clearInterval(i);
                    resolve();
                } else {
                    this.nonce++;
                    hash = this.createHash();
                }
            }, 1000 / 30);
        });
    }

    mineOld() {
        let hash = this.createHash();
        while (!hash.startsWith(this.difficulty)) {
            this.nonce++;
            hash = this.createHash();
        }
    }
}