//Export type
export class gallery{
    constructor(
        public name: string,
    ){}
}

export const mockgallery = [
    new gallery('Day 1'),
    new gallery('Day 2'),
    new gallery('Day 3'),
];

export class images{
    constructor(
        public name: string,
    ){}
}

export const mockimages = [
    new images('Thumbnail'),
    new images('Thumbnail'),
    new images('Thumbnail'),
    new images('Thumbnail'),
    new images('Thumbnail'),
]