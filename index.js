console.log('hlo ji');

var ques1 = document.getElementById('ques1');
var desc1 = document.getElementById("desc1");

var ques2 = document.getElementById('ques2');
var desc2 = document.getElementById("desc2");

var ques3 = document.getElementById('ques3');
var desc3 = document.getElementById("desc3");

var ques4 = document.getElementById('ques4');
var desc4 = document.getElementById("desc4");

var ques5 = document.getElementById('ques5');
var desc5 = document.getElementById("desc5");

desc1.style.display = "none";
desc2.style.display = "none";
desc3.style.display = "none";
desc4.style.display = "none";
desc5.style.display = "none";


var query = document.getElementById('query');
function toggle(){
    if(desc1.style.display === 'block'){
        desc1.style.display = "none";
          desc1.style.transition = "all 2s ease-in-out";
          query.style.height = "100vh";
    }
    else{
        desc1.style.display = "block";   

    }
}
function toggle2(){
    if(desc2.style.display === 'block'){
        desc2.style.display = "none";
          desc2.style.transition = "all 2s ease-in-out";
          query.style.height = "100vh";
    }
    else{
        desc2.style.display = "block";   

    }
}
function toggle3(){
    if(desc3.style.display === 'block'){
        desc3.style.display = "none";
          desc3.style.transition = "all 2s ease-in-out";
          query.style.height = "100vh";
    }
    else{
        desc3.style.display = "block";   

    }
}
function toggle4(){
    if(desc4.style.display === 'block'){
        desc4.style.display = "none";
          desc4.style.transition = "all 2s ease-in-out";
          query.style.height = "100vh";
    }
    else{
        desc4.style.display = "block";   
    }
}
function toggle5(){
    if(desc5.style.display === 'block'){
        desc5.style.display = "none";
          desc5.style.transition = "all 2s ease-in-out";
          query.style.height = "100vh";
    }
    else{
        desc5.style.display = "block";   
    }
}

var lang_btn = document.getElementsByClassName("lang");
var lang_opt = document.getElementsByClassName("lang-opt")
       lang_btn.onmouseover(lang_opt.style.display = "block");
