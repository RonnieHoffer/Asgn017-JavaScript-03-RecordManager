Here is the list of steps we need to take to make the record manager:


1.  Use HTML and CSS to code the initial page.  This includes a heading at the top, a record entry form on the left side, and a display of all the records on the right side.

Now, we want to be able to submit a new record and have it appear on the right side of the screen.  But, we don't want to do this by sending the information back to the server and reloading the page.  So, we will use JavaScript to add whatever HTML elements need to be added to the DOM in order to display all the submitted information in the same manner as the records that are already there.  In order to do this, see step 2, below.

2.  Use JavaScript to create a function that gets activated by the event of a click of the submit button.

3.  The first step inside that function should be to interrupt the default behaviour of the submit button.

4.  Next, within the same function, we need to create the elements which will contain the text of the submitted information.  One element for album name, one for artist, and one for genre.

5.  

6.  We will also need to create elements that contains the graphics.