import { useRef, useState } from 'react';

const Card = ({ title, value, hasResponse }) => {
    const textAreaRef = useRef(null);
    const [showCopy, setShowCopy] = useState(false);

    const handleCopy = () => {
        textAreaRef.current.select();
        document.execCommand('copy');
        setShowCopy(true);
        setTimeout(() => {
            setShowCopy(false);
        }, 2000);
    };

    let body = (
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <textarea cols="30" rows="10" readOnly></textarea>
            <h3 className="card-loader">
                <i className="fa-solid fa-spinner fa-spin"></i>
                <span>翻譯中，請稍候...</span>
            </h3>
        </div>
    );

    let copyReminderClass = "";
    if (showCopy) {
        copyReminderClass = "show"
    }

    if (hasResponse) {
        body = (
            <div className="card-body">
                <h3 className="card-title">{title}
                    <div className={`copy-reminder ${copyReminderClass}`}>
                        <i className="fa-solid fa-check"></i>
                        <span>已複製翻譯結果</span>
                    </div>
                </h3>
                <textarea ref={textAreaRef} cols="30" rows="5" value={value || ""} onChange={(e) => console.log(e)}></textarea>
                <button className="btn btn-copy" type="button" onClick={handleCopy}>
                    <i className="fa-solid fa-clipboard"></i> 複製翻譯
                </button>
            </div>
        )
    }

    return (
        <div className={`card ${hasResponse ? 'hasResponse' : ''}`}>
            {body}
        </div>
    )
}

export default Card;