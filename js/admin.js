
jQuery(function(){
    saveToken();
    $.ajax({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        type: "POST",
        url: "https://drivetest.pagekite.me/myapp/rest/admin",
        data: { admin_token: localStorage.getItem("admin_token") }
    }).done(function(data, textStatus, jqXHR) {
        console.log(jqXHR.responseText);
        //var response = $.parseJSON(jqXHR.responseText);
        $("#content").html(jqXHR.responseText);
    }).fail(function(data, textStatus, jqXHR) {
        window.location.replace("/");
    })
})

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function saveToken() {
    var token;
    try {
        const params = new URLSearchParams(location.search);
        token = params.get("admin_token");
    } catch(e) {
        token = getURLParameter('admin_token');
    }
    if (token) {
        if (!localStorage.getItem("admin_token"))
            localStorage.setItem("admin_token", token);
    }
}
