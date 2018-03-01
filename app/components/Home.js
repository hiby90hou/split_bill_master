import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div>
        <h1>start split bill</h1>
        <div onClick={()=>{this.props.handlePageChange("inputForm")}}>Go</div>
      </div>
  )}
}
