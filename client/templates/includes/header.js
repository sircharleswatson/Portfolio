Template.header.rendered = function() {
  $( '#intro' ).each( function() {
    var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
    $( this ).empty().attr( 'title', '' ).teletype( {
      text: ["Hi, Im~1 'm Charles.", "Welcome to my portfolio."], // List of strings to output.
      typeDelay: 20, // Minimum delay, in ms, between typing characters.
      backDelay: 30, // Minimum delay, in ms, between deleting characters.
      blinkSpeed: 1000, // Interval, in ms, that the cursor will flash.
      cursor: '|', // Character used to represent the cursor.
      delay: 500, // Time in ms to pause before deleting the current text.
      preserve: true, // Prevent auto delete of the current string and begin outputting the next string.
      prefix: '[~]$ ', // Begin each string with this prefix value.
      loop: 1, // Number of times to loop through the output strings, for unlimited use 0.
      humanise: true // Add a random delay before each character to represent human interaction.
    } );
  } );
}