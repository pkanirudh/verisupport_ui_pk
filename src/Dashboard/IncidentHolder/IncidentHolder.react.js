import React from 'react';
import { Item, Button } from 'semantic-ui-react';


//This module is used to hold individual incidents in the incident details page and the customer and agent dashboards
const IncidentHolder = (props) => {
    return (
            <Item>
                <Item.Content>
                    <Item.Header>{props.details.comments}</Item.Header>
                    <Item.Description>
                            <p>This is where the description about the compliant/issue comes in.</p>
                            <p>Issue Type: {props.details.status}</p>
                            <p>Issued by: Author Name</p>
                            <p>Issue added on: DD/MM/YYYY</p>
                    </Item.Description>
                    {/* Logic to Display close and cancel if the incident is active */}
                    {(props.details.status==='closed')? (<Item.Extra>
                        <Button color="blue" onClick={() => props.onClose(props.details.incidentID)}>Close Incident</Button>
                        <Button color="red" onClick={() => props.onCancel(props.details.incidentID)}>Cancel Incident</Button>
                    </Item.Extra>):(<Item.Extra>This incident is closed</Item.Extra>)}    
                </Item.Content>
            </Item>  
    );

}

export default IncidentHolder;