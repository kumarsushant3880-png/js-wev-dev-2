//ques1
// function handleClick() {
//     const button = document.getElementById("btn");
//     button.textContent = "Clicked"
// }


//ques2
// function handleClick() {
//     document.querySelector("h1").style.color="red"
//     const button = document.getElementById("btn");
//     button.textContent = "color changed"
// }


//ques3
function handleClick() {
    const subHead = document.createElement("h2").textContent="neww sub heading"

    const image = document.createElement("img")

    image.setAttribute("src","https://www.bing.com/th/id/OIP.16m-K_YEObgwF8XTsc1c9AHaFb?w=193&h=141&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2")
     image.setAttribute("alt","hello world");

     document.getElementById("content").append(subHead)
     document.getElementById("content").append(image)
}
