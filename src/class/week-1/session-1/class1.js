class Experiment {
  constructor(){
    this.name = "";
    this.lastname = "";
    this.age = "";
  }

  addValue({ name, lastname, age }){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  };

  showValue(){
    const user = `${this.name} ${this.lastname} ${this.age}`;
    console.log(user);
  }
}

const student = new Experiment();
student.addValue({
  name: "John",
  lastname: "Doe",
  age: 54
});

student.showValue();
student.addValue({
  name: "Kike",
  lastname: "Vanegas",
  age: 35
});

student.showValue();