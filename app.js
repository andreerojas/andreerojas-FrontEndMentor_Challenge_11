const inputs = document.querySelectorAll('input');
const trackContainers = document.querySelectorAll('.track-info');

function fillData(){
    fetch("data.json")
    .then(res => res.json())
    .then(tracks => {
        let frequency = document.querySelector('input:checked').value;
        const auxMap = {daily:"Day",weekly:"Week",monthly:"Month"};
        for(let idx = 0; idx<6;idx++){
            trackContainers[idx].children[0].innerText = tracks[idx]["title"];
            trackContainers[idx].children[2].innerText = `${tracks[idx]["timeframes"][frequency]["current"]}hrs`;
            trackContainers[idx].children[3].innerText = `Last ${auxMap[frequency]} - ${tracks[idx]["timeframes"][frequency]["previous"]}hrs`;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

for(let input of inputs){
    input.addEventListener('input',fillData);
}

//default data filling
fillData();



