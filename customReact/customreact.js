 // this code tells how  to create react element or what react do behind the seens.To understand it better see video (chai aur code React ) part 4 . 
//( THIS CODE IS ALL ABOUT WHAT REACT DO BEHIND THE SEENS TO EVALUATE ELEMENT ).

function customRender(reactElement,container){

     const domElement= document.createElement(reactElement.type)

     domElement.innerHTML=reactElement.children
     for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])
     }
     
    container.appendChild(domElement)

}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}


const mainContainer = document.querySelector(".root")

customRender(reactElement,mainContainer)