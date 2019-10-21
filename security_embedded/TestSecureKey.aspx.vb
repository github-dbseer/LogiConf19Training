Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub ValidateUserembedd(sender As Object, e As EventArgs)
        Dim sLocalInfoUrl As String = "http://localhost/logiConf2019_Training"
        Dim sGetKeyUrl As String = "/rdTemplate/rdGetSecureKey.aspx?Username=" & txtUsername.Text & "&Roles=admin" & "&ClientBrowserAddress=" & Request.UserHostAddress
        Dim webRequest As Net.HttpWebRequest
        Dim webResponse As Net.WebResponse
        webRequest = Net.HttpWebRequest.Create(sLocalInfoUrl & sGetKeyUrl)

        ' run the URL to get the key
        Try
            webResponse = webRequest.GetResponse()
        Catch ex As Exception
            ' if the web server has Basic or NTLM authentication, set the credentials from the current process
            If ex.Message.IndexOf("401") <> -1 Then
                webRequest.Credentials = Net.CredentialCache.DefaultCredentials
                webResponse = webRequest.GetResponse()
            Else
                Throw ex
            End If
        End Try

        Dim sr As New IO.StreamReader(webResponse.GetResponseStream())
        Dim sKey As String = sr.ReadToEnd()
        'Dim sUsersInfoUrl As String = sLocalInfoUrl & "/rdPage.aspx"
        Dim sUserHomeUrl As String = "http://localhost/security_embedded" & "/index.aspx" & "?rdReport=Chart.Workshop1.ComboChart"
        'lblInvalidUser.Text = sUserHomeUrl & "&rdSecureKey=" & sKey
        Response.Redirect(sUserHomeUrl & "&rdSecureKey=" & sKey)
		'Response.Redirect(sUserHomeUrl)
        ' Response.Redirect(sUsersInfoUrl & "?rdSecureKey=" & sKey)
    End Sub


End Class