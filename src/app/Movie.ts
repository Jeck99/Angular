export class Movie {
    
    get Name() {
        return this.name;
    }
    
    set Name(value) {
        this.name = value;
    }
    get Catgury() {
        return this.catgury;
    }
    set Catgury(value) {
        this.catgury = value;
    }
           get Id() {
        return this.id;
       }
    set Id(value) {
        this.id = value;
    }
    constructor(private name: string, private catgury: string,private id : number) { };
}