function changeColor(){
	  let x = Math.floor(Math.random() * 255);
      let y = Math.floor(Math.random() * 255);
      let z = Math.floor(Math.random() * 255);

      document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
}
	