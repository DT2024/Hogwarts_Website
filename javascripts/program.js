
//Program screen
//Section 1 ------------  declare an array of images
let myImagesArray = [
    './images/academic-vy-1.jpg',
    './images/academic-vy-2.jpg',
    './images/academic-vy-3.jpg',
    './images/academic-vy-4.jpg',
    './images/academic-vy-5.jpeg',
    './images/academic-vy-7.jpeg',
    './images/academic-vy-6.jpg',
    './images/academic-vy-4.jpg',
  ];
  
    //slideshow
    let ImageNumber = 0;
    let difference = myImagesArray.length - 1;
  
    let delay = 1000; //milliseconds    1sec=1000milliseconds
  
    setInterval('ChangeImages(1)', delay);
    //-1 to show the slide backwards
    //1 to show the slide forwards
  
    function ChangeImages(direction) {
      //begin function
  
    ImageNumber = ImageNumber + direction;
  
    if (ImageNumber > difference) {
      //begin inner first if
      ImageNumber = 0;
    } //end inner first if
  
    if (ImageNumber < 0) {
      //begin inner second if
      ImageNumber = difference;
    } //end inner second if
    //document.slideshow.src = myImagesArray[ImageNumber];
    document.getElementById('slideshow').src = myImagesArray[ImageNumber];
  } //end function
  
  //Table Java
  // Sample data
const programs = [
{ code: '1001', name: 'Astronomy', description: 'Based on the study of celestial bodies such as stars, the moon, and planets.', credential: 'Certificate of Hogwarts', length: '2 semesters', location: 'North Campus' },
{ code: '1002', name: 'Ancient Runes', description: 'Study of ancient symbols and characters.', credential: 'Certificate of Hogwarts', length: '2 semesters', location: 'South Campus' },
{ code: '1003', name: 'Arithmancy', description: 'A form of magical mathematics.', credential: 'Certificate of Hogwarts', length: '3 semesters', location: 'Lakeshore Campus' },
{ code: '1004', name: 'Care of Magical Creatures', description: 'Learning how to care for and manage magical creatures.', credential: 'Certificate of Hogwarts', length: '4 semesters', location: 'Lakeshore Campus' },
{ code: '1005', name: 'Divination', description: 'Predicting the future through methods such as fortune-telling, tea leaf reading, and crystal balls.', credential: 'Certificate of Hogwarts', length: '3 semesters', location: 'North Campus' },
{ code: '1006', name: 'Defense Against the Dark Arts', description: 'A class that teaches how to protect oneself from dark magic and dark creatures.', credential: 'Certificate of Hogwarts', length: '2 semesters', location: 'South Campus' },
{ code: '1007', name: 'Herbology', description: 'Study of various plants and vegetation, including those that can be dangerous.', credential: 'Certificate of Hogwarts', length: '3 semesters', location: 'Lakeshore Campus' },
// Add more program data as needed
];

// Function to create table rows
function createTableRows() {
const thead = document.getElementById('thead-program');
const tbody = document.getElementById('tbody-program');

// Add styles tbody 
tbody.style.borderCollapse = 'collapse';
tbody.style.backgroundColor = '#ffffff';

programs.forEach(program => {
  const row = document.createElement('tr');
  row.className = 'tr-program';

  const columns = ['code', 'name', 'description', 'credential', 'length', 'location'];

  columns.forEach(column => {
    const cell = document.createElement('td');
    cell.setAttribute('headers', `til_${column}`);
    cell.textContent = program[column];

    // Add styles directly in JavaScript
    cell.style.color = '#000000';
    cell.style.border = '1px solid #dad9d9';
    cell.style.padding = '5px';

    row.appendChild(cell);
  });

  tbody.appendChild(row);
});
}

// Call the function to populate the table
//document.addEventListener('DOMContentLoaded', createTableRows);
// Call the function to populate the table
document.addEventListener('DOMContentLoaded', function () {
    createTableRows();
    console.log('Max Height:', document.getElementById('tbody-program').style.maxHeight);
  });
  
// Add media query for responsiveness
const mediaQuery = window.matchMedia('(max-width: 840px)');

function handleMediaQuery(mediaQuery) {
    const table = document.getElementById('table-program');
  
    // Ensure the table element exists before accessing its style
  if (table) {
    if (mediaQuery.matches) {
      // Styles for small screens
      table.style.display = 'block';
      table.style.width = '100%';
    } else {
      // Styles for larger screens
      table.style.display = 'table';
      table.style.width = 'auto';
    }
  }
}

// Initial check for screen size
handleMediaQuery(mediaQuery);

// Listen for changes in screen size
mediaQuery.addEventListener('change', handleMediaQuery);
  
  
  