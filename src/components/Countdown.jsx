import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
class Countdown extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.update=this.update.bind(this)
    }
    update(count){
        this.setState({
            count: count
        })
        
    }
    render() {
        
        return (
            <div>
                { this.state.count!==0 ?  <Clock timeInSeconds={this.state.count}/> : <h1>Initial state is 0</h1>}
                <CountdownForm onSetCountdownTime={this.update}/>
            </div>
        );
    }
}

export default Countdown;