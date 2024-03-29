# LogiConf19Training
This app has been developed to be a guide for 2019 Logi Conference Training. The Conference includes 25 hours of in-depth presentations by solution architects, web developers, support engineers, professional services consultants, and product managers.

## Getting Started
### 1. Prerequisites
* [.NET Framework](https://documentation.logianalytics.com/logiinfov12/content/installing-logi-info-on-windows-10.htm#Preparing): Logi products require .NET Framework components. When Windows is installed, multiple versions of the framework are typically included. Ensure that you have .NET installed by using File Explorer to browse to:
**C:\Windows\Microsoft.NET\Framework**
where you would see several folders, such as v4.0.30319, one for each version of .NET installed. The .NET Framework 4.x is required for this application. Logi installs .Net Framework when you create a new Logi Application. They are also available for free from the Microsoft Download Center.

* [Enable the IIS Web Server](https://documentation.logianalytics.com/logiinfov12/content/installing-logi-info-on-windows-10.htm#Preparing): The Loogi application also requires IIS to be installed and enabled.

* Install [Logi Info Studio 12.6.089](https://documentation.logianalytics.com/logiinfov12/content/installing-logi-info-on-windows-10.htm#StartInstall).

* Install Microsoft SQL Server Management Studio: The Logi application requires SQL Server Sample Databases to be installed.


### 2. Setting-up the logi Application
#### 2.1. Create a new blank Logi application:

* Run Logi Info Studio as Administrator.
* From Home tab , click on **New Application**.
* Select **Microsoft.Net** as the type of the application.
* Use **logiConf2019_Training** as the name of the application. Make sure you use the exact name.

#### 2.2. Setting up the logi application from the training repository:
* Clone the **LogiConf19Training** repository from github.
* The repository contains three folders, **logiConf2019_Training, Embedded_analytics_html, and security_embedded**:
  * Copy the two folders **Embedded_analytics_html, security_embedded** into **C:\inetpub\wwwroot**
  * Copy all the contents inside the folder **logiConf2019_Training** into **C:\inetpub\wwwroot\logiConf2019_Training**, This will overwrite the existing folders **_Definitions** and **_SupportFiles** in the blank logi application that we created in step 2.1.
  * Inside **C:\inetpub\wwwroot\logiConf2019_Training** give the following folders a read/write permissions to allow IIS to read/write on those folders. Right click on each folder > properties > Choose Security tab > Click Edit > Add IIS_IUSRS > Allow Full Control
    * rdDownload
    * rdDataCache
    * export
    * exportCompressed

#### 2.3. Register the **security_embedded** app in IIS:
* Open IIS, and from the left panel, expand Sites > Default Web Sites
* Under Default Web Sites, right click on folder **security_embedded** 
* Select Convert to Application.  

### 3. Setting-up the databases
#### 3.1. Create a database user
* Run SQL Server Management Studio.
* On the left panel > right click on your local server node > click **Properties**
* In **Security** page, select **SQL Server and Windows Authentication mode**, and click OK.
* On the left panel, expand your local server node > Security.
* Right click on **Logins** folder, and select **New Login**.
* Select SQL Server authentication.
* Enter the Login name and Password as same as User and Password inside  **C:\inetpub\wwwroot\logiConf2019_Training\_Definitions\_Settings.lgx** file, in Connections element, and click OK.
* The user you have created is added into **Logins** folder > right click on it > click **Properties**.
* In **Server Roles** page, check **public, securityadmin, and sysadmin** boxes.
* In **Securables** page > **Explicit** tab > check **Authenticate server, Connect Any Database, Connect SQl, Control server, and Create any database** boxes.

#### 3.2. Download the following databases and copy them to the backup folder under the installation path of the SQL server , ie. C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\Backup:
* [AdventureWorks2016CTP3.bak](https://www.microsoft.com/en-us/download/details.aspx?id=49502).
* [AdventureWorksDW2017.bak](https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorksDW2017.bak)
* [AdventureWorks2017.bak](https://github.com/microsoft/sql-server-samples/releases)

#### 3.3. Follow the below steps for each downloaded database to restore it: 
* On the left panel, expand your local server node.
* Right click on **Databases**, click on Restore Database.
* In **General** page, choose Device as the source > click the three dots button.
* Click **Add** to select backup file.
* Search for the downloaded files in the backup folder under the installation path of the SQL server > click ok.

#### 3.4. Run [this database script](https://gist.github.com/github-dbseer/874ae4b86a51771f8e37ad0be2f19444) inside the database **AdventureWorks2016CTP3**, this will create the required Menu/SubMenu tables for the logi application **logiConf2019_Training**, and insert data into them.
