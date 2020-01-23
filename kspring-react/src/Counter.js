// import React, { useState } from 'react';

// const Counter = () => {
//     const [num, setNum] = useState(0);
    
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     const onChangeName= e=> {
//         setName(e.target.value);
//     }
//     const onChangeNickname= e=> {
//         setNickname(e.target.value);
//     }
//     return(
//         <>  
//             <div>
//                 <p>현재 값은 <b>{num}</b> 입니다.</p>
//                 <button onClick={()=> setNum(num + 1)}>+1</button>
//                 <button onClick={()=> setNum(num - 1)}>-1</button>
//             </div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//                 <p>이름 : {name}</p>
//                 <p>닉네임 : {nickname}</p>
//             </div>
//         </>
//     );

// }

import React, { useReducer } from 'react';

function reducer(state, action){
    switch (action.type){
        case'NINCREMENT': return{ value:state.value +1};
        case'NDECREMENT': return{ value:state.value -1};
        default: return state;

    }
}

const Counter = () => {
    const [state, dispatchaa] = useReducer(reducer, { value: 0 });
    return(
        <>  
            <div>
                <p>현재 값은 <b>{state.value}</b> 입니다.</p>
                <button onClick={()=> dispatchaa({type:'NINCREMENT'})}>+1</button>
                <button onClick={()=> dispatchaa({type:'NDECREMENT'})}>-1</button>
            </div>
        </>
    );

}
export default Counter;