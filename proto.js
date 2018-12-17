const dom = require('jsdom');
const { JSDOM } = dom;



const doT = (dom) => {
	console.log(dom.window.document.getElementById('_u5btpjp1sk9c'));
};

const t = JSDOM.fromFile("proto.html",{ includeNodeLocations: true }).then(doT);
