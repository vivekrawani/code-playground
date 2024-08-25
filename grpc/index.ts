import path from 'path';
import * as grpc from '@grpc/grpc-js';
// import { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './generated/a';
import { PersonServiceHandlers } from './generated/PersonService';
import { Status } from '@grpc/grpc-js/build/src/constants';

const PROTO_PATH = path.join(__dirname, './a.proto')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const personProto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const PERSONS = [
  {
    name: "vivek",
    age: 21
  },
  {
    name: "atticus",
    age: 45
  },
];

/*
//@ts-ignore
function addPerson(call, callback) // (req, res)
{
  console.log(call)
  let person = {
    name: call.request.name,
    age: call.request.age
  }
  PERSONS.push(person);
  callback(null, person)
}
//@ts-ignore
function getPersonByName(call, callback) {
  console.log(call)
  const name = call.request.name;
  const ret = PERSONS.find(person => person.name === name);
  callback(null, ret)
}
*/

function getServer() {
  const server = new grpc.Server();
  /*
  server.addService((personProto.PersonService).service, {
    addPerson: addPerson,
    getPersonByName: getPersonByName
  });
  */

  const handlers  : PersonServiceHandlers= {
    AddPerson : (call, callback)=>{
      const person = {
        name: call.request.name,
        age: call.request.age
      }
      PERSONS.push(person);
      callback(null, person)
    },
    GetPersonByName : (call, callback)=>{
      const name = call.request.name;
      const person = PERSONS.find(person => person.name === name);
      if(person) {
        callback(null,person)

      }else{
        callback({
          code : Status.NOT_FOUND,
          details : "Person with given name not found!"
        }, null)
      }
    }
  }
  server.addService(personProto.PersonService.service, handlers)
  return server;
}


const personServer = getServer();
personServer.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  personServer.start();
});