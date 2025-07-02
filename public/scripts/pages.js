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
   const p1 = "Greetings! I'm John Spriggs, a Technical Support Engineer with a strong background in providing exceptional customer support and driving product improvements. At Grain Technologies, I played a pivotal role in researching and resolving escalated issues while utilizing a versatile tech stack that encompassed Node.js, JavaScript, React.js, iOS, and PostgreSQL. Our team efficiently managed projects using Shortcut as our project management software, allowing for seamless collaboration through stories and pull requests."
   const p2 = "In my position, I thrived in analyzing and troubleshooting customer-reported issues, collaborating closely with the development team to implement effective solutions. Guiding and supporting the support team was an integral part of my role, ensuring a streamlined process for resolving customer issues with utmost efficiency."
   const p3 = "Beyond my core responsibilities in technical support, I actively contributed to the product's development by meticulously identifying and documenting bugs and suggesting improvements. Engaging in code reviews and participating in testing processes allowed me to maintain a keen eye for quality and further enhance the product's performance. Throughout my tenure at Grain Technologies, I remained steadfast in delivering top-notch technical support while continuously striving to elevate the product's capabilities."
   const p4 = `I am passionate about leveraging my expertise and skill set to drive customer satisfaction and contribute to the growth and success of innovative products. I am eager to take on new challenges and collaborate with dynamic teams to achieve remarkable outcomes.`
   const p5 = `Thank you for taking the time to learn about my journey. I look forward to exploring opportunities where I can leverage my skills and experiences to make a meaningful impact.`
   const header = [
      {
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
      }, 
      {
         main: 'main>div',
         type: 'p',
         text: p1
      }, 
      {
         main: 'main>div',
         type: 'p',
         html: p2
      }, 
      {
         main: 'main>div',
         type: 'p',
         html: p3
      }, 
      {
         main: 'main>div',
         type: 'p',
         html: p4
      }, 
      {
         main: 'main>div',
         type: 'p',
         html: p5
      }
   ];
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
      support_related_skills: ['Escalation Management', 'SaaS Experience', 'B2B / B2C Experience', 'B2C Experience', 'Zendesk Experience', 'Help Document Creation', 'Data Management (MS SQL, PostgreSQL)', 'Code Troubleshooting (Javascript, NodeJS, ReactJS,iOS)', 'Salesforce (Ticket System)', 'Eventum (Ticket System & Developer Bugs)', 'Jira (Ticket System & Developer Bugs)', 'Project Management', 'Decision-Making', 'Crisis Management', 'Account Management', 'Quality Assurance (QA)', 'Agile Methodologies', 'Software Development'],
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
         title: 'Simple AI Spam Detector',
         app_type: 'AI',
         app_tech: 'Python, NumPy, Scikit-Learn, & Pandas',
         reason: `I wanted to learn about AI and create a project that went over the basics`,
         github: 'https://github.com/spriggs81/Simple-AI-Spam-Detector'
      }, {
         title: 'My Portfolio',
         app_type: 'Static Web Page',
         app_tech: 'JavaScript & HTML5 / CSS3',
         reason: `To showcase my proficiency in handling and managing functions, I took the initiative to 
                  create a portfolio exclusively comprised of JavaScript files. This portfolio consists of 
                  five JavaScript files that effectively control the entire page, while the accompanying 
                  HTML file remains intentionally minimalistic. By demonstrating my ability to create and 
                  manage functions independently, I aim to highlight my competence in this area to 
                  potential employers.`,
         app: 'http://www.johnspriggs.com',
         github: 'https://github.com/spriggs81/portfolio'
      }, {
         title: 'PM2-Watcher',
         app_type: 'NPM Node Module',
         app_tech: 'NodeJS, ExpressJS, Pm2, JavaScript, HTML5 / CSS3',
         reason: `While collaborating with PM2, I identified a recurring challenge wherein minor issues would 
                  often escalate into significant problems due to a lack of timely detection. To address this 
                  issue proactively, I developed an application that monitors PM2 processes and notifies 
                  relevant stakeholders before an issue reaches a critical stage. This application promptly 
                  sends out email notifications when processes go down and provides updates when they are 
                  restored. By implementing this solution, I aimed to ensure prompt awareness and response to 
                  process disruptions, thereby improving overall operational efficiency.`,
         app: 'https://www.npmjs.com/package/pm2-watcher',
         github: 'https://www.github.com/spriggs81/pm2-watcher'
      }, {
         title: 'Error Logs',
         app_type: 'Web Application',
         app_tech: 'NodeJS, ExpressJS, EJS, Event-Stream, SQL-Formatter, & Bootstrap 4.3.1',
         reason: `I spearheaded the development of a project aimed at enhancing our team's log review process 
                  for identifying client issues. The application I created transformed complex JSON-like strings 
                  into a more readable format, streamlining the analysis workflow. Additionally, I incorporated a 
                  powerful search functionality to enable our team to efficiently locate specific problems amidst 
                  the clutter of extensive log data. This initiative significantly improved our ability to swiftly 
                  pinpoint and address client issues, ultimately enhancing our troubleshooting capabilities and 
                  optimizing overall productivity.`,
         github: 'https://www.github.com/spriggs81/error_logs'
      }, {
         title: 'Account Manager Reports',
         app_type: 'node application',
         app_tech: 'NodeJS, JavaScript, Node-Zendesk, Nodemailer',
         reason: `Recognizing the time-consuming task of report generation for our account managers, I was approached 
                  by my lead, who had recently transitioned into a managerial role. Having previously developed an 
                  application for the former manager, I was entrusted with finding a solution to streamline this 
                  process. Understanding the burden of spending an hour and a half each day on reports, I leveraged the 
                  Zendesk API to create a custom app. To simplify the workflow, I provided my manager with a convenient 
                  bat file that, when double-clicked, generated the same report within a mere minute. This initiative 
                  not only alleviated the significant time investment but also empowered my manager to focus more 
                  effectively on critical responsibilities.`
      }, {
         title: 'Client Survey Project (Zendesk Issue)',
         app_type: 'web application',
         app_tech: 'NodeJS, ExpressJS, EJS, Node-Zendesk',
         reason: `Recognizing the need for a user satisfaction survey to assess the support services provided by our team, 
                  my manager attempted to implement this functionality using Zendesk automations. However, the system 
                  failed to function as intended. Tasked with investigating the issue, I discovered that the automation 
                  was not triggered when a ticket reached a closed status, possibly due to limitations in our subscription 
                  plan. To address this challenge, I took initiative and utilized the Zendesk API to develop a customized 
                  program tailored to our specific requirements. This solution successfully handled the survey process, 
                  ensuring that users received prompt feedback and enabling our team to gather valuable insights into 
                  customer satisfaction.`,
         github: 'https://github.com/spriggs81/Zendesk_Survey_Update'
      }, {
         title: 'Support Tool',
         app_type: 'web application',
         app_tech: 'NodeJS, ExpressJS, PassportJS, MongoDB, MongooseJS, EJS, & Semantic UI',
         reason: `Recognizing the limitations of relying on a tool managed by another team for accessing crucial information, 
                  I took it upon myself to develop a custom app to address this challenge. Our team often faced difficulties 
                  as the existing tool was infrequently updated, and we had important updates and notes that needed to be 
                  recorded. With the aim of providing a more efficient solution, I created an app that allowed our team to 
                  manage the information independently. Regrettably, despite its positive reception within our team and among 
                  other teams, the decision was made by the company that adopting a new tool would not be feasible in terms of 
                  productivity. Nonetheless, I am proud of the app I created and the value it brought to our immediate team 
                  and beyond.`,
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
      text: 'Here\'s how you can reach me: 😊\nOr By\n Email: spriggsjohnw@gmail.com'
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
