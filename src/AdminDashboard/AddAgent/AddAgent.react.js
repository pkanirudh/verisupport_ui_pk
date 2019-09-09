import React from 'react';
import { Form } from '../../../../verisupport_ui-master_lakshya/node_modules/semantic-ui-react';
import axios from 'axios';


class AddAgent extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            agentId: "",
            agentUsername: "",
            agentPassword: "",
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){ //Adds the agent if the Add Agent button is clicked
        e.preventDefault();
        var url=""
        axios.post(url);//url for adding agent
    }

    render() {
        return (
            <div >
                <Form onSubmit={this.onSubmit}>                  {/* Form to enter the agent details */}
                    <Form.Group>
                        <Form.Field required>
                            <label>Enter Username</label>        {/* Field to enter the username */}
                            <Form.Input required placeholder="Username" onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Enter Password</label>        {/* Field to enter the password */}
                            <Form.Input required type="password" placeholder="Password" onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Confirm Password</label>       {/* Field to confirm password */}
                            <Form.Input required type="password" placeholder="Confirm Password" onChange={this.handleChange}/>
                        </Form.Field>
                    </Form.Group>
                    
                    <Form.Button color="blue">Add Agent</Form.Button>
                </Form>
            </div>
        );
    }
}

export default AddAgent;