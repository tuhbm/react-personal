class Counter extends React.Component{
    constructor(props){
        super(props);//super를 사용해야 state or props 사용가능
        this.state = {
            value:0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            value:this.state.value + 1
        });
    }
    // handleClick(){
    //   this.setState.value = this.state.value + 1;
    // }

    render(){
        return(
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick}>Press Me</button>
            </div>
        );
    }
}

class App extends React.Component {

    render() {
        return (
            <Counter />
    );
    }
};

ReactDOM.render(
<App></App>,
    document.getElementById("root")
);