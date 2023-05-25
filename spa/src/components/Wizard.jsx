import { useState, React } from "react";

function Wizard(props) {
    const [tabNumber, setTab] = useState(0);
    const {children, className} = props
    return (
        <div className={(className ? className : '') + ' tabs'}>
            <nav>
                {children.map((child, index) => {
                        const {title} = child.props
                        return <button onClick={() => setTab(index)}
                        className={tabNumber === index ? "active" : ''}>{title}</button>
                })}
            </nav>
            <div className="tab-content">
                {
                    children.filter((child, index) => index === tabNumber)
                        .map((child, index) => (<div className="tab">
                            {child}
                        </div>))
                }
            </div>
        </div>
   );
}

export default Wizard;