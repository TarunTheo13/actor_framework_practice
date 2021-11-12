class Atom {
  #secret_name;
  #inbox;
  
	constructor(name) {
  	this.name = name;
    this.#secret_name = name;
    this.#inbox = [];
  }
  
  getSecretName() {
  	return this.#secret_name;
  }
  
  addToInbox(message) {
  	this.#inbox.push(message);
  }
  
  processInbox() {
		let message = this.#inbox.shift();
    console.log(this.#inbox);
    if (message.req == "change secret_name" && typeof(message.name)==='string') {
    	this.#secret_name = message.name;
    }
  }
  
}

let myAtom = new Atom("Tarun_Atom");

console.log(myAtom.getSecretName());
 
myAtom.addToInbox({src:'global', req:"change _secret_name", name:"Tarun2"});
myAtom.addToInbox({src:'global', req:"change secret_name", name:["Tarun2"]});
myAtom.addToInbox({src:'global', req:"change secret_name", name:"Tarun2"});

myAtom.processInbox();
console.log(myAtom.getSecretName());

myAtom.processInbox();
console.log(myAtom.getSecretName());

myAtom.processInbox();
console.log(myAtom.getSecretName());
