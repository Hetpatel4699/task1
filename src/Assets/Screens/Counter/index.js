//         // Class Component //
// import React, { Component } from 'react'

//  class counter extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count: 0
//       }
//     }
    

//     incrementCount = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }

//     decrementCount = () => {
//       if (this.state.count > 0) {
//         this.setState({
//           count: this.state.count - 1
//         });
//       }
//     }
    
    

//   render() {
//     return (
//       <div>
//        <h1>Count: {this.state.count}</h1>
//         <button onClick={this.incrementCount}>Increment</button>
//         <button onClick={this.decrementCount}>Decrement</button>
//       </div>
//     )
//   }
// }

// export default counter


    // Functional Component //
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);
    
      const incrementCount = () => {
        setCount(count + 1);
      }
    
      const decrementCount = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      }
    
      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
        </div>
      );
    }
    
    export default Counter;