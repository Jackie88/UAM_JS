angular.module('email-inbox').

directive("inboxList", function() {
	return {
		restrict: 'E',
		scope: {
			emails: '='
		},
		template: '<ul id="list" class="emailList"></ul>',
		link: function(scope, element, attributes) {

			var list = element[0].childNodes[0];
			list = angular.element(list);
			var emailsList = attributes;
			scope.$watch(attributes.emails, function(value, oldValue) {
				//value.reverse();
				if(value && oldValue) {
					if(value.length === oldValue.length) {
						return;
					}
				}

				while (list[0].firstChild) {
    				list[0].removeChild(list[0].firstChild);
				}

				if(value) {
					for(var i=value.length-1;i>=0;i--) {
						list.append(prepareEmail(value[i]));
					}
				}

			});

			scope.deleteEmail = function (mailId) {
    		};

			var prepareEmail = function(email) {
				var listElement = document.createElement("li");
				listElement.id = email.id;
				listElement.className = "emailList";

				var header = document.createElement("h3");
				header.innerHTML = "Od: " + email.sender;
				var title = document.createElement("p");
				title.innerHTML = "Tytuł: " + email.title;
				var content = document.createElement("p");
				content.className = "content";
				content.innerHTML = email.content;
				
				var deleteButton = document.createElement("button");
				deleteButton.id = email.id;
				deleteButton.innerHTML = "Usuń";
				
				
				listElement.appendChild(header);
				listElement.appendChild(title);
				listElement.appendChild(content);
				listElement.appendChild(deleteButton);

				return listElement;
			};
		}
	};
});