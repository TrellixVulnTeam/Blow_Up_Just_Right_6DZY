!function(t){var e={};function o(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=2)}([function(t,e){var o={dist:function(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}};t.exports=o},function(t,e,o){var i=o(0),s=document.getElementById("oneScoreEl");function n(t){this.pos=t.pos,this.game=t.game,this.show=t.show}n.prototype.draw=function(t){if(this.show){var e=new Image;e.src="https://i.pinimg.com/originals/5e/e7/5f/5ee75f45dfc654b7c86b20b7e4589593.jpg",this.game.ball[2].pos[0]===this.pos[0]&&t.drawImage(e,this.pos[0]-20,this.pos[1]-5,20,205),this.game.ball[3].pos[0]===this.pos[0]&&t.drawImage(e,this.pos[0],this.pos[1]-5,20,205)}},n.prototype.changePosts=function(){var t,e,o,i=this.randomX(),s=this;e=i-20,o=(t=i+(200*Math.random()+200))+20,this.game.ball[2].pos[0]=i,this.game.ball[3].pos[0]=t,this.game.ball[4].pos[0]=e,this.game.ball[5].pos[0]=o,this.game.ball[2].show=!0,this.game.ball[3].show=!0,setTimeout((function(){s.game.ball[2].show=!1,s.game.ball[3].show=!1}),1e3)},n.prototype.randomX=function(){return 900*Math.random()+50},n.prototype.changeShow=function(){this.show=!this.show},n.prototype.collideWith=function(t){var e=this;s.innerHTML="Hit Pole",t.moving=!1,t.vel=[0,0],t.pos=[720,150],t.radius=10,this.changePosts(),setTimeout((function(){e.game.ball[2].show=!1,e.game.ball[3].show=!1}),1e3),e.game.onDrop=!1},n.prototype.isCollidedWith=function(t){return i.dist(this.pos,t.pos)<t.radius},t.exports=n},function(t,e,o){var i=o(3),s=o(6);document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas");t.width=i.DIM_X,t.height=i.DIM_Y;var e=t.getContext("2d"),o=new i(e);new s(o,e).start()}))},function(t,e,o){var i=o(4),s=o(5),n=o(1);o(0);function a(t){this.ctx=t,this.ball=[],this.timeUp=!1,this.onDrop=!1,this.newRecord=!1,this.tie=!1}a.BG_COLOR="#c2b280",a.DIM_X=innerWidth,a.DIM_Y=innerHeight,a.prototype.add=function(t){this.ball.push(t)},a.prototype.addBall=function(){var t=new i({pos:[720,150],game:this,vel:[0,0],radius:10,color:"red"});return this.add(t),t},a.prototype.addFloor=function(){var t=new s({pos:[720,711],game:this,radius:0,ctx:this.ctx});return this.add(t),t},a.prototype.addPost=function(){var t,e,o,i=this.randomX();e=i-20,o=(t=i+(200*Math.random()+200))+20;var s=new n({pos:[i,500],game:this,radius:0,show:!0,ctx:this.ctx});this.add(s);var a=new n({pos:[t,500],game:this,radius:0,show:!0,ctx:this.ctx});this.add(a);var r=new n({pos:[e,500],game:this,radius:0,show:!0,ctx:this.ctx});this.add(r);var l=new n({pos:[o,500],game:this,radius:0,show:!0,ctx:this.ctx});return this.add(l),[s,a,r,l]},a.prototype.allObjects=function(){return[].concat(this.ball)},a.prototype.checkCollisions=function(){for(var t=this.allObjects(),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var s=t[e],n=t[o];if(s.isCollidedWith(n)&&n instanceof i&&!(s instanceof i))if(s.collideWith(n))return}};var r=new Image;r.src="Desert_Sand_Texture-1203.jpg";var l=new Image;l.src="https://media.freestocktextures.com/cache/12/ef/12efb857005f76685eeb8b41d87571f0.jpg";var h=new Image;h.src="https://www.tonytextures.com/free-texture-gallery/sky/Sky_Clouds_Photo_Texture_A_P1119218.JPG",a.prototype.draw=function(t){t.clearRect(0,0,a.DIM_X,a.DIM_Y),t.fillStyle=a.BG_COLOR,t.fillRect(0,0,a.DIM_X,a.DIM_Y),t.drawImage(r,0,700,1440,200),t.drawImage(l,0,675,1440,25),t.drawImage(h,0,0,1440,675),t.font="30px Comic Sans MS",t.fillStyle="black",t.fillText("Click and Hold to Inflate Beach Ball Wherever You Click",50,105),t.fillText("Try to Land between Posts. Larger Ball Gives a Bigger Score!",50,135),t.fillText("Press the spacebar to start a timed round",50,200),t.fillStyle="blue",t.fillRect(50,200,591,1),t.fillStyle="black",t.fillText("Free Play:",50,300),t.fillText("Show Poles Again = l",50,340),t.fillText("New Poles = p",50,370),t.fillText("Reset Score = r",50,400),!0===this.timeUp&&(t.font="100px Arial",t.fillStyle="red",t.fillText("Time is up!",a.DIM_X/2,a.DIM_Y/2)),!0===this.newRecord&&(t.font="100px Arial",t.fillStyle="green",t.fillText("New Record!",a.DIM_X/2,a.DIM_Y/1.5)),!0===this.tie&&(t.font="100px Arial",t.fillStyle="yellow",t.fillText("Tied for record!",a.DIM_X/2,a.DIM_Y/1.5)),this.allObjects().forEach((function(e){e.draw(t)}))},a.prototype.moveObjects=function(t){this.allObjects().forEach((function(e){e instanceof i&&e.move(t)}))},a.prototype.randomX=function(){return 900*Math.random()+50},a.prototype.step=function(t){this.moveObjects(t),this.checkCollisions()},t.exports=a},function(t,e,o){var i=o(0);function s(t){this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.color=t.color,this.game=t.game,this.moving=!1,this.changeImage=!1}s.prototype.collideWith=function(t){},s.prototype.changeSize=function(t){(this.radius+t>0||t>0)&&(this.radius+=t)},s.prototype.startGravity=function(){this.game.ball[2].show=!0,this.game.ball[3].show=!0,this.moving=!0},s.prototype.moveSideways=function(t){this.pos[0]+=t};var n=new Image;n.src="beach-ball-clip-art-beach-ball.png",s.prototype.draw=function(t){!0===this.changeImage&&(n.src="beach-ball-clip-art-beach-ball.png"),t.save(),t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!0),t.clip(),t.drawImage(n,this.pos[0]-this.radius,this.pos[1]-this.radius,2*this.radius,2*this.radius),t.restore()},s.prototype.isCollidedWith=function(t){return i.dist(this.pos,t.pos)<this.radius+t.radius};s.prototype.gravity=function(){this.vel[1]=this.vel[1]+.5},s.prototype.move=function(t){this.moving&&this.gravity();var e=t/(1e3/60),o=this.vel[0]*e,i=this.vel[1]*e;this.pos=[this.pos[0]+o,this.pos[1]+i]},t.exports=s},function(t,e,o){o(0);var i=document.getElementById("scoreEl"),s=document.getElementById("oneScoreEl");function n(t){this.pos=t.pos,this.game=t.game,this.message=!1,this.score=0,this.one_score=0,i.innerHTML=this.score,s.innerHTML=this.one_score}n.prototype.draw=function(t){this.message&&(t.font="30px Comic Sans MS",t.fillStyle="black",t.fillText("Will this work????",500,500))},n.prototype.resetScore=function(){this.score=0,this.one_score=0,i.innerHTML=this.score,s.innerHTML=this.one_score},n.prototype.collideWith=function(t){var e,o,n=this;this.game.ball[2].pos[0]<this.game.ball[3].pos[0]?(e=this.game.ball[2].pos[0],o=this.game.ball[3].pos[0]):(e=this.game.ball[3].pos[0],o=this.game.ball[2].pos[0]),this.game.ball[0].pos[0]<e&&(message="You landed outside of the goal!",n.game.onDrop=!1);var a=Math.abs(this.game.ball[2].pos[0]-this.game.ball[3].pos[0]),r=Math.abs(this.game.ball[2].pos[0]-this.game.ball[3].pos[0])-2*this.game.ball[0].radius;if(r=r.toString(),!1!==t.moving)if(this.game.ball[0].pos[0]<e||this.game.ball[0].pos[0]>o)s.innerHTML="Missed",n.game.ball[2].changePosts(),setTimeout((function(){n.game.ball[2].show=!1,n.game.ball[3].show=!1}),1e3),n.game.onDrop=!1;else{var l=100-r/a*100;this.score+=Math.ceil(l),this.one_score=Math.ceil(l),i.innerHTML="".concat(this.score),s.innerHTML="".concat(this.one_score),n.game.ball[2].changePosts(),setTimeout((function(){n.game.ball[2].show=!1,n.game.ball[3].show=!1}),1e3),n.game.onDrop=!1}t.moving=!1,t.vel=[0,0],t.pos=[720,150],t.radius=10,this.game.ball[2].show=!0,this.game.ball[3].show=!0},n.prototype.isCollidedWith=function(t){return t.pos[1]+t.radius>=this.pos[1]},t.exports=n},function(t,e,o){o(1);function i(t,e){this.ctx=e,this.game=t,this.ball=this.game.addBall(),this.floor=this.game.addFloor(),this.post=this.game.addPost(),this.timeEl=document.getElementById("timeEl"),this.highScoreEl=document.getElementById("highScoreEl"),this.scoreEl=document.getElementById("scoreEl"),this.secs=30,this.timeEl.innerHTML=this.secs,this.tim}i.ADJUST={w:5,s:-5,x:-1,q:1,n:1},i.MOVE={a:-20,d:20,c:1,z:-1},i.prototype.bindKeyHandlers=function(){var t=this.ball,e=this.post,o=!1;Object.keys(i.ADJUST).forEach((function(e){var o=i.ADJUST[e];key(e,(function(){t.changeSize(o)}))})),setTimeout((function(){e[0].show=!1,e[1].show=!1}),1e3);var s,n=this;key("t",(function(){t.startGravity()})),key("r",(function(){n.floor.resetScore()})),key("space",(function(){n.secs=30,n.timeEl.innerHTML=n.secs,e[0].changePosts(),setTimeout((function(){e[0].show=!1,e[1].show=!1}),1e3),n.floor.resetScore(),clearInterval(n.tim),n.tim=setInterval((function(){if(n.secs-=1,n.timeEl.innerHTML=n.secs,0===n.secs)return clearInterval(n.tim),n.timeEl.innerHTML=n.secs,cancelAnimationFrame(s),a=0,t.startGravity(),o=!1,n.game.onDrop=!0,n.game.timeUp=!0,setTimeout((function(){n.game.timeUp=!1,n.game.onDrop=!1}),3e3),setTimeout((function(){n.timeEl.innerHTML=n.secs}),1e3),setTimeout((function(){n.highScoreEl.innerHTML===n.scoreEl.innerHTML&&(n.game.tie=!0),n.highScoreEl.innerHTML<n.floor.score&&(n.highScoreEl.innerHTML=n.scoreEl.innerHTML,n.game.newRecord=!0)}),1e3),setTimeout((function(){n.floor.score=0,n.scoreEl.innerHTML=0}),3e3),void setTimeout((function(){n.game.newRecord=!1,n.game.tie=!1}),3e3)}),1e3)}));var a=0;new CustomEvent("pressHold");function r(e){cancelAnimationFrame(s),e.preventDefault(),!1!==n.game.onDrop||!1!==n.game.timeUp||0!==e.button||"icon"===e.path[0].alt||e.path[0].firstElementChild||0!==a||!1!==o||(o=!0,requestAnimationFrame(h),t.pos[0]=e.offsetX)}function l(e){e.preventDefault(),!1!==n.game.onDrop||!1!==n.game.timeUp||0!==e.button||"icon"===e.path[0].alt||e.path[0].firstElementChild||(o=!1,cancelAnimationFrame(s),a=0,t.startGravity(),n.game.onDrop=!0)}function h(){!1===n.game.onDrop&&!1===n.game.timeUp&&a<210&&!0===o?(s=requestAnimationFrame(h),a++,t.radius+=a/50):(cancelAnimationFrame(s),o=!1,a=0,t.startGravity(),n.game.onDrop=!0)}window.addEventListener("mousedown",r,!1),window.addEventListener("mouseup",l,!1),window.addEventListener("mouseleave",l,!1),window.addEventListener("touchstart",r,!1),window.addEventListener("touchend",l,!1),window.addEventListener("pressHold",(function(t){t.preventDefault(),0==t.button&&t.preventDefault()}),!1),Object.keys(i.MOVE).forEach((function(e){var o=i.MOVE[e];key(e,(function(){t.moveSideways(o)}))})),key("l",(function(){e[0].show=!0,e[1].show=!0,setTimeout((function(){e[0].show=!1,e[1].show=!1}),1e3)})),key("k",(function(){e[0].show=!0,e[1].show=!0})),key("p",(function(){e[0].changePosts(),setTimeout((function(){e[0].show=!1,e[1].show=!1}),1e3)}))},i.prototype.start=function(){this.bindKeyHandlers(),this.lastTime=0,requestAnimationFrame(this.animate.bind(this))},i.prototype.animate=function(t){var e=t-this.lastTime;this.game.step(e),this.game.draw(this.ctx),this.lastTime=t,requestAnimationFrame(this.animate.bind(this))},t.exports=i}]);
//# sourceMappingURL=main.js.map