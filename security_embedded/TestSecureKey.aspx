<%@ Page Language="VB" AutoEventWireup="false" CodeFile="TestSecureKey.aspx.vb" Inherits="_Default" Debug="true" %>

<%@ Import Namespace="System.Net" %>
<html>
<head>
    <script type="text/javascript" src='https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js'></script>
    <script type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min.js'></script>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/css/bootstrap.min.css'
        media="screen" />
        <link rel="stylesheet" href="index.css">
</head>
<body onkeypress="if (event.keyCode==13){frmLogon.submit()}" onload="document.getElementById('rdUsername').focus()">
    <div class="topnav">
        <a class="active" href="#home">Parent app toolbar</a>
      </div>

    <form id="frmLogon" runat="server" >
        <div class="well logonWell" style="padding: 20px;">
            <div class="row pb-2">
                <div class="col-lg-12">
                    <div class="media">

                        <div class="media-body">
                            <i class="fa fa-sign-in-alt fa-2x pull-right lg-lock"></i>
                            <h1 class="media-heading">Login</h1>
                            <span id="signInHelp" class="help-block">Enter your username and password to log on:</span>
                        </div>
                    </div>
                    <span id="lblLogon"></span>
                </div>
            </div>
            
            <div class="row pb-2">
                <div class="col-lg-12">
                    <div class="input-group">
                        <label for="txtUsername">
        Username:</label>
                       <asp:TextBox ID="txtUsername" runat="server" Value="test@test.com" CssClass="form-control" placeholder="Enter Username" required />
                    </div>
                </div>
            </div>
            <div class="row pb-2">
                <div class="col-lg-12">
                    <div class="input-group">
                        <label for="txtUsername">
        Password:</label>
                        <asp:TextBox ID="txtPassword" runat="server" Value="welcome" TextMode="Password" CssClass="form-control" placeholder="Enter Password" required />
                    </div>
                </div>
            </div>
            <div class="row pb-2">
                
                <div class="col-lg-12">
                     
                     <asp:Button ID="btnLogin2" Text="Login and embed" runat="server" OnClick="ValidateUserembedd" Class="btn btn-primary btn-block" />
                     <div class="invalid">
 <asp:Label ID="lblInvalidUser" runat="server"></asp:Label><br />
                     </div> 
                     <a class="btn btn-warning btn-block text-dark" href="via_js.aspx" target="_blank" > 
                        Embedding Using Java Script
                     </a>
                     <a class="btn btn-info btn-block" href="dynamic_js.aspx" target="_blank" > 
                            Embedding Dynamic Report using Java script
                     </a>
                    
                </div>
            </div>
        </div>
       
    </form>
</body>
</html>
