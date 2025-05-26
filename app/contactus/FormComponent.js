"use client"

export default function FormComponent() {

	let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let phoneregex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

	function onInputClicked(inputId, errorMessageId) {
		let inputDiv = document.getElementById(inputId);
		let inputLabel = inputDiv.getElementsByTagName("label")[0];
		let inputText = inputDiv.getElementsByTagName("input")[0];
		let errorMessage = document.getElementById(errorMessageId);

		inputLabel.style.animationName = "decreaseFontsize";
		inputLabel.style.animationDuration = "0.2s";

		if (!errorMessage.classList.contains("invisible")) {
			errorMessage.classList.add("invisible");
		}

		setTimeout(function () {
			inputLabel.classList.remove("text-[#677788]");
			inputLabel.classList.add("text-[12px]");
			inputLabel.classList.add("mb-[50px]");
			inputLabel.classList.add("text-[#37405E]");
		}, 100);

		inputText.focus();
	}

	function onSelectClicked(errorMessageId) {

		let errorMessage = document.getElementById(errorMessageId);

		if (!errorMessage.classList.contains("invisible")) {
			errorMessage.classList.add("invisible");
		}
	}

	function onInputFocusOut(inputId) {
		console.log(inputId);
		let inputDiv = document.getElementById(inputId);
		let inputLabel = inputDiv.getElementsByTagName("label")[0];
		let inputText = inputDiv.getElementsByTagName("input")[0];

		if (!inputText.value.trim()) {

			inputLabel.style.animationName = "increaseFontsize";
			inputLabel.style.animationDuration = "0.2s";

			setTimeout(function () {
				inputLabel.classList.add("text-[#677788]");
				inputLabel.classList.remove("text-[12px]");
				inputLabel.classList.remove("mb-[50px]");
				inputLabel.classList.remove("text-[#37405E]");
			}, 100);
		}
	}

	function validateInput() {
		let errorPropertyRequirement = document.getElementById("errorPropertyRequirement");
		let errorName = document.getElementById("errorName");
		let errorEmail = document.getElementById("errorEmail");
		let errorPhonenumber = document.getElementById("errorPhonenumber");
		let errorLocation = document.getElementById("errorLocation");

		let fPropertyRequirement = document.getElementById("fpropertyrequirement");
		let fname = document.getElementById("fname");
		let femail = document.getElementById("femail");
		let fphonenumber = document.getElementById("fphonenumber");
		let flocation = document.getElementById("flocation");
		let fMessage = document.getElementById("fmessage");

		let isError = false;

		if (fPropertyRequirement.value == "none") {
			errorPropertyRequirement.classList.remove("invisible");
			isError = true;
		}

		if (!fname.value.trim()) {
			errorName.classList.remove("invisible");
			isError = true;
		}

		if (!emailregex.test(femail.value)) {
			errorEmail.classList.remove("invisible");
			isError = true;
		}

		if (!phoneregex.test(fphonenumber.value)) {
			errorPhonenumber.classList.remove("invisible");
			isError = true;
		}

		if (!flocation.value.trim()) {
			errorLocation.classList.remove("invisible");
			isError = true;
		}

		if (!isError) {

			window.centilio_connector_init.submit();

			// Making input values empty
			fPropertyRequirement.value = 'residential'
			fname.value = "";
			femail.value = "";
			fphonenumber.value = "";
			flocation.value = "";
			fMessage.value = "";

			onInputFocusOut("fullName");
			onInputFocusOut("email");
			onInputFocusOut("phoneNumber");
			onInputFocusOut("location");
			onInputFocusOut("message");
			
			openThankYouModal();
		}
	}

	function closeThankYouModal() {
		let thankYouModal = document.getElementById("thankYouModal");
		let modalOverlay = document.getElementById("modalOverlay");
		if (!thankYouModal.classList.contains("hidden")) {
			thankYouModal.classList.add("hidden");
			modalOverlay.classList.add("hidden");
		}

		window.location = "/";
	}

	function openThankYouModal() {
		let thankYouModal = document.getElementById("thankYouModal");
		let modalOverlay = document.getElementById("modalOverlay");
		if (thankYouModal.classList.contains("hidden")) {
			thankYouModal.classList.remove("hidden");
			modalOverlay.classList.remove("hidden");
		}
	}

	return (
		<>
			<div className="pt-[50px] py-[30px] flex flex-col gap-[20px]">
				<div className="">
					<div id="fullName" className="flex border-solid border-[1.5px] border-[#00000040] rounded-[5px] h-[50px] items-center hover:border-[#00000040]" onClick={() => onInputClicked("fullName", "errorName")}>
						<label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Your name</label>
						<input className="outline-none mx-[10px] w-[100%] centilio-input-full-name" onBlur={() => onInputFocusOut("fullName")} placeholder="" type="text" id="fname" name="fname" />
					</div>
					<div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorName">Name Cannot be Empty</div>
				</div>
				<div className="">
					<div id="email" className="flex border-solid border-[1.5px] border-[#00000040] rounded-[5px] h-[50px] items-center hover:border-[#00000040]" onClick={() => onInputClicked("email", "errorEmail")}>
						<label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Email Address</label>
						<input className="outline-none mx-[10px] w-[100%] centilio-input-email" onBlur={() => onInputFocusOut("email")} placeholder="" type="text" id="femail" name="femail" />
					</div>
					<div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorEmail">Please provide a valid email</div>
				</div>
				<div className="">
					<div id="phoneNumber" className="flex border-solid border-[1.5px] border-[#00000040] rounded-[5px] h-[50px] items-center hover:border-[#00000040]" onClick={() => onInputClicked("phoneNumber", "errorPhonenumber")}>
						<label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Phone Number</label>
						<input className="outline-none mx-[10px] w-[100%] centilio-input-mobile" onBlur={() => onInputFocusOut("phoneNumber")} placeholder="" type="text" id="fphonenumber" name="fphonenumber" />
					</div>
					<div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPhonenumber">Please provide valid phone number</div>
				</div>
				<div className="">
					<div id="location" className="flex border-solid border-[1.5px] border-[#00000040] rounded-[5px] h-[50px] items-center hover:border-[#00000040]" onClick={() => onInputClicked("location", "errorLocation")}>
						<label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Location</label>
						<input className="outline-none mx-[10px] w-[100%] centilio-custom-Street" onBlur={() => onInputFocusOut("location")} placeholder="" id="flocation" name="flocation" />
					</div>
					<div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorLocation">Please provide valid location</div>
				</div>
				<div className="mb-[10px]">
					<div className="mb-[10px]">Property Type *</div>
					<select className="border-solid border-[1.5px] border-[#00000040] p-[5px] rounded-[5px] w-full centilio-dropdown centilio-custom-Sub_Type" name="fpropertyrequirement" id="fpropertyrequirement" onClick={() => onSelectClicked("errorPropertyRequirement")}>
						<option value="residential">Residential</option>
						<option value="commercial">Commercial</option>
					</select>
					<div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPropertyRequirement">Please select a property requirement</div>
				</div>
				<div className="">
					<div id="message" className="flex border-solid border-[1.5px] border-[#00000040] rounded-[5px] h-[50px] items-center hover:border-[#00000040]" onClick={() => onInputClicked("message", "errorMessage")}>
						<label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Your Message</label>
						<input className="outline-none mx-[10px] w-[100%] centilio-custom-Description" onBlur={() => onInputFocusOut("message")} placeholder="" type="text" id="fmessage" name="fmessage" />
					</div>
					<div className="text-left mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorMessage">Please provide place of interest</div>
				</div>
				<div id="bookVisitNowButton" className="book-visit-button w-full text-center bg-[#E6A424] py-[10px] px-[30px] rounded-[5px] cursor-pointer mx-auto" onClick={() => validateInput()}>
					<span className="text-[#ffffff] tracking-tight">
						Submit
					</span>
				</div>
			</div>
			<div id="modalOverlay" className="w-[100%] bg-[#000000ab] fixed top-[0px] left-[0px] h-[100%] z-[5] hidden">
				<div id="thankYouModal" className="w-[100%] h-[100%] bg-[#7f808080] fixed z-[6] text-center hidden">
					<div style={{
						transform: "translate(-50%, -50%)"
					}}
						className="text-[#37405E] fixed bg-[#c2d9ff] top-[50%] left-[50%] py-[30px] px-[10px] sm:w-[400px] w-[90%] rounded-[10px] z-[5] leading-[35px] border-solid border-[2px] border-[#00000040]">
						<div className="bg-[#37405E] w-max px-[15px] py-[18px] rounded-[50%] mx-auto">
							<svg width="30" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
						<div className="text-[30px] font-semibold my-[20px]">Thank You!</div>
						<div>We&apos;ll reach You Out Soon!</div>
						<div className="bg-[#dc3737] text-[#FFFFFF] cursor-pointer rounded-[5px] my-[20px] w-max mx-auto px-[20px] font-medium" onClick={() => closeThankYouModal()}>Close</div>
					</div>
				</div>
			</div>
		</>
	)
}
