<?php
  session_start(); 
  require_once("conn.php");
  require_once("utils.php");
  /* 
  1. 從 Cookie 裡面讀取 PHPSESSID(token)
  2. 從檔案裡面讀取 Session id 的內容
  3. 放到 $_SESSION
  */
  $username = NULL;
  if (!empty($_SESSION["username"])) {
  	$username = $_SESSION["username"];
  }
  /*
  實作 Session 作法
  if (!empty($_COOKIE["token"])) {
  	$user = getUserFromToken($_COOKIE["token"]);
  	$username = $user["username"];
  	if($username === NULL) {
  		die("資料錯誤");
  	}
  }*/

  //顯示留言（如果放上面會導致 $result 結果被覆蓋無法正常顯示）
  $result = $conn->query("select * from comments order by id desc");
  if (!$result) {
  	die ("Error:" . $conn->error);
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
	<header class="warning">
		<strong>本網頁只限於練習，所以忽略了資安問題，切勿把真實帳號密碼輸入</strong>
	</header>
	<form method="POST" action="handle_add_comment.php">
		<main class="board">
			<?php if (!empty($username)) {?>
				<a href="handle_logout.php" class="board-btn">登出</a>
			<?php } else {?>
			<div>
			  <a href="register.php" class="board-btn">註冊</a>
			  <a href="login.php" class="board-btn">登入</a>
			</div>
		    <?php } ?>
			<h1 class="board-title">Comments</h1>
			<?php 
			if(!empty($_GET["errCode"])) {
				$code = $_GET["errCode"];
				$msg = "Error";
			  if ($code === "1") {
			    $msg = "資料不齊全";
			  }
			  echo "<h2 class='error'>" . $msg . "</h2>";
			  }
			?>
			<?php 
			if (!empty($username)) {?>
				<?php echo "<h2 class='nickname_title'>您好！ " . $username . "</h2>"?>
			<div>
			<textarea name="content" rows="5"></textarea>
			</div>
			<input type="submit" class="board-btn">
			<?php }?>
			<div class="board_hr"></div>
			<section>
				<?php 
				 while ($row = $result->fetch_assoc()) {?>
				<div class="card">
					<div class="card__avatar"></div>
					<div class="card__body">
						<div class="card__info">
						  <span class="card__author">
						  	<? echo $row["nickname"] ?>
						  </span>
						  <span class="card__time">
						  	<? echo $row["create_at"] ?>
						  </span>
						</div>
						<p class="card__content"><? echo $row["content"] ?></p>
					</div>
				</div>
				<?php }?>
			</section>
		</main>
	</form>	
</body>
</html>