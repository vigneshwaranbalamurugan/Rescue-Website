function openPopup() {
    document.getElementById('pop').style.display = 'block';
    document.getElementById('username').setAttribute('autofocus', 'true');
   /* const resetpass = document.getElementById("resetpass");
    resetpass.addEventListener('click',resetPassword);*/
}
function closePopup() {
    document.getElementById('pop').style.display = 'none';
    /*const resetpass = document.getElementById("resetpass");
    resetpass.removeEventListener('click', resetPassword);  */
}
$(document).ready(function(){
    $("#contact-button").click(function(){
      $("#contact").stop().slideToggle(2500);
    });
  });
function opencontact(){
  const homeElement = document.getElementById('home');
  homeElement.style.display = homeElement.style.display === 'none' ? 'block' : 'none';
  const toggleButton = document.querySelector('.navbar-toggler');
    toggleButton.click();
}
function openhome(){
  document.getElementById('contact').style.display='none';
  const toggleButton = document.querySelector('.navbar-toggler');
  toggleButton.click();
}
$(document).ready(function(){
  $("#Home").click(function(){
    $("#home").fadeIn(4000);
  });
});

   // Initialize Firebase
   const firebaseConfig = {
    apiKey: "AIzaSyDhk_8bhmMUo2pclKIksTpbVgftyB_IFRY",
    authDomain: "register1-45164.firebaseapp.com",
    databaseURL: "https://register1-45164-default-rtdb.firebaseio.com",
    projectId: "register1-45164",
    storageBucket: "register1-45164.appspot.com",
    messagingSenderId: "614555310804",
    appId: "1:614555310804:web:47e87fd212f77b6b0db941"
  };
  firebase.initializeApp(firebaseConfig);

  // Reference to your Firebase database
  var dbRef = firebase.database().ref('Registeration'); // Change to your actual reference

 dbRef.on('value', function(snapshot) {
    const countriesDropDown = document.getElementById("City");
    countriesDropDown.innerHTML = ''; // Clear the dropdown before adding new options

    // Use a Set to store unique city names
    const uniqueCities = new Set();

    // Add the 'ALL' option to the dropdown
    const allOption = document.createElement("option");
    allOption.setAttribute('value', 'ALL'); // Set the value attribute to 'ALL'
    const allOptionText = document.createTextNode('ALL'); // Create a text node with 'ALL'
    allOption.appendChild(allOptionText); // Append the text node to the option
    countriesDropDown.appendChild(allOption); // Append the option to the dropdown

    snapshot.forEach(function(childSnapshot) {
        const data = childSnapshot.val(); // Retrieve the data from the snapshot
        const city = data.City;

        // Check if the city is not already in the Set before adding it to the dropdown
        if (!uniqueCities.has(city)) {
            uniqueCities.add(city); // Add the city to the Set
            const option = document.createElement("option");
            option.setAttribute('value', city); // Set the value attribute to the City value
            const optionText = document.createTextNode(city); // Create a text node with the City value
            option.appendChild(optionText); // Append the text node to the option
            countriesDropDown.appendChild(option); // Append the option to the dropdown
        }
    });
});

dbRef.on('value', function(snapshot) {
    const countriesDropDown = document.getElementById("District");
    countriesDropDown.innerHTML = ''; // Clear the dropdown before adding new options

    // Use a Set to store unique city names
    const uniqueDistrict = new Set();

    // Add the 'ALL' option to the dropdown
    const allOption = document.createElement("option");
    allOption.setAttribute('value', 'ALL'); // Set the value attribute to 'ALL'
    const allOptionText = document.createTextNode('ALL'); // Create a text node with 'ALL'
    allOption.appendChild(allOptionText); // Append the text node to the option
    countriesDropDown.appendChild(allOption); // Append the option to the dropdown

    snapshot.forEach(function(childSnapshot) {
        const data = childSnapshot.val(); // Retrieve the data from the snapshot
        const District = data.District;

        // Check if the city is not already in the Set before adding it to the dropdown
        if (!uniqueDistrict.has(District)) {
            uniqueDistrict.add(District); // Add the city to the Set
            const option = document.createElement("option");
            option.setAttribute('value', District); // Set the value attribute to the City value
            const optionText = document.createTextNode(District); // Create a text node with the City value
            option.appendChild(optionText); // Append the text node to the option
            countriesDropDown.appendChild(option); // Append the option to the dropdown
        }
    });
});

