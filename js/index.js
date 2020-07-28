// A $( document ).ready() block.
var year = 0;
var classify = 0;
var person = 0;
var allData = {};
var userData = {};
var classifyData = {};
var gradeData = {};
var currentUserId = '';
var loginstatus =0;
var currentUserName='';

///firebase connect ////
//正式
var firebaseConfig = {
  apiKey: "AIzaSyB0ubktQDa5zCthkUg_jqSrdMYCbI1kScQ",
  authDomain: "patrickonline-c822d.firebaseapp.com",
  databaseURL: "https://patrickonline-c822d.firebaseio.com",
  projectId: "patrickonline-c822d",
  storageBucket: "patrickonline-c822d.appspot.com",
  messagingSenderId: "627065328438",
  appId: "1:627065328438:web:df0de48d43a348323e1997",
  measurementId: "G-V684NQ13H7"
};

//////測試
// var firebaseConfig = {
//   apiKey: "AIzaSyDwzvKnypo8VFFH_HXoVkRn1mIjk78nfnM",
//   authDomain: "test-patrickonline.firebaseapp.com",
//   databaseURL: "https://test-patrickonline.firebaseio.com",
//   projectId: "test-patrickonline",
//   storageBucket: "test-patrickonline.appspot.com",
//   messagingSenderId: "111589178162",
//   appId: "1:111589178162:web:7ebb818b2ffd365905b52b",
//   measurementId: "G-ZHTBSRBGVT"
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

////////
database.ref("account").on("value", function(snapshot) {
  swal.close();
  var username = sessionStorage.getItem('username');
  var hash = sessionStorage.getItem('hash');
  currentUserName = username;
  // console.log(username+hash);
  var accountList = snapshot.val();
  for(i in accountList){
    if(accountList[i].name==username&&accountList[i].pwd==hash){
      $('div').show();
      loginstatus=1;
      return;
    }
  }
  if(loginstatus==0){
    window.location.href='./login.html?redirect';
  }

})


/////

function remove_background_color(whereToRemove) {
  switch (whereToRemove) {

    case "year_classify_person":
      $(".div_block_year").css("background-color", "");
      $(".div_block_classify").css("background-color", "");
      $(".div_block_person").css("background-color", "");
      break;

    case "classify_person":
      $(".div_block_classify").css("background-color", "");
      $(".div_block_person").css("background-color", "");
      break;

    case "person":
      $(".div_block_person").css("background-color", "");

      break;
  }
}


