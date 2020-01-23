import React, { Component } from 'react';

class EventPractice extends Component {
    state = {username:'11111', message:'22222'}
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleClick=()=>{
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username:'33333',
            message:'44444'
        });
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="진짜"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="집에가고싶다"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>
                    확인
                </button>
            </div>
        );
    }
    
}

export default EventPractice;
