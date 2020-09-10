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
        this.resetstate=this.resetstate.bind(this)
    }
    update(count){
        this.setState({
            count: count
        })
        
    }
    resetstate(count){
        this.setState({
            count: 0
        })
    }

    render() {
        
        return (
            <div>
                { this.state.count!==0 ?  <Clock timeInSeconds={this.state.count} resettime={this.resetstate}/> : <h1>00:00</h1>}
                <CountdownForm onSetCountdownTime={this.update}/>
            </div>
        );
    }
}

export default Countdown;