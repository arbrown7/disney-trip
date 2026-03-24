import { Attraction } from "../attractions/attraction.model";

export class Park {
    public park: string;
    public attractions: Attraction[];

    constructor(park: string, attractions: Attraction[]) {
        this.park = park;
        this.attractions = attractions;
    }
}

export class Log {
    //id—the log id
    //date—date of the log entry
    //parks-list of parks visited
    //notes-notes about the trip
    //weather-weather that day
    //crowdLevel-level of crowds that day on a scale of 1-10
    //rating-rating enjoyment on a scale of 1-10
    //tripId-the tripId log is associated with

    public id: number;
    public date: string; 
    public parks: Park[];
    public notes: string;
    public weather: string;
    public crowdLevel: number;
    public rating: number;
    public tripId: number;

    constructor(
        date: string,
        parks: Park[],
        notes: string,
        weather: string,
        crowd: number,
        rating: number,
        trip: number
    ) {
        this.date = date;
        this.parks = parks;
        this.notes = notes;
        this.weather = weather;
        this.crowdLevel = crowd;
        this.rating = rating;
        this.tripId = trip;
    }
}