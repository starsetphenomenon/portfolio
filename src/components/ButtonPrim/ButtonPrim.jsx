import './buttonPrim.scss'

function ButtonPrim({ children, text , ...props}) {


    return (
        <div className="button_prim">
            <div className="icon">
                {children}
            </div>
            <button {...props}>{text}</button>
        </div>
    )
}

export default ButtonPrim;