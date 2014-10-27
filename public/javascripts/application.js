// You put your Javascript code here

WORDS = Array(
    "AGGRIEVED",
    "ALAS",
    "DEJECT",
    "DEPRES",
    "DEPRESS",
    "DESPAIR",
    "DESPONDANT",
    "DESPONDENT",
    "DIRG",
    "DISAPPOINT",
    "DISAPPOINTMENT",
    "DISCONSOLAT",
    "DISCOURAG",
    "DISHEARTEN",
    "DISMAL",
    "DISSATISFI",
    "DISSATISFY",
    "DISTRAUGHT",
    "DOLDRUM",
    "DOWNCAST",
    "DREARY",
    "ELEGY",
    "FORLORN",
    "FROWN",
    "FUNEREAL",
    "GRIE",
    "GROAN",
    "HOPELES",
    "HUMILIAT",
    "LAMENT",
    "LAMENTAT",
    "LONE",
    "LONELINES",
    "MELANC",
    "MISERABL",
    "MISERI",
    "MISERY",
    "MOAN",
    "MOURN",
    "MOURNFUL",
    "ORPHAN",
    "PAIN",
    "PITIFUL",
    "PLAINT",
    "REGRET",
    "REGRETFUL",
    "REMORS",
    "REPENT",
    "REPENTANC",
    "REPENTENC",
    "RUE",
    "SAD",
    "SADDEN",
    "SADLY",
    "SADNES",
    "SOB",
    "SOBB",
    "SOBS",
    "SOMBER",
    "SOMBR",
    "SORROW",
    "SORROWFUL",
    "SORRY",
    "SUFFER",
    "TEARFUL",
    "TRAGEDY",
    "TRAGIC",
    "UNHAPPINES",
    "UNHAPPY",
    "WAIL",
    "WEEP",
    "WEPT",
    "WHIN",
    "WOE",
    "WOES"
  )

$(function(){
  CKEDITOR.replace( 'editor1', {
            // Define the toolbar groups as it is a more accessible solution.
            toolbarGroups: [
                {"name":"basicstyles","groups":["basicstyles"]},
                {"name":"links","groups":["links"]},
                {"name":"paragraph","groups":["list","blocks"]},
                {"name":"document","groups":["mode"]},
                {"name":"insert","groups":["insert"]},
                {"name":"styles","groups":["styles"]},
                {"name":"about","groups":["about"]}
            ],
            // Remove the redundant buttons from toolbar groups defined above.
            removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar,Source'
        } ); 
});

$(function() {
    $( "#datepicker" ).datepicker();
});

 // Words-triggers from Regressive Imagery Dictionary by Colin Martinedale
 // Sadness part
 
  // Search through user's input text and 
  // compaire value with words from an array,
  // open claira window if text match

$(document).ready(function(){
  var counter = 0;
  CKEDITOR.instances['editor1'].on('change', function() {
    // console.log(CKEDITOR.instances['editor1'].getData());
      WORDS.forEach(function(word){
        // var re = new RegExp("regex", 'gi')
        var x = CKEDITOR.instances['editor1'].getData().toUpperCase().search(word);
        console.log('find?:  ' +x);
        console.log(CKEDITOR.instances['editor1'].getData().toUpperCase());
        if(x != -1){
            counter += 1;
            };
        console.log(counter)
        if(counter > 3){
        var delay=2000;//1 seconds
        setTimeout(function(){
        top.location = 'http://localhost:3000';
              return null;
        },delay); 
         
        };
      });
    });
  });

    // $('.claira_button').click(function(){
    //     $(this).fadeIn('slow')
    // });

    // var glassUp = false;
    // $(".claira_button").click(function() {
    //     if (glassUp) {
    //         $(".claira").removeClass("low_opacity");
    //         glassUp = false;

    //     } else {
    //         $(".claira").addClass("low_opacity");
    //         glassUp = true;

    //     }
    // });

