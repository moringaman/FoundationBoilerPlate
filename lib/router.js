Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    
    this.route('home',{
        path: '/',
        template: 'home'
    });
    
    
    this.route('about', {
        path: '/about',
        template: 'about'
    });
      

    
});