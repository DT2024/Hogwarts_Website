

//CONTACT
// the event handler for the click event of each h2 element
const toggle = (evt) => {
    console.log('da vao function');
    //console.log(evt.currentTarget);
    const h4Elements = evt.currentTarget; // get the clicked h2 element
    const divElement = h4Elements.nextElementSibling; // get h2's sibling div
  
    h4Elements.classList.toggle('minus');
    divElement.classList.toggle('open');
  
    evt.preventDefault(); // cancel default action of h2 tag's <a> tag
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // get the h2 tags
    const h4Elements = document.querySelectorAll('#faqs h4');
    // attach event handler for each h2 tag
    if (h4Elements.length > 0) {
      // attach event handler for each h2 tag
      for (let h4Element of h4Elements) {
        h4Element.addEventListener('click', toggle);
      }
      // set focus on first h2 tag's <a> tag
      h4Elements[0].focus();
    }
  
    //call search function  
    $('#search').addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      processSearch();
    });
  });
  
  const $ = (selector) => document.querySelector(selector);
  
  const processSearch = () => {
    // get form controls to check for validity
    const department = $('#department');
    const campus = $('#campus');

    // Clear previous error messages
    department.nextElementSibling.textContent = '';
    campus.nextElementSibling.textContent = '';
    
    // check user entries for validity
    let isValid = true;
    if (department.value == '') {
      department.nextElementSibling.textContent = 'This field is required.';
      isValid = false;
    } else {
      department.nextElementSibling.textContent = '';
    }
  
    if (campus.value == '') {
      campus.nextElementSibling.textContent = 'Please select a campus.';
      isValid = false;
    } else {
      $('#campus').nextElementSibling.textContent = '';
    }
  
    const professor = 'Vy Ngoc Phuong Ly';
    const phonenumber = '437-383-0000';
    const email = 'vyngocphuongvy@humber.ca'
  
    const message = `Professor: ${professor}\nDepartment: ${department.value}\nCampus: ${campus.value}\nPhone number: ${phonenumber}\nEmail: ${email}`;
    // submit the form if all fields are valid
    if (isValid == true) {
      alert(message);
     // $('form').submit(formData);
    }
  };