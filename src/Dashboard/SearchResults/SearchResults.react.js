import React from 'react';
import IncidentHolder from '../IncidentHolder/IncidentHolder.react';
import { Button } from 'semantic-ui-react';



class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <IncidentHolder />
                <Button>Go to Incident Page</Button>
            </div>
        );
    }
}

export default SearchResults;