function getUserData(){
	var	userPhone = document.getElementById('results');

	var userFirst     = document.getElementById('userfname').value;
	var userLast     = document.getElementById('userlname').value;
	var	userEmail     = document.getElementById('userEmail').value;
	var	userPhone     = document.getElementById('userPhone').value;

	var userGenderEls = document.getElementsByClassName("userGender");
	var userColorEls  = document.getElementsByClassName("userColor");
	var	userBirthEls  = document.getElementsByClassName("userBirth");

	var userGender, userColor, userBirth;

	/*
	FIRST NAME
	*/
	if(userFirst == "") {
		results.className = "failure";
		results.textContent = "you forgot to add your first name";

		return;
	};

	/*
	LAST NAME
	*/
	if (userLast == "") {
		results.className = "failure";
		results.textContent = "you forgot to add your last name";

		return;
	};

	/*
	GENDER
	*/
	for(var i = 0; i < userGenderEls.length; i++) {
		if(userGenderEls[i].checked) {
			userGender = userGenderEls[i].value;
		};
	};
	if(userGender = "") {
		results.className = "failure";
		results.textContent = "you forgot to select a gender";


		return;
	};

	/*
	EMAIL
	*/
	if (userEmail == "") {
		results.className = "failure";
		results.textContent = "you forgot to add your email";

		return;
	};

	/*
	PHONE NUMBER
	*/
	if (userPhone == "") {
		resultss.className = "failure";
		results.textContent = "you forgot to add your phone number";

		return;
	};

	/*
	FAVORITE COLOR
	*/
	for(var i = 0; i < userColorEls.length; i++) {
		if(userColorEls[i].selected) {
			userColor = userColorEls[i].value;;
		};
	};
	if(userColor == " ") {
		results.className = "failure";
		results.textContent = "you forgot to select your favorite color";

		return;
	}

	/*
	BIRTH PLACE
	*/
	for(var i = 0; i < userBirthEls.length; i++) {
		if(userBirthEls[i].checked) {
			userBirth = userBirthEls[i].value;
		};
	}; 
	if(userBirth == undefined) {
		results.className = "failure";
		results.textContent = "you forgot to select a place of birth";

		return;
	}

	/*
	ON SUCCESS
	*/
	results.className = "success";
	results.textContents = "thanks! updating now";

	var userProfile = {
		name : userFirst + " " + userLast,
		gender : userGender,
		email : userEmail,
		phone : userPhone,
		color : userColor,
		birth : userBirth
	};

	console.log(userProfile);

	setTimeout(function() {
		displayProfile(userProfile);
	}, 1000);
};


function displayProfile(userProfile) {

	var userName   = document.getElementById('newUserName');
	var userGender = document.getElementById('newUserGender');
	var	userEmail  = document.getElementById('newUserEmail');
	var	userPhone  = document.getElementById('newUserPhone');
	var	userColor  = document.getElementById('newUserColor');
	var	userBirth  = document.getElementById('newUserBirth');

	userName.innerText   = "Welcome " + userProfile.name;
	userGender.innerText = "Gender: " + userProfile.gender;
	userEmail.innerText  = "Email: " + userProfile.email;
	userPhone.innerText  = "Phone: " + userProfile.phone;
	userColor.innersText  = "Favorite Color: " + userProfile.color;
	userBirth.innerText  = "Birth Continent: " + userProfile.birth;

	document.getElementById('newProfile').style.display = "none";
	document.getElementById('updatedProfile').style.display = "block";
}

document.getElementById('sendDataButton').addEventListener('click', getUserData, false);
