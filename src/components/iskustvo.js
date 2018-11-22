import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName2}</h4>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName3}</h4>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName4}</h4>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName5}</h4>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName6}</h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;