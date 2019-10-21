<html>
    <head>
<title>Embedding Static Reports using Markup</title>
    </head>
    <body>
        <!-- Change 
        data-applicationUrl: to your local logi app URL
        data-report: report name 
		data-linkParams="{'CustomerID' : 'VINET', 'StartDate' : '01/01/1996'}"
		-->
        <div id="reportContainer" data-applicationUrl="http://localhost/logiConf2019_Training" data-report="Embedded_Analytics.Workshop3" data-autoSizing="all"  ></div>
        
        <!-- Change the src to local application URL -->
        <script src="rdEmbed.js" type="text/Javascript"></script>
    </body>
</html>