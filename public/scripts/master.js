const app = {};

app.removeClass = (arry,classname) => {
   for(menu of arry){
      menu.classList.remove(classname);
   }
}

app.menuButtons = () => {
   if(document.querySelectorAll('nav>ul li')){
      const menu = document.querySelectorAll('nav>ul li');
      for(let i = 0; i < menu.length; i++){
         menu[i].addEventListener('click',(e) => {
            if(menu[i].classList.value.indexOf('logo') > -1){
               app.removeClass(menu,'selected-menu');
               return
            }
            app.removeClass(menu,'selected-menu');
            menu[i].classList.add('selected-menu');
         });
      }
   }
   if(document.querySelector('nav>div>img')){
      const logo = document.querySelector('nav>div>img');
      logo.addEventListener('click',(e) => {
         if(document.querySelectorAll('nav>ul li')){
            const menu = document.querySelectorAll('nav>ul li');
            app.removeClass(menu,'selected-menu');
         }
      });
   }
}

app.statements = ["playing with my son","spending time with my family","helping people","backend coding","learning new skills","reading through logs","locating answers to problems","creating new web apps","barbequing on the charcoal grill","playing challenging PS4 games","researching complex issues","being challenged","hands-on training","resolving an unknown internal issue"]

app.completed = [];

app.checkForNew = () => {
   setTimeout(() => {
      app.findStatement();
   },2000);
}

app.checkForNewNow = () => {
   app.findStatement();
}

app.arrowShow = () => {
   const arrow = document.querySelector('#arrow');
   arrow.classList.remove('bye')
   setTimeout(() => {
      arrow.classList.add('bye');
   }, 500);
}

app.old = false;



app.findStatement = () => {
   if(document.querySelector('.words')){
      const max = app.statements.length;
      const placement = document.querySelector('.words');
      const random = Math.floor(Math.random() * Math.floor(max));
      if(app.completed.indexOf(random) < 0){
         app.completed.push(random);
         app.arrowShow();
         placement.innerText = app.statements[random]
         app.checkForNew();
         return;
      }
      if(app.completed.indexOf(random) > -1){
         app.checkForNewNow()
      }
      if(app.completed.length == app.statements.length){
         app.completed = [];
      }
   }
}


app.init = () => {
   app.menuButtons();
   app.findStatement();
}

window.onload = app.init;
