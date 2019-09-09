import React from 'react';
import { Item } from '../../../../verisupport_ui-master_lakshya/node_modules/semantic-ui-react';
import AgentHolder from '../AgentHolder/AgentHolder.react';



class ShowAgents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Item.Group divided>
                    <AgentHolder/>
                    <AgentHolder/>
                </Item.Group>
            </div>
        );
    }
}

export default ShowAgents;