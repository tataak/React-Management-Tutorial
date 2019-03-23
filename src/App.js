import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer ={
  'name1':'강경진',
  'birthday1':'861221',
  'gender1':'male',
  'job1':'engineer'
}


class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name1}
        birthday={customer.birthday1}
        gender={customer.gender1}
        job={customer.job1}
      />
    );
  }
}


export default App;

/* Customer라는 컴포넌트를 불러온다
어떤 속성으로 어떤 값을 보내주는 것이 props
Customer 컴포넌트를 불러올때 이 속성을 전송한다.
그럼 Customer 입장에서는 전달받은 props를 활용해서 표출할 수 있게 된다.
*/
