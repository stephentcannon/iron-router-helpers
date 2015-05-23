if (Meteor.isClient) {
  Template.registerHelper('isRoute', function(x){
    var route = Iron.Location.get().pathname.split("/");
    // console.log('x: ' + x);
    // console.log('route[2]: ' + route[2]);
    // console.log('route[1]: ' + route[1]);
    var retVal = false;
    if(route[2]){
      if(route[2] == x){
        retVal = true;
      }
    } else if (route[1]){
      if(route[1] == x){
        return true;
      }
    }
    // console.log('retVal: ' + retVal);
    return retVal;
  });
  
  Template.registerHelper('isRouteByPos', function(x, y){
    // console.log('x: ' + x);
    // console.log('y: ' + y);
    var route = Iron.Location.get().pathname.split("/");
    //console.log('route[x]: ' + route[x]);
    if(route[x] == y){
      return true;
    }
  });

  Template.registerHelper('isInRoute', function(x){

  });

  Template.registerHelper('getPathValByPos', function(x){
    var route = Iron.Location.get().pathname.split("/");
    return route[x];
  });

  Template.registerHelper('getRouteQuery', function(){
    return Iron.Location.get().query
  });

  Template.registerHelper('getRouteSearch', function(){
    return Iron.Location.get().search
  });

  Template.registerHelper('getRouteQueryObject', function(x){
    return Iron.Location.get().queryObject[x];
  });
}