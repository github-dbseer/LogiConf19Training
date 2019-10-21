<%@ Page Language="VB" AutoEventWireup="false" CodeFile="index.aspx.vb" Inherits="_Default" %>

<%@ Import Namespace="System.Net" %>
<html>
    <head>
<title>Home</title>
<style>
    body{
        max-height: 100vh !important;
        margin: 0 !important;
        overflow: hidden !important;
    }
.topnav {
overflow: hidden;
background-color: #7A778C;
}

.topnav a {
float: left;
text-decoration: none !important;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}

.topnav a:hover {
background-color: #ddd;
color: black;
}

iframe{
    height: 100vh;
}

</style>
    </head>
    <body>
            <div class="topnav">
                    <a class="active" href="#home">Parent app toolbar</a>
                  </div>
        <div runat ="server" id="reportContainer" data-applicationUrl=link data-report="InfoGo.goHome" data-autoSizing="width" data-secureKey=sKey></div>
        <script src="http://localhost/logiConf2019_Training/rdTemplate/rdEmbedApi/rdEmbed.js" type="text/Javascript"></script>
        <script>
            
        </script>
    </body>
</html>