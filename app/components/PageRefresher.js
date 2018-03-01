import React from 'react'
export default class PageRefresher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paidNum : 0

    }
    this.handleLocalPaidNum = this.handleLocalPaidNum.bind(this);
    // this.state = { seconds: 0 };
  }
  handleLocalPaidNum(paidNum){
    this.setState({
      paidNum
    })
  }

  tick() {
    //fetch data from database
    fetch('https://serene-shore-75692.herokuapp.com/api/check?order_id=' + this.props.orderid)
    .then(response => response.json())
    .then(data => {
      console.log(data.length);
      console.log(this.props.peopleNum)
      if(data.length >= Number(this.props.peopleNum)-1){
        this.props.closeCanPay()
      }else{
        this.handleLocalPaidNum(data.length)
      }
        // this.props.handlePaidNumChange(data)
      
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>orderID: {this.props.orderid}</p>
        <p>{this.state.paidNum}</p>
        {/*<p>Seconds: {this.state.seconds}</p>*/}
      </div>
    );
  }
}
