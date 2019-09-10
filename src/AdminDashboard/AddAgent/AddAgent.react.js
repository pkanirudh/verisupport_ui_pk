import React from 'react';
import { Form } from '../../../../verisupport_ui-master_lakshya/node_modules/semantic-ui-react';
import axios from 'axios';
import uuid from 'uuid';


class AddAgent extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            agentId: uuid(),
            agentUsername: "",
            agentName:"",
            agentPassword: "",
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    onSubmit(e){ //Adds the agent if the Add Agent button is clicked
        e.preventDefault();
        var url= "http://localhost:8080/addAgent"
        //"http://localhost:9001/agents"
        //axios.post(url, this.state).then(resp=>console.log("response"+resp));//url for adding agent
        console.log(this.state)
    }

    handlePasswordChange(e){ //Update the state from the Password field
        this.setState({agentPassword: e.target.value})
    }

    handleUsernameChange(e){ //Update the state from the Username field
        this.setState({agentUsername: e.target.value})
    }

    handleNameChange(e){ //Update the state from the Agent's Name field
        this.setState({agentName: e.target.value})
    }

    render() {
        return (
            <div >
                <Form onSubmit={this.onSubmit}>                  {/* Form to enter the agent details */}
                    <Form.Group>
                        <Form.Field required>
                            <label>Enter Username</label>        {/* Field to enter the username */}
                            <Form.Input required placeholder="Username" onChange={this.handleUsernameChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Enter Agent's Name</label>        {/* Field to enter Agent's Name */}
                            <Form.Input required  placeholder="Name" onChange={this.handleNameChange}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Enter Password</label>       {/* Field to enter Password */}
                            <Form.Input required  placeholder="Password" onChange={this.handlePasswordChange}/>
                        </Form.Field>
                    </Form.Group>
                    
                    <Form.Button color="blue">Add Agent</Form.Button>
                </Form>
            </div>
        );
    }
}

export default AddAgent;