import * as React from 'react';
// import * as theme from './Header.scss';
// import styles from '.Header.scss';

interface IProps {
   title: string;
}

export class Header extends React.Component<IProps, {}> {
    render() {
        return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
    }
}