import { useState, React } from "react";

function Wizard(props) {
    const [tab, setTab] = useState({index : 0, name : 'captcha'});
    const {children, className} = props
    return (
        <div className={(className ? className : '') + ' tabs'}>
            <nav>
                {children.map((child, index) => {
                        const {title, name} = child.props
                        return <button onClick={() => setTab({index, name})}
                        className={tab.index === index ? "active" : ''}>{title}</button>
                })}
            </nav>
            <div className="tab-content">
                {
                    children.filter((child, index) => index === tab.index)
                        .map((child, index) => (<div className="tab">
                            {child}
                        </div>))
                }
            </div>
        </div>
   );
}

export default Wizard;