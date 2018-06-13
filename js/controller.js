// JavaScript Document
navigator.serviceWorker.register('/service_worker.js').then(function(reg){
	if(!navigator.serviceWorker.controller){
		return;
	}
	
if (reg.waiting){
	indexController._updateReady();
	return;
}

if(reg.installing){
	indexController._trackInstalling(reg.installing);
}

});
};

IndexController.prototype._trackInstalling = function(worker) {
	var indexController = this;
	
	worker.addEventListener('statechange', function(){
		if (worker.state == 'installed'){
			indexController._updateReady();
		}
	});
};