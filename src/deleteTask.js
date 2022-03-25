const AWS = require("aws-sdk");

const deleteTask = async ($evt) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = $evt.pathParameters;

    const result = await dynamodb.delete({
        TableName: "taskTable",
        Key: { id },
    }).promise();

    return {
        status: 200,
        body: {
            message: "Task deleted successfully",
            response: result,
        }
    };
}

module.exports = {
    deleteTask,
}
