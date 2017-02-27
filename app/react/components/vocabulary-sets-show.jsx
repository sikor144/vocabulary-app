import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSet, deleteSet, deleteTerm } from '../actions/index';
import { Link } from 'react-router'

class VocabularySetsShow extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchSet(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deleteSet(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  onDeleteTermClick(term_id) {
    this.props.deleteTerm(this.props.params.id, term_id.toString())
      .then(() => { this.context.router.push('/'); });
  }

  renderTerms(terms) {
    return terms.map((term) => {
      return (
        <div key={term.id}>
          <li className="list-group-item col-xs-5"><strong>{term.english_term}</strong></li>
          <li className="list-group-item col-xs-5">{term.polish_term}</li>
          <li className="list-group-item col-xs-2">
            <button
              className="btn btn-xs btn-danger pull-xs-right"
              onClick={this.onDeleteTermClick.bind(this, term.id)}>
              Delete
            </button>
          </li>
        </div>
      );
    });
  }

  render() {
    const { set } = this.props;

    if (!set) {
      return <div>Loading...</div>;
    }

    return(
      <div>
        <p><Link to="/">Back</Link></p>
        <h3>{set.name}</h3>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Set
        </button>
        <div className="col-md-6">
          <ul className="list-group">
            {this.renderTerms(set.terms)}
          </ul>
          <p><Link to={"/vocabulary_sets/" + this.props.params.id + "/new_term"}>New term</Link></p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { set: state.sets.set };
}

export default connect(mapStateToProps, { fetchSet, deleteSet, deleteTerm })(VocabularySetsShow);
