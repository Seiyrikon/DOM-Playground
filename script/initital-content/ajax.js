let getInitialContent = function getInitialContentHandler() {

    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "/template/components/InitialContent.html", true);
    xhttp.send();
}