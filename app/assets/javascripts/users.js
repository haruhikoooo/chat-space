$(function(){
  function appendUser(user){
    var html =  `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
      </div>
      `
    $('#user-search-result').append(html);
  }

  function appendNoUser(){
    var html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>
      `
    $('#user-search-result').append(html);
  }

  function addDeleteUser(name, id){
    var html = `
    <div class="chat-group-user clearfix" id="${id}">
      <p class="chat-group-user__name">${name}</p>
      <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-name="${name}">削除</div>
    </div>`
    $(".js-add-user").append(html);
  }
  function addMember(id) {
    let html = `<input value="${id}" name="group[user_ids][]" type="hidden" id="group_user_ids_${id}" />`
    $(`#${id}`).append(html);
  }

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      dataType: 'json',
      data: {keyword: input}
    })
    .done(function(users){
      $('#user-search-result').empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        })
      }else if(input.length == 0) {
        return false;
      }else{
        appendNoUser();
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    });
  });
  
  $(document).on("click", '.user-search-add', function(){
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id")
    $(this).parent().remove();
    addDeleteUser(userName, userId);
    addMember(userId);
  });
  
  $(document).on("click", '.user-search-remove', function(){
    $(this).parent().remove();
  });
});