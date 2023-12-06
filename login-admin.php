<?php
    include 'db.php';

    if ($_POST['username'] == 'admin' && $_POST['password'] == 'admin') {
        $all_enquiries="SELECT * FROM enquiries";
        $result=mysqli_query($con,$all_enquiries);
        // $enquiry=mysqli_fetch_array($result);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Admin Panel | The Schon</title>

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
        <div class="col pt-4">
            <h3>ENQUIRY LIST</h3>
        </div>
        
	</div>
   
    

<?php
    if (mysqli_num_rows($result) > 0) {
        echo "<table class='mt-5 table table-striped
        '>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Pincode</th>
                </tr>";
    
        // Output data of each row
        while ($enquiry = mysqli_fetch_assoc($result)) {
            echo "<tr>
                    <td>" . $enquiry['id'] . "</td>
                    <td>" . $enquiry['name'] . "</td>
                    <td>" . $enquiry['email'] . "</td>
                    <td>" . $enquiry['ph_no'] . "</td>
                    <td>" . $enquiry['state'] . "</td>
                    <td>" . $enquiry['city'] . "</td>
                    <td>" . $enquiry['pincode'] . "</td>
                </tr>";
        }
    
        echo "</table>";
    } else {
        echo "No enquiries found.";
    }
?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>

<?php
    } else {
        header("Location: https://www.theschon.com/admin.html");
    }
?>
