const page = {};

page.home = () => {
   clearInterval(app.interval);
   const header = [{
      main: 'header',
      type: 'div',
      cn: 'show-time'
   }, {
      main: '.show-time',
      type: 'h1',
      text: 'Welcome to my Portfolio'
   }, {
      main: '.show-time',
      type: 'h2',
      text: 'My name is John and '
   }, {
      main: 'header>div>h2',
      type: 'span',
      id: 'enjoy',
      text: 'I enjoy'
   }, {
      main: 'header',
      type: 'div',
      id: 'arrow-holder'
   }, {
      main: '#arrow-holder',
      type: 'img',
      id: 'arrow',
      cn: 'bye',
      src: './public/images/arrow.png'
   }];
   const main = [{
      main: 'main',
      type: 'div',
      cn: 'words'
   }];
   app.removeAll('header');
   app.removeAll('main');
   app.loadUp(header);
   app.loadUp(main);
   app.renameTitle('Home Page');
   part.footer('Home Page');
   app.findStatement();
   app.urlLinks();
};

page.bio = () => {
   const birthday = () => {
      const date = new Date;
      const rawAge = date.getFullYear() - 1981;
      const check = date.getMonth() + 1 > 9 || date.getMonth() + 1 == 9 && date.getDate() >= 29 ? 0 : 1;
      return String(rawAge - check);
   };
   const stats = {
      name: 'John Spriggs',
      age: birthday(),
      county: '<span class="url">kern</span>',
      state: 'California',
      country: 'United States',
      cats_or_dogs: 'dogs'
   };
   const p1 = "My name is John Spriggs, and I used to be a Delivery Support Analyst for VizExplorer.  At VizExplorer, I communicated with clients holding high-level rankings within their organization about issues or questions with our software.  As an after-hours scheduled employee, I dealt with complex problems, mainly alone with no supervision, that required SQL, JavaScript, NodeJS, and systems OS knowledge to process.  After reviewing, reproducing, and researching these problems, I would correct the issue.  In instants of extensive changes to the application/software or the required work was outside of the teams' area of expertise. I would provide detailed information from my research, the place I believe the problem(s)' located, suggestions on how I think the issue should be resolved, and escalate to the correct department to review."
   const p2 = "I have always enjoyed learning new and challenging skills, especially skill technically related.  Learning Nodejs, JavaScript, and HTML5/CSS3 (<span class='url'>https://accredible.com/16045116</span>) has been challenging, but creating new apps or figuring out errors or problems without using google searches has been fun and inspiring.  If I'm not in front of a computer, you can find me with my wonderful family, spending time with my 2-year-old son, or laughing with my beautiful spouse.  I believe that you should treat people as you would like to be treated, which goes a long way once applied to the customer service you provide."
   const header = [{
      main: 'header',
      type: 'div',
      id: 'header-bio'
   }, {
      main: 'header>div',
      type: 'img',
      cn: 'my-bio-pic',
      src: './public/images/myimage.jpg'
   }, {
      main: 'header>div',
      type: 'div',
      id: 'bio-stats'
   }];
   const main = [{
      main: 'main',
      type: 'div',
      cn: 'info-bio'
   }, {
      main: 'main>div',
      type: 'p',
      text: p1
   }, {
      main: 'main>div',
      type: 'p',
      html: p2
   }];
   const displayStats = [];
   app.removeAll('header');
   app.removeAll('main');
   app.loadUp(header);
   for (const statKey in stats) {
      const data = {
         main: '#bio-stats',
         type: 'div',
         cn: 'left-bio',
         text: statKey.replace(/_/g, ' ') + ':'
      };
      const data1 = {
         main: '#bio-stats',
         type: 'div',
         cn: 'right-bio',
         html: stats[statKey]
      };
      displayStats.push(data);
      displayStats.push(data1);
   }
   app.loadUp(displayStats);
   app.loadUp(main);
   app.renameTitle('Bio Page');
   part.footer('Bio Page');
   app.urlLinks();
};

