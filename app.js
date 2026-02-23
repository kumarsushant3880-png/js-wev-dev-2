console.log("starting app.js");
function myWork(){
    setTimeout(()=>{
        console.log("myWork is being called");
    },8000);
}
myWork();
console.log("ending app.js");