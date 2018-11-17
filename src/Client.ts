import { Track } from "./Track";
import { SpotigoTrackInfo } from "./SpotigoTrackInfo";

/**
 * The client object that interacts with the Spotigo Web API
 */
export class Client {
    host: string;
    pass: string;

    /**
     * The client object that interacts with the Spotigo Web API
     * @constructor
     * @param {string} host The URL to the Spotigo Web server you'd like to read from
     * @param {string} pass The password to access the data on the Spotigo Web server you'd like to read from (Leave blank for no password)
     */
    constructor(host: string, pass: string = "") {
        this.host = host;
        this.pass = pass;
    }
    
    /**
     * Retrieve data of a Spotify track from the specified URL.
     * @param {string} url Spotify track URL to retrieve the data of. 
     * @returns {Track}
     */
    getTrackInfo(url: string): Track {
        var trackInfo: SpotigoTrackInfo = new SpotigoTrackInfo();
        var track: Track = new Track(trackInfo);

        return track;
    }
}