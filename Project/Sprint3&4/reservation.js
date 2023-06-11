/*
    document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
      var nameSurnameInput = document.getElementById('namesurname');
      if (nameSurnameInput.value.trim() === '') {
        event.preventDefault();
        alert('Please enter your name and surname.');
        nameSurnameInput.focus();
      }
    });*/
$(document).ready(function () {
    $("#datepicker").datepicker({
      dateFormat: "dd/mm/yy",
      minDate: 0,                                         //DATEPICKER PLUGIN
      showButtonPanel: true,
      showAnim: "fade",
      onSelect: function (dateText, inst) {
        if (!dateText) {
          alert("Please select a date.");
          $(this).val("");
        }
      }
    });
  
    $('input[type="submit"]').click(function (event) {
      var selectedDate = $("#datepicker").datepicker("getDate");    
      if (!selectedDate) {
        event.preventDefault();
        alert("Please select a date.");
      }
    });
  });
  
  document.getElementById("spinner").addEventListener("change", function () {
    var value = parseInt(this.value);
    if (value < 0) {
      this.value = 0;                                                             //SPINNER PLUGIN
    } else if (value > 7) {
      alert("Number of the people cannot be more than 7! Please enter a valid number.");
      this.value = 7;
    }
  });
  
  $(document).ready(function () {
    $('.container :radio').checkboxradio({                              //CHECKBOX RADIO PLUGIN
      icon: false
    });
  
    $('input[type="submit"]').click(function (event) {
      var checked = $('.container :radio:checked').length > 0;
      if (!checked) {
        event.preventDefault();
        alert("Please select a Lounge option.");
      }
    });
  });
  
  $(document).ready(function () {
    $('#timepicker').timepicker({                               //TIMEPICKER PLUGIN
      timeFormat: 'hh:mm tt',
      interval: 30,
      minTime: '10:00am',
      maxTime: '9:00pm',
      defaultTime: '12:00pm',
      dynamic: false,
      dropdown: true,
      scrollbar: true
    });
  }); 