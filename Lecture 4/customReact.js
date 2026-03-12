function customRender(reactElement, mainContainer){
    /*
    HARD CODED WAY
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)
    mainContainer.appendChild(domElement)*/

    // automated way
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}


// incomming element
reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "blank"
    },
    children : "Click me to visit google"
}

// access the main container
const mainContainer = document.querySelector("#root")

// render the element. inject element to main container
customRender(reactElement, mainContainer)