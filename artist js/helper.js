export {toggle};

const toggle = (ev)=> {
    console.log(ev.target);
    ev.target.classList.toggle('followingToggle')
}