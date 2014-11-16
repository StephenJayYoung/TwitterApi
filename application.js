$.ajax({
    url: "https://api.twitter.com/1.1/search/tweets.json",
    dataType: "jsonp",
    data: "q=%23fml",
    beforeSend:  function (xhr) {
             xhr.setRequestHeader ("Authorization", "Bearer XXmyBearerCodeXX"); 
            },
    success: function(json){ alert(json); }
});