var PROTO_PATH = __dirname + '/protos/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

function main() {
  var client = new hello_proto.Seneca('localhost:50051',
                                       grpc.credentials.createInsecure());
  /**
   * Simple Call
   */
  client.act({service: 'user', data: 'test' }, function(err, response) {
    console.log('Greeting:', response.data.toString());
  });
  
  /**
   * Streaming
   */
  var call = client.actStream({service: 'user', data: 'test' });
  call.on('data', function(response) {
      console.log('data over stream ->' + response.data);
  });
  call.on('end', function() {
    // The server has finished sending
  });
  call.on('status', function(status) {
    // process status
  });
  
}

main();