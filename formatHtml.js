const dom = require('jsdom');
const { JSDOM } = dom;
const _ = require('lodash');
const mammoth = require("mammoth");
 
let options = {
    styleMap: [
	    "p[style-name='Title'] => h1.title",
		"p[style-name='Subtitle'] => h2.subtitle",
		"r.ListLabel1 => p.notsure",
		"r.ListLabel2 => p.notsure",
		"r.ListLabel3 => p.notsure",
		"r.ListLabel4 => p.notsure",
		"r.ListLabel5 => p.notsure",
		"r.ListLabel6 => p.notsure",
		"r.ListLabel7 => p.notsure",
		"r.ListLabel8 => p.notsure",
		"r.ListLabel9 => p.notsure",
		"r.ListLabel10 => p.notsure",
		"r.ListLabel11 => p.notsure",
		"r.ListLabel12 => p.notsure",
		"r.ListLabel13 => p.notsure"
    ]
};

let getTextFromElem = (elem) => elem.textContent;

const formatDomData = (html,fulfill,reject) => {
	let titles = html.querySelectorAll('.title');
	let subtitles = html.querySelectorAll('.subtitle');
	let texts = undefined;

	let formatted = {
		titles: _.map(titles,(title)=> getTextFromElem(title)),
		subtitles: _.map(subtitles,(subtitle)=> getTextFromElem(subtitle)),
		texts: _.map(texts,(text)=> getTextFromElem(text))
	};
	fulfill(formatted);
};

function fetchFileData(){
	return new Promise((fulfill,reject)=>{
		mammoth.convertToHtml({path: "LinksNQuotations.docx"}, options)
			.then((result)=> {
				let html = JSDOM.fragment(result.value);
				formatDomData(html,fulfill,reject)
			});
	});
}

fetchFileData().then(works => console.log(works));

module.exports = {
	fetchFileData: fetchFileData,
}