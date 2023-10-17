import { useState } from "react";
import langOptions from "../static/lang-options";

const Form = ({ onFormSubmit }) => {
    const [userInput, setUserInput] = useState("");
    const [langList, setLangList] = useState(langOptions);

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
                    placeholder="在此填入要翻譯的內容..."
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
                <p className="small text-center">此翻譯結果透過 OPEN AI gpt-3.5-turbo 模型生成。</p>
            </form>
        </div>
    )
}

export default Form;