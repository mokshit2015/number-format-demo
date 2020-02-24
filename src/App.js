import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cardNo : '',
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
    
    result =  arr.map((item,i) => {
      if(i==Object.keys(gapSize)[0])
        return gapSize[0] + item;
      else if(i==3){
        return  gapSize[3] + item ;
      }
      else if(i == 6)
        return gapSize[6] + item;
      else
        return item
    });
      
    this.setState({
      cardNo : result.join("")
    })
  }

  render(){
    return(
      <div>
        <br/>
        Enter Number : <input type="text" name="cardNo" value={this.state.cardNo} onChange={this.handleChange}/>
      </div>
    );
  }

}

export default App;
