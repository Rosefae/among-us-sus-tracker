(function(){
	let playerCards = document.querySelectorAll(".js-player-card");
	playerCards.forEach((card)=>{
		new PlayerCard(card);
	});

	let clearAllBtn = document.querySelector(".js-clear-all");
	clearAllBtn.addEventListener("click", (e)=>{
		location.reload();
	});
})();

function PlayerCard(card){
	this.card = card;
	this.colorInput = card.querySelector(".js-player-color");
	this.nameInput = card.querySelector(".js-player-name");
	this.statusInput = card.querySelector(".js-player-status");
	this.notesInput = card.querySelector(".js-player-notes");

	this.updateColor = function(){
		var color = this.colorInput.value;
		var colorVariableValue = 'var(--player-'
			+ color
			+ ', var(--player-fallback))';
		this.card.style.setProperty('--player-color', colorVariableValue);		
	}

	this.updateStatus = function(){
		var status = this.statusInput.value;
		var colorVariableValue = 'var(--status-'
			+ status
			+ ', var(--status-fallback))';
		this.card.style.setProperty('--status-color', colorVariableValue);

		this.card.setAttribute('data-status', status);
	}

	var that = this;

	this.colorInput.addEventListener("change", (e)=>{
		that.updateColor();
	});

	this.statusInput.addEventListener("change", (e)=>{
		that.updateStatus();
	});
}