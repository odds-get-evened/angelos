const {createHash} = require('crypto');

const Block = class {
    constructor(data, prev, diff = 1) {
        this.data = data;
        this.previousHash = prev;
        this.difficulty = diff;
        this.nonce = 0;
        this.timestamp = Date.now();
        this.hash = this.generateHash();

        console.log(this);
    }

    generateHash() {
        // format: 'timestamp;data;previousHash'
        let s = this.timestamp.toString() + ';' + new TextDecoder().decode(this.data)
            + ';' + this.previousHash;

        let h = createHash('sha256').update(s).digest('hex');
        
        return h;
    }
};

const Blockchain = class {
    constructor() {
        this.blocks = [];

        if(this.blocks.length == 0) {
            let d = new TextEncoder().encode('genesis');
            this.blocks.push(new Block(d, ''));
        }
    }

    addBlock(b) {
        this.blocks.push(b);
    }

    getLastBlock() {
        if(this.blocks.length > 0) {
            return this.blocks[-1];
        }

        return null;
    }

    getLinkedBlock(cur) {
        this.blocks.forEach((b) => {
            if(b.previousHash == cur.hash) {
                return b;
            }
        });

        return null;
    }
};

exports.Block = Block;
exports.Blockchain = Blockchain;