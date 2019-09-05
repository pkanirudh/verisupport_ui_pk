import React from 'react';
import SearchResults from '../SearchResults/SearchResults.react';
import { Item, Button, Grid, Segment } from 'semantic-ui-react';


const DashboardContainer = () => {

    return (
        <div className='dashboardcontainer_wrapper'>
            <Grid centered columns={2}>
                <Grid.Column>
                <Segment>
            <Item.Group>
            <Item>
            <Item.Image src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                <Item.Content>
                    <Item.Header>Agent Name</Item.Header>
                        <Item.Description>Agent Details</Item.Description>
                        <Item.Extra><Button color="red">Log Out</Button></Item.Extra>
                        </Item.Content>
            </Item>
            </Item.Group>
            </Segment>
            <SearchResults/>
                </Grid.Column>
                
                </Grid>
        </div>
    );

}

export default DashboardContainer;