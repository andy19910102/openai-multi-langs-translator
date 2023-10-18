# Open AI Multi Langs Translator

![Next.js](https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465)
![React.js](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)

Open AI Multi Langs Translator 是一個基於 Next.js 架構的項目，使用 Open AI 的 gpt-3.5-turbo 模型來實現多國語言一次性翻譯的網站應用程式介面。使用者可以在此網站上輸入待翻譯的文字，並選擇所需的語言進行翻譯。此外，Open AI Multi Langs Translator 也支持多種語言之間的翻譯，例如英語、中文、西班牙語、法語、德語等。

以上文字由ChatGPT協助編修產生。

----

Open AI Multi Langs Translator is a project based on the Next.js framework, which implements a web application programming interface for multi-language translation with Open AI's gpt-3.5-turbo model. Users can input the text they want to translate on this website and choose the desired language for translation. In addition, Open AI Multi Langs Translator also supports translation between multiple languages, such as English, Chinese, Spanish, French, German, and more.

The above text was edited and generated with the assistance of ChatGPT.

## 如何取得專案

1. 點擊 Github Repository 中的綠色「Code」按鈕。
2. 點擊「Download ZIP」。

## 如何啟動應用程式

1. 首先必須要有 node.js 的執行環境，如果你的電腦未曾安裝過 node.js 請至 [https://nodejs.org/en](https://nodejs.org/en) 下載 LTS 版本並進行安裝。

2. 安裝完成後透過編輯器的終端機打開本專案，並使用 npm 安裝 yarn 至你的系統內：

Windows
```
npm i -g yarn
```

MacOS
```
sudo npm i -g yarn
```

3. 透過 yarn 安裝專案所需模組

```
yarn install
```

4. 在專案根目錄內創建一名為 .env 的檔案並寫入 

```
OPENAI_API_KEY=您的OPENAI_API_KEY
```

關於如何尋找你的 OPENAI_API_KEY 可參考 [Where do I find my Secret API Key?](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)。

5. 在終端機上輸入以下指令將應用程式啟動

```
yarn dev
```

6. 應用程式啟動後您可在 `http://localhost:3000` 觀看結果。

## 貢獻

若有任何建議或改進，歡迎提交 Pull Request 或建立 Issue。

## 授權

此專案使用 [MIT License](LICENSE) 授權。