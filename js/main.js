init();

function init() {
    render()
}

function render() {
    // getting years into drop down select element. 
    var selectedYear = document.getElementById("ddselect");
    var yearsArray = Object.keys(myEvo);
    yearsArray.forEach(element => {
        var option = document.createElement("OPTION"),
            txt = document.createTextNode(element);
        option.appendChild(txt);
        option.setAttribute("value", element)
        selectedYear.insertBefore(option, selectedYear.lastChild);
    });
};