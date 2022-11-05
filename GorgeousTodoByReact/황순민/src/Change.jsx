import { useState } from 'react'

function Change(props) {

    console.log(props.textArr)
    // let textArr = props.textArr;
    const [textArr, changeTextArr] = useState(props.textArr);
    let listItems = textArr.map((text, index) => <p className="category-text" key={index}>{text}</p>);

    const [inputText, setInputText] = useState("");

    function cancel() {
        props.onCancel();
    }

    function add(e) {
        let newTextArr = textArr.concat(inputText);
        console.log(newTextArr);
        changeTextArr(newTextArr);
        setInputText("");
    }

    function change(e) {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    return (
        <div id="change">
            <div onClick={cancel}>
                {listItems}
            </div>
            <input value={inputText} onChange={change} />
            <button onClick={add}>Add</button>
            {/* <p onClick={add}>Add More Tasks</p> */}
        </div>
    );
}

export default Change;