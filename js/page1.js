var year = 0;
var classify = 0;
var person = 0;

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
  /////////////////////////////////
  $("#year_block_109").click(function() {
    $("#classify_block").css('visibility', 'visible');
    remove_blocks(2);

    year = 109;
    classify_block_add_year(year);

  });

  $("#year_block_108").click(function() {
    $("#classify_block").css('visibility', 'visible');
    remove_blocks(2);

    year = 108;
    classify_block_add_year(year);

  });

  $("#year_block_107").click(function() {
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
    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 1;
    $("#person_block").html(appendTest1());

  });

  $("#classify_block_2").click(function() {
    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 2;
    $("#person_block").html(appendTest1());

  });

  $("#classify_block_3").click(function() {
    $("#person_block").css('visibility', 'visible');
    remove_blocks(1);
    classify = 3;
    $("#person_block").html(appendTest1());

  });

  $("#classify_block_4").click(function() {
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


////////////////////////////////////////





});
function appendTest1(i){
  return `<div class='div_block_1 centerCss waves-effect' id='person_block_1' onclick='person_block_i(1)'>
    <span>person1</span>
  </div>
  <div class='div_block_1 centerCss waves-effect' id='person_block_2' onclick='person_block_i(2)'>
    <span>person2</span>
  </div>
  <div class='div_block_1 centerCss waves-effect' id='person_block_3' onclick='person_block_i(3)'>
    <span>person3</span>
  </div>
  <div class='div_block_1 centerCss waves-effect' id='person_block_4' onclick='person_block_i(4)'>
    <span>person4</span>
  </div>
  <div class='div_block_1 centerCss waves-effect' id='person_block_5' onclick='person_block_i(5)'>
    <span>person5</span>
  </div>`;
}

function appendTest2(i){

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

function person_block_i(i){
  $("#chatRoom_block_chatting_area").html(appendTest2(i));

}
