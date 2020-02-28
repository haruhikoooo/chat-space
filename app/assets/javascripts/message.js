$(function(){
  function buildHTML(message){
    if (message.image){
      var html = `<div class="chat__info">
                    <div class="chat__info--left">
                    ${message.user_name}
                    </div>
                    <div class="chat__info--right">
                    ${message.created_at}
                    </div>
                  </div>
                  <div class="chat__contents">
                    <p class="chat__contents__message">
                    ${message.chat}
                    </p>
                    <img class="chat__contents__image" src=${message.image} >
                  </div>`
      return html;
    } else {
      var html = `<div class="chat__info">
                    <div class="chat__info--left">
                    ${message.user_name}
                    </div>
                    <div class="chat__info--right">
                    ${message.created_at}
                    </div>
                  </div>
                  <div class="chat__contents">
                    <p class="chat__contents__message">
                    ${message.chat}
                    </p>
                  </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data)
      $('.main-contents__chat-list').append(html);
      $('form')[0].reset();
      $('.main-contents__chat-list').animate({ scrollTop: $('.main-contents__chat-list')[0].scrollHeight});
      $('.message-form__btn--send').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
});