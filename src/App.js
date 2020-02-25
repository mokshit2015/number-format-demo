import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cardNo : '',
      num : '',
      gapSize : {
        '0' : '(',
        '3' : ') ',
        '6' : '-'
      }
    }
  }

  handleChange = (e) => {
    const { name, value} = e.target;
    
    this.setState({
      [name] : value,
    },() => this.numberValidate())
  }

  numberValidate = () => {
    const { cardNo, gapSize } = this.state;
    let result = '';
    let arr = cardNo.split("").filter((val) => { return /[0-9]/.test(val) });

    if(arr.length >= 4){
      arr.unshift("(");
    }
    result =  arr.map((item,i) => {
      
      if(i==4){
        return  gapSize[3] + item ;
      }
      else if(i == 7)
        return gapSize[6] + item;
      else
        return item
    });

    let data = arr.filter(val => val !== '(' )
      
    this.setState({
      cardNo : result.join(""),
      num : data.join("")    
    })
  }

  render(){
    return(
      <div>
        <br/>
        Enter Number : <input type="text" maxLength="14" name="cardNo" value={this.state.cardNo} onChange={this.handleChange}/>
      </div>
    );
  }

}

export default App;
