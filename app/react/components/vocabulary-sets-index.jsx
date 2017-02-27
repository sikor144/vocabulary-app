import React from 'react';
import { connect } from 'react-redux';
import { fetchSets } from '../actions/index';
import { Link } from 'react-router'

class VocabularySetsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchSets();
  }

  renderSets() {
    return this.props.sets.map((set) => {
      return (
        <div key={set.id}>
          <li className="list-group-item col-xs-10">
            <Link to={"vocabulary_sets/" + set.id}>
              {set.name}
            </Link>
          </li>
          <li className="list-group-item col-xs-2">
            Actions
          </li>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <p><Link to="/vocabulary_sets/new">New</Link></p>
        <h3>All sets</h3>
        <ul className="list-group col-md-6">
          {this.renderSets()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sets: state.sets.all };
}

export default connect(mapStateToProps, { fetchSets })(VocabularySetsIndex);
