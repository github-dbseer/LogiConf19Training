Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        Dim rptUrl As String = Request.QueryString("rdReport")
        Dim sKey As String = Request.QueryString("rdSecureKey")

        reportContainer.Attributes("Data-applicationUrl") = "http://localhost/logiConf2019_Training"
        reportContainer.Attributes("data-report") = rptUrl
        reportContainer.Attributes("data-secureKey") = sKey

    End Sub
End Class