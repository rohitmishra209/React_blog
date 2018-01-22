

export class Api {
	
	constructor(argument) {
	
	}
	static contentTypes(){
        return new Promise((resolve) => {
        	fetch('https://app.contentstack.com/v3/locales?include_all=true').then(function(response) {
				resolve(response.json());
			}).catch(function(err) {
				resolve(err.json());
			});
        });
	}
}