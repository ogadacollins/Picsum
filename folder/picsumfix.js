var hero = document.getElementsByClassName('hero-image');
var heroArray = Array.from(hero);
heroArray.forEach(element => {
    async function getPhoto(){
        try {
            const res = await fetch("https://picsum.photos/800/600");
            // console.log(res.url);
            const data = await res.url;
            // console.log(data);
            element.style.backgroundImage = `url(${data})`;
    
        } catch (error) {
            console.error(error);
        }
    }
    
    getPhoto();
});

var selects = document.getElementsByClassName('select-card');
var selectsArray = Array.from(selects);
selectsArray.forEach( selection => {
    async function selects(){
        const res = await fetch('https://picsum.photos/1920/1080');
        const datum = await res.url;
        selection.style.backgroundImage = `url(${datum})`;
    }
    selects();
}

)

// SHOW MORE IMAGES

more.addEventListener('click', async () => {
    var picks = document.getElementsByClassName("picks")[0];

    for (i = 0; i < 8; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'items-group mr-2';
        
        try {
            const res = await fetch('https://picsum.photos/1920/1080');
            const imageUrl = res.url;
            
            var sec = document.createElement('section');
            sec.className = 'select-card w- h- bg-green-500 border mr-3 hover:shadow-lg transform hover:scale-[1.01] transition-all duration-200 ease-in-out';
            sec.style.backgroundImage = `url(${imageUrl})`;

            var innercont = '<div class="select-info h-16 pt-3 text-slate-100 bg-black bg-opacity-50 absolute bottom-0 w-full px-4"><div class="flex justify-between"><button class="heartbutton"><section class=" bg-slate-300 p-3 rounded-xl"><div class="heart"><img class="w-5 h-5" src="./assets/heart.png" alt="up"></div></section></button><button class="download" onclick="downloader(event)"><section class=" bg-slate-300 p-3 rounded-xl "><div class="download"><img class="w-5 h-5" src="./assets/download.png" alt="up"></div></section></button></div></div>';
            sec.innerHTML = innercont;

            newDiv.appendChild(sec); // Append sec to newDiv
            picks.appendChild(newDiv); // Append newDiv to picks
        } catch (error) {
            console.error(error);
        }
    }
});





// more.addEventListener('click',()=>{
//     var picks = document.getElementsByClassName("picks")[0];
//     for(i=0;i<8;i++){
//         var sec = document.createElement('section');
//         sec.className='select-card w- h- bg-green-5 border mr-3 hover:shadow-lg transform hover:scale-[1.01] transition-all duration-200 ease-in-out';
//         var innercont = '<div class="select-info h-16 pt-3 text-slate-100 bg-black bg-opacity-50 absolute bottom-0 w-full px-4"><div class="flex justify-between"><section class=" bg-slate-300 p-3 rounded-xl"><div class=""><img class="w-5 h-5" src="./assets/uparrow.png" alt="up"></div></section><section class=" bg-slate-300 p-3 rounded-xl "><div class="rotate-180 invert"><img class="w-5 h-5" src="./assets/uparrow.png" alt="up"></div></section></div></div></section>';
//         sec.innerHTML=innercont;

//         async function newPhoto(){
//             const res = await fetch('https://picsum.photos/400/400');
//             const datum = await res.url;
//             sec.style.backgroundImage = `url(${datum})`;
//             picks.appendChild(sec);
//         }
        
//         newPhoto();
//     }

// })
// Dark mode
var body = document.getElementsByTagName('body')[0];
var darkButton = document.getElementById('darkmode');
var logo = document.getElementsByClassName('logo')[0];
var searchicon = document.getElementById('searchicon');
var gotyou = document.getElementsByClassName('gotyou')[0];
var ham =document.getElementById('ham');
var clicked = true;
darkButton.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    
    if (clicked){
        darkButton.innerHTML='<img class=\'invert\' src="assets/night.png" alt="">';
        clicked=false;
        logo.classList.toggle('text-slate-200');
        logo.classList.add('text-black');
        searchicon.classList.toggle('invert');
        ham.classList.toggle('invert');
        gotyou.classList.toggle('dark');
    } else {
        darkButton.innerHTML='<img src="assets/day.png" alt="">';
        clicked=true;
        logo.classList.toggle('text-black');
        logo.classList.add('text-slate-200');
        searchicon.classList.toggle('invert');
        ham.classList.toggle('invert');
        gotyou.classList.toggle('dark');
    }
});


// Downloading
function getImageUrl(section) {
    const computedStyle = getComputedStyle(section);
    const backgroundImage = computedStyle.getPropertyValue('background-image');
    const imageUrl = backgroundImage.match(/\((.*?)\)/)[1].replace(/['"]/g, '');
    return imageUrl;
}

function downloader(event) {
    const downloadButton = event.target;
    const section = downloadButton.closest('.select-card');
    const imageUrl = getImageUrl(section);

    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'picsumn_cee.jpg'; // Set the desired file name
            link.target = '_blank'; // Open the link in a new tab
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}




// function downloader(event) {
//     const downloadButton = event.target;
//     const section = downloadButton.closest('.select-card');
//     const imageUrl = getImageUrl(section);
    
//     const link = document.createElement('a');
//     link.href = imageUrl;
//     link.download = 'image.jpg'; // Set the desired file name
//     link.target = '_blank'; // Open the link in a new tab
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }
