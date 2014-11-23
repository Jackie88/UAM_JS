(function (global) {

	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere

		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {

		var me = this;
		var listenerObj={
			func : listener,
			cont : context || window
		};

		if(!this.listeners[eventName])
			this.listeners[eventName] = [];

		this.listeners[eventName].push(listenerObj);

		return function() {
			var index = me.listeners[eventName].indexOf(listenerObj);
			if (index > -1)
				me.listeners[eventName].splice(index,1);
		};
	};

	EE.prototype.emit = function (eventName) {

	listeners = this.listeners[eventName];
	if (listeners) {
		args = [];

		for (var i = 1 ; i < arguments.length; i++) {
			args.push(arguments[i]);
		};


		for (i = 0; i < listeners.length; i++) {
  			listeners[i].func.apply(listeners[i].cont, args);
		};

	}else
		console.log('eventu nie ma');
	};

	global.UAM.EventEmitter = EE;

}(window));
