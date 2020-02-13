import React, { Component } from 'react'
import "./CreditCard.css"

export default class CreditCard extends Component {
state={
    name :'',
    date:'',
    day:'xx',
    month: 'xx',
    cardNumber:''

};
changename = (e)=>{
    let regexLetter = /[^A-Za-z]$/;
    if (!regexLetter.test(e.target.value)){
    this.setState({
        name : e.target.value
    })}
}
changenumber = (e)=>{
    let regexNumber = /[^0-9  ]$/;
    if (!(regexNumber.test(e.target.value))){
    this.setState({
        cardNumber : e.target.value
    })

}
}
addspace =(e)=>{
    return (e.toString().replace(/\d{4}(?=.)/g, "$& "))
}
changedate = (e)=>{
    let regexNumber = /[^0-9 ]$/;
    let regexMonth = /[^0-1 ]$/;
    if (!(regexNumber.test(e.target.value))){
        if(!regexMonth.test(e.target.value.substr(0,1))&& e.target.value.substr(0,2)<=12){
    this.setState({
        date :e.target.value
    })}
}}

addslash = (date) =>{
    if(date.length <5 ){
       return  (date = date.substr(0,2) + "/" + date.substr(2,3))
    }
    
}

    render(){  
        return (
        <div className="center">
           
            <div className="cardAll">
                <h1 className="title"> Bank wherever</h1>
                <div className="twoimg">
                <img  className="centerA"src="https://media.istockphoto.com/photos/credit-card-chip-isolated-picture-id920007942" width="20%" alt="aze"/>
                <img  className="centerB" src="https://img2.freepng.es/20181109/lif/kisspng-credit-card-payment-mastercard-logo-5be5fb46d19816.5027498515417987268585.jpg" width="20%" alt="logo" /></div>
                <p className="cardNumber">{this.addspace(this.state.cardNumber).padEnd(19 ,"*")}</p>
            <div className="nameDate"> Card  Holder
                <p>{this.state.name.toUpperCase()}</p>
                <p> VALID THRU   {this.addslash(this.state.date.padStart(4,'*'))}</p></div></div>
        
        
        
        <div>
           <div className="cardnumber"> <label>Card Number :  </label>
               <input maxLength={16} type="text" placeholder="Credit Card" value={this.state.cardNumber} onChange={this.changenumber}></input></div>
            <div className="date"> <label>Expiration Date :</label>
                <input maxLength={4} type="text" placeholder="Date" value={this.state.date} onChange={this.changedate}></input></div>
              <div className ="name"><label>Card Holder :</label>
                <input maxLength={20} type="text" placeholder="Name" value={this.state.name} onChange={this.changename}></input></div>
                </div></div>
        )}
      
        }