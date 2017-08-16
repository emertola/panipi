import React, { Component } from 'react';

import {Well, Button, FormControl, FieldGroup, FormGroup, ControlLabel} from 'react-bootstrap';

class AppForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: Date.now(),
            content: '',
            reference: '',
            favorite: false
        }

        this.handleInPutChange = this.handleInPutChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInPutChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addToList(this.state)
        this.setState({
            content: '',
            reference: '',
            id: Date.now()
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <Well>
                    <FormGroup controlId="formControlsTextarea">
                        <FormControl componentClass="textarea" name="content" placeholder="Write here..." rows="5" value={this.state.content} required onChange={this.handleInPutChange} />
                    </FormGroup>

                    <FormGroup controlId="formControlsRefText">
                        <ControlLabel>Reference</ControlLabel>
                        <FormControl type="text" name="reference" placeholder="e.g. Albert Einstein, Anonymous, etc." value={this.state.reference} required onChange={this.handleInPutChange} />
                    </FormGroup>
                    <Button type="submit" bsStyle="primary">Enter</Button>
                    <Button type="reset">Cancel</Button>
                </Well>
                
            </form>
            
        </div>
        );
    }
}

export default AppForm;
