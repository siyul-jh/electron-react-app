import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: '' }; // You can also pass a Quill Delta here
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({ text: value });
	}

	render() {
		return (
			<div>
				<div>
					<h3>Quill 텍스트 에디터</h3>
				</div>
				<div>
					<input type="text" className="title" placeholder="Title"></input>
				</div>
				<ReactQuill value={this.state.text} onChange={this.handleChange} />
			</div>
		);
	}
}
export default Editor;
