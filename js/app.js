const users = [
    {
        id:0,
        nome:'Peter Jones',
        job:'intern',
        img:'./imgs/02.jpg',
        message:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
    },
    {
        id:1,
        nome:'Bill Anderson',
        job:'the boss',
        img:'./imgs/03.jpg',
        message:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
    },
    {
        id:2,
        nome:'Susan Smith',
        job:'web developer',
        img:'./imgs/01.jpg',
        message:'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
    },
    {
        id:3,
        nome:'Anna Johnson',
        job:'web designer',
        img:'./imgs/04.jpg',
        message:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
    },
];

const userImg     = document.querySelector('.img');
const btnNext     = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');
const btnRandom   = document.querySelector('.random');
const author      = document.querySelector('#author');
const job         = document.querySelector('#job');
const info        = document.querySelector('#info');

let id = 0;

console.log(users[0]);

function changeInfos(valueId) {
    userImg.setAttribute('src', users[valueId].img);
    author.innerHTML = users[valueId].nome;
    job.innerHTML = users[valueId].job;
    info.innerHTML = users[valueId].message;
}

btnNext.addEventListener('click', (event) => {
    if (id < 3) {
        id++;
    } else {
        id = 0;
    }

    changeInfos(id);
});

btnPrevious.addEventListener('click', (event) => {
    if (id > 0) {
        id--
    } else {
        id = 3;
    }

    changeInfos(id); 
});

btnRandom.addEventListener('click', (event) => {
    id = parseInt(Math.random() * 3);
    changeInfos(id); 
});