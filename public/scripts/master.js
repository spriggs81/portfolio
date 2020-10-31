const app = {};
app.body = document.querySelector('body');
app.statements = ["playing with my son","spending time with my family","helping people","backend coding","learning new skills","reading through logs","locating answers to problems","creating new web apps","barbequing on the charcoal grill","playing challenging PS4 games","researching complex issues","being challenged","hands-on training","resolving an unknown internal issue"]

app.removeClass = (arry,classname) => {
   for(menu of arry){
      menu.classList.remove(classname);
   }
}

app.removeAll = (place) => {
   if(document.querySelector(place)){
      const partial = document.querySelector(place);
      partial.innerHTML = '';
   }
}

app.menuButtons = () => {
   if(document.querySelectorAll('nav>ul li')){
      const menu = document.querySelectorAll('nav>ul li');
      for(let i = 0; i < menu.length; i++){
         menu[i].addEventListener('click',(e) => {
            app.removeClass(menu,'selected-menu');
            menu[i].classList.add('selected-menu');
            const func = typeof(app[e.target.innerText]) == 'function' ? e.target.innerText : 'notSetup';
            app[func]();
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
         app.home();
      });
   }
};

app.builder = (main,type,id,cn,text,html,src,href) => {
   main = typeof(main) == 'string' && main.length > 0 ? main : false;
   type = typeof(type) == 'string' && type.length > 0 ? type : false;
   if(main && type) {
      id = typeof(id) == 'string' && id.length > 0 ? id : false;
      cn = typeof(cn) == 'string' && cn.length > 0 ? cn : false;
      text = typeof(text) == 'string' && text.length > 0 ? text : false;
      html = typeof(html) == 'string' && html.length > 0 ? html : false;
      src = typeof(src) == 'string' && src.length > 0 ? src : false;
      href = typeof(href) == 'string' && href.length > 0 ? href : false;
      if(document.querySelector(main)){
         const pagePart = document.querySelector(main);
         const part = document.createElement(type);
         if(id){
            part.id = id;
         }
         if(cn){
            part.classList.add(cn);
         }
         if(text){
            part.innerText = text;
         }
         if(html){
            part.innerHTML = html;
         }
         if(src){
            part.src = src;
         }
         if(href){
            part.href = href;
         }
         pagePart.appendChild(part);
      }
   } else {
      console.log("There was an error");
   }
};

app.home = () => {
   clearInterval(app.interval);
   const header = [{main:'header',type:'div',cn:'show-time'},{main:'header>div',type:'h1',text:'Welcome to my Portfolio'},{main:'header>div',type:'h2',text:'My name is John and '},{main:'header>div>h2',type:'span',id:'enjoy',text:'I enjoy'},{main:'header',type:'div',id:'arrow-holder'},{main:'#arrow-holder',type:'img',id:'arrow',cn:'bye',src:'./public/images/arrow.png'}];
   const main = [{main:'main',type:'div',cn:'words'}];
   app.removeAll('header');
   app.removeAll('main');
   app.loadUp(header);
   app.loadUp(main);
   document.querySelector('.show-time').classList.add('grid-1')
   app.findStatement();
};

app.bio = () => {
   const birthday = () => {const date = new Date;console.log(date);const rawAge = date.getFullYear() - 1981;const check = date.getMonth() + 1 > 9 || date.getMonth() + 1 == 9 && date.getDate() >= 29 ? 0 : 1;return String(rawAge - check);};
   const stats = {name:'John Spriggs',age:birthday(),country:'United States',state:'California',cats_or_dogs:'dogs',employment_status:'unemployed - actively looking'};
   const p1 = "My name is John Spriggs, and I used to be a Delivery Support Analyst for VizExplorer.  At VizExplorer, I communicated with clients holding high-level rankings within their organization about issues or questions with our software.  As an after-hours scheduled employee, I dealt with complex problems, mainly alone with no supervision, that required SQL, JavaScript, NodeJS, and systems OS knowledge to process.  After reviewing, reproducing, and researching these problems, I would correct the issue.  In instants of extensive changes to the application/software or the scope is outside of the teams' area of expertise. I would provide detailed information from my research, the place I believe the problem(s)' located, suggestions on how I think the issue should be resolved, and escalate to the correct department to review."
   const p2 = "I have always enjoyed learning new and challenging skills, especially skill technically related.  Learning Nodejs, JavaScript, and HTML5/CSS3 (<span class='credit-bio'>https://accredible.com/16045116</span>) has been challenging, but creating new apps or figuring out errors or problems without using google searches has been fun and inspiring.  If I'm not in front of a computer, you can find me with my wonderful family, spending time with my 2-year-old son, or laughing with my beautiful spouse.  I believe that you should treat people as you would like to be treated, which goes a long way once applied to the customer service you provide."
   const header = [{main:'header',type:'div',id:'header-bio'},{main:'header>div',type:'img',cn:'my-bio-pic',src:'./public/images/myimage.jpg'},{main:'header>div',type:'div',id:'bio-stats'}];
   const main = [{main:'main',type:'div',cn:'info-bio'},{main:'main>div',type:'p',text:p1},{main:'main>div',type:'p',html:p2}];
   const displayStats = [];
   app.removeAll('header');
   app.removeAll('main');
   app.loadUp(header);
   for(const statKey in stats){
      const data = {main:'#bio-stats',type:'div',cn:'left-bio',text:statKey.replace(/_/g,' ')+':'};
      const data1 = {main:'#bio-stats',type:'div',cn:'right-bio',text:stats[statKey]};
      displayStats.push(data);
      displayStats.push(data1);
   }
   app.loadUp(displayStats);
   app.loadUp(main);
   app.credit();
};

app.projects = () => {
   const projects = [{title:'PM2-Watcher',app_type:'NPM Node Module',app_tech:'NodeJS, ExpressJS, Pm2, JavaScript, HTML5 & CSS3',about_app:"I created pm2-watcher for apps/processes that depend on pm2.  My module will allow a user or even a non-technical user to monitor pm2 without watching the server.  Unlike some created apps that update you when the app(s)/process(es) go down.  The module I created monitors all pm2 processes; if a process stops, fails, or errors, the app will send out an email notification.  If that same process was to come back online, the app sends out a follow-up email.\n\nThe app allows delays between the notification and the failed/recovered process, and you have an option to include your process' logs for failure emails.  The app keeps a record of your email messages, the email message status, and any failed/recovered process.",app:'https://www.npmjs.com/package/pm2-watcher',github:'https://github.com/spriggs81/pm2-watcher'},{title:'Support Tool',app_type:'web application',about_app:"I created this app after completing a online web developer bootcamp "}];
   const header = [];
   const main = [{main:'main',type:'div',id:'info-projects'}];
   app.removeAll('header');
   app.removeAll('main');
   const items = [];
   let count = 0;
   for(project of projects){
      count++
      const itemSpace = {main:'#info-projects',cn:'grid-1',type:'div',id:'project'+count};
      const itemTitle = {main:'#project'+count,cn:'grid-1',type:'h1',text:project.title};
      const itemStatHolder = {main:'#project'+count,id:'statP'+count,cn:'stats',type:'section'}
      const itemStat1 = {main:'#statP'+count,type:'span',id:'p'+count+'-stat1',cn:'stat-items',text:'Project Type: '+project.app_type};
      const itemStat2 = {main:'#statP'+count,type:'span',id:'p'+count+'-stat2',cn:'stat-items',text:'Project Tech: '+project.app_tech};
      const itemBody = {main:'#project'+count,cn:'grid-1',type:'h3',text:project.about_app};
      items.push(itemSpace,itemTitle,itemStatHolder,itemStat1,itemStat2,itemBody);
   }
   app.loadUp(main);
   app.loadUp(items);
}

app.arrowShow = () => {
   const arrow = document.querySelector('#arrow');
   arrow.classList.remove('bye')
   setTimeout(() => {
      arrow.classList.add('bye');
   }, 1000);
}

app.findStatement = () => {
   let goBack = false;
   const theInfo = () => {
      app.loadNewStatement(app.place);
      if(goBack == true){
         app.place--
      } else {
         app.place++
      }
      if(app.place == 0){
         goBack = false;
      }
      if(app.place > app.statements.length - 1){
         app.place = app.place - 2;
         goBack = true;
      }
   }
   app.interval = setInterval(theInfo,2000);
   app.place = 0;
   if(app.place == 0){
      app.loadNewStatement(0);
      app.place++
   }
   if(document.querySelector('.words')){
      app.interval
   }
}

app.loadNewStatement = (num) => {
   if(document.querySelector('.words')){
      const placement = document.querySelector('.words');
      app.arrowShow();
      placement.innerText = app.statements[num];
   } else {
      clearInterval(interval);
   }
}

app.mobileMenu = () => {
   if(document.querySelector('#menu')){
      const menu = document.querySelector('#menu');
      const area = document.querySelector('.mobile');
      menu.addEventListener('mouseenter',(e) => {
         console.log("removing none display");
         area.style.display = 'block';
      });
      menu.addEventListener('mouseleave',() => {
         console.log("adding none display");
         area.style.display = 'none';
      })
   }
}

app.credit = () => {
   if(document.querySelector('.credit-bio')){
      const creditBio = document.querySelector('.credit-bio');
      creditBio.addEventListener('click',() => {
         window.open('https://accredible.com/16045116');
      });
   }
}

app.loadUp = (data) => {
   for(load of data){
      app.builder(load.main,load.type,load.id,load.cn,load.text,load.html,load.src,load.href);
   }
};

app.init = () => {
   app.menuButtons();
   app.home();
   // app.projects();
}

app.notSetup = () => {
   alert("This part isn't setup yet!")
}

window.onload = app.init;
