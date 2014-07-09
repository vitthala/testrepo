<?php
	$link = mysql_connect("localhost", "root", "root") or die(mysql_error());
	mysql_select_db("test") or die(mysql_error());
	$query = mysql_query("select * from tblTest") or die(mysql_error());
	while($info = mysql_fetch_array($query)) {
		echo "<br>" . $info['name'];	
	}

echo "done";
//Added By Branch
?>
