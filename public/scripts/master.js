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

app.builder = (main,type,id,cn,text,html,src,href,dataName) => {
   main = typeof(main) == 'string' && main.length > 0 ? main : false;
   type = typeof(type) == 'string' && type.length > 0 ? type : false;
   if(main && type) {
      id = typeof(id) == 'string' && id.length > 0 ? id : false;
      cn = typeof(cn) == 'string' && cn.length > 0 ? cn : false;
      text = typeof(text) == 'string' && text.length > 0 ? text : false;
      html = typeof(html) == 'string' && html.length > 0 ? html : false;
      src = typeof(src) == 'string' && src.length > 0 ? src : false;
      href = typeof(href) == 'string' && href.length > 0 ? href : false;
      dataName = typeof(dataName) == 'string' && dataName.length > 0 ? dataName : false;
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
         if(type == 'form'){
            part.action = src;
            part.method = href.toUpperCase();
         }
         if(src && type != 'form'){
            part.src = src;
         }
         if(href && type != 'form'){
            part.href = href;
         }
         if(dataName){
            part.name = dataName;
         }
         pagePart.appendChild(part);
      }
   } else {
      console.log("There was an error");
   }
};

app.home = () => {
   clearInterval(app.interval);
   const header = [{main:'header',type:'div',cn:'show-time'},{main:'.show-time',type:'h1',text:'Welcome to my Portfolio'},{main:'.show-time',type:'h2',text:'My name is John and '},{main:'header>div>h2',type:'span',id:'enjoy',text:'I enjoy'},{main:'header',type:'div',id:'arrow-holder'},{main:'#arrow-holder',type:'img',id:'arrow',cn:'bye',src:'./public/images/arrow.png'}];
   const main = [{main:'main',type:'div',cn:'words'}];
   app.removeAll('header');
   app.removeAll('main');
   app.loadUp(header);
   app.loadUp(main);
   app.findStatement();
};

app.bio = () => {
   const birthday = () => {const date = new Date;console.log(date);const rawAge = date.getFullYear() - 1981;const check = date.getMonth() + 1 > 9 || date.getMonth() + 1 == 9 && date.getDate() >= 29 ? 0 : 1;return String(rawAge - check);};
   const stats = {name:'John Spriggs',age:birthday(),county:'<span class="url">kern</span>',state:'California',country:'United States',cats_or_dogs:'dogs'};
   const p1 = "My name is John Spriggs, and I used to be a Delivery Support Analyst for VizExplorer.  At VizExplorer, I communicated with clients holding high-level rankings within their organization about issues or questions with our software.  As an after-hours scheduled employee, I dealt with complex problems, mainly alone with no supervision, that required SQL, JavaScript, NodeJS, and systems OS knowledge to process.  After reviewing, reproducing, and researching these problems, I would correct the issue.  In instants of extensive changes to the application/software or the required work was outside of the teams' area of expertise. I would provide detailed information from my research, the place I believe the problem(s)' located, suggestions on how I think the issue should be resolved, and escalate to the correct department to review."
   const p2 = "I have always enjoyed learning new and challenging skills, especially skill technically related.  Learning Nodejs, JavaScript, and HTML5/CSS3 (<span class='url'>https://accredible.com/16045116</span>) has been challenging, but creating new apps or figuring out errors or problems without using google searches has been fun and inspiring.  If I'm not in front of a computer, you can find me with my wonderful family, spending time with my 2-year-old son, or laughing with my beautiful spouse.  I believe that you should treat people as you would like to be treated, which goes a long way once applied to the customer service you provide."
   const header = [{main:'header',type:'div',id:'header-bio'},{main:'header>div',type:'img',cn:'my-bio-pic',src:'./public/images/myimage.jpg'},{main:'header>div',type:'div',id:'bio-stats'}];
   const main = [{main:'main',type:'div',cn:'info-bio'},{main:'main>div',type:'p',text:p1},{main:'main>div',type:'p',html:p2}];
   const displayStats = [];
   app.removeAll('header');
   app.removeAll('main');
   app.loadUp(header);
   for(const statKey in stats){
      const data = {main:'#bio-stats',type:'div',cn:'left-bio',text:statKey.replace(/_/g,' ')+':'};
      const data1 = {main:'#bio-stats',type:'div',cn:'right-bio',html:stats[statKey]};
      displayStats.push(data);
      displayStats.push(data1);
   }
   app.loadUp(displayStats);
   app.loadUp(main);
   app.urlLinks();
};

