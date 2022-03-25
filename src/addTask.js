const { v4 } = require("uuid");
const AWS = require("aws-sdk");
// const middy = require("middy");
// const jsonBodyParser = require("@middy/http-json-body-parser");

const addTask = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, description } = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();
    const newTask = {
        id,
        title,
        description,
        createdAt,
        done: false
    };

    const result = await dynamodb.put({
        TableName: "taskTable",
        Item: newTask
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            task: newTask,
            response: result
        })
    }
}

module.exports = {
    // addTask: middy(addTask).use(jsonBodyParser()),
    addTask,
}
