import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
  } from 'semantic-ui-react';
  import { connect } from 'react-redux';
  import { login } from '../loginreducer';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <div >
              <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Login
      </Header>
      <Segment>
        <Form size="large" onSubmit={this.onSubmit}>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
            onChange={e => this.setState({email: e.target.value})} value={email}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            onChange={e => this.setState({password: e.target.value})} value={password}
          />
           <Button color="blue" fluid size="large">
            Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { loginError && <div>{loginError.message}</div> }
        </div>
            </div>
        );
    }

onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);