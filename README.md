iron-router-helpers
====================
a package of iron router template helpers

isRoute X
==========
evaluates position 2 and 1 in that order for X

````
 {{#if isRoute "something"}}
   it is
 {{else}}
   it isn't
  {{/if}}
````

isRouteByPos X,Y
=================

evaluates position Y for X


````
 {{#if isRoute "something" 4}}
   it is
 {{else}}
   it isn't
  {{/if}}
````

getRouteQuery
=============
returns Iron.Location.get().query

getRouteQueryObject x
====================

returns Iron.Location.get().queryObject[x]
