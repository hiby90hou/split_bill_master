import React from 'react'
import 'babel-polyfill'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizer:"",
      restaurantName: "",
      totalPrice: 0,
      peopleNum:0
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleOrganizerChange = this.handleOrganizerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({restaurantName: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({totalPrice: event.target.value});
  }
  handlePeopleChange(event) {
    this.setState({peopleNum: event.target.value});
  }
  handleOrganizerChange(event) {
    this.setState({organizer: event.target.value});
  }

  createOrder(opts) {
    return fetch('https://serene-shore-75692.herokuapp.com/api/new_bill', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(opts)
    })
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log('create order', res)
      return res
    })
    .catch(function(error) {
      console.log(error.message);
    });
  }

  async handleSubmit(event) {
    // alert('A request was submitted');
    let price = (this.state.totalPrice / this.state.peopleNum * 1.02).toFixed(2)
    event.preventDefault();
    const fetchData = {
      email: this.state.organizer,
      restaurant: this.state.restaurantName,
      people_num: this.state.peopleNum,
      total_price: this.state.totalPrice
    }
    const order = await this.createOrder(fetchData)
    const orderId = order.id
    this.props.handleNewPayment(this.state.organizer, this.state.restaurantName, price, this.state.peopleNum, orderId)
    this.props.handlePageChange("paypal")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>About this event</h1>
        <div>
          <label>
            Your email:
          </label>
          <TextField type="text" value={this.state.organizer} onChange={this.handleOrganizerChange} />
        </div>
        <div>
          <label>
            Restaurant Name:
          </label>
          <TextField type="text" value={this.state.restaurantName} onChange={this.handleNameChange} />
        </div>
        <div>
          <label>
            Total Price:
          </label>
          <TextField type="number" step="0.01" value={this.state.totalPrice} onChange={this.handlePriceChange} />
        </div>
        <div>
        <label>
          People Num:
        </label>
        <TextField type="number" value={this.state.peopleNum} onChange={this.handlePeopleChange} />
        </div>
        <Button variant="raised" color="primary" type="submit" >Split Bill</Button>
      </form>
    );
  }
}