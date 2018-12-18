import { ITrack } from "./Track";

/**
 * The client object that interacts with the Spotigo Web API
 */
export class Client {
    host: string;
    pass: string;

    /**
     * The client object that interacts with the Spotigo Web API
     * @constructor
     * @param host The URL to the Spotigo Web server you'd like to read from
     * @param pass The password to access the data on the Spotigo Web server you'd like to read from (Leave blank for no password)
     */
    constructor(host: string, pass: string = "") {
        this.host = host;
        this.pass = pass;
    }
    
    getTrackInfo(url: string): void { // Promise<ITrack>
        // var data: ITrack;
        var regex = url.match("^(https:\\/\\/open.spotify.com\\/track\\/|spotify:track:)([a-zA-Z0-9]+)(.*)$");
        console.log(regex);
    }
}