page.skills = () => {
   const header = [{
      main: 'header',
      type: 'div',
      cn: 'skill-header'
   }, {
      main: '.skill-header',
      type: 'div',
      cn: 'skill-main',
      text: 'Information on Skills'
   }];
   const main = [{
      main: 'main',
      type: 'div',
      cn: 'skills-holder'
   }];
   const skills = {
      app_related_skills: ['NodeJS', 'ExpressJS', 'EJS', 'MongoDB', 'MongooseJS', 'Pm2', 'JavaScript', 'Bootstrap', 'Semantic UI', 'HTML5 / CSS3', 'Git', 'GitHub', 'Heroku', 'Postman'],
      support_related_skills: ['Escalation Management', 'SaaS Experience', 'B2B Experience', 'Zendesk Experience', 'Help Document Creation', 'Data Management (MS SQL)', 'Code Troubleshooting (Javascript, NodeJS)', 'Salesforce (Ticket System)', 'Eventum (Ticket System & Developer Bugs)', 'Jira (Ticket System & Developer Bugs)', 'Project Management', 'Decision-Making', 'Crisis Management', 'Account Management', 'Quality Assurance (QA)', 'Agile Methodologies', 'Software Development'],
      general_skills: ['Customer Service', 'Customer Relations', 'Data Entry', 'Problem-solving', 'Active listening', 'Communication', 'Interpersonal', 'Training/Demos/Coaching', 'Leadership', 'Management', 'Troubleshooting']
   }
   const createdSkill = [];
   for (skillSet in skills) {
      const div = {
         main: '.skills-holder',
         type: 'div',
         id: skillSet + '-skills',
         cn: 'skill-holder'
      };
      const divSkill = {
         main: '#' + skillSet + '-skills',
         type: 'div',
         cn: 'skill-title',
         text: skillSet.replace(/_/g, ' ')
      };
      const skillUl = {
         main: '#' + skillSet + '-skills',
         type: 'ul',
         cn: 'skill-list'
      }
      createdSkill.push(div);
      createdSkill.push(divSkill);
      createdSkill.push(skillUl);
      for (skill of skills[skillSet]) {
         const skillInfo = {
            main: '#' + skillSet + '-skills>ul',
            type: 'li',
            text: skill
         };
         createdSkill.push(skillInfo);
      }
   }
   app.removeAll('header');
   app.removeAll('main');
   app.loadUp(header);
   app.loadUp(main);
   app.renameTitle('Skills Page');
   part.footer('Skills Page');
   app.loadUp(createdSkill);
   app.urlLinks();
}

page.projects = () => {
   const projects = [{
      title: 'My Portfolio',
      app_type: 'Static Web Page',
      app_tech: 'JavaScript & HTML5 / CSS3',
      problem: 'Try and show experienced developers, tech recruiters, project managers, and others that I can benefit their company.  Show that my customer service and software support experience has turned my mind to satisfy the company\'s and customer\'s needs.  Demonstrate that my ability to learn quickly and use what I have learned to it\'s fullest potential isn\'t something just placed on my resume.  Showing I have no problem completing research-related jobs and looking into bugs.',
      solution: 'This web page has one HTML file (Html5 Bolierplate), and everything you see on the page is being handled by the JavaScript and CSS files.  I believe using this method will allow one to see more of my coding skills.  The projects I have worked on solely by myself have mainly focused on helping my team and the company where I have been employed.',
      app: 'http://www.spriggs.xyz',
      github: 'https://github.com/spriggs81/portfolio'
   }, {
      title: 'PM2-Watcher',
      app_type: 'NPM Node Module',
      app_tech: 'NodeJS, ExpressJS, Pm2, JavaScript, HTML5 / CSS3',
      problem: "Pm2 didn't send out automatic notifications unless part of a plan that could get costly. If someone wasn't watching the server, they could miss issues that could affect the application's stability.  In some cases, the client may not notice a minor problem that could lead to a critical one.",
      solution: "This application monitors all pm2 processes and will send out an email notification if a process goes offline.  If a process recovers, then a follow-up email is sent out.",
      app: 'https://www.npmjs.com/package/pm2-watcher',
      github: 'https://www.github.com/spriggs81/pm2-watcher'
   }, {
      title: 'Error Logs',
      app_type: 'Web Application',
      app_tech: 'NodeJS, ExpressJS, EJS, Event-Stream, SQL-Formatter, & Bootstrap 4.3.1',
      problem: "When researching a client related issue, the log files could explain 85% of the client's problem. Due to the problematic display, it could be easy for someone to overlook essential data related to the client's situation.",
      solution: "Creating the app was meant to make the logs more readable and less intimidating.  Allowing the support team to be able to resolve issues in a more timely manner.",
      app: 'https://error-logs.herokuapp.com/',
      github: 'https://www.github.com/spriggs81/error_logs'
   }, {
      title: 'Support Tool',
      app_type: 'web application',
      app_tech: 'NodeJS, ExpressJS, PassportJS, MongoDB, MongooseJS, EJS, & Semantic UI',
      problem: "In my department(Support), we depended on information from a site controlled by another department.  Sometimes this information was out of date, incorrect, misleading, or missing necessary steps.  It reached the point that team members were sharing notes that had on clients.",
      solution: "Creating the app was meant to be a one-stop site to pick up information for our team.  Allowing the content to be updated without delays and a place to keep important information.  (Please note, I updated the  app to be more general as it was made for specific products originally.)  <br><br>Please feel free to create an account(account would be a normal user's account), if you would like to view the admin side please use (username: admin_user | password: password) <br>***please note: Your access is limited***",
      app: 'http://www.supporttools.ga',
      github: 'https://www.github.com/spriggs81/portfolio'
   }];
   const header = [];
   const main = [{
      main: 'main',
      type: 'div',
      id: 'info-projects'
   }];
   const items = [];
   let count = 0;
   for (project of projects) {
      count++
      const itemSpace = {
         main: '#info-projects',
         cn: 'project-place',
         type: 'div',
         id: 'project' + count
      };
      const itemTitle = {
         main: '#project' + count,
         cn: 'grid-1',
         type: 'h1',
         text: project.title
      };
      const itemStatHolder = {
         main: '#project' + count,
         id: 'statP' + count,
         cn: 'stats',
         type: 'section'
      };
      const itemStat1 = {
         main: '#statP' + count,
         type: 'p',
         id: 'p' + count + '-stat1',
         cn: 'stat-items',
         html: '<span class="lab">Project Type:</span>' + project.app_type
      };
      const itemStat2 = {
         main: '#statP' + count,
         type: 'p',
         id: 'p' + count + '-stat2',
         cn: 'stat-items',
         html: '<span class="lab">Project Tech:</span>' + project.app_tech
      };
      const itemProblem = {
         main: '#project' + count,
         cn: 'grid-1',
         type: 'p',
         html: '<span class="lab">The Problem:</span>\n' + project.problem
      };
      const itemSolution = {
         main: '#project' + count,
         cn: 'grid-1',
         type: 'p',
         html: '<span class="lab">The Solution:</span>\n' + project.solution
      };
      items.push(itemSpace, itemTitle, itemStatHolder, itemStat1, itemStat2, itemProblem, itemSolution);
      const itemUrlHolder = {
         main: '#project' + count,
         cn: 'url-place',
         type: 'div',
         id: 'url-holder' + count
      };
      if (project.app || project.github) {
         items.push(itemUrlHolder);
         if (project.app) {
            const theApp = {
               main: '#url-holder' + count,
               type: 'p',
               id: 'app-url-p' + count + '-stat1',
               cn: 'url-item',
               html: 'App\'s URL: <span class="url">' + project.app + '</span>'
            };
            items.push(theApp);
         }
         if (project.github) {
            const githubUrl = {
               main: '#url-holder' + count,
               type: 'p',
               id: 'app-url-p' + count + '-stat2',
               cn: 'url-item',
               html: 'GitHub URL: <span class="url">' + project.github + '</span>'
            };
            items.push(githubUrl);
         }
         if (count > 1) {
            const hrPlacer = {
               main: '#project' + (count - 1),
               type: 'hr'
            };
            items.push(hrPlacer);
         }
      }
   }
   app.removeAll('header');
   app.removeAll('main');
   app.renameTitle('Projects Page');
   app.loadUp(main);
   app.loadUp(items);
   part.footer('Projects Page');
   app.urlLinks();
}

