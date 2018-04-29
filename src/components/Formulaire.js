import React from 'react';

class Formulaire extends React.Component {

	state = {
		length: this.props.length
	}

	createMessage = event => {
		event.preventDefault();
		const message = {
            pseudo: this.props.pseudo,
            message: this.message.value
    }
		this.props.addMessage(message);

		// Reset
		this.messageForm.reset();
		const length = this.props.length;
		this.setState({length});
	}

	compteur = event => {
		const length = this.props.length - this.message.value.length;
		console.log(length);
		this.setState({length});
	}

	render() {
		return (
			<form
				action=""
				className="form"
				onSubmit={e => {this.createMessage(e)}}
				ref={form => {this.messageForm = form; }}
			>
				<textarea
					required maxLength={this.props.length}
					ref={(text) => {this.message = text;}}
					onChange={e => this.compteur(e)}
				>

				</textarea>

				<div className="info">
					{this.state.length}
					</div>

				<button type="submit">Envoyer !</button>
				
			</form>
			);
	}
}

export default Formulaire;
