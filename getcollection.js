import { ArchwayClient } from '@archwayhq/arch3.js';
import { SigningArchwayClient } from '@archwayhq/arch3.js';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

const network = {
  chainId: 'constantine-3',
  endpoint: 'https://rpc.constantine.archway.tech',
  prefix: 'archway',
};

const collectionAddress = 'archway1ymhegqt0k9fz4jj4gyv07artlyrdltr2rf9jzqt2czuxvmq9x94sgag3l4';

const client = await SigningArchwayClient.connectWithSigner(network.endpoint);

// Get name and symbol
const collectionsBaseMsg = {
  contract_info: {},
};

const collectionBase = await client.queryContractSmart(
  collectionAddress,
  collectionsBaseMsg
);

console.log(collectionBase);


// Get metadata
const collectionsMetadataMsg = {
  collection_metadata: {},
};

const collectionMetadata = await client.queryContractSmart(
  collectionAddress,
  collectionsMetadataMsg
);

console.log(collectionMetadata);