init();

function init() {
    render()
}

//     for (let index = 0; index < myEvo.length; index++) {
//         var year = myEvo[index];
//         console.log(123);
// };


function render() {

    var listElement = document.querySelector('.items-list')
    listElement.innerHTML = '';

    var yearsArray = Object.keys(myEvo);
    
    yearsArray.forEach(function (year) {

        var yearElement = document.createElement('div');
        yearElement.className = 'year';
        yearElement.innerHTML = year;

        var clipsArray = Object.keys(myEvo[year])
        
        clipsArray.forEach(function (clip) {

            let clipTitle = myEvo[year][clip].name
            let clipUrl = myEvo[year][clip].url

            var clipElement = document.createElement('p');
            clipElement.className = 'clip';
            clipElement.innerHTML = `${clipUrl}`;

            listElement.appendChild(yearElement);
            yearElement.appendChild(clipElement);
        });

    });

};




