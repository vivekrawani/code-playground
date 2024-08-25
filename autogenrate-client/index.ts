import { DefaultService } from "./src/generated";

async function main(){
const response = await DefaultService.getUsers("001");
console.log(response);
}

main();