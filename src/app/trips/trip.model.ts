export class Trip {
    //id—the trip id
    //name—the name of the trip
    //startDate—date the trip starts
    //endDate—date the trip ends
    //children—a list of log objects associated with the trip

    public id: number;
    public name: string; 
    public startDate: string;
    public endDate: string;
    public accommodations: string;
    public logs?: any[]; // change to log[]

    constructor(
        name: string,
        startDate: string,
        endDate: string,
        accommodations: string,
        logs: any[] // change to log[]
    ) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.accommodations = accommodations;
        this.logs = logs;
    }
}