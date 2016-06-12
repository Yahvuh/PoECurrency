'use strict';

const docs = {
	jewellersDom : document.getElementById('jewellers'),
	alterationDom : document.getElementById('alteration'),
	augmentationDom : document.getElementById('augmentation'),
	transmutationDom : document.getElementById('transmutation'),
	portalDom : document.getElementById('portal'),
	wisdomDom : document.getElementById('wisdom')
};

const currency = {
	jewellers : 1,
	alteration : 2,
  augmentation : 8,
	transmutation : 16,
	portal : 112,
	wisdom : 336
};

const doCalc = function() {
  //locCur is a local currency object, this was the only way it would hande altering it without bugs.
	const locCur = {
		jewellers : 1,
		alteration : 2,
		augmentation : 8,
		transmutation : 16,
		portal : 112,
		wisdom : 336
	};
	let jVal = document.getElementById('jewellersVal').value;

	if (jVal != jVal.match(/^\d+$/)) {
		document.getElementById('error').innerHTML = 'Input is not a number';
	} else {
		document.getElementById('error').innerHTML = 'Input is a number';
	}

	const cur = Object.keys(locCur);
	for(let i=0; i<cur.length; i++) {
		let curTot = jVal * locCur[cur[i]];
		locCur[cur[i]] = curTot;
	}
	update(locCur);
};

function update(locCur) {
	let mod;
	if(locCur) {
		mod = locCur;
	} else {
		mod = currency;
	}
	docs.jewellersDom.innerHTML = mod.jewellers;
	docs.alterationDom.innerHTML = mod.alteration;
	docs.augmentationDom.innerHTML = mod.augmentation;
	docs.transmutationDom.innerHTML = mod.transmutation;
	docs.portalDom.innerHTML = mod.portal;
	docs.wisdomDom.innerHTML = mod.wisdom;
}

window.onload = function() {
  update();
};
