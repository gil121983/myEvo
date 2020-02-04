var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


slider.addEventListener("input", function () {

    let allClipsEmbed = '';
    let year = this.value;
    const clipsArray = Object.keys(myEvo[year]);// makes array of chosen year's clips index

    clipsArray.forEach(function (clip) { // Embed each clip 
        let clipURL = myEvo[year][clip].url
        allClipsEmbed += `${clipURL}`;
        document.querySelector(".show-clips").innerHTML = allClipsEmbed;
    });


});
