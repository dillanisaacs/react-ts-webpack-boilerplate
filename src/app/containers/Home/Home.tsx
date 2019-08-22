import * as React from 'react';
import { ISongTileProps, ISong } from '../../components/SongTile/SongTile';
import { Header } from '../../components/Header/Header';
import { Body } from '../../components/Body/Body';

interface IHomeProps {
	title?: string;
	songs?: ISongTileProps[]
}

export class Home extends React.Component<IHomeProps, {}> {
	constructor(props: IHomeProps) {
		super(props);

		this.getTitle = this.getTitle.bind(this);
		this.getSongs = this.getSongs.bind(this);
	}
	
	getTitle() {
		return 'Spotify Top 100';
	}

	getSongs(): ISong[] {
		const songs: ISong[] = [];

		for(let i = 1; i <= 100; i++) {
			const song: ISong = {
				songTitle: `Song ${i}`,
				artist: `Artist ${i}`,
				album: `Album ${i}`,
			};

			songs.push(song);
		}

		return songs;
	}

    render() {
		// const { title, songs } = this.props;

		const title = this.getTitle();
		const songs = this.getSongs();

        return (
			<div>
				<Header title ={title} />
				<Body songs={songs} />
			</div>
		)
    }
}