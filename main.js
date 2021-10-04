const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, data, previousHash =''){
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash(); 
    }
 
    createHash(){
        return SHA256(this.index + this.date + this.date).toString();
    }
}

class BlockChain {
    constructor(genesis){
        this.chain = [this.createFirstBlock(genesis)];
    }
    createFirstBlock(genesis){
        return new Block(0,genesis);
    }
    getLastBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(data){
        let prevBlock = this.getLastBlock();
        let block = new Block(prevBlock+1, data, prevBlock.hash);
        this.chain.push(block);
    }
}

// block = new Block(0, 'prueba');
// console.log(JSON.stringify(block,null,2));

let naniCoin = new BlockChain('info de genesis');

naniCoin.addBlock('esta cryptomendo lo va a petar');
naniCoin.addBlock('valgo 16k euros');
console.log(JSON.stringify(naniCoin.chain,null,2));
