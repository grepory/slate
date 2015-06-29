module.exports = {
  assertions:[
    {
      key:'statusCode',
      relationship:'equal',
      operand:200
    },
    {
      key:'statusCode',
      relationship:'notEqual',
      operand:300
    },
    {
      key:'statusCode',
      relationship:'notEmpty',
      operand:300
    },
    {
      key:'header',
      value:'content-type',
      relationship:'equal',
      operand:'application/json'
    },
    {
      key:'header',
      value:'content-type',
      relationship:'notEqual',
      operand:'testingthis'
    }
  ],
  response:{
      "data": [
        {
          "code": "100",
          "phrase": "Continue",
          "description": "\"indicates that the initial part of a request has been received and has not yet been rejected by the server.\"",
        },
        {
          "code": "101",
          "phrase": "Switching Protocols",
          "description": "\"indicates that the server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"",
        },
      ],
      "status": 200,
      "statusText": "OK",
      "headers": [
        [
          "date",
          "Mon, 29 Jun 2015 17:49:21 GMT"
        ],
        [
          "last-modified",
          "Tue, 16 Jun 2015 17:15:06 GMT"
        ],
        [
          "content-type",
          "application/json"
        ],
        [
          "cache-control",
          "public, max-age=0"
        ]
      ],
  }
}