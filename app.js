
    var btnTranslate=document.querySelector("#btn-tanslate")
    var input=document.querySelector("#input")
    var output=document.querySelector("#output")
    var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

    //input
    var text=input.value;

    btnTranslate.addEventListener("click",clickEventHandler);

    function urlconstructor(text)
    {
        var url1=url+"?text="+text;
        console.log(url1);
        return url1;
    }

    function clickEventHandler(){

    //taking input
            
        fetch(urlconstructor(text))
        .then(Response=>Response.json())
        .then(json=>output.innerText=json.contents.translated)

    }
