// Access all elements with class "each-section-inner"
const sectionInnerElements = document.querySelectorAll('.each-section-inner');

// Iterate through the elements and display their content
sectionInnerElements.forEach((element, index) => {
  // Get the section name and the associated value
  const sectionName = element.querySelector('.section-name .t-text-medium').textContent.trim();
  const sectionValue = element.querySelector('.t-text-black').textContent.trim();

  // Display the section data
  console.log(`Section ${index + 1}: ${sectionName} - ${sectionValue}`);
});
