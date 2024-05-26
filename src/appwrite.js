import { Client,Databases, Account } from 'node-appwrite';


const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('665022510026c08cc7c9')
  .setKey('196a75301938bc9f7a4b10f04706b764341f10cf63d7f50209ebb69f15cc8a7b5d043617f00de17317a7304dad6967f83943936a4c006e8efa7f64d2b7dee75fa7bb8a8b67b72e61decdb603b042e66e4e868309e8f201bc7abf34e0e9fb9cc21f2fec4413bb985fbc96bd3f903fa661ffbfdd2831aa8996e085bc6f192f3ac0'); 

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account };
