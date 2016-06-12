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
