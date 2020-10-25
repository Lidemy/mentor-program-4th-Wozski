<?php
  require_once("conn.php");
  require_once("utils.php");
  session_start();;
  if (
    empty($_POST["content"])) {
    header("Location: index.php?errCode=1");
    die("資料不齊全");
  }
  if (!empty($_SESSION["username"])) {
    $username = $_SESSION["username"];
    $user = getUserFromSession($username);
    $nickname = $user["nickname"];
    $content = $_POST["content"];
     $sql = sprintf(
      "insert into comments(nickname, content) values('%s', '%s')",
      $nickname,
      $content
    );
    $result = $conn->query($sql);
  }
  if (!$result) {
    die($conn->error);
  }
  header("Location: index.php");
    /*
    $user = getUserFromSession($username);
    $nickname = $user["nickname"];
    $content = $_POST["content"];
    $sql = sprintf(
      "insert into comments(nickname, content) values('%s', '%s')",
      $nickname,
      $content
    );
    $result = $conn->query($sql);
  }
  if (!$result) {
    die($conn->error);
  }*/
  /*
  if (!empty($_COOKIE["token"])) { 
    $user = getUserFromToken($_COOKIE["token"]);
    $nickname = $user["nickname"];
    $content = $_POST["content"];
    $sql = sprintf(
      "insert into comments(nickname, content) values('%s', '%s')",
      $nickname,
      $content
    );
    $result = $conn->query($sql);
  }
  if (!$result) {
    die($conn->error);
  }*/
    //header("Location: index.php");
?>