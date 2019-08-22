import * as React from 'react';

export interface ISongTileProps {
  song: ISong;
}

export interface ISong {
	songTitle: string;
	artist: string;
	album: string;
 }

export class SongTile extends React.Component<ISong, {}> {
    render() {
        return (
			<div>
				<h1>{this.props.songTitle}</h1>
				<h3>{this.props.album}</h3>
				<h3>{this.props.artist}</h3>
			</div>
		)
    }
}