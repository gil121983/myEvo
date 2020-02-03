function ddselect() {
    
    var allClipsEmbed = '';
    var yearSelect = document.getElementById("ddselect");// get the selected year
    yearSelect.addEventListener('input', function () {
       
        var year = this.value;
        var clipsArray = Object.keys(myEvo[year]);// makes array of chosen year's clips index

        clipsArray.forEach(function (clip) { // Embed each clip 

            var clipURL = myEvo[year][clip].url
            allClipsEmbed += `${clipURL}`;
            
            document.querySelector(".show-clips").innerHTML = allClipsEmbed;
        });
        
    })
};






