//例1-4 JavaScriptのスクリプトが書かれたファイル
//helloworld.js

function hello() {
    //say hello to the world
    var msg = "Hello, <em>World!\u7231</em>";
    document.open();
    document.write(msg);
    document.close();
}
    