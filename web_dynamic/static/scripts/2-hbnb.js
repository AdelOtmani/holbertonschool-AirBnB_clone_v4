const $ = window.$;
$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (response) {
    // If in the status is “OK”, add the class available to the div#api_status
    if (response.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
  // Store the Amenity IDs in a dictionary
  const amenitiesList = {};
  $("input[type='checkbox']").change(function () {
    // Get the Amenity ID
    const amenityId = $(this).attr('data-id');

    if ($(this).is(':checked')) {
      amenitiesList[amenityId] = true;
    } else {
      delete amenitiesList[amenityId];
    }

    // Update the h4 tag with the list of Amenities checked
    updateAmenities();
  });
  // Function to update the h4 tag with the list of Amenities checked
  function updateAmenities () {
    const amenitiesTag = $('#amenities h4');
    amenitiesTag.empty();
    for (const amenityId in amenitiesList) {
      const amenityName = $("input[for='amenity-" + amenityId + "']").text();
      amenitiesTag.append(amenityName + ' ');
    }
  }
});
