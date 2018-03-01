import React from 'react'
var QRCode = require('qrcode.react')
import Button from 'material-ui/Button';

export default class Paypal extends React.Component {
	render(){
		return <div>
			<QRCode value={"https://serene-shore-75692.herokuapp.com/?name=" + this.props.name + "&price="+this.props.price+"&quantity="+this.props.quantity+"&order_id="+this.props.orderid} />
			<Button 
			variant="raised" 
			color="primary" 
			onClick={()=> window.open("https://serene-shore-75692.herokuapp.com/?name="+ this.props.name +"&price="+this.props.price+"&quantity="+this.props.quantity+"&order_id="+this.props.orderid, 'sharer', 'toolbar=0,status=0,width=548,height=325')}>click to pay</Button>
		</div>
	}
}