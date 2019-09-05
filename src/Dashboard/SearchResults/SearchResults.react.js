import React from 'react';
import IncidentHolder from '../IncidentHolder/IncidentHolder.react';
import { Button, Item, Segment, Search, Container, Grid, Select, Label, Form } from 'semantic-ui-react';


// const typeOptions = [
//     {key: "bill", value: "bill", text: "Bill Payments"},
//     {key: "mobile", value: "mobile", text: "Mobile"}
// ]
const searchCriteriaOptions = [
    {key: "number", value: "number", text: "Mobile Number"},
    {key: "incid", value: "incid", text: "Incident ID"}
]
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Segment>
                {/* <Grid columns={2} centered>
                    <Grid.Row>
                        <Search/>
                    </Grid.Row>
                    <Grid.Row>
                        <Select defaultValue="Select Incident Type" options={typeOptions}/>
                        <label>Search Criteria:</label><Select placeholder="Select...." options={searchCriteriaOptions} />
                    </Grid.Row>
                </Grid> */}
                <Form>
                    <Form.Group>
                        <Form.Field>
                            <label>Search String</label>
                            <Form.Input placeholder="Enter Search String..."/>
                        </Form.Field>
                        <Form.Select
                        label='Search Criteria'
                        options={searchCriteriaOptions}
                        placeholder='Select Criteria'
                        width={2}
                    />
                    </Form.Group>
                    
                    <Form.Button>Search</Form.Button>
                </Form>
                <Item.Group divided>
                    {/* <IncidentHolder/>
                    <IncidentHolder/> */}
                </Item.Group>
            </Segment>
        );
    }
}

export default SearchResults;