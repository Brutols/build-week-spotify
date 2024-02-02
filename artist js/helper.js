export {toggle, visual,numRandom};

const toggle = (ev)=> {
    console.log(ev.target);
    ev.target.classList.toggle('followingToggle')
};

const visual = () => {
    const div_scroll = document.querySelector('.div_scroll')
    div_scroll.classList.toggle('scroll')
}

const numRandom = ()=> {
    return Math.floor(Math.random() * 20) + 1;
}
