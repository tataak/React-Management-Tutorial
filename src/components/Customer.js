import React from 'react';

class Customer extends React.Component {
    render() {
        return(
            <div>
                 <h2>{this.props.job}</h2>
                 <p>{this.props.birthday}</p>
                 <p>{this.props.name}</p>
             </div>
        )
    }
}






export default Customer;

/* 컴포넌트에서는 표출값을 하드코딩 하진 않고 props 라는 '속성'을 불러오는 함수를 이용한다.*/
/* 최종적으로 화면에 표출되는 것은 최하위의 componet에 정의되고, 이 속성값은 (App.js)에서 전달받는다. */ 


/* customer라는 클래스를 정의한다. 
React.Componet 는
react의 라이브러리이자 class 라고 할 수 있다.
이걸상속받아서 componet를 정의한다.
React.componet라는 라이브버리에는 render라는 함수가 있다. 
render는 항상 수행되는 내용으로 customer라는 컴포넌트를 화면에 그릴때 실제 그려지는 내용이 담긴다.*/

