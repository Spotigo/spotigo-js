interface ISpotigoTrackInfo {
    gid: string;
    name: string;
    trackNumber: number;
    discNumber: number;
    duration: number;
    album: string; // set to SpotigoAlbumInfo when initialized
    artist: string[]; // set to SpotigoArtistInfo[] when initialized
    unmarshal(json: JSON): void;
}

/**
 * The object for SpotigoTrackInfo
 * @see ISpotigoTrackInfo
 */
export class SpotigoTrackInfo implements ISpotigoTrackInfo {
    gid: string = "";
    name: string = "";
    trackNumber: number = 0;
    discNumber: number = 0;
    duration: number = 0;
    album: string = ""; // refer above
    artist: string[] = []; // refer above

    /**
     * Fills the track info with data from a JSON object
     * @param obj JSON object containing data to fill into the track info
     */
    unmarshal(obj: any): void {
        this.gid = obj.gid || "";
        this.name = obj.name || "";
        this.trackNumber = obj.trackNumber || 0;
        this.discNumber = obj.discNumber || 0;
        this.duration = obj.duration || 0;
        // add album and artist list later
    }
}