import React from 'react';
import { Header, Button, Segment, Grid, Select, Item } from 'semantic-ui-react';
import IncidentHolder from '../Dashboard/IncidentHolder/IncidentHolder.react';


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
                    <Item.Group>
                        <IncidentHolder/>
                    </Item.Group>
                    
                    <label>Set Priority: </label>
                    <Select  options={priorityOptions} className="ui"/>
                            {/* <select name="skills" multiple="" className="ui dropdown">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select> */}
                            <Button color="red">Close Incident</Button>
                </Segment>
                </Grid.Column>
                </Grid>
                
            </div>
        );
    }
}

export default IncidentDetailsPage;