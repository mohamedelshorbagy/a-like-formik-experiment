import React from 'react'

export default class Formik extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.initialState || {},
            touched: {},
            errors: {}
        }
    }

    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        let convertedValue = event.target.type === 'number' ? +value : value;

        event.persist(); // Because setState is Async
        this.setState(prevState => {
            let field = { ...prevState.values[name] };
            field.value = convertedValue;
            return {
                values: {
                    ...prevState.values,
                    [name]: { ...field }
                }
            }
        })
    }


    handleTouched = (event) => {
        let { name } = event.target;
        event.persist(); // Because setState is Async
        this.setState(prevState => {
            return {
                touched: {
                    ...prevState.touched,
                    [name]: true
                }
            }
        })
    }


    render() {
        return this.props.children({
            ...this.state,
            handleChange: this.handleChange,
            handleTouched: this.handleTouched
        });
    }
}

