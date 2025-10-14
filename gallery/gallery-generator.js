// this script is only used for generating <a>, <img>, lightbox grids in gallery
// it does not run anywhere, it was only utilized for developer purposes

const folder = 'trochuJinak'

const urlPrefix = `gallery/${folder}/`;
const urlMinPrefix = `gallery/${folder}-min/`;



const images = [

{'title': 'Italská ambasáda v Praze – nečekané krupobití, 2018', 'path': '30_Italska-ambasada-v-Praze-2018-a-necekane-krupobiti.jpg'},
{'title': 'Oslava narozenin Anglické královny na Britské ambasádě v Praze, 2013', 'path': '31_Oslava-narozenin-Anglicke-kralovny-na-Britske-ambasade-v-Praze-2013.jpg'},


]

const generateGalleries = imgs => {
	let out = '';
	for (const img of imgs) {
		out += `\n          <a href="${urlPrefix}${img.path}" title="${img.title}" data-lightbox="${folder}" data-title="${img.title}">\n            <img loading="lazy" width="400" height="300" src="${urlMinPrefix}${img.path}" alt="${img.title}">\n          </a>`
	}
	console.log(out);
};

generateGalleries(images);