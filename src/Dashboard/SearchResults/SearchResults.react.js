import React from 'react';
import IncidentHolder from '../IncidentHolder/IncidentHolder.react';
import { Button, Item, Segment, Search, Container, Grid, Select, Label, Form } from 'semantic-ui-react';
import axios from 'axios';
//This component takes in the search terms and the category required and displays incidents as results based on them

// const typeOptions = [
//     {key: "bill", value: "bill", text: "Bill Payments"},
//     {key: "mobile", value: "mobile", text: "Mobile"}
// ]
const searchCriteriaOptions = [     //Options for the search criteria dropdown  based on which the search will be made
    {key: "all", value: "all", text: "All"},
    {key: "number", value: "number", text: "Mobile Number"},
    {key: "incid", value: "incid", text: "Incident ID"}
]
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {          //Initialising state
            searchTerm : "",
            searchCriteria: "",
            results: [],        //container to hold the results
            loaded: false,      //To determine if the page has loaded or not and will be changed in componentDidMount() method
            hasResults: false   //To determine if the search return any results and if not used to display appropriate message to the user
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        //let name = target.name;
        this.setState({searchTerm: value});
      }

    onSubmit(e){ //Gets the search results if the search button is clicked
        e.preventDefault();
        axios.get(`http://localhost:6969/incidents`)//url for getting incidents
        .then(res => {
          this.setState({ results:res, loaded:true, });
        });

        console.log(this.state.searchTerm);
    }
    render() {
        return (
            <Segment>
                
                <Form onSubmit={this.onSubmit}>                  {/* Form to get the search parameters */}
                    <Form.Group>
                        <Form.Field>
                            <label>Search String</label>        {/* Field to get the search String */}
                            <Form.Input placeholder="Enter Search String..." onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Select
                        label='Search Criteria'
                        options={searchCriteriaOptions}
                        placeholder='Select Criteria'
                        width={2}
                    />                  {/* Dropdown to select the search criteria based on the options provided */}
                    </Form.Group>
                    
                    <Form.Button>Search</Form.Button>
                </Form>
                <Item.Group divided link>        {/* Iterator to which displays the incident using the results element from the state */}
                {this.state.loaded? this.state.results.data.map((eachIncident, index)=>{
            return(<IncidentHolder from="agentsearch" key={index} details={eachIncident}/>)
            }): <div>No results to display</div>}                 
                </Item.Group>

            </Segment>  //End of Search Results Segment
        );
    }
}

export default SearchResults;