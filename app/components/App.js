import React from 'react'
import Paypal from './Paypal'
import InputForm from './InputForm'
import Home from './Home'
import PageRefresher from './PageRefresher'


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

    if(this.state.page=="home"){
      return <Home {...homeProps}/>
    }
    else if(this.state.page=="inputForm"){
      return <div>
        <InputForm {...inputFormProps}/>
      </div>
    }
    else if(this.state.page == "paypal" && this.state.canPay){
      return <div>
        <PageRefresher {...pageRefresherProps}/>
        <p>Your event ID is {this.state.orderid}</p>
        <p>The location of this event is {this.state.name}</p>
        <p>There are {this.state.peopleNum} people in is event</p>
        <div>Each person need to pay ${this.state.price}</div>
        <Paypal {...paypalProps}/>
      </div>
    }else{
      return <div> payment collecting complete</div>
    }

  }

}
