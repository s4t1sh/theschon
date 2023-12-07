<?php
    include 'db.php';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (mysqli_connect_errno()) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $username = mysqli_real_escape_string($con, $_POST['username']);
        $password = mysqli_real_escape_string($con, $_POST['password']);
        $hashed_password = md5($password);

        $query = "SELECT * FROM login_details WHERE username='$username' AND pass='$hashed_password'";
        $result = mysqli_query($con, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $all_enquiries="SELECT * FROM enquiries";
            $result=mysqli_query($con,$all_enquiries);
        } else {
            header("Location: admin.php?message=Incorrect username or password");
        }
    }
    else{
        header("Location: admin.php");
    }
        mysqli_close($con);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Admin Panel | The Schon</title>
    <link href="images/newimage/logo.png" rel="icon">
    <link href="images/newimage/logo.png" rel="apple-touch-icon">
    <style>
        body{
            padding: 10px 10px;
        }

        @media (min-width: 768px) {
            body{
            padding: 25px 75px;
        }
        }
        
    </style>

</head>
<body>
    <div class="row">
		<div class="col">
			<img src="images/newimage/Group 412.png" alt="" class="window">
		</div>
	</div>
   
 
    <h3 class="text-center">ENQUIRY LIST</h3>
      

<?php
    if (mysqli_num_rows($result) > 0) {
        echo "<table class='mt-5 table table-striped
        '>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Telephone</th>
                </tr>";
    
        // Output data of each row
        while ($enquiry = mysqli_fetch_assoc($result)) {
            echo "<tr>
                    <td>" . $enquiry['id'] . "</td>
                    <td>" . $enquiry['name'] . "</td>
                    <td>" . $enquiry['email'] . "</td>
                    <td>" . $enquiry['ph_no'] . "</td>
                </tr>";
        }
    
        echo "</table>";
    } else {
        echo "<h3 class='text-center mt-5'>No enquiries found.</h3>";
    }
?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>
