const phantu_h1 = document.querySelector('h1')

phantu_h1.innerHTML = '<span id="greeting"></span>'

let greeting = document.querySelector("#greeting")
//Dinh nghia mau
function generateColorForH1 = () => {
    let color;
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    color = `rgb(${r},${g},${b})`
    greeting.style.color = color
}
setInterval(generateColorforH1,1000)