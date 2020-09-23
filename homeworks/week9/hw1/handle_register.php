<?php 
  require_once("conn.php");
  if (
    empty($_POST["username"]) ||
    empty($_POST["password"]) ||
    empty($_POST["nickname"])
    ) 
  {
    header("Location: register.php?errCode=1");
    die ("傻瓜，你有東西忘記輸入了！");
  }
  $nickname = $_POST["nickname"];
  $username = $_POST["username"];
  $password = $_POST["password"];
  $sql = sprintf(
    "insert users(nickname, username, password) values('%s','%s', '%s')",
    $nickname,
    $username,
    $password
  );
  $result = $conn->query($sql);
  // 帳號重複
  if (!$result) {
    if($conn->errno === 1062) {
      header("Location: register.php?errCode=2");
    }
    die($conn->error);
  }
  header("Location: index.php");
?>