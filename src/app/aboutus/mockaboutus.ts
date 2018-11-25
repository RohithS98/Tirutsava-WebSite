import { isNull } from "@angular/compiler/src/output/output_ast";

export class Person {
    constructor(
            public name: string,
            public title: string,
            public pic: string,
            public fb_url: string ,
            public twitter_url: string,
            public insta_url: string,
            public github_url: string,
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
    new Team( 'Tirutsava Fest Heads' , [
        new Person('Pratik K Agrawalla', 'Head ', '../../assets/aboutus/Pratik.jpg', 'https://www.facebook.com/pratik.agrawalla1' , 'null' , 'https://www.instagram.com/pratik_agrawalla/' , 'null' , '9439154393'),
        new Person('Sai Ritesh', 'Head', '../../assets/aboutus/placeholder.png' , 'null' , 'null' , 'null' , 'null' , '7702447683'),
    ]),
    new Team( 'Sponsorship Team' , [
        new Person('Neelansh Mathur', 'Head', '../../assets/aboutus/Neelansh.jpg' , 'null' , 'null' , 'null' , 'null' , '9636799254'),
        new Person('Aman Thakur', 'Head', '../../assets/aboutus/Aman.jpg' , 'https://www.facebook.com/profile.php?id=100005109618142' , 'null' , 'null' , 'null' ,'9059279247'),
        new Person('Harthik Rao', 'Head', '../../assets/aboutus/Harthik.jpg' , 'https://www.facebook.com/miriyala.harthikrao' , 'null' , 'https://www.instagram.com/harthik.rao?r=nametag' , 'null' , '9454197941'),
    ]),
    new Team('Hospitality Team', [
        new Person('Atharva Gupta', 'Head', '../../assets/aboutus/Atharva.jpg', 'https://m.facebook.com/Rumo.CS', 'https://twitter.com/atharva_81', 'https://www.instagram.com/atharva81/' , 'null' , '8871313300'),
        new Person('Mahesh Vidala', 'Head', '../../assets/aboutus/Mahesh.jpg', 'https://www.facebook.com/maheshkumar.vidala', 'null','https://www.instagram.com/maheshkumarvidala?r=nametag' , 'null' , '8074683254'),
    ]),

    new Team('Marketing Team', [
        new Person('Pratyusha Vudutala', 'Head', '../../assets/aboutus/PV.jpg', 'https://www.facebook.com/Pratyusha.Vudutala', 'null', 'https://www.instagram.com/pratyusha_vudutala/' , 'null' ,'8008987552'),
        new Person('Parth Dhabalia', 'Head', '../../assets/aboutus/Parth.jpg', 'https://www.facebook.com/parth.dhabalia.7', 'https://twitter.com/parthdhabalia', 'https://www.instagram.com/tango_2608/' , 'null' ,'9426944073'),
    ]),
    new Team('Creative Team', [
        new Person('Deeksha Reddy', 'Head', '../../assets/aboutus/placeholder.png', 'https://www.facebook.com/profile.php?id=100008471734523', 'https://twitter.com/Deeksha39592989', 'https://www.instagram.com/deekshaa_reddy/' , 'null' ,'9121804674'),
        new Person('Kiran Jyothi Guntur', 'Head', '../../assets/aboutus/Kiran.jpg', 'https://www.facebook.com/kiranjyothi.guntur', 'null', 'https://www.instagram.com/kj.g_1999/' , 'null' ,'7680951210'),
    ]),
    new Team('Events Team', [
        new Person('Mohit Kumar', 'Head', '../../assets/aboutus/Mohit.jpg', 'https://www.facebook.com/mkg9058', 'https://twitter.com/mohitgautam2919','https://www.instagram.com/_mohit12_' , 'null' , '7675039900'),
    ]),
    new Team('Web Design Team', [
        new Person('Priyansh Sangule', 'Head', '../../assets/aboutus/Priyanshu.jpg', 'https://www.facebook.com/abstractxan', 'null','https://www.instagram.com/abstractxan/' , 'null' , '9165840183'),
    ]),
    new Team('Content Development Team', [
        new Person('Anup Kulkarni', 'Head', '../../assets/aboutus/Anup1.jpg', 'https://www.facebook.com/anup.kulkarni.180', 'https://twitter.com/AnupKulkarn1', 'https://www.instagram.com/anup.kulkarn1/' , 'null' ,  '9923774284'),
    ]),
    new Team('Security Team', [
        new Person('Keerthi Vardhan', 'Head', '../../assets/aboutus/Bro.jpg', 'https://www.facebook.com/keerthi.vardhan.505', 'null', 'https://www.instagram.com/keerthi_vardhan93/?hl=en' , 'null' ,'7995855703'),
    ]),
    new Team('Technical Team', [
        new Person('Vishnudev Choudhary', 'Head', '../../assets/aboutus/Vishnudev.jpg', 'https://www.facebook.com/profile.php?id=100003207622578', 'null','null' , 'null' , '7023232681'),
    ]),
    new Team('Finance Team', [
        new Person('Leela Krishna Mohan', 'Head', '../../assets/aboutus/Leela.jpg', 'https://www.facebook.com/sai.lkm', 'null', 'null' , 'null' , '7680872068'),
    ])
];
