window.addEventListener("contextmenu", function(event){
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top =event.offsetY +"px";
    contextElement.style.left =event.offsetX +"px";
    contextElement.classList.add("active");
    console.log('Right mouse click')
});
window.addEventListener("click",function(){
    this.document.getElementById("context-menu").classList.remove("active");
    });
    
