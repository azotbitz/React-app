import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {

    const [messageList2, setMessageList2] = useState([git]);

    const [changer, setChanger] = useState(false);

    const ref = useRef('');

    function handleClick(e) {
        e.preventDefault()
        setMessageList2([...messageList2, ref.current.value])
        setChanger(!changer)
    }


    useEffect(() => {
        ref.current.value = '';
        if(changer) {
            setTimeout( () => setMessageList2([...messageList2, 'Yes']), 1000)
            setChanger(!changer);
         }
        }, [messageList2]
    );

    return (
        <div>
            <form action=''>
            <input type="text" className='input' ref={ref}/>
                <button onClick={handleClick}>+</button>
            </form>
            <div>
                {messageList2.map(msg => (
                    <div>
                        {msg}
                    </div>))}
            </div>
        </div>
    )
}

export default App;
