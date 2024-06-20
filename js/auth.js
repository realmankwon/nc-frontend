var access = getCookie("access");
var username = getCookie("user");

function KeychainModal() {
  $("#KeychainLogin").modal("show");
  $("#keychainBtn").attr("disabled", false);
}

$("#keychainUser").on("input", function () {
  var user = $("#keychainUser").val();
  if (user.length > 0) {
    $("#likc").attr("disabled", false);
  } else {
    $("#likc").attr("disabled", true);
  }
});

function LoginKeychain() {
  $("#likc").attr("disabled", true);
  var params = {};

  // The "username" parameter is required prior to log in for "Steem Keychain" users.
  var us = $("#keychainUser").val();
  console.log(us);
  params = { username: us };

  if (us.length > 0) {
    username = params.username;

    var json = {};
    json["user"] = params.username;
    $.ajax({
      url: apiServer + "/loaduser",
      type: "GET",
      data: json,
      success: function (msg) {
        access = params.username;
        if (msg["date"]) {
          document.cookie = "planetid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          document.cookie =
            "access=" + access + "; expires=Thu, 01 Jan 2970 00:00:00 UTC;";
          document.cookie =
            "user=" +
            params.username +
            "; expires=Thu, 01 Jan 2970 00:00:00 UTC;";
          loginSuccess();
        } else {
          setTimeout(function () {
            RegKeychain();
          }, 3000);
        }
      },
      error: function (msg) {},
    });
    //   if (err) {
    //     $("#likc").attr("disabled", false);
    //   }
  } else {
    $("#likc").attr("disabled", false);
  }
}

function RegKeychain() {
  $("#likc").attr("disabled", true);
  $("#likc").html('<img src="img/loading.gif" height="15px" />');

  var scJson = {};
  var scCmd = {};
  scJson["username"] = username;
  scJson["type"] = "newuser";
  scCmd["tr_var1"] = username;
  scJson["command"] = scCmd;

  var njson = JSON.stringify(scJson);
  console.log(njson);

  var json = {};
  json["user"] = username;
  MakeAPhonecall(
    apiServer + "/loaduser",
    json,
    [],
    function (err, res) {
      if (res) {
        document.cookie = "planetid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie =
          "access=" + access + "; expires=Thu, 01 Jan 2970 00:00:00 UTC;";
        document.cookie =
          "user=" + username + "; expires=Thu, 01 Jan 2970 00:00:00 UTC;";
        loginSuccess();
      } else {
        $("#likc").attr("disabled", false);
        $("#likc").html("Registration/Login");
      }
    },
    "GET"
  );
}

function LoginModal() {
  document.getElementById("LoginModal").style.display = "block";
}

function loginSuccess() {
  window.location.href = "/overview.php";
}

function NotLoggedIn() {
  document.cookie = "planetid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function Logout() {
  document.cookie = "planetid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "access=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  username = "";
  planetid = "";
  NotLoggedIn();
}

if (access == "") {
  NotLoggedIn();
  Logout();
} else {
  loginSuccess();
}
