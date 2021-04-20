let new_array = [];
console.log(new_array);

class XHR {
	static getFile(file) {
		let request = new XMLHttpRequest();
		request.open('GET', file, 'true')
		request.send();
		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4) {
				if (request.status >= 200 && request.status < 400) {
					let newObjData = JSON.parse(request.responseText);
					new User(newObjData);
				}
			}
		})
	}
}

class User {
	constructor(data) {
		this.makeUser(data);
		this.combineArray();
	}
	makeUser(data) {
		for (let key in data) {
			this[key] = data[key];
		}
	}
	combineArray() {
		if (Array.isArray(this.children) && this.children.length > 0) {
			this.children.forEach(elem => {
				new_array.push(elem);
			});
		};
	}
}

XHR.getFile('./json/data.json');
XHR.getFile('./json/data2.json');







