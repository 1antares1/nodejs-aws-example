const AWS = require("aws-sdk");

const getTask = async ($evt) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = $evt.pathParameters;

    const result = await dynamodb.get({
        TableName: "taskTable",
        Key: { id }
    }).promise();

    const task = result.Item;

    return {
        status: 200,
        body: {
            task
        },
    }
}

module.exports = {
    getTask,
}
