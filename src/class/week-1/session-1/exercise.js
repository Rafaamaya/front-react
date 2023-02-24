//INTENTENLO CON FUNCIONES DE ALTA JERARQUÍA.
class Exercise {
  constructor(){
    this.index = -1;
    this.values = [];
  }

  addValue(user){
    this.index ++;
    this.values[this.index] = user;
    return this.values;
  }

  showValues(){
    this.values.forEach(user => {
      console.log(`The values in store are: ${JSON.stringify(user)}.`);
    })
  }

  deleteValue(name){
    //POP
    const filteredOut = this.values.filter(user => user.name.toLowerCase() !== name.toLowerCase());
    this.values = filteredOut;
    return this.values;
  }
}

const user = new Exercise();
user.addValue({ name: "kike", lastname: "Vanegas", age: 35 });
user.addValue({ name: "Jon", lastname: "Doe", age: 35 });
user.showValues();
user.deleteValue("Kike");
user.showValues();
