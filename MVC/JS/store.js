UAM.Store = function () {
	UAM.EventEmitter.call(this);

	this.data  = [];
	this.selected = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
	this.data.push(data);
	this.emit("elementAdded", data);
	this.emit("updateView", data);
};

UAM.Store.prototype.update = function (data, ifNew) {

	if (data =='doneItem')
    	this.selected ++;
    else if (!ifNew)
    	this.selected --;
    
    this.emit("updateFooter", this.data.length, this.selected);
};
