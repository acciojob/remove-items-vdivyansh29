//your JS code here. If required.
	const dropdown = document.getElementById("colorSelect")

	function remove(){
		const selectedIndex = dropdown.selectedIndex
		if(selectedIndex >= 0){
			dropdown.remove(selectedIndex)
		}
	}