app.projects = () => {
   const projects = [{title:'PM2-Watcher',app_type:'NPM Node Module',app_tech:'NodeJS, ExpressJS, Pm2, JavaScript, HTML5 & CSS3',problem:"Pm2 didn't send out automatic notifications unless part of a plan that could get costly. If someone wasn't watching the server, they could miss issues that could affect the application's stability.  In some cases, the client may not notice a minor problem that could lead to a critical one.",solution:"This application monitors all pm2 processes and will send out an email notification if a process goes offline.  If a process recovers, then a follow-up email is sent out.",app:'https://www.npmjs.com/package/pm2-watcher',github:'https://www.github.com/spriggs81/pm2-watcher'},{title:'Error Logs',app_type:'Web Application',app_tech:'NodeJS, ExpressJS, EJS, Event-Stream, SQL-Formatter, Bootstrap 4.3.1',problem:"When researching a client related issue, the log files could explain 85% of the client's problem. Due to the problematic display, it could be easy for someone to overlook essential data related to the client's situation.",solution:"Creating the app was meant to make the logs more readable and less intimidating.  Allowing the support team to be able to resolve issues in a more timely manner.",app:'https://error-logs.herokuapp.com/',github:'https://www.github.com/spriggs81/error_logs'},{title:'Support Tool',app_type:'web application',app_tech:'NodeJS, ExpressJS, PassportJS, MongoDB, MongooseJS, EJS, and Semantic UI',problem:"In my department(Support), we depended on information from a site controlled by another department.  Sometimes this information was out of date, incorrect, misleading, or missing necessary steps.  It reached the point that team members were sharing notes that had on clients.",solution:"Creating the app was meant to be a one-stop site to pick up information for our team.  Allowing the content to be updated without delays and a place to keep important information.  (Please note, I updated the  app to be more general as it was made for specific products originally.)",app:'http://www.supporttools.ga',github:'https://www.github.com/spriggs81/portfolio'}];
   const header = [];
   const main = [{main:'main',type:'div',id:'info-projects'}];
   app.removeAll('header');
   app.removeAll('main');
   const items = [];
   let count = 0;
   for(project of projects){
      count++
      const itemSpace = {main:'#info-projects',cn:'project-place',type:'div',id:'project'+count};
      const itemTitle = {main:'#project'+count,cn:'grid-1',type:'h1',text:project.title};
      const itemStatHolder = {main:'#project'+count,id:'statP'+count,cn:'stats',type:'section'};
      const itemStat1 = {main:'#statP'+count,type:'p',id:'p'+count+'-stat1',cn:'stat-items',html:'<span class="lab">Project Type:</span>'+project.app_type};
      const itemStat2 = {main:'#statP'+count,type:'p',id:'p'+count+'-stat2',cn:'stat-items',html:'<span class="lab">Project Tech:</span>'+project.app_tech};
      const itemProblem = {main:'#project'+count,cn:'grid-1',type:'p',html:'<span class="lab">The Problem:</span>\n'+project.problem};
      const itemSolution = {main:'#project'+count,cn:'grid-1',type:'p',html:'<span class="lab">The Solution:</span>\n'+project.solution};
      items.push(itemSpace,itemTitle,itemStatHolder,itemStat1,itemStat2,itemProblem,itemSolution);
      const itemUrlHolder = {main:'#project'+count,cn:'url-place',type:'div',id:'url-holder'+count};
      if(project.app || project.github){
         items.push(itemUrlHolder);
         if(project.app){
            const theApp = {main:'#url-holder'+count,type:'p',id:'app-url-p'+count+'-stat1',cn:'url-item',html:'App\'s URL: <span class="url">'+project.app+'</span>'};
            items.push(theApp);
         }
         if(project.github){
            const githubUrl = {main:'#url-holder'+count,type:'p',id:'app-url-p'+count+'-stat2',cn:'url-item',html:'GitHub URL: <span class="url">'+project.github+'</span>'};
            items.push(githubUrl);
         }
         if(count > 1){
           const hrPlacer = {main:'#project'+(count-1),type:'hr'};
           items.push(hrPlacer);
         }
      }
   }
   app.loadUp(main);
   app.loadUp(items);
   app.urlLinks();
}

