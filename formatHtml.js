const dom = require('jsdom');
const { JSDOM } = dom;
const _ = require('lodash');

let getTextFromElem = (elem) => elem.textContent;

const formatDomData = (dom,fulfill,reject) => {
	let titles = dom.window.document.getElementsByClassName('P2');
	let subtitles = dom.window.document.getElementsByClassName('Subtitle');
	let texts = dom.window.document.getElementsByClassName('Standard');

	let formatted = {
		titles: _.map(titles,(title)=> getTextFromElem(title)),
		subtitles: _.map(subtitles,(subtitle)=> getTextFromElem(subtitle)),
		texts: _.map(texts,(text)=> getTextFromElem(text))
	};
	fulfill(formatted);
};

function fetchFileData(){
	return new Promise((fulfill,reject)=>{
		JSDOM.fromFile("proto.html",{ includeNodeLocations: true })
			.then((dom)=> formatDomData(dom,fulfill,reject));
	});
}
fetchFileData().then((re)=>{
	console.log("yey");
	console.log(re);
})
module.exports = {
	fetchFileData: fetchFileData,
}