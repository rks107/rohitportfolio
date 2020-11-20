var navMenuAnchorTag = document.querySelectorAll('.scroll-function a');
//var interval;
for(var i = 0 ; i < navMenuAnchorTag.length ; i++) 
{
    navMenuAnchorTag[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        
        var interval = setInterval(function(){
            var targetSectionCoordinate = targetSection.getBoundingClientRect();
            if(targetSectionCoordinate.top <= 10) {
            clearInterval(interval);
           return;
           }
        window.scrollBy(0, 50);
        },10);

        //interval = setInterval(scrollVertically, 15, targetSection);
        // interval = setInterval(function(){
        //     scrollVertically(targetSection);
        // } , 15);
    });
}

// function scrollVertically(targetSection)
// {
//     var targetSectionCoordinate = targetSection.getBoundingClientRect();
//     if(targetSectionCoordinate.top <= 10) {
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0, 50);
    
// }

//skill progress

var progressBars = document.querySelectorAll(".skill-progress > div");
window.addEventListener('scroll', checkScroll);

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}

function fillBar(bar)
{
    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);
}

function checkScroll()
{
    for(let bar of progressBars )
    {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }else if(barCoordinates.top > window.innerHeight) {
            bar.setAttribute("visited", false);
            initialiseBar(bar);
        }
    }
}


// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skills-container');
// window.addEventListener('scroll', checkScroll);
// var animationDone = false;

// function initialiseBars(){
//     for(let bar of progressBars)
//     {
//         bar.style.width = 0 + '%';
//     }
// }

// initialiseBars();

// function fillBars() {
//     for(let bar of progressBars)
//     {
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
//         let intervalId = setInterval(function(){
//             if(currentWidth > targetWidth)
//             {
//                 clearInterval(intervalId);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';
//         },5);
//     }

// }

// function checkScroll()
// {
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top <= window.innerHeight)
//     {
//         animationDone = true;
//         // console.log("skills container visible");
//         fillBars();
//     }else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }

// }


//  Send a mail
$(document).ready(function () {
  $("#sub-btn").click(function () {
    $("#contact-form").attr(
      "action",
      "mailto:rohit1071998@gmail.com?subject=" +
        $("#input-sub").val() +
        "&body=" +
        $("#input-message").val()
    );
    $("#contact-form").submit();
  });
  console.log("hi", $("#input-message").val());
});
