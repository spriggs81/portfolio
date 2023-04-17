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
   const p1 = "I'm John Spriggs, I was the Technical Support Engineer at Grain Technologies. My primary responsibility was to research and resolve escalated issues from the support team. I worked with a tech stack that included NodeJS, JavaScript, ReactJS, iOS, and PostgreSQL and used Shortcut as our project management software to create stories and push out pull requests."
   const p2 = "My role involved analyzing and troubleshooting customer-reported issues and working closely with the development team to identify and implement solutions. I also provided technical guidance and support to the support team to ensure efficient and effective resolution of customer issues."
   const p3 = "In addition to my technical support duties, I contributed to developing our product by identifying and documenting bugs and improvements and participating in code reviews and testing. Overall, my focus at Grain Technologies was on delivering high-quality technical support and helping to improve the product continuously."
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
   }, {
      main: 'main>div',
      type: 'p',
      html: p3
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
      app_related_skills: ['NodeJS', 'ExpressJS', 'EJS', 'MongoDB', 'PostgreSQL', 'MongooseJS', 'Pm2', 'JavaScript', 'Bootstrap', 'Semantic UI', 'HTML5 / CSS3', 'Git', 'GitHub', 'Heroku', 'Postman', 'ReactJS'],
      support_related_skills: ['Escalation Management', 'SaaS Experience', 'B2B Experience', 'Zendesk Experience', 'Help Document Creation', 'Data Management (MS SQL, PostgreSQL)', 'Code Troubleshooting (Javascript, NodeJS, ReactJS,iOS)', 'Salesforce (Ticket System)', 'Eventum (Ticket System & Developer Bugs)', 'Jira (Ticket System & Developer Bugs)', 'Project Management', 'Decision-Making', 'Crisis Management', 'Account Management', 'Quality Assurance (QA)', 'Agile Methodologies', 'Software Development'],
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
      reason: `Since I didn't have any ways to display my ability to handle writing functions I decided 
               to create a profolio using nothing but functions.  This page five JavaScript files that 
               controls the page.  There is only one HTML file and it's pretty much empty.  Hope this shows 
               someone I can handle creating and managing functions.`,
      app: 'http://www.johnspriggs.com',
      github: 'https://github.com/spriggs81/portfolio'
   }, {
      title: 'PM2-Watcher',
      app_type: 'NPM Node Module',
      app_tech: 'NodeJS, ExpressJS, Pm2, JavaScript, HTML5 / CSS3',
      reason: `Working with PM2 I noticed that there was a problem with there being issues that would 
               start off small, but later managed to become large since no one would catch the smaller 
               issue.  I created this app so, that before an issue reached the point the would start a 
               program using the PM2 process someone could be notified.  This app sends out an email when 
               processes go down and if the process comes back online a new email is sent to provide that 
               information as well.`,
      app: 'https://www.npmjs.com/package/pm2-watcher',
      github: 'https://www.github.com/spriggs81/pm2-watcher'
   }, {
      title: 'Error Logs',
      app_type: 'Web Application',
      app_tech: 'NodeJS, ExpressJS, EJS, Event-Stream, SQL-Formatter, & Bootstrap 4.3.1',
      reason: `This was a project that I created to help our team review the logs that we used to 
               locate client's problems.  The app took the JSON like string and made it more readable. 
               There was also a search option, to help the team locate problems quickly without all 
               the noise of cluttered words.`,
      github: 'https://www.github.com/spriggs81/error_logs'
   }, {
      title: 'Account Manager Reports',
      app_type: 'node application',
      app_tech: 'NodeJS, JavaScript, Node-Zendesk, Nodemailer',
      reason: `My lead that became the new manager still had to create reports for the account managers 
               which took up a lot of her time.  Since I created an app for the pervious manager, she 
               decided to ask me to look into creating a way to handle this for her.  Seems that the 
               reports took up an hour and half of her busy day.  I created a app using the Zendesk API 
               and providing my manager with a bat file that once double clicked provided the same report 
               within one minute.`
   }, {
      title: 'Client Survey Project (Zendesk Issue)',
      app_type: 'web application',
      app_tech: 'NodeJS, ExpressJS, EJS, Node-Zendesk',
      reason: `My manager had tried to create a suvery to send out to users to check on the service that
               the user was receiving from the Support team.  This was managed by Zendesk automations, 
               but never worked.  My job was to locate the reason and it seemed that when a ticket was 
               closed the automation never worked on the closed status or our plan was reason.  I used 
               the Zendesk API to custom create the program to handle this`,
      github: 'https://github.com/spriggs81/Zendesk_Survey_Update'
   }, {
      title: 'Support Tool',
      app_type: 'web application',
      app_tech: 'NodeJS, ExpressJS, PassportJS, MongoDB, MongooseJS, EJS, & Semantic UI',
      reason: `I created this app because our team was dependent on a tool that was managed 
               by another team.  That tool of information was controlled by another team that 
               rarely was updated and we had personal notes in my team of updates that were needed.  
               So I created a tool that my team could manage, but the company decided that learning 
               a new tool would be counterproductive.  It was liked by the team and other teams as 
               well, shame it didn't make it far`,
      github: 'https://github.com/spriggs81/SupportTool'
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
      const itemReason = {
         main: '#project' + count,
         cn: 'grid-1',
         type: 'p',
         html: '<span class="lab">Reason for the App:</span>\n' + project.reason
      };
      items.push(itemSpace, itemTitle, itemStatHolder, itemStat1, itemStat2, itemReason);
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
               html: 'Github URL: <span class="url">' + project.github + '</span>'
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
         onload: "if(submitted) {page.thankYou(document.querySelector('#name-field>input').value);}"
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
   const submitDiv = {
      main: '.form-data',
      type: 'div',
      id: 'submit-area'
   }
   const button = {
      main: '#submit-area',
      type: 'button',
      text: 'Submit'
   };

   app.removeAll('header');
   app.removeAll('main');
   app.renameTitle('Contact Page');
   app.loadUp(header);
   app.loadUp(main);
   formFeidls.push(submitDiv);
   formFeidls.push(button);
   app.loadUp(formFeidls);
   part.footer('Contact Page');
   app.urlLinks();
}

page.thankYou = (name) => {
   const header = [{
      main: 'header',
      type: 'div',
      id: 'thanks',
      cn: 'show-time'
   }, {
      main: '#thanks',
      type: 'h1',
      html: "<span id='name'>"+name+"</span>, have an excellent rest of your day!",
      cn: 'thanks'
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
   part.footer('Again Thank you for reaching out!');
   app.urlLinks();
}
