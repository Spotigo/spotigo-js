import { SpotigoTrackInfo } from "./SpotigoTrackInfo";

/**
 * Represents a parsed track object.
 * @see SpotigoTrackInfo
 */
export class Track {
    artist: string = "";
    artists: string[] = [];
    title: string = "";
    duration: number = 0;
    streamURL: string = "";
    artURL: string = "";
    trackID: string = "";
    uri: string = "";

    /**
     * Represents a parsed track object.
     * @constructor
     * @see SpotigoTrackInfo
     * @param {SpotigoTrackInfo} trackInfo The track info meant to be parsed into a Track object
     */
    constructor(trackInfo: SpotigoTrackInfo) {
        
    }
}