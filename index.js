const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

        const headers = {
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        };

    const body = JSON.parse(event.body);
    try {
        let result;
        if (body.action === 'upsert') {
            let params = { TableName: body.tableName, Item: body.item};
            result = await docClient.put(params).promise();
        } else if (body.action === 'get') {
            let params = {TableName: body.tableName,    Key: {  id: body.id}};
            result = await docClient.get(params).promise();
        } else if (body.action === 'list') {
            let params = {TableName: body.tableName};
            result = await docClient.scan(params).promise();
        } else if (body.action === 'delete') {
        let params = {TableName: body.tableName, Key: {  id: body.id}};
            result = await docClient.delete(params).promise();
        } else {
            throw new Error('Tanımsız işlem tipi!!!');
        }
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            message: "Başarılı!",
            data: result
          }),
        };
      } catch (error) {
        console.log(error);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            success: false,
            message: error.toString,
            data: error
          }),
        };
   
      }
};