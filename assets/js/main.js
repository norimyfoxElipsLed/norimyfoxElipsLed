window.addEventListener('DOMContentLoaded', () => {
	
	document.addEventListener('mousemove', (e) => {
		let amountMovedX = 60 * ( (e.pageY + 1) / document.documentElement.clientWidth) - 60
		let amountMovedY = 60 * ( (e.pageY + 1) / window.innerWidth ) - 100;

		let result = amountMovedX + 'px ' + amountMovedY + 'px'

		document.body.style.cssText = `background-position: ${result}`;
	})
});