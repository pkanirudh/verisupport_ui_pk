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
    }

    render() {
        return (
            <div>
                <Grid centered columns={2}>
                <Grid.Column>
                <Segment>
                    <Header as="h2" textAlign="center">Incident Details</Header>
                    <Item.Group>    {/* Displaying incident details using Incident Holder component  */}
                        <IncidentHolder from="incdetails"/>
                    </Item.Group>
                    
                    <label>Set Priority: </label>
                    <Select  options={priorityOptions} className="ui"/>
                            <Button color="red">Close Incident</Button>
                </Segment>
                </Grid.Column>
                </Grid>
                
            </div>
        );
    }
}

export default IncidentDetailsPage;