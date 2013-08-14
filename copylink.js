function addLink() {

  var threshold = 35;
  var message = '&mdash;Nashville Parent Magazine';


  var body_element = document.getElementsByTagName('body')[0];
  var selection;
  selection = window.getSelection();

  var charcount = selection.toString().length;

  if (charcount > 35) {
    var pagelink = '<br /><br />'+ message +'. <a href="'+document.location.href+'">'+document.location.href+'</a><br />';
    var copytext = selection.toString().replace(/\n/g, "<br/>") + pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
      body_element.removeChild(newdiv);
    },0);

    // Push an analytics event
    // _gaq.push([_trackEvent("share", "copy")]); // old code for ga.js
    // ga('send', 'event', 'share', 'copy'); // new code for Analytics.js

    console.log('user copied ' + charcount + ' characters of text and a link had been appended.');
  } else{
    console.log('user copied ' + charcount + ' characters of text. No link needed.');
  };

}
document.oncopy = addLink;
