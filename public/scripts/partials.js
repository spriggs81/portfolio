const part = {};

part.head = () => {
   const head = [{
      main: 'head',
      type: 'meta',
      setAtt: {
         charset: 'utf-8'
      }
   }, {
      main: 'head',
      type: 'title'
   }, {
      main: 'head',
      type: 'link',
      href: './public/stylesheet/master.css',
      setAtt: {
         rel: 'stylesheet'
      }
   }, {
      main: 'head',
      type: 'link',
      href: './public/stylesheet/game.css',
      setAtt: {
         rel: 'stylesheet'
      }
   }, {
      main: 'head',
      type: 'link',
      href: './public/images/favicon.ico',
      setAtt: {
         rel: 'icon',
         type: "image/x-icon"
      }
   }, {
      main: 'head',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
      setAtt: {
         rel: 'stylesheet'
      }
   }];
   app.loadUp(head);
}

part.navBar = () => {
   const navBar = [{
      main: 'nav',
      type: 'div',
      cn: 'logo'
   }, {
      main: '.logo',
      type: 'img',
      src: './public/images/logo.gif',
      setAtt: {
         alt: 'picutre of me'
      }
   }, {
      main: 'nav',
      type: 'ul'
   }];
   const createItems = ['bio', 'skills', 'projects', 'game', 'contact'];
   const menuItems = [];
   for (const item of createItems) {
      const menu = {
         main: 'nav ul',
         type: 'li',
         html: '<span>'+item+'</span>'
      };
      menuItems.push(menu);
   }
   app.loadUp(navBar);
   app.loadUp(menuItems);
}

part.footer = (page) => {
   const lastDate = Date.parse('06/20/2023');
   const date = 1;
   const days = Math.floor(((((Date.now() - lastDate) / 1000) / 60) / 60) / 24);
   const ending = days > 0 ? days + ' days ago' : 'Today';
   const footer = [{
      main: 'footer',
      type: 'hr'
   }, {
      main: 'footer',
      type: 'div',
      cn: 'footer-holder'
   }, {
      main: '.footer-holder',
      type: 'span',
      cn: 'left-side',
      text: page
   }, {
      main: '.footer-holder',
      type: 'span',
      cn: 'middle',
      html: '<img id="linkedin" class="url" src="./public/images/LI-Logo.png"/><span class="slide"> || </span><img id="github" class="url" src="./public/images/GitHub_Logo.png" />'
   }, {
      main: '.footer-holder',
      type: 'span',
      cn: 'right-side',
      text: 'Last Updated: ' + ending
   }];
   app.removeAll('footer');
   app.loadUp(footer)
}
