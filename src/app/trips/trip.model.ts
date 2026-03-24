import { Log } from "../logs/log.model";

export class Trip {
    //id — the trip id
    //name — the name of the trip
    //startDate — date the trip starts
    //endDate — date the trip ends
    //logs — a list of log objects associated with the trip

    public id: number;
    public name: string; 
    public startDate: string;
    public endDate: string;
    public accommodations: string;
    public logs?: Log[];

    constructor(
        name: string,
        startDate: string,
        endDate: string,
        accommodations: string,
        logs: Log[]
    ) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.accommodations = accommodations;
        this.logs = logs;
    }
}