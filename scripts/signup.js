function validation() {
   var name = document.getElementById("name").value;
   var OID = document.getElementById("OID").value;
   var pass = document.getElementById("pass").value;
   var confirmpass = document.getElementById("conpass").value;
   var mobileNumber = document.getElementById("mobileNumber").value;
   var emails = document.getElementById("emails").value;
   if (name == "") {
      document.getElementById("Name").innerHTML =
         " ** 名前がありません。名前は、少なくとも1文字必要です。";
      return false;
   }

   if (emails == "") {
      document.getElementById("emailids").innerHTML =
         " ** メールアドレスがありません。メールアドレスは、少なくとも1文字必要です。";
      return false;
   }
   if (emails.indexOf("@") <= 0) {
      document.getElementById("emailids").innerHTML = " ** 無効なメールアドレスです。例:@gmail.comなど";
      return false;
   }

   if (
      emails.charAt(emails.length - 4) != "." &&
      emails.charAt(emails.length - 3) != "."
   ) {
      document.getElementById("emailids").innerHTML = " エラーが発生しました。もう一度お試しください⚠️";
      return false;
   }

   if (OID == "") {
      document.getElementById("username").innerHTML =
         " ** おにぎりIDがありません。";
      return false;
   }
   if (user.length <= 3 || user.length > 20) {
      document.getElementById("username").innerHTML =
         " ** おにぎりＩＤは、２０文字必要です。";
      return false;
   }
   if (!isNaN(user)) {
      document.getElementById("username").innerHTML =
         " ** 文字のみ対応されてます。シンボルはご利用いただけません。";
      return false;
   }

   if (pass == "") {
      document.getElementById("passwords").innerHTML =
         " ** Please fill the password field";
      return false;
   }
   if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
         " ** パスワードの文字数が無効です。必ず２０文字必要です。";
      return false;
   }

   if (pass != confirmpass) {
      document.getElementById("confrmpass").innerHTML =
         " ** パスワードが違います。";
      return false;
   }

   if (confirmpass == "") {
      document.getElementById("confrmpass").innerHTML =
         " ** パスワードを認証できません。もう一度お試しください。もし、バグってたら、検証ツールで確認してください。";
      return false;
   }

   if (mobileNumber == "") {
      document.getElementById("mobileno").innerHTML =
         " ** モバイル電話番号が無効です。";
      return false;
   }
   if (isNaN(mobileNumber)) {
      document.getElementById("mobileno").innerHTML =
         " ** 文字は、特殊な文字と文字はご利用いただけません。ナンバー文字のみ使えます。";
      return false;
   }
   if (mobileNumber.length != 11) {
      document.getElementById("mobileno").innerHTML =
         " ** モバイル電話番号は１１文字必要です";
      return false;
   }
}