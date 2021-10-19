let container = document.getElementsByTagName('app-root')[0]

let url = window.location.pathname
    // console.log(url);
    // if (url != '/index.html') {
    //     window.open('/index.html')
    // }

function changePage(url) {

    let stateObj = {};

    switch (url) {
        case 'home':
            container.innerHTML = "<span>home</span>"
            break;
        case 'login':
            container.innerHTML = "<span>login</span>"
            break;
    
        default:
            break;
    }

    window.history.replaceState(stateObj,"Page3", url);
}