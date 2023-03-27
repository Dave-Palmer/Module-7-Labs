import React from "react"

function Accordion({ arrayData }) {

    const [selected, setSelected] = React.useState(null)
    let toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className="wrapper">
            <div className='accordion'>
                {
                    arrayData.map((item, i) => (
                        <div className='item'>
                            <div className='title' onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                        </div>
                    ))
                }
            </div>
        </div>)
}

export default Accordion