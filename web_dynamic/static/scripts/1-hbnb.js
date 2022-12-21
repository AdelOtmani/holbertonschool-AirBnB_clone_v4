const $ = window.$;
$(document).ready(function () {
  // Store the Amenity IDs in a dictionary
  const amenitiesList = {};

  // Listen for changes on each input checkbox tag
  $("input[type='checkbox']").change(function () {
    // Get the Amenity ID
    const amenityId = $(this).attr('data-id');

    // Check if the checkbox is checked
    if ($(this).is(':checked')) {
      // If checked, add the Amenity ID to the dictionary
      amenitiesList[amenityId] = true;
    } else {
      // If unchecked, remove the Amenity ID from the dictionary
      delete amenitiesList[amenityId];
    }

    // Update the h4 tag with the list of Amenities checked
    updateAmenities();
  });

  // Function to update the h4 tag with the list of Amenities checked
  function updateAmenities () {
    // Get the h4 tag
    const amenitiesTag = $('#amenities h4');

    // Clear the contents of the h4 tag
    amenitiesTag.empty();

    // Iterate through the Amenity IDs in the dictionary
    for (const amenityId in amenitiesList) {
      // Get the Amenity name from the corresponding label
      const amenityName = $("input[for='amenity-" + amenityId + "']").text();

      // Add the Amenity name to the h4 tag
      amenitiesTag.append(amenityName + ' ');
    }
  }
});
