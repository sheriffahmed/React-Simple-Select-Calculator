import React from 'react';
import { render } from 'react-dom';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Num = (props) =>{
  const {count} = props;
  return count.map( ele => (
     <option
     value= {ele}>
      {ele}
     </option>

    
  ))

}

// const Eval = () =>{
//   if(num)
// }

class App extends React.Component{
  constructor(){
    super();

    this.count = ['',1,2,3,4,5,6,7,8,9] 
    this.op = ['', '+', '-', '*', '/']
    this.state = {
      num1: null,
      op: null,
      num2: null
    }
  }

  handleVal = e =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render(){
    const {num1, op, num2} = this.state
    let op1
    return(
      <div style={styles}>
      <h1> Select Calculator</h1>
      <br />
     <p>Num1 {" "}<select id="num1" onChange={this.handleVal}>
     <Num count={this.count} />
     </select>
          {" "} Operator {" "}<select id="op" onChange={this.handleVal}>
       <Num count={this.op} />
     </select>
          {" "}  Num2 {" "}<select id="num2" onChange={this.handleVal}>
           <Num count={this.count} />
         </select>

         <label> {" "}Result:{
          num1 && num2 &&  op === '+' ? parseInt(num1) + parseInt(num2): 
              num1 && num2 &&  op === '-' ? num1 - num2:
                num1 && num2 && op === '*' ? num1 * num2 :
                  num1 && num2 &&  op === '/' ? num1 / num2 : null
         }</label>
    

    </p>

    
  </div>
    )
  }
}
  


render(<App />, document.getElementById('root'));
