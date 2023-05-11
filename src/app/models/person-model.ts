export class PersonModel {

  public id: string;
  public firstName: string;
  public lastName: string;
  public age: number;
  public jobTitle: string;

  constructor(dataIn: PersonModel) {
    // TODO: Implement a dataIn object that gets passed in as a JavaScript Object
    this.id = dataIn.id
    this.firstName = dataIn.firstName
    this.lastName = dataIn.lastName
    this.age = dataIn.age
    this.jobTitle = dataIn.jobTitle
  }
}
