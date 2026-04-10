function search() {
    var siteSearch = document.getElementById("footer-search-desktop-down");
    var mastersiteSearch = document.getElementById("head-search");
    var ccValidation = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
    var cardnumber = siteSearch.value;
    var cardnumber2 = mastersiteSearch.value;
        if(ccValidation.test(cardnumber)==true)
        {
            document.getElementById("footer-search-desktop-down").value="";
        }
        else if(ccValidation.test(cardnumber2)==true)
        {
            document.getElementById("head-search").value="";
        }
}
