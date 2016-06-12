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
