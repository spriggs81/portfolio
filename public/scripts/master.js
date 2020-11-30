let submitted = false;
const app = {};
app.body = document.querySelector('body');
app.statements = ["playing with my son", "spending time with my family", "helping people", "backend coding", "learning new skills", "reading through logs", "locating answers to problems", "creating new web apps", "barbequing on the charcoal grill", "playing challenging PS4 games", "researching complex issues", "being challenged", "hands-on training", "resolving an unknown internal issue"]

app.removeClass = (arry, classname) => {
   for (menu of arry) {
      menu.classList.remove(classname);
   }
}

app.removeAll = (place) => {
   if (document.querySelector(place)) {
      const partial = document.querySelector(place);
      partial.innerHTML = '';
   }
}



app.renameTitle = (page) => {
   if (document.querySelector('head>title')) {
      const titleDisplay = document.querySelector('head>title');
      const title = page + ' || John\'s Portfolio';
      titleDisplay.innerText = title;
   }
}

app.menuButtons = () => {
   if (document.querySelectorAll('nav>ul li')) {
      const menu = document.querySelectorAll('nav>ul li');
      for (let i = 0; i < menu.length; i++) {
         menu[i].addEventListener('click', (e) => {
            app.removeClass(menu, 'selected-menu');
            menu[i].classList.add('selected-menu');
            const func = typeof(page[e.target.innerText]) == 'function' ? e.target.innerText : 'notSetup';
            page[func]();
         });
      }
   }
   if (document.querySelector('nav>div>img')) {
      const logo = document.querySelector('nav>div>img');
      logo.addEventListener('click', (e) => {
         if (document.querySelectorAll('nav>ul li')) {
            const menu = document.querySelectorAll('nav>ul li');
            app.removeClass(menu, 'selected-menu');
         }
         page.home();
      });
   }
};

app.builder = (main, type, id, cn, text, html, src, href, dataName, setAtt) => {
   main = typeof(main) == 'string' && main.length > 0 ? main : false;
   type = typeof(type) == 'string' && type.length > 0 ? type : false;
   if (main && type) {
      id = typeof(id) == 'string' && id.length > 0 ? id : false;
      cn = typeof(cn) == 'string' && cn.length > 0 ? cn : false;
      text = typeof(text) == 'string' && text.length > 0 ? text : false;
      html = typeof(html) == 'string' && html.length > 0 ? html : false;
      src = typeof(src) == 'string' && src.length > 0 ? src : false;
      href = typeof(href) == 'string' && href.length > 0 ? href : false;
      dataName = typeof(dataName) == 'string' && dataName.length > 0 ? dataName : false;
      setAtt = typeof(setAtt) == 'object' && setAtt != null ? setAtt : false;
      if (document.querySelector(main)) {
         const pagePart = document.querySelector(main);
         const part = document.createElement(type);
         if (id) {
            part.id = id;
         }
         if (cn) {
            part.classList.add(cn);
         }
         if (text) {
            part.innerText = text;
         }
         if (html) {
            part.innerHTML = html;
         }
         if (type == 'form') {
            part.action = src;
            part.method = href.toUpperCase();
         }
         if (src && type != 'form') {
            part.src = src;
         }
         if (href && type != 'form') {
            part.href = href;
         }
         if (dataName) {
            part.name = dataName;
         }
         if (setAtt) {
            for (const setKey in setAtt) {
               part.setAttribute(setKey, setAtt[setKey]);
            }
         }
         pagePart.appendChild(part);
      }
   }
};

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
      if (goBack == true) {
         app.place--
      } else {
         app.place++
      }
      if (app.place == 0) {
         goBack = false;
      }
      if (app.place > app.statements.length - 1) {
         app.place = app.place - 2;
         goBack = true;
      }
   }
   app.interval = setInterval(theInfo, 2000);
   app.place = 0;
   if (app.place == 0) {
      app.loadNewStatement(0);
      app.place++
   }
   if (document.querySelector('.words')) {
      app.interval
   }
}

