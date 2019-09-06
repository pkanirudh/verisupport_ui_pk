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
        this.state = {
            results: [],
            loaded: false,
            hasResults: false
        }
    }

    componentDidMount() {
        let url = "http://localhost:6969/incidents"
        fetch(url).then(resp=>resp.json()).then(results=>{this.setState({results:results})
        console.log(results);
    });
        if(this.state.results.length==0){
            this.setState({hasResults:false})
            console.log("results not loaded")
            console.log(this.state.hasResults)
            console.log(this.state.results)
        }
        else{
            this.setState({hasResults:true})
            console.log("results loaded")
            console.log(this.state.results)
        }
    }
    getResults = ()=>{
        if(this.state.hasResults){
            return(
                <Item.Group divided>
                    <IncidentHolder/>
                    <IncidentHolder/>
                </Item.Group>
            )
        }
        else{
            return(<p>No results for given query</p>)
        }
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
                    <IncidentHolder/>
                    <IncidentHolder/>
                </Item.Group>
            </Segment>
        );
    }
}

export default SearchResults;