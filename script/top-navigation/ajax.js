let getTopNavigation = function getTopNavigationHandler() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("top-navigation").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "/template/components/TopNavigation.html", true);
    xhttp.send();
}