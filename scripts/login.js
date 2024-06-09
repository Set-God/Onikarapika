function validation() {
   var user = document.getElementById("user").value;
   var pass = document.getElementById("pass").value;
   
   if (user == "") {
      document.getElementById("username").innerHTML =
         " ** おにぎりIDが足りません。";
      return false;
   }
   if (user.length <= 2 || user.length > 20) {
      document.getElementById("username").innerHTML =
         " ** おにぎりIDが無効です。";
      return false;
   }
   if (!isNaN(user)) {
      document.getElementById("username").innerHTML =
         " ** 文字のみ許可されてます。特殊な文字は使えません。";
      return false;
   }

   if (pass == "") {
      document.getElementById("passwords").innerHTML =
         " ** パスワードが足りません。";
      return false;
   }
   if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
         " ** アカウントを作成しましたか？アカウントを作成したパスワードを思い出して下さい。パスワードが違います。";
      return false;
   }

   if (pass != confirmpass) {
      document.getElementById("confrmpass").innerHTML =
         " ** 確認用パスワードが無効です。";
      return false;
   }
}
function oncheck() {
   
};