$(document).ready(function() {
  console.log("ready!");

  var remove_blocks = function(number) {
    if (number == 1) {
      $("#chatRoom_block_chatting_area").html('');
    } else if (number == 2) {
      $("#chatRoom_block_chatting_area").html('');
      $("#person_block").html('');
    }
  }

  ////////////////////////////////

  /////////////////////////////////

$("#outerDiv_show_all_people").click(function() {
  remove_background_color("year_classify_person");

  $("#outerDiv_show_all_people").css('background-color', '#eeeeee');
  $("#classify_block").css('visibility', 'hidden');
  remove_blocks(2);

  year = 0;
  getAllYearAllPerson();

});



  $("#year_block_109").click(function() {
    remove_background_color("year_classify_person");

    $("#year_block_109").css('background-color', '#eeeeee');
    $("#classify_block").css('visibility', 'visible');
    remove_blocks(2);

    year = 109;
    classify_block_add_year(year);

  });

  $("#year_block_108").click(function() {
    remove_background_color("year_classify_person");

    $("#year_block_108").css('background-color', '#eeeeee');

    $("#classify_block").css('visibility', 'visible');
    remove_blocks(2);

    year = 108;
    classify_block_add_year(year);

  });

  $("#year_block_107").click(function() {
    remove_background_color("year_classify_person");

    $("#year_block_107").css('background-color', '#eeeeee');

    $("#classify_block").css('visibility', 'visible');
    remove_blocks(2);

    year = 107;
    classify_block_add_year(year);

  });

  var classify_block_add_year = function(y) {
    var classify_block_DOM = document.getElementById("classify_block");
    for (var i = 0; i < classify_block_DOM.childElementCount; i++) {
      var tempinnerHtml = classify_block_DOM.children[i].innerHTML;
      // if(tempinnerHtml.includes("[")){
      tempinnerHtml = tempinnerHtml.replace(/\[109\]|\[108\]|\[107\]/gi, "");
      classify_block_DOM.children[i].innerHTML = tempinnerHtml;
      // }
      // else{
      //   classify_block_DOM.children[i].innerHTML= `[${y}]`+tempinnerHtml;
      // }
    }
  }
  /////////////////////////////////
  $("#classify_block_1").click(function() {
    remove_background_color("classify_person");

    $("#classify_block_1").css('background-color', '#eeeeee');

    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 1;

    appendPersonList(classify, year, 1);

  });

  $("#classify_block_2").click(function() {
    remove_background_color("classify_person");

    $("#classify_block_2").css('background-color', '#eeeeee');


    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 2;

    appendPersonList(classify, year, 2);

  });

  $("#classify_block_3").click(function() {
    remove_background_color("classify_person");

    $("#classify_block_3").css('background-color', '#eeeeee');


    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 3;
    appendPersonList(classify, year, 3);

  });

  $("#classify_block_4").click(function() {
    remove_background_color("classify_person");

    $("#classify_block_4").css('background-color', '#eeeeee');

    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 4;
    appendPersonList(classify, year, 4);

  });


  $("#classify_block_all").click(function() {
    remove_background_color("classify_person");

    $("#classify_block_all").css('background-color', '#eeeeee');

    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);

    getAllPerson(year);


  });

  /////////////////
$('#a_logout').click(function(){
  sessionStorage.clear();
  window.location.href = './login.html';
});

  ///////////////////////////////

  $("#sendMsg").click(function() {
    var msgValue = $("#input_msg").val();
    if ($('#chatRoom_block_chatting_area').html() != "" && msgValue!="") {

      $.get(`https://script.google.com/macros/s/AKfycbwOGDcCA0IVJefDXPHQ0JaMWvFQlnJCbYhWGIzqxNdrTW_P-F2A/exec?userId=${currentUserId}&msgContent=輔導老師${currentUserName.split('admin')[1]}號:${msgValue}`, function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
        if(status!='success'){alert('傳送失敗');}
        else if("fail"==data){
          alert("error");
        }
      });
    } else {
      console.log('NO USER AVAILABLE');
    }

    console.log(msgValue);
    $("#input_msg").val("");



  });







});





function person_block_i(element) {
  remove_background_color("person");
  $(`#${element.id}`).css('background-color', '#eeeeee');


  database.ref(`line/user/${element.id}/MsgDetail/DetailInfo/isRead`).set(0)

  appendChatroomMsg(`${element.id}`);

  currentUserId = element.id;

}

//////////////////////get user list////////

// database.ref("line/user/").on("value", function(snapshot) {
//
//   var snapshotVal = snapshot.val();
//   for (i in snapshotVal) {
//     console.log(snapshot.child(`${i}/userDetail`).val());
//     var userDetail = snapshot.child(`${i}/userDetail`).val();
//     var MsgDetail = snapshot.child(`${i}/MsgDetail`).val();
//     var displayName = userDetail.displayName;
//     var grade = userDetail.grade;
//     var pictureUrl = userDetail.pictureUrl;
//     var probClassify = MsgDetail.DetailInfo.probClassify;
//
//     // gradeData[grade] = grade;
//     // gradeData[grade][probClassify] = probClassify;
//
//     console.log(gradeData);
//
//
//
//   }
// });


