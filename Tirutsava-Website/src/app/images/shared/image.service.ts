import { Injectable} from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];
    visibleImages2 = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }
    getImages2(){
        return this.visibleImages = IMAGES2.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id);
    }

    getImage2(id: number){
        return IMAGES2.slice(0).find(image => image.id == id);
    }
}

const IMAGES = [
    {"id":1, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.png"},
    {"id":2, "category": "camping", "caption": "View from a camp", "url": "assets/img/boat_02.jpg"},
    {"id":3, "category": "camping", "caption": "App logo", "url": "assets/img/app.png"},
    {"id":4, "category": "boats", "caption": "Art Work", "url": "assets/img/barrel.png"},
    {"id":5, "category": "boats", "caption": "Art Work", "url": "assets/img/dance.png"},
    {"id":6, "category": "boats", "caption": "Art Work", "url": "assets/img/lamp.png"},
    {"id":7, "category": "boats", "caption": "Art Work", "url": "assets/img/teri.png"}
]

const IMAGES2 = [
    {"id":3, "category": "camping", "caption": "App logo", "url": "assets/img/app.png"},
    {"id":6, "category": "boats", "caption": "Art Work", "url": "assets/img/lamp.png"},
    {"id":7, "category": "boats", "caption": "Art Work", "url": "assets/img/teri.png"},
    {"id":4, "category": "boats", "caption": "Art Work", "url": "assets/img/barrel.png"},
    {"id":5, "category": "boats", "caption": "Art Work", "url": "assets/img/dance.png"},

]