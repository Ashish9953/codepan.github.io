const htmlEditor = CodeMirror.fromTextArea(
  document.querySelector(" .editor-box .editors .html-editor #html-code"),
  { lineNumbers: true, tabSize: 4, mode: "xml", autoCloseTags: true }
);
console.log(htmlEditor);

const cssEditor = CodeMirror.fromTextArea(
  document.querySelector(" .editor-box .editors .css-editor #css-code"),
  { lineNumbers: true, tabSize: 4, mode: "xml" }
);
const jsEditor = CodeMirror.fromTextArea(
  document.querySelector(
    " .editor-box .editors .javascript-editor #javascript-code"
  ),
  { lineNumbers: true, tabSize: 4, mode: "xml" }
);

function run() {
  // let htmlCode = document.querySelector(
  //   " .editor-box .editors .html-editor #html-code"
  // ).value;
  let htmlCode = htmlEditor.getValue();
  console.log(htmlCode);
  let cssCode = "<style>" + cssEditor.getValue() + "</style>";
  console.log(cssCode);
  // "<style>" +
  // document.querySelector(".editor-box .editors .css-editor #css-code").value +
  // "</style>";
  let jsCode = "<scr" + "ipt>" + jsEditor.getValue() + "</scr" + "ipt>";
  console.log(jsCode);
  let output = document.querySelector(".editor-box .output #output");

  output.contentDocument.body.innerHTML = htmlCode + cssCode + jsCode;
}
