<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="signup.php">
        <p>username:</p>
        <input type="text" name="username">
        <p>Password:</p>
        <input type="password" name="pass" id=""><br>
        <button type="submit" name="submit">submit</button>
    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            include 'db.php';
    
            if (mysqli_connect_errno()) {
                die("Connection failed: " . mysqli_connect_error());
            }
    
            $username = mysqli_real_escape_string($con, $_POST['username']);
            $password = mysqli_real_escape_string($con, $_POST['pass']);
            $hashed_password = md5($password);
    
            $query = "INSERT INTO login_details () VALUES (NULL,'$username', '$hashed_password')";
    
            if (mysqli_query($con, $query)) {
                echo $hashed_password;
                echo "User registered successfully!";
            } else {
                echo "Error: " . $query . "<br>" . mysqli_error($con);
            }
    
            mysqli_close($con);
        }
        ?>
</body>
</html>