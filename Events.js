const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    const ranColor = ["blue","red","green","yellow","black"];
    
    let num = Math.floor(Math.random() * ranColor.length);
    h1.style.color = ranColor[num];
    console.log("h1 was clicked!")
    }

function handleMouseEnter(){ 
    h1.innerText = "Mouse is here!!!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOOD~~!!");
}
// h1.addEventListener("click", handleTitleClick); 

 h1.onclick = handleTitleClick;

//h1.addEventListener("mouseenter", handleMouseEnter);

h1.onmouseenter = handleMouseEnter;

// h1.addEventListener("mouseleave", handleMouseLeave);

 h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);

window.addEventListener("online", handleWindowOnline);
