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

UAM.Store.prototype.update = function (data) {

	if (data =='listItem' && this.selected>0)
    	this.selected --;
    else if (data =='doneItem')
    	this.selected ++;

    this.emit("updateFooter", this.data.length, this.selected);
};
