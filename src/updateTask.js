const AWS = require("aws-sdk");

const updateTask = async ($evt) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = $evt.pathParameters;
    const { title, description, done } = JSON.parse($evt.body);

    const result = await dynamodb.update({
        TableName: "taskTable",
        Key: { id },
        UpdateExpression: "set title = :title, description = :description, done = :done",
        ExpressionAttributeValues: {
            ":title": title,
            ":description": description,
            ":done": done,
        },
        ReturnValues: "ALL_NEW",
    }).promise();

    return {
        status: 200,
        body: {
            message: "Task updated successfully",
            response: result,
        },
    }
}

module.exports = {
    updateTask,
}
