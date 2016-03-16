angular
	.module('bidwin')
	.directive('propertiesElement', function() {
  		'use strict'

		var properties = {}

		properties.templateUrl =  '/webcomponents/properties-element.html'

		properties.restrict = 'E'

		properties.scope = {
			data: '=',
			saveProperties: '&onSave',
			changeText: '='
		}
		
		properties.link = function (scope, element, attrs) {
			
			scope.save = function () {
				// call the method of controller from here
			}


			scope.changeText = function (data, call) {
				parserData(data)
				if (call  && call !== undefined ) call(data)
			}

			function parserData (elementData) {
				var inputElement =  document.createElement('input')
				element.append(inputElement)
			}
		}

		return properties 
	})