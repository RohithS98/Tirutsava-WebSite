export class Person {
    constructor(
            public name: string,
            public title: string,
            public pic: string,
            public fb_url: string ,
            public twitter_url: string,
            public number: string
        ) {}
}

export class Team {
    constructor(
        public name: string,
        public members: Person[]
    ) {}
}

export const Teams = [
    new Team( '' , [
        new Person('Pratik K Agrawalla', 'Cultural Secretary', ' ', ' ' , ' ' , '?????'),
        new Person('Sai Ritesh', 'Technical Secretary', ' ' , ' ' , ' ' , '?????')
    ]),
    new Team( 'Sponsorship Team' , [
        new Person('Neelansh Mathur', 'Head', 'neelansh.jpg' , ' ' , ' ' , '?????'),
        new Person('Aman Thakur', 'Head', 'aman.jpg' , ' ' , ' ' , '?????'),
        new Person('Harthik Rao', 'Head', 'harthik.jpg' , ' ' , ' ' , '?????'),
    ]),
];
