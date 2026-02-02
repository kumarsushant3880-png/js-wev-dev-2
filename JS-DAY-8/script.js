const profile = document.getElementById("profile")
console.log(profile);
profile.style.backgroundColor="#f5f5f5"
profile.style.padding=["15px"]
profile.style.textAlign= "center"

const important = document.getElementsByClassName("important")
console.log(important)
for(let i=0;i<important.length;i++){
    important[i].style.color="red";
    important[i].style.fontSize=["60px"];
}
