const radius = document.getElementById("radius");
const volume = document.getElementById("volume");


function volume_sphere() {
    //Write your code here
	let r = Number(radius.value);
	if (r < 0 || isNaN(r)) {
		volume.value = "NaN";
	}else{
		let result = 4 / 3 * Math.PI * Math.pow(r, 3);
		volume.value = result.toFixed(4);
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
