import React from 'react'
var QRCode = require('qrcode.react')

export default class Paypal extends React.Component {
	render(){
		return <div>
			<QRCode value={"http://localhost:3000/?name=" + this.props.name + "&price="+this.props.price+"&quantity="+this.props.quantity+"&order_id="+this.props.orderid} />
			<div onClick={()=> window.open("http://localhost:3000/?name="+ this.props.name +"&price="+this.props.price+"&quantity="+this.props.quantity+"&order_id="+this.props.orderid, 'sharer', 'toolbar=0,status=0,width=548,height=325')}>click to pay</div>
		</div>
	}
}