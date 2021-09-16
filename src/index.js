import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { lat: null };
    }
    render(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    ...this.state, lat: position.coords.latitude
                })
            },
            err => console.log(err)
        );
        return (
            <div>Latitude: {this.state.lat}</div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))