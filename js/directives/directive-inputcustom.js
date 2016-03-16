angular
	.module('bidwin')
	.directive('inputCustom', function() {
  		'use strict'

		var inputCustom = {}

		inputCustom.templateUrl =  (element, attr) => {
			return  `/webcomponents/input-${attr.type}.html`
		}

		inputCustom.restrict = 'E'

		inputCustom.scope = {
			info: '=',
			duplicate: '&onDuplicate',
			view: '&onView'
		}

		inputCustom.transclude = true
		
		inputCustom.link = function (scope, element, attrs) {

			var remove = document.querySelector('ul#actions>li#close')

			remove.addEventListener('click', function () {
				element.empty()
			}, false)

			function addControls () {

			}

			function showPanelAttributes () {
				alert('show panel attributes')
			}
		}

		return inputCustom 
	})