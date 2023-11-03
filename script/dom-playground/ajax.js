let getDomPlayGround = function getDomPlaygGroundHandler() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;

            // Call a function to execute the JavaScript code in the loaded content
            initializeLoadedContent();
        }
    };
    xhttp.open("GET", "/template/components/DomPlayground.html", true);
    xhttp.send();
}


