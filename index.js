




function OnLoad()
{
    console.log("Starting Document init");
    var WelcomeText = document.getElementById("WelcomeText");
    var BasicInfo = document.getElementById("BasicInfo");
    var BufferTitle = document.getElementById("bufferOverTitle");
    BufferTitle.innerHTML = WelcomeText.innerHTML;
    console.log(WelcomeText.style.fontsize);
    WelcomeText.style.fontsize = "6rem";
    document.getElementById("bufferOverTitle").style.fontSize = "6rem";
    BufferTitle.style.opacity = "0";
    var WindowWidth = window.innerWidth;
    var WindowHeight = window.innerHeight;
    WelcomeText.style.top = "10px";
    WelcomeText.style.left = "25%";
    
    
    
}

function OnResize()
{
    console.log("resizing window");
    OnLoad();   
}
document.addEventListener("resize", OnResize);
OnLoad();
