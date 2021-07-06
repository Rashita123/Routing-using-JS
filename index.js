const Root = document.querySelector(".root");
const blogsButton = document.querySelector("#blogs-button");
const homeButton = document.querySelector("#home-button");
const aboutUsButton = document.querySelector("#about-us-button");
const loginButton = document.querySelector("#login-button");
    

let authenticated = false;


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
    if(authenticated){
        return `<h3>You are successfully Logged In!</h3>`
    }else
    return `<h3>Login Kro pehle!</h3>
    <p>Click on Login button to access this content</p>`
}

const Page404 = () => {
    return `<h1>Oops! Try Other Links!.</h1>`
}




const Link = (destinationPath, redirect) => {
    const currentPath = window.location.pathname;
    
    if(currentPath===destinationPath)return;
    console.log({currentPath});
    console.log({destinationPath});
    const state = {id: 100};
    if(redirect){
        window.history.replaceState(state, currentPath, destinationPath)
    }else
    window.history.pushState(state, currentPath, destinationPath)
}

const PrivateRoute = (authenticated, toPath, redirectPath) => {
    if(authenticated){
            Root.innerHTML = toPath();
    }
    else
        {
            
            Link(redirectPath, true);
            checkRender();
        }
}

const names = ['User1', 'User2', "User3"];
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
    Link('/', false);
    checkRender();
})


aboutUsButton.addEventListener("click", () => {
    Link('/about-us', false);
    checkRender();
})


blogsButton.addEventListener("click", () => {
    Link('/blogs', false);
    checkRender();
})


loginButton.addEventListener("click", () => {
    authenticated = !authenticated;
    if(loginButton.innerHTML === "Login"){
        loginButton.innerHTML = "Logout";
    } else {
        loginButton.innerHTML = "Login";
    }
    
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