app.loadNewStatement = (num) => {
   if (document.querySelector('.words')) {
      const placement = document.querySelector('.words');
      app.arrowShow();
      placement.innerText = app.statements[num];
   }
}

app.urlLinks = () => {
   if (document.querySelector('.url')) {
      const urls = document.querySelectorAll('.url');
      for (link of urls) {
         link.addEventListener('click', (e) => {
            const link = e.target.innerText;
            const placesToBe = link.toLowerCase() == 'kern' ? 'https://en.wikipedia.org/wiki/Kern_County,_California' : link.toLowerCase() == 'github' ? 'https://github.com/spriggs81' : link.toLowerCase() == 'linkedin' ? 'https://www.linkedin.com/in/john-s-836703a/' : link.toLowerCase() == 'Html5 Bolierplate'.toLowerCase() ? 'https://github.com/spriggs81/portfolio/blob/master/index.html' : link.trim();
            window.open(placesToBe);
         });
      }
   }
}

app.submitButton = () => {
   const action = typeof(document.getElementById('contact-me').action.trim()) == 'string' && document.getElementById('contact-me').action.trim().length > 0 ? document.getElementById('contact-me').action.trim() : false;
   const method = typeof(document.getElementById('contact-me').method.trim()) == 'string' && document.getElementById('contact-me').method.trim().length > 0 ? document.getElementById('contact-me').method.trim() : false;
   const title = typeof(document.querySelector('#title-field>select').value.trim()) == 'string' && document.querySelector('#title-field>select').value != null ? document.querySelector('#title-field>select').value.trim() : false;
   const name = document.querySelector('#name-field>input').value != null && typeof(document.querySelector('#name-field>input').value.trim()) == 'string' ? document.querySelector('#name-field>input').value.trim() : false;
   const email = typeof(document.querySelector('#email-field>input').value.trim()) == 'string' && document.querySelector('#email-field>input').value != null ? document.querySelector('#email-field>input').value.trim() : false;
   const msg = typeof(document.querySelector('#msg-field>textArea').value.trim()) == 'string' && document.querySelector('#msg-field>textArea').value != null ? document.querySelector('#msg-field>textArea').value.trim() : false;
   if (action && method && title && name && email && msg) {
      submitted = true;
      return true;
   } else {
      let problem = 'Just in case you miss this:\n';
      if (!title) {
         problem += "Title - Needed to be sent\n"
      }
      if (!name) {
         problem += "Name - Needed to be sent\n"
      }
      if (!email) {
         problem += "Email - Needed to be sent\n"
      }
      if (!msg) {
         problem += "Message - Needed to be sent\n"
      }
      alert(problem);
      return false;
   }
};

app.loadUp = (data) => {
   for (load of data) {
      app.builder(load.main, load.type, load.id, load.cn, load.text, load.html, load.src, load.href, load.dataName, load.setAtt);
   }
};

app.thankYou = () => {
   const header = [{
      main: 'header',
      type: 'div',
      id: 'thanks',
      cn: 'show-time'
   }, {
      main: '#thanks',
      type: 'h1',
      text: "Oh wow, have an excellent rest of your day!",
      cn: 'thans'
   }];
   const main = [{
      main: 'main',
      type: 'section',
      cn: 'thanks-holder'
   }, {
      main: '.thanks-holder',
      type: 'h1',
      text: "Thank you for reaching out.  I will make sure to reply to your message as soon as I can.  You can also reach me at info@spriggs.xyz"
   }]
   app.removeAll('header');
   app.removeAll('main');
   app.renameTitle('Thank You');
   app.loadUp(header);
   app.loadUp(main);
   app.footer('Again Thank you for reaching out!');
   app.urlLinks();
}

app.init = () => {
   part.head();
   part.navBar();
   page.home();
   app.menuButtons();
}

app.notSetup = () => {
   alert("This part isn't setup yet!")
}

window.onload = app.init;
