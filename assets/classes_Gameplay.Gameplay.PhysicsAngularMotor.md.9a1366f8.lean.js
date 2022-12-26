import{_ as e,c as t,o as a,a as r}from"./app.b96ad919.js";const y=JSON.parse('{"title":"Class: PhysicsAngularMotor","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Accessors","slug":"accessors","link":"#accessors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Accessors","slug":"accessors-1","link":"#accessors-1","children":[{"level":3,"title":"constraintTarget1","slug":"constrainttarget1","link":"#constrainttarget1","children":[]},{"level":3,"title":"constraintTarget2","slug":"constrainttarget2","link":"#constrainttarget2","children":[]},{"level":3,"title":"enable","slug":"enable","link":"#enable","children":[]},{"level":3,"title":"forwardVector","slug":"forwardvector","link":"#forwardvector","children":[]},{"level":3,"title":"guid","slug":"guid","link":"#guid","children":[]},{"level":3,"title":"lockStatus","slug":"lockstatus","link":"#lockstatus","children":[]},{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"netStatus","slug":"netstatus","link":"#netstatus","children":[]},{"level":3,"title":"parent","slug":"parent","link":"#parent","children":[]},{"level":3,"title":"relativeLocation","slug":"relativelocation","link":"#relativelocation","children":[]},{"level":3,"title":"relativeRotation","slug":"relativerotation","link":"#relativerotation","children":[]},{"level":3,"title":"relativeScale","slug":"relativescale","link":"#relativescale","children":[]},{"level":3,"title":"rightVector","slug":"rightvector","link":"#rightvector","children":[]},{"level":3,"title":"staticStatus","slug":"staticstatus","link":"#staticstatus","children":[]},{"level":3,"title":"tag","slug":"tag","link":"#tag","children":[]},{"level":3,"title":"torque","slug":"torque","link":"#torque","children":[]},{"level":3,"title":"torqueStrength","slug":"torquestrength","link":"#torquestrength","children":[]},{"level":3,"title":"transform","slug":"transform","link":"#transform","children":[]},{"level":3,"title":"upVector","slug":"upvector","link":"#upvector","children":[]},{"level":3,"title":"useUpdate","slug":"useupdate","link":"#useupdate","children":[]},{"level":3,"title":"visible","slug":"visible","link":"#visible","children":[]},{"level":3,"title":"worldLocation","slug":"worldlocation","link":"#worldlocation","children":[]},{"level":3,"title":"worldRotation","slug":"worldrotation","link":"#worldrotation","children":[]},{"level":3,"title":"worldScale","slug":"worldscale","link":"#worldscale","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"addDestroyCallback","slug":"adddestroycallback","link":"#adddestroycallback","children":[]},{"level":3,"title":"asyncGetScriptByName","slug":"asyncgetscriptbyname","link":"#asyncgetscriptbyname","children":[]},{"level":3,"title":"attachToGameObject","slug":"attachtogameobject","link":"#attachtogameobject","children":[]},{"level":3,"title":"clone","slug":"clone","link":"#clone","children":[]},{"level":3,"title":"deleteDestroyCallback","slug":"deletedestroycallback","link":"#deletedestroycallback","children":[]},{"level":3,"title":"destroy","slug":"destroy","link":"#destroy","children":[]},{"level":3,"title":"detachFromGameObject","slug":"detachfromgameobject","link":"#detachfromgameobject","children":[]},{"level":3,"title":"getBoundingBoxSize","slug":"getboundingboxsize","link":"#getboundingboxsize","children":[]},{"level":3,"title":"getBounds","slug":"getbounds","link":"#getbounds","children":[]},{"level":3,"title":"getChildByGuid","slug":"getchildbyguid","link":"#getchildbyguid","children":[]},{"level":3,"title":"getChildByName","slug":"getchildbyname","link":"#getchildbyname","children":[]},{"level":3,"title":"getChildren","slug":"getchildren","link":"#getchildren","children":[]},{"level":3,"title":"getChildrenBoxCenter","slug":"getchildrenboxcenter","link":"#getchildrenboxcenter","children":[]},{"level":3,"title":"getCollision","slug":"getcollision","link":"#getcollision","children":[]},{"level":3,"title":"getForwardVector","slug":"getforwardvector","link":"#getforwardvector","children":[]},{"level":3,"title":"getRelativeLocation","slug":"getrelativelocation","link":"#getrelativelocation","children":[]},{"level":3,"title":"getRelativeRotation","slug":"getrelativerotation","link":"#getrelativerotation","children":[]},{"level":3,"title":"getRelativeScale","slug":"getrelativescale","link":"#getrelativescale","children":[]},{"level":3,"title":"getRightVector","slug":"getrightvector","link":"#getrightvector","children":[]},{"level":3,"title":"getScriptByGuid","slug":"getscriptbyguid","link":"#getscriptbyguid","children":[]},{"level":3,"title":"getScriptByName","slug":"getscriptbyname","link":"#getscriptbyname","children":[]},{"level":3,"title":"getScripts","slug":"getscripts","link":"#getscripts","children":[]},{"level":3,"title":"getSourceAssetGuid","slug":"getsourceassetguid","link":"#getsourceassetguid","children":[]},{"level":3,"title":"getTransform","slug":"gettransform","link":"#gettransform","children":[]},{"level":3,"title":"getUpVector","slug":"getupvector","link":"#getupvector","children":[]},{"level":3,"title":"getVisibility","slug":"getvisibility","link":"#getvisibility","children":[]},{"level":3,"title":"getWorldLocation","slug":"getworldlocation","link":"#getworldlocation","children":[]},{"level":3,"title":"getWorldRotation","slug":"getworldrotation","link":"#getworldrotation","children":[]},{"level":3,"title":"getWorldScale","slug":"getworldscale","link":"#getworldscale","children":[]},{"level":3,"title":"isRunningClient","slug":"isrunningclient","link":"#isrunningclient","children":[]},{"level":3,"title":"onDestroy","slug":"ondestroy","link":"#ondestroy","children":[]},{"level":3,"title":"onStart","slug":"onstart","link":"#onstart","children":[]},{"level":3,"title":"onUpdate","slug":"onupdate","link":"#onupdate","children":[]},{"level":3,"title":"ready","slug":"ready","link":"#ready","children":[]},{"level":3,"title":"setCollision","slug":"setcollision","link":"#setcollision","children":[]},{"level":3,"title":"setLocationAndRotation","slug":"setlocationandrotation","link":"#setlocationandrotation","children":[]},{"level":3,"title":"setRelativeLocation","slug":"setrelativelocation","link":"#setrelativelocation","children":[]},{"level":3,"title":"setRelativeRotation","slug":"setrelativerotation","link":"#setrelativerotation","children":[]},{"level":3,"title":"setRelativeScale","slug":"setrelativescale","link":"#setrelativescale","children":[]},{"level":3,"title":"setTransform","slug":"settransform","link":"#settransform","children":[]},{"level":3,"title":"setVisibility","slug":"setvisibility","link":"#setvisibility","children":[]},{"level":3,"title":"setWorldLocation","slug":"setworldlocation","link":"#setworldlocation","children":[]},{"level":3,"title":"setWorldRotation","slug":"setworldrotation","link":"#setworldrotation","children":[]},{"level":3,"title":"setWorldScale","slug":"setworldscale","link":"#setworldscale","children":[]},{"level":3,"title":"asyncFind","slug":"asyncfind","link":"#asyncfind","children":[]},{"level":3,"title":"asyncSpawnGameObject","slug":"asyncspawngameobject","link":"#asyncspawngameobject","children":[]},{"level":3,"title":"find","slug":"find","link":"#find","children":[]},{"level":3,"title":"findGameObjectByTag","slug":"findgameobjectbytag","link":"#findgameobjectbytag","children":[]},{"level":3,"title":"getGameObjectByName","slug":"getgameobjectbyname","link":"#getgameobjectbyname","children":[]},{"level":3,"title":"getGameObjectsByName","slug":"getgameobjectsbyname","link":"#getgameobjectsbyname","children":[]},{"level":3,"title":"spawnGameObject","slug":"spawngameobject","link":"#spawngameobject","children":[]}]}],"relativePath":"classes/Gameplay.Gameplay.PhysicsAngularMotor.md"}'),d={name:"classes/Gameplay.Gameplay.PhysicsAngularMotor.md"},i=r("",1356),n=[i];function o(s,h,l,c,p,f){return a(),t("div",null,n)}const m=e(d,[["render",o]]);export{y as __pageData,m as default};
