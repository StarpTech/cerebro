var PROTO_PATH = __dirname + '/protos/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function act(call, callback) {
  callback(null, { data: new Buffer(call.request.service, "utf-8") });
}

function actStream(call) {
  call.write({ data: new Buffer(call.request.service, "utf-8") });
  call.end();
}


/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addProtoService(hello_proto.Seneca.service, { act: act, actStream: actStream });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();