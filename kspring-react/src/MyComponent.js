//import React from 'react';
import React, { Component } from 'react';
import propTypes from 'prop-types';
/*
const MyComponent = () => {
    return  <div>kspring 새로운 컴포넌트 </div>
};

function Bdog(){
    this.name ='백구';
    return {
        name:'흑구',
        back: function () {
            console.log(this.name + '멍멍');
        }
    }
}
const bdog = new Bdog();
bdog.back();

function Wdog(){
    this.name='백구';
    return {
        name:'흑구',
        back: () => {
            console.log(this.name +'왈왈');
        }
    }
}
*/
/*
const wdog = new Wdog();
wdog.back();

const MyComponent = props => {
    const {name, children} = props;
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다.<br />
            children 값은 {children} 입니다.
        </div>
    );
};
*/
/*
const MyComponent = ({name, children, likeNum}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다.<br />
            children 값은 {children} 입니다.<br />
            제가 좋아하는 숫자는 {likeNum} 입니돵.졸리돵.
        </div>
    );
};

MyComponent.defaultProps={name:'김보미'};
MyComponent.propTypes = {
    name: propTypes.string,
    likeNum: propTypes.number.isRequired
};
*/
/*
class MyComponent extends Component {
    render() {
        const {name, children, likeNum} = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name} 입니다.<br />
                children 값은 {children} 입니다.<br />
                제가 좋아하는 숫자는 {likeNum} 입니돵.지겹다아.
            </div>
        );
    }
}

MyComponent.defaultProps={name:'김보미'};
MyComponent.propTypes = {
    name: propTypes.string,
    likeNum: propTypes.number.isRequired
};
*/

class MyComponent extends Component {

    static defaultProps={name:'김보미'};
    static propTypes = {
        name: propTypes.string,
        likeNum: propTypes.number.isRequired
    };

    render() {
        const {name, children, likeNum} = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name} 입니다.<br />
                children 값은 {children} 입니다.<br />
                제가 좋아하는 숫자는 {likeNum} 입니돵.아아아아아아아아ㅏㅏㅏ.
            </div>
        );
    }
}

export default MyComponent;
