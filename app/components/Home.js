import React from 'react'
import Button from 'material-ui/Button';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className = "home">
        <h1>Start Split Bill</h1>
        {/*<RaisedButton variant="raised" color="primary" onClick={()=>{this.props.handlePageChange("inputForm")}}>Go</Button>*/}
        
        <Button variant="raised" color="primary" onClick={()=>{this.props.handlePageChange("inputForm")}} >
      		start
    		</Button>
        	
      </div>
  )}
}
