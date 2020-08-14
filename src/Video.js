import React, { Component } from 'react';
import video from './test.mp4';

class Video extends Component {
	componentDidMount() {}

	render() {
		return (
			<div>
				<div>
					<h2>동영상</h2>
				</div>
				<video width="400" height="400" controls>
					<source src={video} type="video/mp4" />
				</video>
			</div>
		);
	}
}
export default Video;
