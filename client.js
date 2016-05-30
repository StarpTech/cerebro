var PROTO_PATH = __dirname + '/protos/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

function main() {
  var client = new hello_proto.Seneca('localhost:50051',
                                       grpc.credentials.createInsecure());
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.act({service: 'user', data: 'test' }, function(err, response) {
    console.log('Greeting:', response.data.toString());
  });
}

main();