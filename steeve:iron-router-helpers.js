if (Meteor.isClient) {
  Template.registerHelper('isRoute', function(x){
    var route = Iron.Location.get().pathname.split("/");
    //console.log(route[2]);
    //console.log(this);
    //console.log(x);
    if(route[2]){
      if(route[2] == x){
        return true;
      } else {
        return false;
      }
    } else if (route[1]){
      if(route[1] == x){
        return true;
      } else {
        return false;
      }
    }
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

  Template.registerHelper('getRouteQuery', function(){
    return Iron.Location.get().query
  });

  Template.registerHelper('getRouteQueryObject', function(x){
    return Iron.Location.get().queryObject[x];
  });
}