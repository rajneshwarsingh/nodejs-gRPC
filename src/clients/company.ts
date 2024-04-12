import * as grpc from '@grpc/grpc-js';
import { loadProto } from '../proto/proto-loader';
import { SERVERS } from '../utilities/constants';
const packageDefinition = loadProto();

const CompanyProto: any = grpc.loadPackageDefinition(packageDefinition).CompanyService;

// Create the CompanyClient using the asserted type
let CompanyClient;
try {
  CompanyClient = new CompanyProto(SERVERS.COMPANY_SERVER, grpc.credentials.createInsecure());
} catch (err) {
  console.log('company Client error', err);
}

export { CompanyClient };