page.game = () => {
   app.removeAll('header');
   app.removeAll('main');
   game.init();
   app.urlLinks();
}

page.contact = () => {
   const header = [{
      main: 'header',
      type: 'div',
      cn: 'show-time'
   }, {
      main: '.show-time',
      type: 'h1',
      text: 'Contact Info'
   }, {
      main: '.show-time',
      type: 'h2',
      text: 'Here\'s how you can reach me: 😊'
   }];
   const main = [{
      main: 'main',
      type: 'iframe',
      id: "hidden-iframe",
      setAtt: {
         name: "hidden-iframe",
         style: "display:none",
         onload: "if(submitted) {app.thankYou();}"
      }
   }, {
      main: 'main',
      type: 'section',
      cn: 'form-holder'
   }, {
      main: '.form-holder',
      type: 'form',
      id: 'contact-me',
      src: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScWjUnWA7n02b816ytBz97wihG4y9AylgveXi4vfEI7XikZXA/formResponse',
      href: 'post',
      setAtt: {
         target: "hidden-iframe",
         onsubmit: "return app.submitButton()"
      }
   }, {
      main: '#contact-me',
      type: 'div',
      cn: 'form-data'
   }];
   const createFields = [{
      name: 'title',
      type: 'select',
      html: '<option value="">Select your option</option> <option value="Business Owner/Founder/Invester">Business Owner / Founder / Invester</option> <option value="Hiring Manager/Recruiter">Hiring Manager / Recruiter</option> <option value="Upper Management/Department Manager">Upper Management / Department Manager</option> <option value="Developer">Developer</option> <option value="Other">Other</option>',
      fieldName: 'entry.615291168'
   }, {
      name: 'name',
      type: 'input',
      dataName: '',
      fieldName: 'entry.279002257'
   }, {
      name: 'email',
      type: 'input',
      dataName: '',
      fieldName: 'entry.1036376505'
   }, {
      name: 'msg',
      type: 'textArea',
      dataName: '',
      fieldName: 'entry.1924106833'
   }];
   const formFeidls = [];
   for (field of createFields) {
      const labelName = field.name != 'msg' ? field.name : 'message';
      const div = {
         main: '.form-data',
         type: 'div',
         cn: 'data-field',
         id: field.name + '-field'
      };
      const label = {
         main: '#' + field.name + '-field',
         type: 'label',
         text: labelName + ': '
      };
      const data = {
         main: '#' + field.name + '-field',
         type: field.type,
         html: field.html,
         dataName: field.fieldName
      };
      formFeidls.push(div, label, data);
   }
   const button = {
      main: '.form-data',
      type: 'button',
      text: 'Submit'
   };
   app.removeAll('header');
   app.removeAll('main');
   app.renameTitle('Contact Page');
   app.loadUp(header);
   app.loadUp(main);
   formFeidls.push(button);
   app.loadUp(formFeidls);
   part.footer('Contact Page');
   app.urlLinks();
}
