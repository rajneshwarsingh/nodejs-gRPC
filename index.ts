import { CompanyClient } from './src/clients/company';

/* Start controller or service part */
import { grpcObject, server } from './src/servers/company';

server.addService((grpcObject as any).CompanyService.service, {
  getCompany: async (param, callback) => {
    callback(null, { id: param.request.id, name: param.request.name });
  },
});
/* End controller or service part */

const companyObj = { id: 23, name: 'raj' };
const data = async () => {
  try {
    const company = await new Promise((resolve, reject) => {
      CompanyClient.getCompany(companyObj, (err, company) => {
        if (err) reject(err);
        if (!err) {
          resolve(company);
        }
      });
    });
    console.log('Company Data', company);
  } catch (error) {
    console.error(error.message);
  }
};

data();
