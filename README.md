# Proje Hakkında
## Bu uygulama crud operasyonlarını gerçekleştiren API'dir.

[`AWS Lambda`](https://aws.amazon.com/tr/lambda/?nc2=h_ql_prod_cp_lbd)'da NodeJS function olarak oluşturulmuştur. 
![alt text](https://github.com/tubademir23/KTB_API/blob/main/images/function.PNG?raw=true)

Örnek test json'ları:
- `list`

{
    "action": "list",
    "tableName": "eser"
}
- `upsert`

{
    "action": "upsert",
    "tableName": "eser",
    "item": {
        "id": "3",
        "adi": "eser 03"
    }
}
- `delete`

{
    "action": "delete",
    "tableName": "eser",
    "id": "1"
}
- `getById`

{
    "action": "get",
    "tableName": "eser",
    "id": "2"
}

Json ve Document Type Database kullanımı sayesinde tablo bağımsız çalışmaktadır. Yeni bir tablo, kolon değişse de herhangi bir backend değişikliğine ihtiyaç yoktur.

Kullanım için Credential işlemlerinin doğru yapılması önemlidir.

![alt text](https://github.com/tubademir23/KTB_API/blob/main/images/permission.PNG?raw=true)

Veritabanı olarak NoSQL [`DynamoDB`](https://aws.amazon.com/tr/dynamodb/?nc2=h_ql_prod_serv_ddb) kullanmaktadır.

![alt text](https://github.com/tubademir23/KTB_API/blob/main/images/dynamodb.PNG?raw=true)
