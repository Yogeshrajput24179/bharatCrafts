gsap.to("#nav",{
    backgroundColor:"#000",
    height:"70px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        margkers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
 backgroundColor: "#000",
 scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    scrub:2,
 }
})

function row5(){
    document.getElementById("viewMore").style.display="none";
    document.getElementsByClassName("ROW5").style.display="block";
}