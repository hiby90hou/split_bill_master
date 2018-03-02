import React from 'react'
import Paypal from './Paypal'
import InputForm from './InputForm'
import Home from './Home'
import PageRefresher from './PageRefresher'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      organizer: "",
      name: "AAA",
      price: 10,
      quantity: 1,
      peopleNum:1,
      canPay: true,
      page: "home",
      orderid: "0",
      paidNum: 0
    }
    this.handleNewPayment = this.handleNewPayment.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePaidNumChange = this.handlePaidNumChange.bind(this);
    this.closeCanPay = this.closeCanPay.bind(this);
  }

  handleNewPayment (organizer, name, price, peopleNum,orderid) {
    this.setState({
      organizer,
      name,
      price,
      peopleNum,
      orderid
    })
    console.log(this.state)
  }

  handlePageChange(page){
    this.setState({
      page
    })
  }

  handlePaidNumChange(paidNum){
    this.setState({
      paidNum
    })
  }
  closeCanPay(){
    this.setState({
      canPay:false
    })
  }

  render() {
    const homeProps = {
      handlePageChange: this.handlePageChange
    }
    const paypalProps = {
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      orderid: this.state.orderid,
      handlePageChange: this.handlePageChange
    }
    const inputFormProps = {
      handleNewPayment:this.handleNewPayment,
      handlePageChange: this.handlePageChange
    }
    const pageRefresherProps = {
      orderid:this.state.orderid,
      peopleNum:this.state.peopleNum,
      paidNum: this.state.paidNum,
      closeCanPay: this.closeCanPay,
      handlePaidNumChange: this.handlePaidNumChange
    }

    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    };

    if(this.state.page=="home"){
      return <Home {...homeProps}/>
    }
    else if(this.state.page=="inputForm"){
      return <div className="inputForm">
        <InputForm {...inputFormProps}/>
      </div>
    }
    else if(this.state.page == "paypal" && this.state.canPay){
      return <div className="paypal">
        <h1>Collect your money</h1>
        <div>Your event ID is {this.state.orderid}</div>
        <div>The location of this event is {this.state.name}</div>
        <div>There are {this.state.peopleNum} people in this event</div>
        <div>Each person need to pay <span>${this.state.price}</span></div>
        <PageRefresher {...pageRefresherProps}/>
        <Paypal {...paypalProps}/>
      </div>
    }else{
      return <div className="complete">
        <h1>payment collection complete</h1>
        <div>Your event ID is {this.state.orderid}</div>
        <div>The location of this event is {this.state.name}</div>
        <div>Total collect {(this.state.peopleNum-1)*this.state.price}</div>
      </div>
    }

  }

}
