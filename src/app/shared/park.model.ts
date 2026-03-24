export class Park {
    //id - the park id
    //name - the name of the park
    //attractions - the attractions located the park

    public id: number;
    public name: string;
    public attractions: any[]; // change to Attraction[] later

    constructor(name: string, attractions: any[]) {
        this.name = name;
        this.attractions = attractions;
    }
}