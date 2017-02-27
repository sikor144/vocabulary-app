import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createSet } from '../actions/index';
import { Link } from 'react-router'

class VocabularySetsNew extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createSet(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { name, description }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Set</h3>

        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>name</label>
          <input type="text" className="form-control" {...name} />
          <div className="text-help">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : ''}`}>
          <label>description</label>
          <input type="text" className="form-control" {...description} />
          <div className="text-help">
            {description.touched ? description.error : ''}
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

  if (!values.name) {
    errors.name = 'Enter a name';
  }
  if (!values.description) {
    errors.description = 'Enter description';
  }

  return errors;
}

export default reduxForm({
  form: 'VocabularySetsNewForm',
  fields: ['name', 'description'],
  validate
}, null, { createSet })(VocabularySetsNew);