app.contact = () => {
  const header = [{main:'header',type:'div',cn:'show-time'},{main:'.show-time',type:'h1',text:'Contact Info'},{main:'.show-time',type:'h2',text:'Here\'s how you can reach me: 😊'}];
  const main = [{main:'main',type:'section',cn:'form-holder'},{main:'.form-holder',type:'form',id:'contact-me',src:'https://docs.google.com/forms/u/0/d/e/1FAIpQLScWjUnWA7n02b816ytBz97wihG4y9AylgveXi4vfEI7XikZXA/formResponse',href:'post'},{main:'#contact-me',type:'div',cn:'form-data'}];
  const createFields = [{name:'title',type:'select',html:'<option value="">Select your option</option> <option value="Business Owner/Founder/Invester">Business Owner / Founder / Invester</option> <option value="Hiring Manager/Recruiter">Hiring Manager / Recruiter</option> <option value="Upper Management/Department Manager">Upper Management / Department Manager</option> <option value="Developer">Developer</option> <option value="Other">Other</option>',fieldName:'entry.615291168'},{name:'name',type:'input',dataName:'',fieldName:'entry.279002257'},{name:'email',type:'input',dataName:'',fieldName:'entry.1036376505'},{name:'msg',type:'textArea',dataName:'',fieldName:'entry.1924106833'}];
  const formFeidls = [];
  for(field of createFields){
    const labelName = field.name != 'msg' ? field.name : 'message';
    const div = {main:'.form-data',type:'div',cn:'data-field',id:field.name+'-field'};
    const label = {main:'#'+field.name+'-field',type:'label',text:labelName+': '};
    const data = {main:'#'+field.name+'-field',type:field.type,html:field.html,dataName:field.fieldName};
    formFeidls.push(div,label,data);
  }
  app.removeAll('header');
  app.removeAll('main');
  app.loadUp(header);
  app.loadUp(main);
  const button = {main:'.form-data',type:'button',text:'Submit'}
  formFeidls.push(button);
  app.loadUp(formFeidls);
  app.submitButton();
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
   }
}

app.urlLinks = () => {
   if(document.querySelector('.url')){
      const urls = document.querySelectorAll('.url');
      for(link of urls){
         link.addEventListener('click',(e) => {
            const placesToBe = e.target.innerText.toLowerCase() == 'kern' ? 'https://en.wikipedia.org/wiki/Kern_County,_California' : e.target.innerText;
            window.open(placesToBe);
         });
      }
   }
}

app.submitButton = () => {
   if(document.querySelector('.form-data button')){
      const button = document.querySelector('.form-data button');
      button.addEventListener('click',(e) => {
         e.preventDefault();
         if(document.getElementById('contact-me')){
            const action = typeof(document.getElementById('contact-me').action.trim()) == 'string'  && document.getElementById('contact-me').action.trim().length > 0 ? document.getElementById('contact-me').action.trim() : false;
            const method = typeof(document.getElementById('contact-me').method.trim()) == 'string'  && document.getElementById('contact-me').method.trim().length > 0 ? document.getElementById('contact-me').method.trim() : false;
            const title = typeof(document.querySelector('#title-field>select').value.trim()) == 'string' && document.querySelector('#title-field>select').value != null ? document.querySelector('#title-field>select').value.trim() : false;
            const name = document.querySelector('#name-field>input').value != null && typeof(document.querySelector('#name-field>input').value.trim()) == 'string' ? document.querySelector('#name-field>input').value.trim() : false;
            const email = typeof(document.querySelector('#email-field>input').value.trim()) == 'string' && document.querySelector('#email-field>input').value != null ? document.querySelector('#email-field>input').value.trim() : false;
            const msg = typeof(document.querySelector('#msg-field>textArea').value.trim()) == 'string' && document.querySelector('#msg-field>textArea').value != null ? document.querySelector('#msg-field>textArea').value.trim() : false;
            if(action && method && title && name && email && msg){
              const data = {
                entry_615291168: title,
                entry_279002257: name,
                entry_1036376505:  email,
                entry_1924106833: msg
              };
              app.sendThis(action,method,data,(err,status) => {
                if(!err && status == 200){
                  console.log("This made it out sir.");
                } else {
                  console.log("Error sending this, please review status code: ",status);
                }
              })
            } else {
              let problem = 'Just in case you miss this:\n';
              if(!title){problem += "Title - Needed to be sent\n"}
              if(!name){problem += "Name - Needed to be sent\n"}
              if(!email){problem += "Email - Needed to be sent\n"}
              if(!msg){problem += "Message - Needed to be sent\n"}
               alert(problem);
            }
         }
      });
   }
};

app.loadUp = (data) => {
   for(load of data){
      app.builder(load.main,load.type,load.id,load.cn,load.text,load.html,load.src,load.href,load.dataName);
   }
};

app.sendThis = (action,method,data,cb) => {
   const xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = (e) => {
      if (this.readyState == 4 && this.status == 200) {
         cb(false,200);
      } else {
         cb(true,this.status+'  /  '+this.readyState);
      }
      console.log('this is E: ',e);
  };
  let urlLink = action+'?';
  let count = 0;
  for(dataKey in data){
     count++
     if(count > 1){
        urlLink += '&';
     }
     urlLink += dataKey.replace('_','.')+':'+data[dataKey]
 }
  xhttp.open(method, urlLink, true);
  xhttp.send();
}

app.init = () => {
   app.menuButtons();
   // app.home();
   app.contact();
}

app.notSetup = () => {
   alert("This part isn't setup yet!")
}

window.onload = app.init;
