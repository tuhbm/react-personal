import React from 'react'; //import 는 es6의 문법 var Ract = require('react')

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name :''
        };
    }
    render(){
        return (
            <div>
                <button onClick={()=>{this.setState({name:'ktk'});}}>Click me</button>
                <h1>Hello!!!!! {this.state.name}</h1>
            </div>
        );
    }
}

export default App;// es6문법  module.export = App; 동일