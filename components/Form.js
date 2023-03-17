import { useState } from "react";
import axios from "axios";

const Form = ({ onFormSubmit }) => {
    const [userInput, setUserInput] = useState("");
    const [langList, setLangList] = useState([
        { label: "English", icon: "🇺🇸", checked: true },
        { label: "Japanese", icon: "🇯🇵", checked: true },
        { label: "Korean", icon: "🇰🇷", checked: false },
        { label: "French", icon: "🇫🇷", checked: false },
        { label: "German", icon: "🇩🇪", checked: true },
        { label: "Spanish", icon: "🇪🇸", checked: false },
        { label: "Italian", icon: "🇮🇹", checked: false },
        { label: "Portuguese", icon: "🇵🇹", checked: false },
        { label: "Dutch", icon: "🇳🇱", checked: false },
        { label: "Czech", icon: "🇨🇿", checked: false },
        { label: "Danish", icon: "🇩🇰", checked: false },
        { label: "Finnish", icon: "🇫🇮", checked: false },
        { label: "Hungarian", icon: "🇭🇺", checked: false },
        { label: "Norwegian", icon: "🇳🇴", checked: false },
        { label: "Polish", icon: "🇵🇱", checked: false },
        { label: "Greek", icon: "🇬🇷", checked: false },
        { label: "Russian", icon: "🇷🇺", checked: false },
        { label: "Arabic", icon: "🇸🇦", checked: false },
        { label: "Hindi", icon: "🇮🇳", checked: false },
        { label: "Indonesian", icon: "🇮🇩", checked: false },
        { label: "Malay", icon: "🇲🇾", checked: false },
        { label: "Thai", icon: "🇹🇭", checked: false },
        { label: "Vietnamese", icon: "🇻🇳", checked: true },
        { label: "Bengali", icon: "🇧🇩", checked: false },
        { label: "Punjabi", icon: "🇵🇰", checked: false },
        { label: "Tamil", icon: "🇮🇳", checked: false },
        { label: "Telugu", icon: "🇮🇳", checked: false },
        { label: "Urdu", icon: "🇵🇰", checked: false },
        { label: "Persian", icon: "🇮🇷", checked: false },
        { label: "Turkish", icon: "🇹🇷", checked: false },
        { label: "Burmese", icon: "🇲🇲", checked: false },
        { label: "Romanian", icon: "🇷🇴", checked: false },
    ]);

    const langListDOM = langList.map((lang, index) => {
        return (
            <label
                key={lang.label}
                className={`langLabel ${lang.checked ? 'checked' : ''}`}
                title={lang.label}
            >
                <input
                    type="checkbox"
                    checked={lang.checked}
                    onChange={(e) => {
                        const newLangList = [...langList];
                        newLangList[index].checked = e.target.checked;
                        setLangList(newLangList);
                    }}
                />
                <span>{lang.icon} {lang.label}</span>
            </label>
        )
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        const checkedLangList = langList.filter(lang => lang.checked);
        // Prepare the request body
        onFormSubmit({
            userInput,
            langList: checkedLangList
        });
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="8"
                    value={userInput}
                    placeholder="在此填入要翻譯成多國語言的中文文字..."
                    onChange={(e) => setUserInput(e.target.value)}
                    required
                >
                </textarea>
                <div>
                    <h3 className="langTitle">請選擇想翻譯的語言(建議可選10個以下做嘗試)</h3>
                </div>
                <div className="langGroup">
                    {langListDOM}
                </div>
                <button className="btn" type="submit">📡 開始翻譯</button>
            </form>
        </div>
    )
}

export default Form;