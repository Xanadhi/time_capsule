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
  CKEDITOR.replace( 'editor1' );
});

 // Words-triggers from Regressive Imagery Dictionary by Colin Martinedale
 // Sadness part
 
  // Search through user's input text and 
  // compaire value with words from an array,
  // pop-up window if text match

// CKEDITOR.on( 'contentDom', function() {
//   console.log("aha!");
//     var editable = editor.editable();

//     editable.attachListener( editable, 'click', function() {
//         console.log( 'Editable has been clicked' );
//     });
// });




// $(document).ready(function(){
//   var counter = 0;
//   $('#editor1').keyup(function(){
//       WORDS.forEach(function(word){
//         x = $("#editor1").val().toUpperCase().search(word);
//         console.log('find?:  ' +x);
//         if(x != -1){
//           counter += 1;
//         };
//         if(counter > 2){
//           $('#claira_window').modal();
//               return null;
//         };
//       });
//     });





// $(document).ready(function(){
//   var counter = 0;
//   CKEDITOR.instances['editor1'].on('contentDom', function(){
//     CKEDITOR.instances['editor1'].document.on('keyup', function(event) {
//         document.getElementById("preview").innerHTML = CKEDITOR.instances.editor1.getData();
//       WORDS.forEach(function(word){
//         x = $("#editor1").val().toUpperCase().search(word);
//         console.log('find?:  ' +x);
//         if(x != -1){
//           counter += 1;
//         };
//         if(counter > 2){
//           $('#claira_window').modal();
//               return null;
//         };
//       });
//     });
//     });


$(document).ready(function(){
//   var counter = 0;
//   console.log(editor1);
//   var editable = editor1.editable();
//   $editor1.on('contentDom', function() { editor1.editable().attachListener('keyup', editor1.document, function( evt ){ 
//       WORDS.forEach(function(word){
//         x = $("#editor1").val().toUpperCase().search(word);
//         console.log('find?:  ' +x);
//         if(x != -1){
//           counter += 1;
//         };
//         if(counter > 2){
//           $('#claira_window').modal();
//               return null;
//         };
//     });
//       }); 
// });
  

    // $('.claira_button').click(function(){
    //     $(this).fadeIn('slow')
    // });

    var glassUp = false;
    $(".claira_button").click(function() {
        if (glassUp) {
            $(".claira").removeClass("low_opacity");
            glassUp = false;

        } else {
            $(".claira").addClass("low_opacity");
            glassUp = true;

        }
    });

    // $(function() {
    // $('#super_button').click(function() {
    //     var url = "http://localhost:3000";
    //     $('<iframe />', {
    //         name: 'frame',
    //         id:   'claira_iframe',
    //         src: url
    //     }).appendTo('body');    
    // });
    // return false;
    // });
    
});

