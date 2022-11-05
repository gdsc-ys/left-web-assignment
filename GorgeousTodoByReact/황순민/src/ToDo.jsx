import { useState } from 'react'
import Change from './Change';

function ToDo(props) {

    const [changeOpen, setChange] = useState(false);
    let textArr = ["Carrot 1", "Carrot 2", "Carrot 3"];
    let listItems = textArr.map((text, index) => <p className="category-text" key={index}>{text}</p>)

    function change() {
        setChange(true);
        console.log("here");
    }

    function changeClose() {
        setChange(false);
        console.log("here2")
    }

    return (
        <>
            <div className="todo" onClick={change}>
                <h2 id="category-title">Todo</h2>
                {listItems}
            </div>
            {changeOpen && <Change onCancel = {changeClose} textArr={textArr}/>}
        </>
 );
}

export default ToDo;