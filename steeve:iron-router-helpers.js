if (Meteor.isClient) {
  Template.registerHelper('isRoute', function(x){
    var route = Iron.Location.get().path.split("/");
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
    var route = Iron.Location.get().path.split("/");
    if(route[x] == y){
      return true;
    }
  });
}