
// $(document).ready(function(){
//   $().click(function(){
//     $().addClass()
//   })


// })

$(document).ready(function(){

 // Words-triggers from Regressive Imagery Dictionary by Colin Martinedale
 // Sadness part
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

  // Search through user's input text and 
  // compaire value with words from an array,
  // pop-up window if text match
  // function() {
    var counter = 0;
    $("#wysihtml5-textarea").keyup(function(){
      WORDS.forEach(function(word){
   
        // var trackX = []
        x = $("#wysihtml5-textarea").val().toUpperCase().search(word);
        // console.log('find?:  ' +x);
        if(x != -1){
          counter += 1;
        };
        if(counter > 2){
          $('#claira_window').modal();
              return null;
        };
      });
    }); 
  // };

});

