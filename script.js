// Create Windows

const windowsContainer =
document.getElementById("windows");

for(let i=0;i<120;i++){

const win =
document.createElement("div");

win.className = "window";

windowsContainer.appendChild(win);

}

// Window Lighting Sequence

setTimeout(()=>{

document
.querySelectorAll(".window")
.forEach((win,index)=>{

setTimeout(()=>{

win.style.background =
"#f5b041";

win.style.boxShadow =
"0 0 8px #f5b041";

},index*20);

});

},4200);

// Gold Energy Line

setTimeout(()=>{

const energy =
document.getElementById("energy");

energy.style.opacity = "1";

energy.animate(

[
{
height:"0px"
},
{
height:"520px"
}
],

{
duration:1200,
fill:"forwards",
easing:"ease-out"
}

);

},5200);

// Logo Forge Animation

setTimeout(()=>{

const logo =
document.getElementById("logo");

logo.style.transition =
"all .9s cubic-bezier(.17,.89,.32,1.28)";

logo.style.opacity = "1";

logo.style.transform =
"translateX(-50%) scale(1)";

},6200);

// Gold Shine Sweep

setTimeout(()=>{

const shine =
document.createElement("div");

shine.style.position = "absolute";

shine.style.top = "90px";

shine.style.left = "50%";

shine.style.width = "180px";

shine.style.height = "180px";

shine.style.transform =
"translateX(-50%)";

shine.style.background =
"linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)";

shine.style.filter =
"blur(2px)";

shine.style.pointerEvents =
"none";

shine.style.animation =
"shineMove 1s forwards";

document.body.appendChild(shine);

const style =
document.createElement("style");

style.innerHTML = `
@keyframes shineMove{
0%{
margin-left:-150px;
opacity:0;
}
20%{
opacity:1;
}
100%{
margin-left:150px;
opacity:0;
}
}
`;

document.head.appendChild(style);

},6900);

// Brand Reveal

setTimeout(()=>{

const brand =
document.getElementById("brand");

brand.style.transition =
".8s ease";

brand.style.opacity = "1";

document
.querySelector(".divider")
.animate(

[
{
width:"0"
},
{
width:"260px"
}
],

{
duration:800,
fill:"forwards"
}

);

},7400);

// Gold Pulse Effect

setTimeout(()=>{

document
.querySelector(".brand h1")
.animate(

[
{
textShadow:
"0 0 10px rgba(245,176,65,.8)"
},
{
textShadow:
"0 0 35px rgba(245,176,65,1)"
},
{
textShadow:
"0 0 10px rgba(245,176,65,.8)"
}
],

{
duration:1500,
iterations:2
}

);

},8000);

// Smooth Fade Out

setTimeout(()=>{

document.body.style.transition =
"opacity 1s ease";

document.body.style.opacity = "0";

},9500);

// Redirect

setTimeout(()=>{

window.location.href =
"https://sites.google.com/view/skyrbenconstruction-1/home";

},10500);