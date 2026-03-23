export class Log {
    //id—the log id
    //date—date of the log entry
    //parks-list of parks visited
    //notes-notes about the trip
    //weather-weather that day
    //crowdLevel-level of crowds that day on a scale of 1-10
    //rating-rating enjoyment on a scale of 1-10
    //tripId-the tripId log is associated with
    //children—a list of attraction objects associated with the trip

    public id: number;
    public date: string; 
    public parks: string; // could be upgraded to be a array of objects later on
    public notes: string;
    public weather: string;
    public crowdLevel: number;
    public rating: number;
    public tripId: number;
    public attractions?: any[]; // change to attraction[]

    constructor(
        date: string,
        parks: string,
        notes: string,
        weather: string,
        crowd: number,
        rating: number,
        trip: number,
        attractions: any[] // change to attraction[]
    ) {
        this.date = date;
        this.parks = parks;
        this.notes = notes;
        this.weather = weather;
        this.crowdLevel = crowd;
        this.rating = rating;
        this.tripId = trip;
        this.attractions = attractions;
    }
}