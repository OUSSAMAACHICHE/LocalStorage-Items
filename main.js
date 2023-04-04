let allSpans = document.querySelectorAll('.buttons span');
let results = document.querySelector('.results > span');
let theInput = document.querySelector('.the-input');


allSpans.forEach((span) => {
    
	span.addEventListener('click', (e) => {
     
		if(e.target.classList.contains('check-item')) {
            
			checkItem();
		}
		if(e.target.classList.contains('add-item')) {
            
			addItem();
		}
		if(e.target.classList.contains('delete-item')) {
            
			deleteItem();
		}
		if(e.target.classList.contains('show-items')) {
            
			showItems();
		}
	})
});

function checkInput() {

		results.innerHTML = "You Need To Enter A Value";
	
}


function checkItem() {
	let inputValue = theInput.value;
     // if the input is not empty
	if(inputValue !== '') {

        if(localStorage.getItem(inputValue)) {

			results.innerHTML = `found the item his name is : <span>${inputValue}</span>`;
		} else {
            // if item is not found in localStorage
			results.innerHTML = `this item <span>${inputValue}</span> is not found in localStorage`;

		}

	} else {

		checkInput();
	}
}

function deleteItem() {
    let inputValue = theInput.value;

	if(inputValue !== '') {

		if(localStorage.getItem(inputValue)) {

			localStorage.removeItem(inputValue);

			results.innerHTML = `Local Storage item is <span> ${inputValue}</span> Deleted`;
		
			theInput.value = '';
		
		} else {

			results.innerHTML = `No LocalStorage item with name <span>${inputValue}</span>`;
		}
	} else {

		checkInput();
	}
}
function addItem() {

	let inputValue = theInput.value;
	if(inputValue !== '') {
      
        localStorage.setItem(inputValue, 'test');

		results.innerHTML = `Local Storage item : <span>${inputValue}</span>`;

		theInput.value = '';
	} else {

		checkInput();
	}
}
function showItems() {

	results.innerHTML = '';
	if(localStorage.length) {

		// console.log(`foiund elements ${localStorage.length}`);

		for(let [key,value] of Object.entries(localStorage)) {

			results.innerHTML += `<span class="keys">${key}</span>`;
		}
	} else {

		results.innerHTML = `there are no itmes in localStorage ${localStorage.length}`;
	}
}

