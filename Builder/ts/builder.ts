class Person {
    private name: string = "";
    private lastName: string = "";
    private age: string = "";
    private country: string = "";
    private city: string = "";
    private hobbies: string[] = [];

    constructor(
        name: string,
        lastName: string,
        age: string,
        country: string,
        city: string,
        hobbies: string[]) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName(): string {
        return this.name + " " + this.lastName;
    }
}

interface PersonBuilder {
    name: string;
    lastName: string;
    age: string;
    country: string;
    city: string;
    hobbies: string[];

    setName(name: string): PersonBuilder;
    setLastName(lastName: string): PersonBuilder;
    setAge(age: string): PersonBuilder;
    setCountry(country: string): PersonBuilder;
    setCity(city: string): PersonBuilder;
    addHobby(hobby: string): PersonBuilder;
    reset(): void
    build(): Person;
}

class NormalPersonBuilder implements PersonBuilder {
    name: string = "";
    lastName: string = "";
    age: string = "";
    country: string = "";
    city: string = "";
    hobbies: string[] = [];

    constructor(){
        this.reset();
    }

    setName(name: string): PersonBuilder {
        this.name = name;
        return this;
    }

    setLastName(lastName: string): PersonBuilder {
        this.lastName = lastName;
        return this;
    }

    setAge(age: string): PersonBuilder {
        this.age = age;
        return this;
    }

    setCountry(country: string): PersonBuilder {
        this.country = country;
        return this;
    }

    setCity(city: string): PersonBuilder {
        this.city = city;
        return this;
    }

    addHobby(hobby: string): PersonBuilder {
        this.hobbies.push(hobby);
        return this;
    }

    reset(): void {
        this.name = "";
        this.lastName = "";
        this.age = "";
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    build(): Person {
        const person = new Person(
            this.name,
            this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies,
        );

        this.reset();

        return person;
    }
}

class PersonDirector{
    private pesonBuilder: PersonBuilder;

    constructor(personBuilder: PersonBuilder){
        this.pesonBuilder = personBuilder;
    }

    setPersonBuilder(personBuilder: PersonBuilder){
        this.pesonBuilder = personBuilder;
    }

    createSimplePerson(name:string, lastName:string){
        this.pesonBuilder.setName(name)
        .setLastName(lastName);
    }
}

//Creacion 1
const personBuilder = new NormalPersonBuilder();

const diego:Person = personBuilder.setName("Diego")
.setLastName("Cruz")
.addHobby("Comer")
.addHobby("Dormir")
.build();

console.log(diego);

const director = new PersonDirector(personBuilder);
director.createSimplePerson("Diego 2", "Cruz 2");

const diego2 = personBuilder.build();
console.log(diego2)