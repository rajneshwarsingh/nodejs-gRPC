import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  json: true,
};

const loadProto = () => {
  try {
    const currentScriptDir = path.dirname(__filename);
    const protoPath = path.join(currentScriptDir, 'company.proto');
    return protoLoader.loadSync(protoPath, options);
  } catch (error) {
    console.error('Error loading company proto file:', error);
    throw error; // Rethrow or handle as needed
  }
};

export { loadProto };
