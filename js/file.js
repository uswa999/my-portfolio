






let manuIcon = document.querySelector('#manu-icon');
let navbar = document.querySelector('.navbar');

manuIcon.onclick = () =>{
    manuIcon.classList.toggle('bx-x');
    manuIcon.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks  = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight ;
        let id = sec. getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach (links =>{
                links.classList.remove('active');
                document.querySelectorfor('header nav a[href*='+ id +']') .classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >100);

    manuIcon.classList.remove('bx-x');
    manuIcon.classList.remove('active');
};