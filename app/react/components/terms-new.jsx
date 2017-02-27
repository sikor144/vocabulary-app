import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createTerm } from '../actions/index';
import { Link } from 'react-router'

class TermsNew extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createTerm(this.props.params.id, props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { english_term, polish_term }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Term</h3>

        <div className={`form-group ${english_term.touched && english_term.invalid ? 'has-danger' : ''}`}>
          <label>English term</label>
          <input type="text" className="form-control" {...english_term} />
          <div className="text-help">
            {english_term.touched ? english_term.error : ''}
          </div>
        </div>

        <div className={`form-group ${polish_term.touched && polish_term.invalid ? 'has-danger' : ''}`}>
          <label>Polish term</label>
          <input type="text" className="form-control" {...polish_term} />
          <div className="text-help">
            {polish_term.touched ? polish_term.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.english_term) {
    errors.english_term = 'Enter English term';
  }
  if (!values.polish_term) {
    errors.polish_term = 'Enter Polish term';
  }

  return errors;
}

export default reduxForm({
  form: 'TermsNewForm',
  fields: ['english_term', 'polish_term'],
  validate
}, null, { createTerm })(TermsNew);
