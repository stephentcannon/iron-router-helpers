Package.describe({
  name: 'steeve:iron-router-helpers',
  summary: 'a package of iron router helpers',
  version: '0.0.1',
  git: 'https://github.com/stephentcannon/iron-router-helpers.git'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0');
  
  api.use([
    'templating',
    'iron:router'
    ], 'client');
    
  api.addFiles('steeve:iron-router-helpers.js', 'client');
  
});

