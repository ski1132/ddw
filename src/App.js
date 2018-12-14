import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    show: "" ,
    num1:"" ,
    num2:0,
    ch1:false,
    ch2:false,
    result:0,
    char : "",
    check : false
  };
  getValue = n =>
  {
    if(this.state.check === false)
    {
      if(n === 10 )
      {
        this.setState({num1 : parseInt(this.state.num1) * parseInt(n)});
        this.setState({ show: this.state.show + "0"});

      }
      else if(n === 100)
      {
        this.setState({num1 : parseInt(this.state.num1) * parseInt(n)});
        this.setState({ show: this.state.show + "00"});
      }
      else
      {
        if(this.state.ch1 === false)
        {
          //this.state.num1 = n;
          this.setState({ num1: n});
          this.setState({ch1 : true});
          //console.log(this.state.num1);
        }
        else
        {
          //this.state.num1 += n
          this.setState({ num1: this.state.num1 + n});
        
        }
          this.setState({ show: this.state.show + n})
        console.log(this.state.num1);
      }
      
    }
    if(this.state.check === true)
    {
      if(n === 10 )
      {
        this.setState({num2 : parseInt(this.state.num2) * parseInt(n)});
        this.setState({ show: this.state.show + "0"});
      }
      else if(n === 100)
      {
        this.setState({num2 : parseInt(this.state.num2) * parseInt(n)});
        this.setState({ show: this.state.show + "00"});
      }
      else
      {
        if(this.state.ch2 === false)
        {
          //this.state.num1 = n;
          this.setState({ num2: n});
          this.setState({ch2 : true});
          //console.log(this.state.num1);
        }
        else
        {
          //this.state.num1 += n
          this.setState({ num2: this.state.num2 + n});
        
        }
          this.setState({ show: this.state.show + n})
        console.log(this.state.num2);
      }
      //this.state.num2 = this.state.show;
    }
   
    //console.log(this.state.show;
  }
  getChar = e =>
  {
    this.state.char = e;
      
      this.setState({ show: this.state.show + this.state.char});
      console.log(this.state.char);
      this.state.check = true;


  };
  getResult = () =>
  {
    if(this.state.char === "+")
    {
      this.state.result = parseInt(this.state.num1) + parseInt(this.state.num2);
      this.setState({ show: this.state.result}) ;
    }
    else if(this.state.char === "-")
    {
      this.state.result = parseInt(this.state.num1) - parseInt(this.state.num2);
      this.setState({ show: this.state.result}) ;
    }
    else if(this.state.char === "*")
    {
      this.state.result = parseInt(this.state.num1) * parseInt(this.state.num2);
      this.setState({ show: this.state.result}) ;
    }
    else if(this.state.char === "/")
    {
      this.state.result = parseInt(this.state.num1) / parseInt(this.state.num2);
      this.setState({ show: this.state.result}) ;
    }


    this.state.num1 = this.state.result;
  };
  render() {
    return (
    <table border="2">
    <tbody>
      <tr>
        <td colSpan="4">
          <input type="text" name="num" value={this.state.show} onChange={this.state.num} disabled/>
        </td>
      </tr>
      <tr>
        <td> <button onClick={() => this.getValue("1")} > 1 </button>  </td>
        <td> <button onClick={() => this.getValue("2")} > 2 </button>  </td>
        <td> <button onClick={() => this.getValue("3")} > 3 </button>  </td>
        <td> <button onClick={() => this.getChar("+")} > + </button>  </td>
      </tr>
      <tr>
        <td> <button onClick={() => this.getValue(4)} > 4 </button>  </td>
        <td> <button onClick={() => this.getValue(5)} > 5 </button>  </td>
        <td> <button onClick={() => this.getValue(6)} > 6 </button>  </td>
        <td> <button onClick={() => this.getChar("-")} > - </button>  </td>
      </tr>
      <tr>
        <td> <button onClick={() => this.getValue(7)} > 7 </button>  </td>
        <td> <button onClick={() => this.getValue(8)} > 8 </button>  </td>
        <td> <button onClick={() => this.getValue(9)} > 9 </button>  </td>
        <td> <button onClick={() => this.getChar("*")} > * </button>  </td>
      </tr>
      <tr>
        <td> <button onClick={() => this.getValue(10)} > 0 </button>  </td>
        <td> <button onClick={() => this.getValue(100)} > 00 </button>  </td>
        <td> <button onClick={() => this.getResult()} > = </button>  </td>
        <td> <button onClick={() => this.getChar("/")} > / </button>  </td>
      </tr>
      </tbody>
    </table>
);
  }
}

export default App;
