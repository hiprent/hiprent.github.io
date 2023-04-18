
const burgerLines = document.querySelector('.lines');
const burgerCross = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const phone = document.querySelector('.right-tell');
const pageUp = document.querySelector('.page-up');

burgerLines.addEventListener('click', () => {
    burgerLines.classList.toggle('on');
    burgerCross.classList.toggle('on');
    menu.classList.toggle('on');
})

burgerCross.addEventListener('click', () => {
    burgerLines.classList.toggle('on');
    burgerCross.classList.toggle('on');
    menu.classList.toggle('on');

})
// let height = window.scrollY;
const headerOpacity = () => {
    let height = window.scrollY;

    if(height > 500){
        header.style.opacity = '1';
    }
    else {
        header.style.opacity = '0.7';
    }

    if(height > 1000){
        phone.classList.remove('on');
        pageUp.classList.remove('on');
    }else{
        phone.classList.add('on');
        pageUp.classList.add('on');
    }
}
const wysokosc = window.pageYOffset;
const scrollToStart = () => {
    window.scrollTo({top: (0,0), behavior:"smooth"})
}

pageUp.addEventListener('click', scrollToStart);
window.addEventListener('scroll', headerOpacity);


const namee = document.querySelector('.name');
const mail = document.querySelector('.mail');
const ask = document.querySelector('.ask');
const submit = document.querySelector('.submit');


const sendQuestion = () =>{
    if(namee.value=="" || mail.value=="" || ask.value==""){
        alert("Proszę uzupełnić wszystkie pola");
    }else{
        mail.value='';
        namee.value='';
        ask.value='';
        alert("Pytanie zostało wysłane, dziękujemy!");
    }
  
};

const allAsk = `${mail.value} | ${namee.value} | ${ask.value}`;
        console.log(allAsk);


   

submit.addEventListener('click', sendQuestion);



const menuOptions = document.querySelectorAll('.header-options');

menuOptions.forEach(menu => menu.addEventListener('click', (event) => {
    const key = event.target.dataset.key;
    console.log(key);
    menu.classList.add('on');
    const section = 
    document.querySelector(`.${key}`).getBoundingClientRect().top + 
    window.pageYOffset - 200;
    
    window.scrollTo({top: section, behavior: 'smooth'})

}))







const carCategory = document.querySelectorAll('.categories button')
const carButtons = [...carCategory];

const carTable = [];
for(i=0; i<4; i++){
    carTable[i] = carButtons[i].classList.value;
}
const all = document.getElementsByClassName('samochod');
const sport = document.getElementsByClassName('samochod sport');
const family = document.getElementsByClassName('samochod family');
const old = document.getElementsByClassName('samochod old');

const selectedCars = (event) => {
    const category = event.target.classList;
    if(category == 'all'){
        console.log(all);
        for(i=0; i<all.length; i++){
            all[i].classList.add('on');
        }
        for(i=0; i<carCategory.length; i++){
            carCategory[i].classList.remove('on');
        }
        carCategory[0].classList.add('on');
        
    }

    else if(category == 'sport'){
        console.log(sport);
        for(i=0; i<all.length; i++){
            all[i].classList.remove('on');
        }
        for(i=0; i<sport.length; i++){
            sport[i].classList.add('on');
        }
        for(i=0; i<carCategory.length; i++){
            carCategory[i].classList.remove('on');
        }
        carCategory[1].classList.add('on');
    }

    else if(category == 'family'){
        console.log(family);
        for(i=0; i<all.length; i++){
            all[i].classList.remove('on');
        }
        for(i=0; i<family.length; i++){
            family[i].classList.add('on');
        }
        for(i=0; i<carCategory.length; i++){
            carCategory[i].classList.remove('on');
        }
        carCategory[2].classList.add('on');
    }

    else if(category == 'old'){
        console.log(old);
        for(i=0; i<all.length; i++){
            all[i].classList.remove('on');
        }
        for(i=0; i<old.length; i++){
            old[i].classList.add('on');
        }
        for(i=0; i<carCategory.length; i++){
            carCategory[i].classList.remove('on');
        }
        carCategory[3].classList.add('on');
    }
}


for(i=0; i<carCategory.length; i++){
    carCategory[i].addEventListener('click', selectedCars);
}



const carName = document.getElementsByClassName('car-name');
const search = document.querySelector('.search input');



function searchFunction(){
    filter = search.value.toUpperCase();
    console.log(filter);
    for(i=0; i < carName.length; i++){
        txtValue = carName[i].textContent;
        console.log(txtValue[i]);
        
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            all[i].classList.add('on');
        }else{
            all[i].classList.remove('on');
        }
    }
}


search.addEventListener('click', () => {
    const searchBtnScroll = document.querySelector(`.samochody`).getBoundingClientRect().top + 
    window.pageYOffset - 300;
    window.scrollTo({top: searchBtnScroll, behavior: 'smooth'});
    for(i=0; i<all.length; i++){
        all[i].classList.add('on');
    }
    for(i=0; i<carCategory.length; i++){
        carCategory[i].classList.remove('on');
    }
    carCategory[0].classList.add('on');

})
search.addEventListener('input', searchFunction);

const infoButtons = document.getElementsByClassName('reservation');
const infoButtons2 = document.querySelectorAll('.oferta button');
const info = document.querySelector('.callme');
const closeBtn = document.querySelector('.call span');

for(i=0; i<infoButtons.length; i++){
    infoButtons[i].addEventListener('click', showInfo);
}

for(i=0; i<infoButtons2.length; i++){
    infoButtons2[i].addEventListener('click', showInfo);
}

function showInfo() {
    info.classList.add('active');
}

closeBtn.addEventListener('click', () => {
    info.classList.remove('active');
})