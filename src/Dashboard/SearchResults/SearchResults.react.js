import React from 'react';
import IncidentHolder from '../IncidentHolder/IncidentHolder.react';
import { Button, Item, Segment, Search, Container, Grid, Select, Label, Form } from 'semantic-ui-react';
import axios from 'axios';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

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
            searchCriteria: "all",
            results: [],        //container to hold the results
            loaded: false,      //To determine if the page has loaded or not and will be changed in componentDidMount() method
            hasResults: false   //To determine if the search return any results and if not used to display appropriate message to the user
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSearchChange(e, {value}) {
        this.setState({searchTerm: value});
      }
    handleSelectChange(e,{value}) {
        this.setState({searchCriteria: value})
    }

    onSubmit(e){ //Gets the search results if the search button is clicked
        e.preventDefault();
        axios.get(`http://localhost:6969/incidents`)//url for getting incidents
        .then(res => {
          this.setState({ results:res, loaded:true, });
        });

        console.log(this.state.searchTerm);
        console.log(this.state.searchCriteria);
    }

    handleCloseIncident(incId){
        confirmAlert({

            title: "Confirm to remove Agent",
            message: "Are you sure you want to delete this agent",
            buttons: [
                {
                    label: "Yes, Close Incident",
                    onClick: () => alert("incident close"+incId)//axios call to close Incident
                                                                //set active to closed in the incident state
                },
                {
                    label: "No, Go Back"
                }
            ]
        })
        
    }

    handleCancelIncident(incId){
        
        confirmAlert({

            title: "Confirm to remove Agent",
            message: "Are you sure you want to delete this agent",
            buttons: [
                {
                    label: "Yes, Close Incident",
                    onClick: () => alert("incident close"+incId)//axios call to remove incident
                                                                //show incident is removed and/or redirect to agent dashboard
                },
                {
                    label: "No, Go Back"
                }
            ]
        })
        alert("incident remove"+incId)
    }

    render() {
        return (
            <Segment>
                
                <Form onSubmit={this.onSubmit}>                  {/* Form to get the search parameters */}
                    <Form.Group>
                        <Form.Field>
                            <label>Search String</label>        {/* Field to get the search String */}
                            <Form.Input placeholder="Enter Search String..." onChange={this.handleSearchChange}/>
                        </Form.Field>
                        <Form.Select  
                        label='Search Criteria'
                        options={searchCriteriaOptions}
                        defaultValue="all"
                        width={2}
                        onChange={this.handleSelectChange}
                    />                  {/* Dropdown to select the search criteria based on the options provided */}
                    </Form.Group>
                    
                    <Form.Button>Search</Form.Button>
                </Form>
                <Item.Group divided>        {/* Iterator to which displays the incident using the results element from the state */}
                {this.state.loaded? this.state.results.data.map((eachIncident, index)=>{
            return(<IncidentHolder from="agentsearch" key={index} details={eachIncident} onClose={this.handleCloseIncident} onCancel={this.handleCancelIncident}/>)
            }): <div>No results to display</div>}                 
                </Item.Group>

            </Segment>  //End of Search Results Segment
        );
    }
}

export default SearchResults;