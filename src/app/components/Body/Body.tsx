import * as React from 'react';
import { SongTile, ISong } from '../SongTile/SongTile';

interface BodyProps {
	songs: ISong[]
}

export class Body extends React.Component<BodyProps, {}> {
	
    render() {
		const { songs } = this.props;

        return (
			<div>
				{
					songs.map((song: ISong) => {
						return <SongTile {...song} />
					})
				}
			</div>
		)
    }
}