# rebeltest
A website to manage key value pairs. Application was developed on a linux environment.

## installation
From source:
  1. unzip artifact
  2. edit .env and add the following
  ```
  # replace with chosen file on system
  LIST_STORAGE=/tmp/rebelteststore.json
  ```
  3. Install Node
  4. Run with
  ```
  node app.js
  ```
  5. Open http://localhost:8080

From scratch (no dependencies / github clone):
  1. npm install
  2. cd public && bower install
  3. cd .. && node app.js

## Features
  * Ability to manage a custom list of key value pairs
  * User can add, remove and review list of key value pairs
  * List can be exported to JSON or xml
  * List is sortable by either key or value

## Usage Instructions
### Adding a key value pair
  * Add a key/value pair by entering it in the left entry list, * multiple keys can be specified by only one can be added at a time. *
  * Key/value pairs must be in the format <key>=<value>. Spaces are permitted on either side of the equals sign, but the key and value must be alpha-numeric.
  * the blue selected input field on the left will be added once the Add button is pressed. If there's some validation error, your browser should notify you (if it supports HTML5).

### Removing a key value pair
  * Click the desired key value pair from the list on the right
  * Click "Remove Selected"
  * Only one key value selection may be removed at a time
  * There is no prompt for confirmation... this action cannot be undone.

### Clear the key value list
  * Click the clear button to clear the list. This will also clear the contents of the textbox on the right.
  * There is no prompt for confirmation... this action cannot be undone.

### Save to xml
  * Click the "Download as XML" button to download your key/value pair list in xml format
  * XML will be in the following format:
  ```xml
  <keyValueDataStore>
      <key1>foo</key1>
      <key2>bar</key2>
  </keyValueDataStore>
  ```
### Save to JSON
  * Click the "Download as JSON" button to download your key/value pair list in JSON format
  * JSON will be in the following format:
  ```json
    {
        "key1": "foo",
        "key2": "bar"
    }
  ```
### Sorting
  * The list can be sorted by key (name), or value
  * Sort by Key by pressing the "Sort By Name" button.
  * Sort by Value by pressing the "Sort by Value" button.

## Implmentation notes
  * "Thin client" style, with REST API backend. Backend is NodeJS, express and handlebars to render client HTML
  * Front end uses Bootstrap3 with jQuery and Plain old Javascript. Bootstrap-validator is used on the front to clean up validation
  * Persistance is through a single json file which holds the user's key value pairs in JSON format
  * xml2json lib is used at the API layer to convert from JSON to XML
  * Only client responsabilities are running the user interface, and sorting data. Everything else is API controlled.
  * The GUI only talks to the server through the API. I like this approach as I can easily change user interface technologies if the situation changes. I find it gives me good flexibility.

## Possible future improvements
  * Migration away from bower and to yarn or npm for front end dependency management
  * Improved error handling at all layers. Errors are not currently visible to users.
  * Multiple select / multiple input
  * Allow user to specify xml format / json format via interactive schema
  * Upgrade to Bootstrap 4
  * Addition of automated tests
  * Backend storage through Mongo / other database rather than JSON flat file.

## Author
M. David Lawson
mdavidlawson@gmail.com
