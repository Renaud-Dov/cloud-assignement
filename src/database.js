import {CosmosClient} from "@azure/cosmos";
import {v4 as uuidv4} from "uuid"

const partitionKey = {kind: 'Hash', paths: ['/partitionKey']}

const options = {
    endpoint: "https://axov.documents.azure.com:443/",
    key: process.env.DB_KEY,
    userAgentSuffix: 'CosmosDBJavascriptQuickstart',
    connectionPolicy: {
        enableEndpointDiscovery: false
    }
};

const client = new CosmosClient(options)



//ReadAll
export async function ReadAll() {
    const items = await client.database("ToDoList").container("Items").items.readAll().fetchAll()
    return items.resources
}

//ReadItem
//Write (TODO)

