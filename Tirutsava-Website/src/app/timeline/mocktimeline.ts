export class Event{
    constructor(public name : string, public startTime : string, public endTime : string, public desc : string, public type : string){}
}

export const mockDay1 = [
    new Event("CodeWars","9:30 a.m.","12:30 p.m.","Fastest Coder Wins","Tech"),
    new Event("Dubsmash","9:30 a.m.","3:00 p.m.","Do some stuff","Cult"),
    new Event("CheckPoint","2:30 p.m.","6:00 p.m.","Gaming stuff","Tech"),
    new Event("DJ Night 1","6:00 p.m.","8:30 p.m.","DJ Night feat. DJ @!#$$","Pro"),
]
