'use strict';

Tinytest.add('Dante.is', function (test) {
  var div = document.createElement('div');
 	div.id = "editor";

  var editor = new Dante.Editor({
    el: "#editor"
  });
  editor.start()
  console.log(editor);
});