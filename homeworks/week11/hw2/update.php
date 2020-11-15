<?php 
session_start(); 
require_once("conn.php");
require_once("utils.php");
$id = $_GET['id'];

$stmt = $conn->prepare(
    'select * from comments where id=? '
  );
  $stmt->bind_param('s', $id);
  $result = $stmt->execute();
  if (!$result) {
    die ("Error:" . $conn->error);
  }
  //拿出結果
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
?>
<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="#">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="handle_logout.php">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <form action="handle_update_comment.php" method="POST">
          <div class="edit-post__title">
            更新文章：
          </div>
          <div class="edit-post__input-wrapper">
            <input class="edit-post__input" value="<?php echo $row['title']?>" name="title" />
          </div>
          <div class="edit-post__input-wrapper">
            <textarea rows="20" class="edit-post__content" name="content"><?php echo $row['content']?></textarea>
            <input type="hidden" name="id" value="<?php echo $row['id']?>" />
          </div>
          <div class="edit-post__btn-wrapper">
              <input type="submit" class="edit-post__btn" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>