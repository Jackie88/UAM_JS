window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();

	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('footer'));

	new InputCtrl(inputView, store);
	new ListCtrl(listView, store);
	new FooterCtrl(footerView, store);
});

InputCtrl = function (inputView,store) {

	this.addElement = function(element) {
		store.add(element);
	};

	this.updateView = function(text) {
		inputView.clear(text);
	};

	inputView.on("addElement", this.addElement);
	store.on("updateView", this.updateView);
};


UAM.InputView = function (inputView) {
	UAM.EventEmitter.call(this);

	this.textInput = document.querySelector('#input');
	var button = document.querySelector('#button');

	this.addElement = function() {
		text = this.textInput.value;
		
		if(text) {
			this.emit("addElement",text);
		}
		else
			console.log('Nic nie wpisales');
	};

	this.clear = function() {
		if(text) {
			this.textInput.value = "";
		}
	};

	button.addEventListener('click',this.addElement.bind(this));
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);


ListCtrl = function (listView,store) {

	this.drawElement = function(data) {
		listView.drawElement(data);
	}

	this.updateView = function(className, ifNew) {
		store.update(className, ifNew);
	}

	store.on("elementAdded",this.drawElement);
	listView.on("updateView", this.updateView);
	
};


UAM.ListView = function (listView) {
	UAM.EventEmitter.call(this);

	this.list= listView;

	this.drawElement = function(data) {
		var element = document.createElement('li');
    		element.innerHTML = data;
      		element.className = 'listItem';
      		var me = this;

    		element.addEventListener("click", function() {
    			me.changeState(element);
    	});

    	this.list.appendChild(element);

    	this.updateView(element, true);
	};

	this.changeState = function(element) {
		
		if (element.className =='listItem')
    		element.className = 'doneItem';
    	else
    		element.className ='listItem';

    	this.updateView(element, false);
	};

	this.updateView = function(element, ifNew){
		
    	this.emit("updateView", element.className, ifNew);
    };

};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);


FooterCtrl = function (footerView,store) {

	this.updateData = function(all, done) {
		footerView.updateCounter(all,done);
	};

	store.on("updateFooter",this.updateData);
};

UAM.FooterView = function (footerView) {
	UAM.EventEmitter.call(this);

	this.elementsCounter = document.querySelector('#all');
	this.elementsDone = document.querySelector('#done');
	this.elementsNotDone = document.querySelector('#notdone');

	this.updateCounter = function(all, done) {
		this.elementsCounter.innerHTML = "Wszystkie : " + all;
		this.elementsDone.innerHTML  = "Zrobione : " + done;
		x=all - done;
		this.elementsNotDone.innerHTML = "Nie zrobione : "  + x;
	};

};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);
