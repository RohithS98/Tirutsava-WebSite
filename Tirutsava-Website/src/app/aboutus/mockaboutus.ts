export class Person{
    constructor(public name : string, public pic : string, public other : string){}
}

export class group{
    constructor(public name : string, public members : Person[]){}
}

export const mockAboutUs = [
    new group( "Cultural" , [
        new Person("Person 1",'../../assets/aboutus/squareplaceholder.png',"Cultural Sec"),
        new Person("Person 2",'../../assets/aboutus/placeholder.png',"Placeholder2"),
        new Person("Person 3",'../../assets/aboutus/placeholder.png',"Placeholder3"),
    ]),
    new group( "Technical" , [
        new Person("Person 1",'../../assets/aboutus/squareplaceholder.png',"Technical Sec"),
        new Person("Person 2",'../../assets/aboutus/placeholder.png',"Placeholder2"),
        new Person("Person 3",'../../assets/aboutus/placeholder.png',"Placeholder3"),
    ]),
    new group("Sponsorship" , [
        new Person("Person 1",'../../assets/aboutus/squareplaceholder.png',"Something"),
        new Person("Person 2",'../../assets/aboutus/placeholder.png',"Placeholder2"),
        new Person("Person 3",'../../assets/aboutus/placeholder.png',"Placeholder3"),
        new Person("Person 4",'../../assets/aboutus/placeholder.png',"Placeholder3"),
        new Person("Person 5",'../../assets/aboutus/placeholder.png',"Placeholder3"),
        new Person("Person 6",'../../assets/aboutus/placeholder.png',"Placeholder3"),
        new Person("Person 7",'../../assets/aboutus/placeholder.png',"Placeholder3"),
    ]),
];
