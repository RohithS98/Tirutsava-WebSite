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
        new Person('Pratik K Agrawalla', 'Cultural Secretary', '../../assets/aboutus/Pratik.jpg', 'https://www.facebook.com/pratik.agrawalla1' , ' ' , '9439154393'),
        new Person('Sai Ritesh', 'Technical Secretary', '../../assets/aboutus/SaiRitesh.jpg' , ' ' , ' ' , '7702447683')
    ]),
    new Team( 'Sponsorship Team' , [
        new Person('Neelansh Mathur', 'Head', '../../assets/aboutus/Neelansh.jpg' , '' , ' ' , '9636799254'),
        new Person('Aman Thakur', 'Head', '../../assets/aboutus/Aman.jpg' , 'https://www.facebook.com/profile.php?id=100005109618142' , ' ' , '9059279247'),
        new Person('Harthik Rao', 'Head', '../../assets/aboutus/Harthik.jpg' , 'https://www.facebook.com/miriyala.harthikrao' , ' ' , '9454197941'),
    ]),
    new Team('Finance Team', [
        new Person('Leela Krishna Mohan', 'Head', '', 'https://www.facebook.com/sai.lkm', '', '7680872068'),
    ]),
    new Team('Marketing Team', [
        new Person('Pratyusha Vudutala', 'Head', '', 'https://www.facebook.com/Pratyusha.Vudutala', '', '8008987552'),
        new Person('Parth Dhabalia', 'Head', '../../assets/aboutus/Parth.jpg', 'https://www.facebook.com/parth.dhabalia.7', '', '9426944073'),
    ]),
    new Team('Creative Team', [
        new Person('Deeksha Reddy', 'Head', '', '', '', '9121804674'),
        new Person('Kiran Jyothi Guntur', 'Head', '', 'https://www.facebook.com/kiranjyothi.guntur', '', '7680951210'),
    ]),
    new Team('Web Design Team', [
        new Person('Priyansh Sangule', 'Head', '', 'https://www.facebook.com/abstractxan', '', '9165840183'),
    ]),
    new Team('Events Team', [
        new Person('Mohit Kumar', 'Head', '../../assets/aboutus/Mohit.jpg', 'https://www.facebook.com/mkg9058', '', '7675039900'),
    ]),
    new Team('Content Development Team', [
        new Person('Anup Kulkarni', 'Head', '', 'https://www.facebook.com/anup.kulkarni.180', '', ''),
    ]),
    new Team('Security Team', [
        new Person('Keerthi Vardhan', 'Head', '../../assets/aboutus/Bro.jpg', 'https://www.facebook.com/keerthi.vardhan.505', '', '7995855703'),
    ]),
    new Team('Technical Team', [
        new Person('Vishnudev Choudhary', 'Head', '../../assets/aboutus/Vishnu.jpg', 'https://www.facebook.com/profile.php?id=100003207622578', '', '7023232681'),
    ]),
    new Team('Hospitality Team', [
        new Person('Atharva Gupta', 'Head', '../../assets/aboutus/Atharva.jpg', 'https://m.facebook.com/Rumo.CS', '', '8871313300'),
        new Person('Mahesh Vidala', 'Head', '', 'https://www.facebook.com/maheshkumar.vidala', '', '8074683254'),
    ]),
];
