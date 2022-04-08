import {CosmosClient} from "@azure/cosmos";
import {v4 as uuidv4} from "uuid"
import axios from "axios"
const partitionKey = {kind: 'Hash', paths: ['/partitionKey']}

const options = {
    endpoint: "https://axov.documents.azure.com:443/",
    key: "ndNjiWc4xuvGj7XXytxRRy98p29WrK4H3ioNuM11W4hK4nAM0pgxuH7snKfmc6xkuzildePEiVipzWTxbIDrpQ==",
    userAgentSuffix: 'CosmosDBJavascriptQuickstart',
    connectionPolicy: {
        enableEndpointDiscovery: false
    }
};

const client = new CosmosClient(options)



//ReadAll
export async function ReadAll() {
    axios.get('https://api.cloud.itsligo.bugbear.fr/api/v1/items')
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)

        })

}

//ReadItem
//Write (TODO)

