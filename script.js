//your JS code here. If required.
	const dropdown = document.getElementById("colorSelect")

	function removeList(){
		const selectedIndex = dropdown.selectedIndex
		if(selectedIndex >= 0){
			dropdown.remove(selectedIndex)
		}
	}