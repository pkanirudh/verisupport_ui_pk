import React from 'react';
import { Header, Button, Segment, Grid, Select, Item } from 'semantic-ui-react';
import IncidentHolder from '../Dashboard/IncidentHolder/IncidentHolder.react';

//This module is opened when a user clicks on an incident from the list of incidents either from the search results of the agent's dashboard or from the customer's dashboard
//Has options to raise the priority of the incident or close the incident.

const priorityOptions = [       
    {key: "low", value: "low", text: "Low"},
    {key: "medium", value: "medium", text: "Medium"},
    {key: "high", value: "high", text: "High"}
]
class IncidentDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            data: ""
        }

        this.handleCloseIncident = this.handleCloseIncident.bind(this);
        this.handleRemoveIncident = this.handleRemoveIncident.bind(this);
    }

    handleCloseIncident(incId){
        //axios call to close Incident
        //set active to closed in the incident state
        alert("incident close")
    }

    handleRemoveIncident(incId){
        //axios call to remove incident
        //show incident is removed and/or redirect to agent dashboard
        alert("incident remove")
    }

    render() {
        return (
            <div>
                <Grid centered columns={2}>
                <Grid.Column>
                <Segment>
                    <Header as="h2" textAlign="center">Incident Details</Header>
                    <Item.Group>    {/* Displaying incident details using Incident Holder component  */}
                        {/* <IncidentHolder from="incdetails"/> */}
                        <Item>
                <Item.Content>
                    <Item.Header>Issue Heading</Item.Header>
                    <Item.Description>
                            <p>This is where the description about the compliant/issue comes in.</p>
                    </Item.Description>
                    <Item.Extra>
                        <p>Issue Type: Active/Closed</p>
                        <p>Issued by: Author Name</p>
                        <p>Issue added on: DD/MM/YYYY</p>
                    </Item.Extra>
                </Item.Content>
            </Item>
                    </Item.Group>
                    
                    <label>Set Priority: </label>
                    <Select  options={priorityOptions} className="ui" defaultValue="high" />
                            <Button color="blue" onClick={this.handleCloseIncident}>Close Incident</Button>
                            <Button color="red" onClick={this.handleRemoveIncident}>Remove Incident</Button>
                </Segment>
                </Grid.Column>
                </Grid>
                
            </div>
        );
    }
}

export default IncidentDetailsPage;