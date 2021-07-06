const Root = document.querySelector(".root");
const blogsButton = document.querySelector("#blogs-button");
const homeButton = document.querySelector("#home-button");
const aboutUsButton = document.querySelector("#about-us-button");


const state = {id:100};


//Pages
const Home = (name) => {
    return `<div class="home-page"><h3>Hi! ${name}. This is Home Page</h3></div>`
}

const AboutUs = () => {
    return `<h1>This is About Us Page</h1>`
}

const Blogs = () => {
    return `<h1>This is Blogs Page</h1>`
}


//Component
const Link = (destinationPath) => {
    const currentPath = window.location.pathname;
    const state = {id: 100};
    window.history.pushState(state, currentPath, destinationPath)
}

const names = ['Shubham', 'Rabia', "Rashita"];
const checkRender = () => {
    const currentPath = window.location.pathname;

    if(currentPath === '/index.html'){
        Root.innerHTML = names.map(name => Home(name)).join(" ");
    }else if(currentPath === '/blogs'){
        Root.innerHTML = Blogs();
    }else if(currentPath === '/about-us'){
        Root.innerHTML = AboutUs();
    }
}


homeButton.addEventListener("click", () => {
    Link('/index.html');
    checkRender();
})


aboutUsButton.addEventListener("click", () => {
    Link('/about-us');
    checkRender();
})


blogsButton.addEventListener("click", () => {
    Link('/blogs');
    checkRender();
})
window.addEventListener('load', () => {
    checkRender();
})

window.addEventListener('popstate', () => {
    checkRender();
})














// const blogsButton = document.querySelector("#blogs-button");
// const state = {id:100};

// const checkRender = () => {
//     const currentPath = window.location.pathname;
//     if(currentPath === "/blogs"){
//         Root.innerHTML = `<h1>This is the blogs Page!</h1>
//         <p>If you wanna see all the blogs written by me, Hang ON!</p>`;
//     }
// }

// blogsButton.addEventListener("click", () => {
//     const currentPath = window.location.pathname;
//     window.history.replaceState(state, currentPath, "/blogs");
//     checkRender();
// })
