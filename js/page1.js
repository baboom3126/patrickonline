// A $( document ).ready() block.
var year = 0;
var classify = 0;
var person = 0;
var allData = {};
var userData = {};
var classifyData = {};
var gradeData = {};
///firebase connect ////

var firebaseConfig = {
  apiKey: "AIzaSyDwzvKnypo8VFFH_HXoVkRn1mIjk78nfnM",
  authDomain: "test-patrickonline.firebaseapp.com",
  databaseURL: "https://test-patrickonline.firebaseio.com",
  projectId: "test-patrickonline",
  storageBucket: "test-patrickonline.appspot.com",
  messagingSenderId: "111589178162",
  appId: "1:111589178162:web:7ebb818b2ffd365905b52b",
  measurementId: "G-ZHTBSRBGVT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();




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
      classify_block_DOM.children[i].innerHTML = `[${y}]` + tempinnerHtml;
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
    $("#person_block").html(appendTest1());

  });

  $("#classify_block_2").click(function() {
    remove_background_color("classify_person");

    $("#classify_block_2").css('background-color', '#eeeeee');


    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 2;
    $("#person_block").html(appendTest1());

  });

  $("#classify_block_3").click(function() {
    remove_background_color("classify_person");

    $("#classify_block_3").css('background-color', '#eeeeee');


    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 3;
    $("#person_block").html(appendTest1());

  });

  $("#classify_block_4").click(function() {
    remove_background_color("classify_person");

    $("#classify_block_4").css('background-color', '#eeeeee');

    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 4;
    $("#person_block").html(appendTest1());

  });
  ///////////////////////////////

  $("#sendMsg").click(function() {
    console.log("SEND MSG");
    var msgValue = $("#input_msg").val();
    console.log(msgValue);
    $("#input_msg").val("");
  });

  /////////////////////////////







});

function appendTest1(i) {
  return `
  <div class='div_block_person centerCss waves-effect' id='person_block_1' onclick='person_block_i(1)'>
    <span>person1</span>
  </div>
  <div class='div_block_person centerCss waves-effect' id='person_block_2' onclick='person_block_i(2)'>
    <span>person2</span>
  </div>
  <div class='div_block_person centerCss waves-effect' id='person_block_3' onclick='person_block_i(3)'>
    <span>person3</span>
  </div>
  <div class='div_block_person centerCss waves-effect' id='person_block_4' onclick='person_block_i(4)'>
    <span>person4</span>
  </div>
  <div class='div_block_person centerCss waves-effect' id='person_block_5' onclick='person_block_i(5)'>
    <span>person5</span>
  </div>`;
}

function appendTest2(i) {

  return `
        <div class='chat_left'>
          <span class='chat_left_span'>我是person${i} ${year}年 問題類型 [${classify}] 我是person${i} ${year}年 問題類型 [${classify}] 我是person${i} ${year}年 問題類型 [${classify}] </span>
        </div>
        <div class='chat_right'>
          <span class='chat_right_span'>testtestsetsetsetsetsetsetsetsettessettesttestsetsetsetsetsetsetsetsettesset</span>
        </div>        <div class='chat_left'>
                  <span class='chat_left_span'>我是person${i} ${year}年 問題類型 [${classify}] 我是person${i} ${year}年 問題類型 [${classify}] 我是person${i} ${year}年 問題類型 [${classify}] </span>
                </div>
                <div class='chat_right'>
                  <span class='chat_right_span'>testtestsetsetsetsetsetsetsetsettessettesttestsetsetsetsetsetsetsetsettesset</span>
                </div>        <div class='chat_left'>
                          <span class='chat_left_span'>我是person${i} ${year}年 問題類型 [${classify}] 我是person${i} ${year}年 問題類型 [${classify}] 我是person${i} ${year}年 問題類型 [${classify}] </span>
                        </div>
                        <div class='chat_right'>
                          <span class='chat_right_span'>testtestsetsetsetsetsetsetsetsettessettesttestsetsetsetsetsetsetsetsettesset</span>
                        </div>
      </div><div class='' id='chatRoom_block_chatting_area'>
      <div class='chat_left'>
      <span class='chat_left_span'>我是person${i} ${year}年 問題類型 [${classify}] </span>
      </div>
            <div class='chat_right'>
              <span class='chat_right_span'>testtestsetsetsetsetsetsetsetsettessettesttestsetsetsetsetsetsetsetsettesset</span>
            </div>
          </div><div class='' id='chatRoom_block_chatting_area'>
          <div class='chat_left'>
          <span class='chat_left_span'>我是person${i} ${year}年 問題類型 [${classify}] </span>
          </div>
                <div class='chat_right'>
                  <span class='chat_right_span'>testtestsetsetsetsetsetsetsetsettessettesttestsetsetsetsetsetsetsetsettesset</span>
                </div>
              </div><div class='' id='chatRoom_block_chatting_area'>
              <div class='chat_left'>
              <span class='chat_left_span'>我是person${i} ${year}年 問題類型 [${classify}] </span>
              </div>
                    <div class='chat_right'>
                      <span class='chat_right_span'>testtestsetsetsetsetsetsetsetsettestesttestsetsetsetsetsetsetsetsettessetset</span>
                    </div>
                  `;
}

function person_block_i(i) {
  remove_background_color("person");
  $("#person_block_" + i).css('background-color', '#eeeeee');

  $("#chatRoom_block_chatting_area").html(appendTest2(i));

}

//////////////////////get user list////////

database.ref("line/user/").on("value", function(snapshot) {

  var snapshotVal = snapshot.val();
  for (i in snapshotVal) {
    console.log(snapshot.child(`${i}/userDetail`).val());
    var userDetail = snapshot.child(`${i}/userDetail`).val();
    var MsgDetail = snapshot.child(`${i}/MsgDetail`).val();
    var displayName = userDetail.displayName;
    var grade = userDetail.grade;
    var pictureUrl = userDetail.pictureUrl;
    var probClassify = MsgDetail.DetailInfo.probClassify;

    // gradeData[grade] = grade;
    // gradeData[grade][probClassify] = probClassify;

    console.log(gradeData);



  }
});




//////////////push msg//////////////

const linePushMsgUrl = 'https://script.google.com/macros/s/AKfycbwjHGXynZWfvRDiZDfVFAO_fRqVc4X8zVSBX27ZzTxgqYpVH7Y/exec?';

//https://script.google.com/macros/s/AKfycbwjHGXynZWfvRDiZDfVFAO_fRqVc4X8zVSBX27ZzTxgqYpVH7Y/exec?userId=U4080d143dd9a5a5913517908120e4cd9&msgContent=213
