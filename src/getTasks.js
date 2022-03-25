const AWS = require("aws-sdk");

const getTasks = async ($evt) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamodb.scan({
        TableName: "taskTable"
    }).promise();

    const tasks = result.Items;

    return {
        status: 200,
        body: {
            tasks
        },
    }
}

module.exports = {
    getTasks,
}
