function Character(atts) {

	this.HitPoints = atts['hitpoints'];
	this.FirstName = atts['firstname'];
	this.LastName = atts['lastname'];
	this.AttackPoints = atts['attack'];
	this.Items = atts['items'];


	this.Attack = function(Victim){
		Victim.HitPoints -= 3 * this.AttackPoints;
		Victim.CheckIfDead();
		this.UpdateStats();
		Victim.UpdateStats();
	}

	this.CheckIfDead = function(){
		if(this.HitPoints >= 1) {return};
		this.IsDead = true;
	}

	this.Heal = function(){
		if(!this.Items.Potion) {
			console.log('not enough potions');
			this.UpdateStats();
			return
		};
		this.Items.Potion -= 1;
		this.HitPoints += 5;
		this.UpdateStats();

	}

}

Character.prototype = {

	FirstName: 'Name Needed',
	LastName: 'Name Needed',
	HitPoints: 10,
	AttackPoints: 0,
	IsDead: false,


	UpdateStats: function(){

		var box = $("." + this.FirstName + "Stats");

		if(this.IsDead){
			box.parent().empty();
		}

		var text = "Hit Points: " + this.HitPoints + "<br />";
		text += "Potions: " + this.Items.Potion + "<br />";

		box.html(text);
	}


}