import React from 'react';
import SearchResults from '../SearchResults/SearchResults.react';
import { Item, Button, Grid, Segment } from 'semantic-ui-react';

//This stateless component acts as a container to all the elements in the admin dashboard
const DashboardContainer = (props) => {

    return (
        <div className='dashboardcontainer_wrapper'>
            <Grid centered>
                <Grid.Column computer={12} mobile={15}>
                <Segment>
            <Item.Group>
            <Item>
                {/* This section contains information about the agent with the profile picture, Name, employee number and other details */}
                <Item.Content>
                    <Item.Header>Agent Name</Item.Header>
                        <Item.Description>Agent Details</Item.Description>
                        <Item.Extra><Button color="red">Log Out</Button></Item.Extra>{/* To log out of the admin portal */}
                        </Item.Content>
            </Item>
            </Item.Group>
            </Segment>
            <SearchResults/>{/* Component which displays the incidents based on the search parameters*/}
                </Grid.Column>
                
                </Grid>
        </div>
    );

}

export default DashboardContainer;