const requestBtn = document.querySelector("#request-btn");

function showInfo() {
	const infoMsg = document.querySelector(".module");
	infoMsg.style.display = "flex";

	const counter = () => {
		infoMsg.style.display = "none";
	};
	setTimeout(counter, 2500);
}

requestBtn.addEventListener("click", showInfo);
