// console.log("cvv");
let theme = localStorage.getItem('theme');
if(theme == null){
    setTheme('light');
}else{
    setTheme(theme);
}
let themeDot = document.getElementsByClassName('theme-dot');
//For Short Term use let instead var.
for(let i=0; themeDot.length>i; i++){
    themeDot[i].addEventListener('click',function(){
        var mode = this.dataset.mode;
        // console.log('option clicked',mode);
        setTheme(mode);
    })
}
//nothing to be done here
function setTheme(mode){
    if(mode =='light'){
        document.getElementById('theme-style').href = 'style.css';
    }
    if(mode =='blue'){
        document.getElementById('theme-style').href = 'blue-theme.css';
    }
    if(mode =='green'){
        document.getElementById('theme-style').href = 'green.css';
    }
    if(mode =='purple'){
        document.getElementById('theme-style').href = 'purple.css';
    }
    localStorage.setItem('theme',mode);
}
