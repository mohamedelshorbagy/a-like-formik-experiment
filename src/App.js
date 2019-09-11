import React from 'react';
import ALikeFormik from './ALikeFormik';
import './App.css'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: {
          value: '',
          type: 'text',
          placeholder: 'Name'
        },
        age: {
          value: 0,
          type: 'number',
          placeholder: 'age'
        }
      }
    };

  }

  render() {
    return (
      <>
        <h1 className="ui header center aligned">A Like Formik Experiment</h1>
        <ALikeFormik initialState={this.state.form}>
          {({ values, touched, errors, handleChange, handleTouched }) => {
            return (
              <div className="ui container">
                {
                  Object.entries(values).map(([name, { type, value, placeholder }], index) => (
                    <div
                      key={index}
                      className="ui input fluid">
                      <input
                        type={type}
                        value={value}
                        name={name}
                        onChange={handleChange}
                        onBlur={handleTouched}
                        placeholder={placeholder} />

                    </div>
                  ))
                }
                {/* <input type="text" onChange={handleChange} onBlur={handleTouched} name="name" value={values.name} /> */}
                <hr />
                <div className="ui card fluid">
                  <div className="content">
                    <pre>{JSON.stringify({ values, touched, errors }, null, 2)}</pre>
                  </div>
                </div>
              </div>
            )
          }
          }
        </ALikeFormik>
      </>
    )
  }
}

export default App;
