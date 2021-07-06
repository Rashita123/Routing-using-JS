const Root = document.querySelector(".root");
const blogsButton = document.querySelector("#blogs-button");
const homeButton = document.querySelector("#home-button");
const aboutUsButton = document.querySelector("#about-us-button");
const LoginButton = document.querySelector("#login-button");


const authenticated = false;

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

const Login = () => {
    return `<h3>Login Kro pehle!</h3>`
}

const Page404 = () => {
    return `<h1>Oops! Try Other Links!.</h1>`
}




//Component
const Link = (destinationPath) => {
    const currentPath = window.location.pathname;
    const state = {id: 100};
    window.history.pushState(state, currentPath, destinationPath)
}

const PrivateRoute = (authenticated, toPath, redirectPath) => {
    if(authenticated){
            Root.innerHTML = toPath();
    }
    else
        {
            Link(redirectPath);
            checkRender();
        }
}

const names = ['Shubham', 'Rabia', "Rashita"];
const checkRender = () => {
    const currentPath = window.location.pathname;

    if(currentPath === '/'){
        Root.innerHTML = names.map(name => Home(name)).join(" ");
    }else if(currentPath === '/blogs'){
        PrivateRoute(authenticated, Blogs, '/login')
    }else if(currentPath === '/about-us'){
        Root.innerHTML = AboutUs();
    }else if(currentPath === '/login'){
        Root.innerHTML = Login();
    }
    else{
        Root.innerHTML = Page404();
    }
}


homeButton.addEventListener("click", () => {
    Link('/');
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


LoginButton.addEventListener("click", () => {
    Link('/login');
    checkRender();
}) 

window.addEventListener('load', () => {
    state= {id:100};
    const currentPath = window.location.pathname;
    if (currentPath === '/index.html'){
        window.history.replaceState(state, '/index.html', '/')
    }
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
