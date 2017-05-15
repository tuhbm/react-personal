class ContactInfo extends React.Component{
    render(){
        return(
            <div>{this.props.contact.name} {this.props.contact.number}</div>
        );
    }
}

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contactData:[
                {name:'html',number:'010-1234-5678'},
                {name:'css',number:'010-2345-6789'},
                {name:'javascript',number:'010-3456-7890'},
                {name:'jQuery',number:'010-4567-8901'}
            ]
        }
    }
    render(){
        const mapToComponent = (data) =>{
            return data.map((contact,i)=>{
                return (<ContactInfo contact={contact} key={i}/>);
            })
        };
        return(
            <div>
                {mapToComponent(this.state.contactData)}
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <Contact />
        );
    }
};

ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);