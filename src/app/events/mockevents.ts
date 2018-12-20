export const TechEvent = 1;
export const CultEvent = 2;

// To be exported and used
export const EventType = TechEvent | CultEvent ;

export class Event {
    constructor(
        public name: string,
        public desc: string,
        public rounds_desc: string,
        public rules: string,
        public fee: string,
        public type: any= EventType,
    ) {}
}

export const mockTechEvents = [
    new Event('Respawn', ' ', ' ', ' ', ' ', TechEvent),
];

export const mockCultEvents = [
    // new Event('Dance',CultEvent),
    // new Event('Drama',CultEvent)
];

//Export mockevents
export const mockEvents = mockTechEvents.concat(mockCultEvents);



