angular
	.module('bidwin', [])


angular
	.module('bidwin')
	.controller('EditorController', EditorController)

function EditorController () {
	var ec = this

	ec.inputs = [
		{
			name: 'text',
			type:'text'
		},
		{
			name: 'password',
			type:'password'
		}]

	ec.currentInputs = []

	ec.addElement = function (element) {
		element.id = Math.floor(Math.random(new Date().getTime()) * 90)
		ec.currentInputs.push(element)		
	}

	ec.loadAttributes = function (item) {
		ec.attributes = item
		
		ec.changeText({name:'dawin ossa', age:20}, function (response) {
			alert(response)
		})
	}

	ec.saveAttributes = function (properties) {
		console.log('save properties', properties)
	}
}

/*
var input =  {
	name:'InputText Html5',
	tag: 'input',
	attributes: [
		{
			name: 'inputelement',
			type: 'text',
			placeholder: 'Enter name',
			required: true,
			autocomplete: true
		}
	]
}

var input2 =  {
	name:'inputpassword',
	tag: 'input',
	attributes: [
		{
			name: 'inputpassword',
			type: 'password',
			placeholder: 'Enter a password',
			required: true
		}
	]
}

function WinMakeTags () {
	this.inputs = []
}

WinMakeTags
	.prototype.add = function(input) {
		this.controlsList = 'listControls' 
		this.inputs.push(input)
	}

WinMakeTags
	.prototype.make = function() {
		for (var i in this.inputs) {
			var input = this.inputs[i]
				
			if (input.hasOwnProperty('name')) {
				// create new element
				var inputElement =  document.createElement(input.tag)
				var attr = input.attributes
				
				for (var at in attr)  {	
					var keys = Object.keys(attr[at])
					for (var key in keys ) {
						var t = keys[key]

						var att = document.createAttribute(t)
						if (attr[at][t] !== true) {
							// not set value
							att.value = attr[at][t]
						}

						inputElement.setAttributeNode(att);
					}
				}
				addControlToPanel(input.name) 
			}		
			document.body.appendChild(inputElement)
		}

		function addControlToPanel (element) {
			var panel = document.querySelector('#listControls')
			var item = document.createElement('li')
			item.appendChild(document.createTextNode(element))
			panel.appendChild(item)
		}
	}

var wmt = new WinMakeTags()
wmt.add(input)
wmt.add(input2)
wmt.make()
*/