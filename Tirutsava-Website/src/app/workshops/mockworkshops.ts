//Export type
export class Workshop{
    constructor(
        public name: string,
    ){}
}

export const mockWorkshops = [
    new Workshop('Arduino'),
    new Workshop('Android'),
    new Workshop('Web-Dev'),
    new Workshop('Big-Data'),
];