import { useState, useEffect, useRef, useContext } from "react"

import { EmojiContext } from "../context/EmojiContext"

function Clock() {

    const [date, setDate] = useState(new Date())
    // const [tickCount, setTickCount] = useState(0)
    let timerId = useRef() //will revisit later on - like storing a class property

    //replaces didmount and willunmount in one hook
    useEffect(() => {
        console.log('hookclock did mount')
        timerId.current = setInterval(
            () => tick(),
            1000
        );

        //a function returned from useEffect will be run when the component is unmounted
        return () => {
            console.log('hookclock will unmount')
            clearInterval(timerId.current);
        }
    }, [])

    //custom function, called from our custom interval inside useEffect
    //calls setDate and setTickCount which triggers a re-render
    const tick = () => {
        setDate(new Date());
    }
    return (
        <div className="HookClock">
            <FormattedDate date={date} />
        </div>
    );
}

function HookClockDisplay() {

    const [showClock, setShowClock] = useState(false);

    const toggleClock = () => {
        showClock === true ? setShowClock(false) : setShowClock(true)
    }

    return (
        <div className="HookClockDisplay componentBox">
            {useContext(EmojiContext).moodDiv}
            {showClock ? <Clock /> : null}
            {/* <button onClick={hideClock}>Hide HookClock</button> */}
            <button onClick={toggleClock}>{showClock ? 'Hide Clock' : 'Show Clock'}</button>
        </div>
    )
}

export default HookClockDisplay

function FormattedDate(props) {
    return <h2 className="FormattedDate">It is {props.date.toLocaleTimeString("en-US")}.</h2>;
}

// export default FormattedDate;