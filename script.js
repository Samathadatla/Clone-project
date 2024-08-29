const x=document.getElementById("menu");
const darkb=document.getElementById("dark-btn");
function SettingsMenuToggle(){
  x.classList.toggle("settings-menu-height");
}
darkb.onclick=function(){
  darkb.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  
  if(localStorage.getItem("theme")=='light'){
    localStorage.setItem("theme","dark");
  }
  else{
    localStorage.setItem("theme","light");
  }
}




if(localStorage.getItem("theme")=='light'){
  darkb.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=='dark'){
  darkb.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme","light");
}
