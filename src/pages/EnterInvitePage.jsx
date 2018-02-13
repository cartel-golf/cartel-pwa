import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUserTokenSet } from '../redux/actions/actionCreatorsUsers';
import './EnterInvitePage.css';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import userService from '../utils/userService';

const styles = {
  pullRight: { marginLeft: 'auto' },
  CardActions: { paddingRight: 8 }
};

class EnterInvitePage extends Component {
  state = {
    enteredCode: '',
    message: ''
  }
  
  handleChange = (e) => {
    this.setState({
      enteredCode: e.target.value,
      message: ''
    });
  }
  
  handleSubmit = (e) => {
    this.inputEl.focus();
    setTimeout(() => {
      userService.submitInvite(this.state.enteredCode)
      .then((user) => {
        this.props.newUserTokenSet(user);
      })
      .catch(err => {
        this.setState({ message: err.message});
      });
    });
  }
  
  render() {
    let { classes } = this.props;
    return (
      <main className='EnterInvitePage'>
        <div className='EnterInvietPage-img'>
          <img src={require('../images/logo-2.png')} alt='' />
        </div>
        <Card>
          <CardContent>
            <Typography variant="headline" gutterBottom>
              Welcome to Cartel Golf
            </Typography>
            <Typography variant="subheading" gutterBottom>
              Submit the invite code you obtained from an existing member of the cartel you wish to join:
            </Typography>
            <FormControl error={!!this.state.message} fullWidth>
              <InputLabel color='secondary' htmlFor="code">Enter Your Invite Code</InputLabel>
              <Input color='secondary' inputRef={inp => this.inputEl = inp} id="code" autoComplete='off' onChange={this.handleChange} />
              <FormHelperText>{this.state.message}</FormHelperText>
            </FormControl>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <Button className={classes.pullRight} onClick={this.handleSubmit} variant="raised" color='primary'>
              SUBMIT INVITE
            </Button>
          </CardActions>
        </Card>
      </main>
    );
  }
}

export default connect(
  // map state to props
  null,
  // map dispatch to props
  {
    newUserTokenSet
  }
)(withStyles(styles)(EnterInvitePage));