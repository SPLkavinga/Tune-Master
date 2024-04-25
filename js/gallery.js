// DRUM LESSONS thumbnail hovering effect
document.getElementById('DrumLesson').addEventListener('mouseover', function(){
    document.getElementById('MSDRUM').style.display = "block";
})

document.getElementById('DrumLesson').addEventListener('mouseleave', function(){
    document.getElementById('MSDRUM').style.display = "none";
})

// GUITAR LESSONS  thumbnail hovering effect
document.getElementById('GuitarLesson').addEventListener('mouseover', function(){
    document.getElementById('MSGUITAR').style.display = "block";
})

document.getElementById('GuitarLesson').addEventListener('mouseleave', function(){
    document.getElementById('MSGUITAR').style.display = "none";
})

// SINGING LESSONS  thumbnail hovering effect
document.getElementById('SingingLessons').addEventListener('mouseover', function(){
    document.getElementById('MSSINGING').style.display = "block";
})

document.getElementById('SingingLessons').addEventListener('mouseleave', function(){
    document.getElementById('MSSINGING').style.display = "none";
})

// KEYBOARD LESSONS  thumbnail hovering effect
document.getElementById('KeyboardLessons').addEventListener('mouseover', function(){
    document.getElementById('MSKEYBOARD').style.display = "block";
})

document.getElementById('KeyboardLessons').addEventListener('mouseleave', function(){
    document.getElementById('MSKEYBOARD').style.display = "none";
})

// VOCALS LESSONS  thumbnail hovering effect
document.getElementById('VocalLessons').addEventListener('mouseover', function(){
    document.getElementById('MSVOCALS').style.display = "block";
})

document.getElementById('VocalLessons').addEventListener('mouseleave', function(){
    document.getElementById('MSVOCALS').style.display = "none";
})

// BASS-GUITAR LESSONS thumbnail hovering effect
document.getElementById('BassGuitarLessons').addEventListener('mouseover', function(){
    document.getElementById('MSBASSGUITAR').style.display = "block";
})

document.getElementById('BassGuitarLessons').addEventListener('mouseleave', function(){
    document.getElementById('MSBASSGUITAR').style.display = "none";
})

// SONG-WRITING LESSONS  thumbnail hovering effect
document.getElementById('SongWriting').addEventListener('mouseover', function(){
    document.getElementById('MSSONGWRITING').style.display = "block";
})

document.getElementById('SongWriting').addEventListener('mouseleave', function(){
    document.getElementById('MSSONGWRITING').style.display = "none";
})

// EVENTS-TM  thumbnail hovering effect
document.getElementById('EventsTM').addEventListener('mouseover', function(){
    document.getElementById('MSEVENTS').style.display = "block";
})

document.getElementById('EventsTM').addEventListener('mouseleave', function(){
    document.getElementById('MSEVENTS').style.display = "none";
})

// WORKSHOPS thumbnail hovering effect
document.getElementById('E-workshop').addEventListener('mouseover', function(){
    document.getElementById('MSWORKSHOPS').style.display = "block";
})

document.getElementById('E-workshop').addEventListener('mouseleave', function(){
    document.getElementById('MSWORKSHOPS').style.display = "none";
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// change background of nav bar

function changeNavColor(color) {
    var nav = document.querySelector('nav');
    nav.style.backgroundColor = color;
  }

  function changeNavColorA(color) {
    var navA = document.querySelector('nav div a');
    navA.style.backgroundColor = color;
  }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// background color dark mode
function changeBackgroundColorIntoDarkMode() {
    changeNavColor('#4c4c4c');
    changeNavColorA('#BCFD4C');


    
    document.body.style.backgroundColor = "black";

    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.backgroundColor = "#4c4c4c";
    }
    for(var i = 0; i < document.getElementsByClassName('drp-content').length; i++) {
        document.getElementsByClassName('drp-content')[i].style.backgroundColor = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('MS-Name').length; i++) {
        document.getElementsByClassName('MS-Name')[i].style.color = "white";
        document.getElementsByClassName('MS')[i].style.borderColor = "#BCFD4C";

    }
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('MS-HEADER').length; i++) {
        document.getElementsByClassName('MS-HEADER')[i].style.color = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('TUNEMASTER-MS').length; i++) {
        document.getElementsByClassName('TUNEMASTER-MS')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('MS').length; i++) {
        document.getElementsByClassName('MS')[i].style.backgroundColor.backdropfilter==("black",blur(5));
        document.getElementsByClassName('MS')[i].style.borderColor = "#BCFD4C"; 
    }
}

// background color light mode
function changeBackgroundColorIntoLightMode() {
    changeNavColor('#9a9590');
    changeNavColorA('#bebab7');
    
    document.body.style.backgroundColor = "#ffffff";
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.backgroundColor = "#bebab7";
    }
    for(var i = 0; i < document.getElementsByClassName('MS-Name').length; i++) {
        document.getElementsByClassName('MS-Name')[i].style.color = "black";
        document.getElementsByClassName('MS')[i].style.borderColor = "#c3ff73";
    }
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.color = "black";
    }
    for(var i = 0; i < document.getElementsByClassName('MS-HEADER').length; i++) { 
        document.getElementsByClassName('MS-HEADER')[i].style.color = "#c3ff73";
    }
    for(var i = 0; i < document.getElementsByClassName('TUNEMASTER-MS').length; i++) {
        document.getElementsByClassName('TUNEMASTER-MS')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('MS').length; i++) {
        document.getElementsByClassName('MS')[i].style.backgroundColor.backdropfilter==("black",blur(5)); 
    }
}

// background color spring mode
function changeBackgroundColorIntoBlueLightOffMode() {
    changeNavColor('#3e6608');
    changeNavColorA('#BCFD4C');


    document.body.style.backgroundColor = "#2e4c06"; 
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.backgroundColor = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('MS-Name').length; i++) {
        document.getElementsByClassName('MS-Name')[i].style.color = "#BCFD4C";
        document.getElementsByClassName('MS')[i].style.borderColor = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.color = "black";
    }
    for(var i = 0; i < document.getElementsByClassName('MS-HEADER').length; i++) { 
        document.getElementsByClassName('MS-HEADER')[i].style.color = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('TUNEMASTER-MS').length; i++) {
        document.getElementsByClassName('TUNEMASTER-MS')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('MS').length; i++) {
        document.getElementsByClassName('MS')[i].style.backgroundColor.backdropfilter==("black",blur(5));
    }
}
/////////////////////////font size jss////////////////////////////////////////////////////////////////////////////////////



// increase Font size
function increaseFontSize() {
    var text = document.getElementById("TextSize");
    var currentSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    var newSize = parseInt(currentSize) + 1;
    TextSize.style.fontSize = newSize + 'px';
}

// decrease Font size
function decreaseFontSize() {
    var myText = document.getElementById("TextSize");
    var currentSize = window.getComputedStyle(myText, null).getPropertyValue("font-size");
    var newSize = parseInt(currentSize) - 1;
    TextSize.style.fontSize = newSize + "px";
  }

  // back to default Font size
  function currentFontSize() {
    var myText = document.getElementById("TextSize");
    var currentSize = 16;
    // var newSize = parseInt(currentSize);
    TextSize.style.fontSize = currentSize + "px";
  }

/////////////////////////////////modal images JSS////////////////////////////////////////////////////////////////////////////


function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
