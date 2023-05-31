function Calculate() {
	weapon1 = document.getElementById("Weap1");
	weapon1.innerHTML = "<hr><align=center><b><u>Total Damage Per Load </u></b>";

	weap1Dmg = document.getElementById("Damage1").value;
	weap1Acc = document.getElementById("Accuracy1").value;
	weap1FR = document.getElementById("FireRate1").value;
	weap1Bullets = document.getElementById("Bullets1").value;

	weap1TDmg = TotalDamage(weap1Dmg, weap1Acc, weap1Bullets);
	weap1TTime = TotalTime(weap1Bullets, weap1FR);

	weapon1.innerHTML += "<br><align=right>" + weap1TDmg;
	weapon1.innerHTML += " points in " + weap1TTime + " seconds";
	weapon1.innerHTML += "<br><align=right><b><u>DPS</u></b>";
	weapon1.innerHTML += "<br><align=right>" + (weap1TDmg / weap1TTime) + " points";



	weapon2 = document.getElementById("Weap2");
	weapon2.innerHTML = "<hr><align=center><b><u>Total Damage Per Load </u></b>";

	weap2Dmg = document.getElementById("Damage2").value;
	weap2Acc = document.getElementById("Accuracy2").value;
	weap2FR = document.getElementById("FireRate2").value;
	weap2Bullets = document.getElementById("Bullets2").value;

	weap2TDmg = TotalDamage(weap2Dmg, weap2Acc, weap2Bullets);
	weap2TTime = TotalTime(weap2Bullets, weap2FR);

	weapon2.innerHTML += "<br><align=right>" + weap2TDmg;
	weapon2.innerHTML += " points in " + weap2TTime + " seconds";
	weapon2.innerHTML += "<br><align=right><b><u>DPS</u></b>";
	weapon2.innerHTML += "<br><align=right>" + (weap2TDmg / weap2TTime) + " points";
}
function TotalDamage (dmg, acc, bullets) {
	temp = (dmg * bullets) * (acc / 100)
	return temp;
}
function TotalTime (bullets, fireRate) {
	temp = bullets / fireRate;
	return temp;
}
times = 0;
function textBox(element) {
	if(times < 1) {
		element.value = "";
		element.style.color = "black";
	}
}