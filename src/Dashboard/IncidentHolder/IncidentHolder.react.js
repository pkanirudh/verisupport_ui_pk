import React from 'react';
import { ItemContent, Item, Header, ItemDescription, ItemExtra } from 'semantic-ui-react';



const IncidentHolder = () => {

    return (
        <div >
            <Item>
                <ItemContent>
                    <Header>Issue Heading</Header>
                    <ItemDescription>
                            <p>This is where the description about the compliant/issue comes in.</p>
                    </ItemDescription>
                    <ItemExtra>
                        <p>Issued by: Author Name</p>
                        <p>Issue added on: DD/MM/YYYY</p>
                    </ItemExtra>
                </ItemContent>
            </Item>    
        </div>
    );

}

export default IncidentHolder;