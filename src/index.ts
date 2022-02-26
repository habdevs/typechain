import * as CryptoJS from 'crypto-js';
class Block {
  public id: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (id: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number):string => CryptoJS.SHA256(id + previousHash + data + timestamp).toString();

  constructor(id: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number,) {
      this.id = id;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp;
    }
};

const genesisBlock: Block = new Block(0, '202020202002', '', 'Hello', 123456);

let blockchain = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLastBlock = (): Block => blockchain[blockchain.length - 1];

const getTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
