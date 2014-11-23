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

	var addElement = function(element) {
		console.log(this);
		store.add(element);
	};

	var updateView = function(text) {
		inputView.clear(text);
	};

	inputView.on("addElement", addElement);
	store.on("updateView", updateView);
};


UAM.InputView = function (inputView) {
	UAM.EventEmitter.call(this);

	var button= document.querySelector('#button');
	var textInput = inputview

	this.addElement = function() {
		var text = textInput.value;
		text = 'dddd';
		if(text) {
			console.log(this);
			this.emit("addElement",text);
		}
		else
			console.log('Nic nie wpisales');
	};

	this.clear = function() {
		if(text) {
			this.textInput.value = "";
		}
	}

	button.addEventListener("click",this.addElement());
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);


ListCtrl = function (listView,store) {

	var drawElement = function(data) {
		listView.drawElement(data);
	}

	var updateState = function(className) {
		store.update(className);
	}

	store.on("elementAdded",drawElement);
	listView.on("updateState", updateState);
};


UAM.ListView = function (listView) {
	UAM.EventEmitter.call(this);

	this.list= listView;

	this.drawElement = function(data) {
		element = document.createElement('li');
    	element.innerHTML = data;
      	element.className = 'listItem';

    	element.addEventListener("click", this.updateState(element));

    	this.list.appendChild(element);
	};

	this.updateState = function(element){
    	if (element.className =='listItem')
    		element.className == 'doneItem';
    	else
    		element.className =='listItem';

    	this.emit("updateState", element.className);
    }

};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);


FooterCtrl = function (footerView,store) {

	var updateData = function(all, done) {
		footerView.updateCounter(all,done);
	}

	store.on("updateFooter",updateData);
};

UAM.FooterView = function (footerView) {
	UAM.EventEmitter.call(this);

	elementsCounter = document.querySelector('#all');
	elementsDone = document.querySelector('#done');
	elementsNotDone = document.querySelector('#notdone');

	this.updateCounter = function(all, done) {
		elementsCounter.value = all;
		elementsDone.value = done;
		elementsNotDone.value = all - done;
	};

};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);
