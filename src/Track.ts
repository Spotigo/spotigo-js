/**
 * The interface for a track
 * @see SpotigoTrackInfo
 */
export interface ITrack {
    artist: string;
    artists: string[]; // update to artist array once the artist class is created
    title: string;
    duration: number;
    streamURL: string;
    artURL: string;
    trackID: string;
    uri: string;
}