export class Track {
    artist: string;
    artists: string[]; // update to artist array once the artist class is created
    title: string;
    duration: number;
    streamURL: string;
    artURL: string;
    trackID: string;
    uri: string;

    /**
     * Represents a parsed Track object.
     * @constructor
     * @see SpotigoTrackInfo
     */
    constructor() {
        console.log("unimplemented");
    }
}