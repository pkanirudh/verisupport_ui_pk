import React from 'react';
import { Item } from 'semantic-ui-react';



const IncidentHolder = () => {

    return (
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
    );

}

export default IncidentHolder;