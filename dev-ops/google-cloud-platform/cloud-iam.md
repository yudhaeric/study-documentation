## Cloud IAM (Identity Access Management)

Memungkinkan kita untuk memberikan akses terperinci ke sumber daya cloud tertentu dan mencegah akses ke sumber daya lain.

Manage access to projects, folders, and organizations

Required roles
To manage access to a project: Project IAM Admin (roles/resourcemanager.projectIamAdmin)

To manage access to a folder: Folder Admin (roles/resourcemanager.folderAdmin)

To manage access to projects, folders, and organizations: Organization Admin (roles/resourcemanager.organizationAdmin)

To manage access to almost all Google Cloud resources: Security Admin (roles/iam.securityAdmin)

Manage access to other resources

For example, to manage access to a Compute Engine instance, you need the following permissions:

compute.instances.get
compute.instances.getIamPolicy
compute.instances.setIamPolicy

API yang memanfaatkan protokol HTTP, request methods, dan endpoint (titik akhir) disebut sebagai RESTful API. REST (Representational State Transfer) adalah gaya arsitektur yang mengatur standar untuk komunikasi berbasis web.

