const button=document.getElementById("calculate");

const calculateTip=()=>{

    const totalAmount= +document.getElementById("totalAmount").value;
	const tipPercent= +document.getElementById("service").value;
	const totalPeople= +document.getElementById("totalPeople").value;
	
	if(totalAmount==" " || tipPercent==" " || totalAmount==" "){
		alert("Please enter a valid input");
	}

	else{
		let total=(totalAmount*tipPercent)/totalPeople;
		console.log(total);
		total=parseInt(total);
		output.textContent=total;
		

	}
}

button.addEventListener("click", calculateTip);
