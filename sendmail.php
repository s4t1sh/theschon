
<?php

include 'db.php';
$to = "contact@theschon.com";
// $to = "vasettisatish@gmail.com";

$first_name = $_POST['nameInp'];
$email_from = $_POST['emailInp'];
$telephone = $_POST['phoneInp'];
// $state = $_POST['stateInp'];
// $city = $_POST['cityInp'];
// $pincode = $_POST['pincodeInp'];

$insert_qry="INSERT INTO enquiries() VALUES(NULL,'$first_name','$email_from','$telephone')";
mysqli_query($con,$insert_qry);

$subject = "Thanks for contacting us";
$message = "
<html>
<head>
<title>The Schon</title>
</head>
<body>
<p>The Schon</p>
<table>
<tr>
<th>Name</th>
<th>Telephone</th>
<th>Email</th>
</tr>
<tr>
<td>".$first_name."</td>
<td>".$telephone."</td>
<td>".$email_from."</td>
</tr>
</table>
</body>
</html>
";

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://rototransindia.com/demo/triggerMail/sendEmail.php',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('to' => $to,'subject' => $subject,'message' => $message,'email' => $email_from),
));

$response = curl_exec($curl);

curl_close($curl);

echo "
<html>
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WBSQRXRG');</script>
<!-- End Google Tag Manager -->
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '875701817259560');
fbq('track', 'PageView');
</script>
<noscript><img height='1' width='1' style='display:none'
src='https://www.facebook.com/tr?id=875701817259560&ev=PageView&noscript=1'
/></noscript>
<!-- End Meta Pixel Code -->

</head>

<body>
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-WBSQRXRG'
height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
Thank you for contacting us. We will be in touch with you very soon.<a href='index.html'>Click here</a>
</body>
</html>";
?>