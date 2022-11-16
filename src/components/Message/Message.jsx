import './message.scss';

function Message({ children, trigger, color }) {


    return (
        <div className={trigger ? 'mailSent success' : 'mailSent'}>
            <h4 style={{ color: color ? color : null }} className="msg">
                {children}
            </h4>
        </div>
    )
}

export default Message;