'use strict';

// Make navbar transparent when it is on the top (scroll)

const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarheight: ${navbarheight}`);

    if(window.scrollY > navbarheight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// navbar menu 눌렀을 때 자동 스크롤로 내려가기

const navbarmenu = document.querySelector('.navbar_menu');
navbarmenu.addEventListener('click', () => {
    console.log(event.target.dataset.link);

    const target = event.target;
    const link = target.dataset.link;

    if(link == null) {
        return;
    }

    scrollIntoView(link);
});


// contact 버튼 눌렀을 때 contact으로 내려가기

const contactbt = document.querySelector('.home_contact');
contactbt.addEventListener('click', () => {
    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const target = document.querySelector(selector);
    target.scrollIntoView({behavior: 'smooth'});
}

const home = document.querySelector('.home_container');
    const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1- (window.scrollY / homeheight);
});


// 스크롤 될 때 arrow-up 버튼 보이기
const arrowup = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeheight/2) {
        arrowup.classList.add('visible');
    } else {
        arrowup.classList.remove('visible');
    }
});

// 스크롤 될 때 맨 위로 올라가기
arrowup.addEventListener('click', () => {
    scrollIntoView('#home');
});

// 프로젝트 필터 기능
const workbtncontainter = document.querySelector('.work_categories');
const projectcontainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workbtncontainter.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    projectcontainer.classList.add('anime_out');
    setTimeout(() => {
        projects.forEach((project) => {
        console.log(project.dataset.type);
        if(filter === '*' || filter === project.dataset.type){
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });
        projectcontainer.classList.remove('anime_out');    
    }, 300);
});
