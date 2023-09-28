const AWS = require('aws-sdk');


AWS.config.update({
    region: "us-west-1",
});

const docClient = new AWS.DynamoDB.DocumentClient();


// CRUD
// Create
// Read
// Update
// Delete

// Create
// addGroceryItem function
function addGroceryItem(grocery_item_id, name, quantity, price, category){
    const params = {
       TableName: "grocery_items",
         Item: {
            grocery_item_id,
            name,
            quantity,
            price,
            category,
        }
    };
    return docClient.put(params).promise();
}

// Read
// get by id
function retrieveGroceryItemById(id){
    const params = {
        TableName: "grocery_items",
        Key: {
            grocery_item_id: id
        }
    };
    return docClient.get(params).promise();
}
// get an array of items
function retrieveAllGroceryItems(){
    const params = {
        TableName: "grocery_items"
    };
    return docClient.scan(params).promise();
}

function retrieveGroceryItemsByCategory(category){
    const params = {  
        TableName: "grocery_items",
        FilterExpression: "#c = :value",
        ExpressionAttributeNames: {
            "#c": "category"
        },
        ExpressionAttributeValues: {
            ":value": category
        }
    };
    return docClient.scan(params).promise();
}

// Update
function updateGroceryNameById(grocery_item_id, newName){
    const params = {
        TableName: "grocery_items",
        Key: {
            grocery_item_id
        },
        UpdateExpression: "set #n = :value",
        ExpressionAttributeNames: {
            "#n": "name"
        },
        ExpressionAttributeValues: {
            ":value": newName
        }
    };
    return docClient.update(params).promise();
}

// Delete
function deleteGroceryItemById(grocery_item_id){
    const params = {
        TableName: "grocery_items",
        Key: {
            grocery_item_id
        }
    };
    return docClient.delete(params).promise();
}

module.exports = { 
    addGroceryItem,
    retrieveGroceryItemById,
    retrieveAllGroceryItems,
    retrieveGroceryItemsByCategory, 
    updateGroceryNameById
};