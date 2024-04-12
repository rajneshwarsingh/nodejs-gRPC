import * as grpc from '@grpc/grpc-js';
import { loadProto } from '../proto/proto-loader';
import { SERVERS } from '../utilities/constants';
const packageDefinition = loadProto();
export const grpcObject = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.bindAsync(SERVERS.COMPANY_SERVER, grpc.ServerCredentials.createInsecure(), (err) => {
  if (err) {
    console.error(`Failed to bind server on ${SERVERS.COMPANY_SERVER}: ${err.message}`);
    return;
  }
  server.start();
  console.log(`Company GRPC Server running at ${SERVERS.COMPANY_SERVER}`);
});

export { server };
