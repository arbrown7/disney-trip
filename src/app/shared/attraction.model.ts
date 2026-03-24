export class Attraction {
    //id - id of the attraction
    //parkId - id of the park attraction is located in
    //name - attraction name

    public id: number;
    public parkId: number;
    public name: string; // change to Attraction[] later

    constructor(parkId: number, name: string) {
        this.parkId = parkId;
        this.name = name;
    }
}