
var UPDATEALL = function() {

    ply.updateCanDieYet();
    
    for(var b in bullets){
        if(bullets[b].updateCanDieYet()){
            bullets.splice(b,1);
        }
    }
    
};


window.setTimeout(function(){window.setInterval(UPDATEALL,15);}, 500);
window.setTimeout(function(){window.setInterval(drawScene,30);}, 500);