function appendPersonList(var_classify, var_year, classify_block) {
  database.ref("line/user/").off("value");

  console.log(`classify:${classify} year:${year}`);
  database.ref("line/user/").on("value", function(snapshot) {
    var appendData = '';
    $("#person_block").html('');

    var snapshotVal = snapshot.val();
    for (i in snapshotVal) {

      // console.log(snapshot.child(`${i}/userDetail`).val());
      var displayName="";
      var grade="";
      var pictureUrl="";
      var probClassify="";
      var isRead="";

      // console.log(snapshot.child(`${i}/userDetail`).val());
      var userDetail = snapshot.child(`${i}/userDetail`).val();
      var MsgDetail = snapshot.child(`${i}/MsgDetail`).val();
      if(snapshot.child(`${i}/userDetail`).hasChild("displayName")){
        var displayName = userDetail.displayName;
      }
      if(snapshot.child(`${i}/userDetail`).hasChild("grade")){
        var grade = userDetail.grade;
      }
      if(snapshot.child(`${i}/userDetail`).hasChild("pictureUrl")){
        var pictureUrl = userDetail.pictureUrl;
      }
      if(snapshot.child(`${i}/MsgDetail`).hasChild("DetailInfo")){
        var probClassify = MsgDetail.DetailInfo.probClassify;
      }
      if(snapshot.child(`${i}/MsgDetail`).hasChild("DetailInfo")){
        var isRead = MsgDetail.DetailInfo.isRead;
      }

      if (grade.includes(var_year) && probClassify == var_classify) {
        if (isRead == 1) { //////not yet read
          appendData += `<div class='div_block_person centerCss waves-effect card-panel' id='${i}' onclick='person_block_i(this)'>
          <img class="myImg circle" src="${pictureUrl}">
                        <span>${displayName}</span><i class="material-icons">notifications</i>
                      </div>`;
        } else if (isRead == 0) {
          appendData += `<div class='div_block_person centerCss waves-effect card-panel' id='${i}' onclick='person_block_i(this)'>
          <img class="myImg circle" src="${pictureUrl}">
                        <span>${displayName}</span>
                      </div>`;
        }
      }

  }
    $("#person_block").html(appendData);

  });

}

function appendChatroomMsg(personId) {


  database.ref("line/user/" + currentUserId).off("value", onValueChange);

  var onValueChange =function(snapshot){
    var appendData = '';
    $('#chatRoom_block_chatting_area').html('');

    document.getElementById('chatRoom_block_chatting_area').innerHTML = '';

    var msgContent = snapshot.child('MsgDetail/MsgContent').val();
    var msg = '';
    for (i in msgContent) {
      try{
      var msgTimestampInnerContent = snapshot.child(`MsgDetail/MsgContent/${i}`).val();
      var message = msgTimestampInnerContent.message;
      var isMe = msgTimestampInnerContent.isMe;
      var id = msgTimestampInnerContent.id;
      var type = msgTimestampInnerContent.type;

      if (isMe == 0) {        ///對方的訊息

        if(type=='text'){
        appendData += `        <div class='chat_left'>
                  <span class='chat_left_span'>${message}</span>
                </div>`;
        }else if(type == 'image'){
          appendData += `<div class='chat_left'>
                    <a class='chat_left_span' href='#' onclick='javascript:getLineImageInSwal(${message})'>點我查看圖片</a>
                  </div>`;
        }
      } else if (isMe == 1) {
        appendData += `        <div class='chat_right'>
                  <span class='chat_right_span'>${message}</span>
                </div>`;
      }

    }catch(e){
      appendData+="ERROR";
    }
  }
    $('#chatRoom_block_chatting_area').html(appendData);
    var objDiv = document.getElementById("chatRoom_block_chatting_area");
    objDiv.scrollTop = objDiv.scrollHeight;

  }
  database.ref("line/user/" + personId).on("value", onValueChange);

}









