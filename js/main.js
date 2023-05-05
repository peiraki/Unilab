// Slider. ....................
let sliderImages = [
    'img/slider/slidercover.png',
    'img/slider/slider2.png',
    'img/slider/slider3.png'
]
let sliderH1text = [
    'Discover Greece',
    'Discover Easter Iland',
    'Discover Hawaii'
]

let sCount = 0
function sliderMinus(){
    sCount--
    if(sCount < 0){
        sCount = sliderImages.length - 1
        sliderBackgroundImage.src = sliderImages[sCount]
        sliderH1.innerText = sliderH1text[sCount]
    }else {
        sliderBackgroundImage.src = sliderImages[sCount]
        sliderH1.innerText = sliderH1text[sCount]
    } 
}
function sliderPlus(){
    sCount++
    if(sCount > 2){
        sCount = 0
        sliderBackgroundImage.src = sliderImages[sCount]
        sliderH1.innerText = sliderH1text[sCount]
    }else {
        sliderBackgroundImage.src = sliderImages[sCount]
        sliderH1.innerText = sliderH1text[sCount]
    } 
}
// posts about services 
let posts = [
    {id: 1, imageLink: "img/services/img1.png", heading: 'Flight Booking', postDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem." },
    {id: 2, imageLink: "img/services/img2.png", heading: 'HOTEL & RESORT BOOKING', postDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem." },
    {id: 3, imageLink: "img/services/img3.png", heading: 'FAMILY TRIP PLANNER', postDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem." },
    {id: 4, imageLink: "img/services/img4.png", heading: 'CRUISE TOUR', postDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem." },
    {id: 5, imageLink: "img/services/img5.png", heading: 'FIRE CAMP', postDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem." },
    {id: 6, imageLink: "img/services/img6.png", heading: 'CORPORATE HOLIDAYS', postDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem." }
]

let postsParentBox = document.querySelector('.postscont .right')
posts.forEach(element => {
        postsParentBox.innerHTML += 
        `<div  class="box">
            <div class="imgbox">
                <img  src="${element.imageLink}" alt="${element.heading}">
                    </div>
                    <h3>${element.heading}</h3>
                    <p class="gray">${element.postDescription}</p>
        </div>`
})

// boxes zoom-in-out func
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener('click', function() {
    if (this.classList.contains('zoomed')) {
      this.classList.remove('zoomed');
    } else {
      boxes.forEach(box => {
        box.classList.remove('zoomed');
      });
      this.classList.add('zoomed');
    }
  });    
});


// video Play && Pause Function 
let videoPlay = true
tourImage.addEventListener('click', ()=> {
    tourVideo.classList.toggle('dispnone')
    videoTourImage.classList.toggle('dispnone')
    playBtn.classList.toggle('dispnone')
    videoPlay = !videoPlay
    if(!videoPlay){
            tourVideo.play()
    }else {
        tourVideo.pause()
    }
    console.log("Say My Name")
})

// stats .. . . . . 
const statisticData = [
    {
        img : 'img/stat/star.png',
        quantity : '120,859',
        name: 'HAPPY TRAVELLERS'
    },
    {
        img : 'img/stat/travel.png',
        quantity : '2594',
        name: 'SATISFIED TOURS'
    },
    {
        img : 'img/stat/earth.png',
        quantity : '854',
        name: 'DESTINATION'
    },
    {
        img : 'img/stat/building.png',
        quantity : '978',
        name: 'HOTELS $ RESORTS'
    }
]

let statdata = document.querySelector('.statdata')
statisticData.forEach(item => {
    statdata.innerHTML += 
    `<div>
        <img src="${item.img}">
        <strong>${item.quantity}</strong>
        <p>${item.name}</p>
    </div>`
    
})

// e-mail check form
function validateForm() {
    let inputValue = document.forms["form"]["mail"].value;
    if (inputValue == "") {
        mail.classList.add('inputfalse')
        setInterval(() => {
            mail.classList.remove('inputfalse')
        }, 1400);
        return false;
    }
}


