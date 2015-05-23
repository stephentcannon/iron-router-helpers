Package.describe({
  name: 'steeve:iron-router-helpers',
  summary: 'a package of iron router template helpers',
  version: '0.0.4',
  git: 'https://github.com/stephentcannon/iron-router-helpers.git'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0');
  
  api.use([
    'templating',
    'iron:router@1.0.1'
    ], 'client');
    
  api.addFiles('steeve:iron-router-helpers.js', 'client');
  
});