function getAllPerson(theYear) {
  database.ref("line/user/").off("value");


  database.ref("line/user/").on("value", function(snapshot) {
    var appendData = '';
    $("#person_block").html('');

    var snapshotVal = snapshot.val();
    for (i in snapshotVal) {
      var displayName="";
      var grade="";
      var pictureUrl="";
      var probClassify="";
      var isRead="";

      // console.log(snapshot.child(`${i}/userDetail`).val());
      var userDetail = snapshot.child(`${i}/userDetail`).val();
      var MsgDetail = snapshot.child(`${i}/MsgDetail`).val();
      if(snapshot.child(`${i}/userDetail`).hasChild("displayName")){
        var displayName = userDetail.displayName;
      }
      if(snapshot.child(`${i}/userDetail`).hasChild("grade")){
        var grade = userDetail.grade;
      }
      if(snapshot.child(`${i}/userDetail`).hasChild("pictureUrl")){
        var pictureUrl = userDetail.pictureUrl;
      }
      if(snapshot.child(`${i}/MsgDetail`).hasChild("DetailInfo")){
        var probClassify = MsgDetail.DetailInfo.probClassify;
      }
      if(snapshot.child(`${i}/MsgDetail`).hasChild("DetailInfo")){
        var isRead = MsgDetail.DetailInfo.isRead;
      }
      // gradeData[grade] = grade;
      // gradeData[grade][probClassify] = probClassify;

      if (grade.includes(theYear)) {
        if (isRead == 1) { //////not yet read
          appendData += `<div class='div_block_person centerCss waves-effect card-panel' id='${i}' onclick='person_block_i(this)'>
          <img class="myImg circle" src="${pictureUrl}">
                        <span>${displayName}</span><i class="material-icons">notifications</i>
                      </div>`;
        } else{
          appendData += `<div class='div_block_person centerCss waves-effect card-panel' id='${i}' onclick='person_block_i(this)'>
          <img class="myImg circle" src="${pictureUrl}">
                        <span>${displayName}</span>
                      </div>`;
        }
      }

    }
    $("#person_block").html(appendData);

  });


}








function getAllYearAllPerson() {
  database.ref("line/user/").off("value");


  database.ref("line/user/").on("value", function(snapshot) {
    var appendData = '';
    $("#person_block").html('');

    var snapshotVal = snapshot.val();
    for (i in snapshotVal) {
      var displayName="";
      var grade="";
      var pictureUrl="";
      var probClassify="";
      var isRead="";

      // console.log(snapshot.child(`${i}/userDetail`).val());
      var userDetail = snapshot.child(`${i}/userDetail`).val();
      var MsgDetail = snapshot.child(`${i}/MsgDetail`).val();
      if(snapshot.child(`${i}/userDetail`).hasChild("displayName")){
        var displayName = userDetail.displayName;
      }
      if(snapshot.child(`${i}/userDetail`).hasChild("grade")){
        var grade = userDetail.grade;
      }
      if(snapshot.child(`${i}/userDetail`).hasChild("pictureUrl")){
        var pictureUrl = userDetail.pictureUrl;
      }
      if(snapshot.child(`${i}/MsgDetail`).hasChild("DetailInfo")){
        var probClassify = MsgDetail.DetailInfo.probClassify;
      }
      if(snapshot.child(`${i}/MsgDetail`).hasChild("DetailInfo")){
        var isRead = MsgDetail.DetailInfo.isRead;
      }
      // gradeData[grade] = grade;
      // gradeData[grade][probClassify] = probClassify;

      if (grade.includes('')) {
        if (isRead == 1) { //////not yet read
          appendData += `<div class='div_block_person centerCss waves-effect card-panel' id='${i}' onclick='person_block_i(this)'>
          <img class="myImg circle" src="${pictureUrl}">
                        <span>${displayName}</span><i class="material-icons">notifications</i>
                      </div>`;
        } else{
          appendData += `<div class='div_block_person centerCss waves-effect card-panel' id='${i}' onclick='person_block_i(this)'>
          <img class="myImg circle" src="${pictureUrl}">
                        <span>${displayName}</span>
                      </div>`;
        }
      }

    }
    $("#person_block").html(appendData);

  });


}

function getLineImageInSwal(id){
$.get('http://paishienglish.com/line/image/'+id,function(data,status){

  swal.fire({html:`<img src="${data}" width="100%">`});
})
}
//////////////push msg//////////////

const linePushMsgUrl = 'https://script.google.com/macros/s/AKfycbwOGDcCA0IVJefDXPHQ0JaMWvFQlnJCbYhWGIzqxNdrTW_P-F2A/exec';

// https://script.google.com/macros/s/AKfycbwOGDcCA0IVJefDXPHQ0JaMWvFQlnJCbYhWGIzqxNdrTW_P-F2A/exec?userId=U4080d143dd9a5a5913517908120e4cd9&msgContent=213
