var navMenuAnchorTag = document.querySelectorAll('.scroll-function a');
var interval;
for(var i = 0 ; i < navMenuAnchorTag.length ; i++) 
{
    navMenuAnchorTag[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        interval = setInterval(scrollVertically, 15, targetSection);
        // interval = setInterval(function(){
        //     scrollVertically(targetSection);
        // } , 15);
    });
}

function scrollVertically(targetSection)
{
    var targetSectionCoordinate = targetSection.getBoundingClientRect();
    if(targetSectionCoordinate.top <= 10) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
    
}