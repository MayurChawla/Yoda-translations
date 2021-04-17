var translatebtn = document.querySelector("#btn-translate");
var inputtxt = document.querySelector("#input-txtarea");
var outputtxt = document.querySelector("#output-txtarea");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json?text=";

function getTranslationURL(text) {
    return (serverUrl + text);
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server..! Try again after Sometime");
}

function DoTranslation() {
    var usertextinp = inputtxt.value;
    // outputtxt.innerHTML = inputtxt.value;
    fetch(getTranslationURL(usertextinp))
        .then(response => response.json())
        .then(json => {
            var translatedtextoutput = json.contents.translated;
            outputtxt.innerText = translatedtextoutput;
        })
        .cache(errorHandler)    
        // console.log(json.contents.translated)
}
translatebtn.addEventListener("click",DoTranslation);