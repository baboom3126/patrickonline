
function Get_number_of_messages_sent_this_month(){

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.line.me/v2/bot/message/quota/consumption",
  "method": "GET",
  "headers": {
    "authorization": "Bearer cczj9CwL5YhQQ7ZW8e+BmTf/35bLpH0BI8jG0rKXcIoAf9yfj+jMn3TtmQn0r/ggp+epKgPq1TFTHSzM9o11GPdzIKYOoKGg/LQU5U/dIWMH+7WwUbJZWUtxoUyO/0w41I2NSGAIlf2LayAv5nfM7QdB04t89/1O/w1cDnyilFU=",
    "cache-control": "no-cache",
    "postman-token": "c660819e-cea9-1271-f657-3b33758e1dce"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}
