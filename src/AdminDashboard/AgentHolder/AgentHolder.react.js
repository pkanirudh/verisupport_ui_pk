import React from 'react';
import { Item, Button, Grid, Header, Segment, Card } from 'semantic-ui-react';



const AgentHolder = (props) => {

    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.agent.name}</Card.Header>
                <Card.Meta>ID : {props.agent.agentId}</Card.Meta>
                <Card.Description>Username : {props.agent.username}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button fluid basic negative onClick={() => props.onDelete(props.agent.agentId)}>
                Remove Agent
            </Button>
            </Card.Content>
        </Card>
    );

}

export default AgentHolder;