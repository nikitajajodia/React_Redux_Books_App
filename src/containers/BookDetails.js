import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
	render() {
		if(!this.props.book) {
			return (
				<div>Select a book to get started !</div>
			)
		}
		return (
			<div>
				<h3>Details for: </h3>
				<p>title: {this.props.book.title}</p>
				<p>price: {this.props.book.price}</p>
				<p>pages: {this.props.book.pages}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		book: state.selectedBook
	}
}

export default connect(mapStateToProps)(BookDetails);