export interface InputFields {
  coverSong: string;
  songName: string;
  artistName: string;
  lyrics: string;
}

export interface ErrorType {
  coverSong?: boolean;
  songName?: boolean;
  artistName?: boolean;
  lyrics?: boolean;
}

export type LyricsData = {
  lyrics: string;
  title: string;
  artist: string;
  artworkUrl?: string;
};