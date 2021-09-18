import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import 'semantic-ui-css/semantic.min.css'
import Spinner from './Spinner';

class App extends React.Component {
    
    state = { lat: null, errMsg: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({ errMsg: err.message })
        );
    }

    componentDidUpdate() {
        console.log('Component updated');
    }

    renderContent() {
        if (!this.state.errMsg && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if (this.state.errMsg && !this.state.lat){
            return <div>Error: {this.state.errMsg}</div>;
        }
        return <Spinner />;
    }

    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}



ReactDOM.render(<App/>, document.querySelector("#root"))