dbRef.on('value', function(snapshot) {
  const countriesDropDown = document.getElementById("Dept");
  countriesDropDown.innerHTML = ''; // Clear the dropdown before adding new options
const allOption = document.createElement("option");
    allOption.setAttribute('value', 'ALL'); // Set the value attribute to 'ALL'
    const allOptionText = document.createTextNode('ALL'); // Create a text node with 'ALL'
    allOption.appendChild(allOptionText); // Append the text node to the option
    countriesDropDown.appendChild(allOption); // Append the option to the dropdown
  snapshot.forEach(function(childSnapshot) {
    const data = childSnapshot.val(); // Retrieve the data from the snapshot
    const option = document.createElement("option");
    option.setAttribute('value', data.Rescuetype); // Set the value attribute to the City value
    const optionText = document.createTextNode(data.Rescuetype); // Create a text node with the City value
    option.appendChild(optionText); // Append the text node to the option
    countriesDropDown.appendChild(option); // Append the option to the dropdown
  });
});
var DeptDropdown = document.getElementById('Dept'); // Corrected variable name (DeptDropdown)
var CityDropdown = document.getElementById('City'); // Corrected variable name (CityDropdown)
var DistrictDropdown = document.getElementById('District'); // Corrected variable name (DistrictDropdown)

DeptDropdown.addEventListener('change', function() {
    var selectedFilter = DeptDropdown.value;
    CityDropdown.value = "ALL";
	DistrictDropdown.value = "ALL"; 
    filterData(selectedFilter, 'Rescuetype');
});
CityDropdown.addEventListener('change', function() {
    var selectedFilter = CityDropdown.value;
	DeptDropdown.value = "ALL"; 
	DistrictDropdown.value = "ALL"; 
    filterData(selectedFilter,'City');
});

DistrictDropdown.addEventListener('change', function() {
    var selectedFilter = DistrictDropdown.value;
	CityDropdown.value = "ALL"; 
	DeptDropdown.value = "ALL"; 
    filterData(selectedFilter,'District');
});

/*dbRef.on('value', function(snapshot) {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear existing data
    snapshot.forEach(function(childSnapshot) {
      var data = childSnapshot.val();
      var row = document.createElement('tr');
      row.innerHTML = `<td>${data.Rescuetype}</td><td>${data.FirstName}</td><td>${data.LastName}</td><td><a href="tel:${data.MobileNumber}">${data.MobileNumber}</a></td><td>${data.Email}</td>
	  <td>${data.Gender}</td><td>${data.City}</td><td>${data.District}</td>`;
      tableBody.appendChild(row);
    });
  });
  */
 function filterData(filterValue,search) {
   if(filterValue=='ALL'){
   dbRef.on('value', function(snapshot) {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear existing data
    snapshot.forEach(function(childSnapshot) {
      var data = childSnapshot.val();
      var row = document.createElement('tr');
      row.innerHTML = `<td>${data.Rescuetype}</td><td>${data.FirstName}</td><td>${data.LastName}</td><td><a href="tel:${data.MobileNumber}">${data.MobileNumber}</a></td>
	  <td>${data.Gender}</td><td>${data.City}</td><td>${data.District}</td>`;
      tableBody.appendChild(row);
    });
  });
  
   }
   else{
    dbRef.orderByChild(search).equalTo(filterValue).on('value', function(snapshot) {
        var tableBody = document.getElementById('table-body');
        tableBody.innerHTML = ''; // Clear existing data
        snapshot.forEach(function(childSnapshot) {
            var data = childSnapshot.val();
            var row = document.createElement('tr');
            row.innerHTML = `<td>${data.Rescuetype}</td><td>${data.FirstName}</td><td>${data.LastName}</td><td><a href="tel:${data.MobileNumber}">${data.MobileNumber}</a></td>
            <td>${data.Gender}</td><td>${data.City}</td><td>${data.District}</td>`;
            tableBody.appendChild(row);
        });
    });
	}
}	