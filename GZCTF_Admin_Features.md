# GZCTF Admin Features Documentation

This document summarizes the administrative functionalities implemented in the GZCTF backend. These features are accessible primarily via the `AdminController`, `EditController`, `ApiTokenController`, and other specialized controllers, secured by `[RequireAdmin]` or `[RequireMonitor]` attributes.

## 1. System & Global Configuration
Features related to the global settings and branding of the platform.

| Feature | Description | Controller / Method |
| :--- | :--- | :--- |
| **Get Configuration** | Retrieve global settings (Account Policy, Global Config, Container Policy). | `AdminController.GetConfigs` |
| **Update Configuration** | Modify global settings, including API encryption keys. | `AdminController.UpdateConfigs` |
| **Update Logo/Favicon** | Upload and update the platform's logo and favicon. | `AdminController.UpdateLogo` |
| **Reset Logo** | Reset the platform's logo and favicon to default. | `AdminController.ResetLogo` |

## 2. User Management
Features for managing user accounts.

| Feature | Description | Controller / Method |
| :--- | :--- | :--- |
| **List Users** | Retrieve a paginated list of all registered users. | `AdminController.Users` |
| **Search Users** | Search users by username, email, phone, student ID, or real name. | `AdminController.SearchUsers` |
| **Create User** | Create a single user account with username, password, and optional team assignment. | `AdminController.AddUsers` (single user) |
| **Batch Add Users** | Bulk create multiple user accounts in one operation. Supports automatic team creation and assignment. | `AdminController.AddUsers` |
| **Update User Info** | Modify user details (username, email, role, etc.). | `AdminController.UpdateUserInfo` |
| **Reset Password** | Reset a user's password and generate a temporary one. | `AdminController.ResetPassword` |
| **Delete User** | Delete a user account (cannot delete self or team captains). | `AdminController.DeleteUser` |
| **Get User Details** | Retrieve detailed profile information for a specific user. | `AdminController.UserInfo` |

### 📝 User Creation Details

**Single/Batch User Creation** (`AdminController.AddUsers`):
- Accepts an array of user objects with fields: `userName`, `password`, `email`, `realName`, `stdNumber`, `phone`, `teamName` (optional)
- **Automatic Team Handling**:
  - If `teamName` is provided, the system will:
    - Create a new team if it doesn't exist
    - Add the user to an existing team with the same name
    - Set the first user as team captain
- **Duplicate Handling**: 
  - If username or email already exists, updates the existing user's password and info
  - Continues processing remaining users even if one fails
- **Transaction Safety**: Uses database transactions to ensure data consistency

## 3. Team Management
Features for managing participating teams.

| Feature | Description | Controller / Method |
| :--- | :--- | :--- |
| **List Teams** | Retrieve a paginated list of all teams. | `AdminController.Teams` |
| **Search Teams** | Search teams by name. | `AdminController.SearchTeams` |
| **Create Team** | Create a new team (via user batch creation with `teamName` field). | `AdminController.AddUsers` |
| **Update Team** | Modify team information. | `AdminController.UpdateTeam` |
| **Delete Team** | Delete a team (checks for active game participation). | `AdminController.DeleteTeam` |
| **Review Participation** | Update participation status (e.g., accept/reject applications). | `AdminController.Participation` |

### 📝 Team Creation Details

**Team Creation Methods**:

1. **Automatic Creation via User Batch Import**:
   - When creating users with `teamName` field in `AdminController.AddUsers`
   - System automatically creates teams and assigns users
   - First user in the team becomes the captain

2. **User-Initiated Creation** (via `TeamController.CreateTeam`):
   - Regular users can create their own teams
   - Each user can create up to 3 teams as captain
   - Team creator automatically becomes the captain

## 4. Game & Challenge Management
Core functionalities for creating and managing CTF games and challenges.

| Feature | Description | Controller / Method |
| :--- | :--- | :--- |
| **Create/Update/Delete Game** | CRUD operations for CTF games. | `EditController.AddGame`, `UpdateGame`, `DeleteGame` |
| **Import/Export Game** | Import or export a full game package (zip). | `EditController.ImportGame`, `ExportGame` |
| **Game Poster** | Update the promotional poster for a game. | `EditController.UpdateGamePoster` |
| **Divisions** | Manage game divisions (groups). | `EditController.CreateDivision`, `UpdateDivision`, `DeleteDivision` |
| **Notices** | Manage game-specific announcements. | `EditController.AddGameNotice`, `UpdateGameNotice`, `DeleteGameNotice` |
| **Challenges** | CRUD operations for challenges within a game. | `EditController.AddGameChallenge`, `UpdateGameChallenge`, `RemoveGameChallenge` |
| **Flags** | Manage challenge flags. | `EditController.AddFlags`, `RemoveFlag` |
| **Attachments** | Manage challenge file attachments. | `EditController.UpdateAttachment` |
| **Test Containers** | Create and destroy test containers for dynamic challenges. | `EditController.CreateTestContainer`, `DestroyTestContainer` |
| **Flush Cache** | Manually flush scoreboard or game caches. | `EditController.FlushScoreboardCache` |
| **Posts** | Manage global news/blog posts. | `EditController.AddPost`, `UpdatePost`, `DeletePost` |

## 5. Monitoring & Logs
Features for real-time monitoring and auditing.

| Feature | Description | Controller / Method |
| :--- | :--- | :--- |
| **System Logs** | View system logs with filtering by level. | `AdminController.Logs` |
| **Game Events** | View in-game events (Monitor role). | `GameController.Events` |
| **Submissions** | View and filter user flag submissions (Monitor role). | `GameController.Submissions` |
| **Cheat Info** | Access potential cheating detection data (Monitor role). | `GameController.CheatInfo` |
| **Traffic Captures** | Access and manage traffic capture files (Monitor role). | `GameController.GetChallengesWithTrafficCapturing`, `GetChallengeTraffic` |
| **Writeups** | List and download team writeups for a game. | `AdminController.Writeups`, `DownloadAllWriteups` |

## 6. Container Management
Features for managing Docker containers.

| Feature | Description | Controller / Method |
| :--- | :--- | :--- |
| **List Instances** | List all active container instances. | `AdminController.Instances` |
| **Destroy Instance** | Forcibly destroy a specific container instance. | `AdminController.DestroyInstance` |

## 7. Asset & File Management
Features for managing uploaded files.

| Feature | Description | Controller / Method |
| :--- | :--- | :--- |
| **List Files** | List all uploaded files/blobs. | `AdminController.Files` |
| **Upload File** | Direct file upload (Admin). | `AssetsController.Upload` |
| **Delete File** | Delete a file by hash. | `AssetsController.Delete` |

## 8. API Tokens
Features for managing programmatic access.

| Feature | Description | Controller / Method |
| :--- | :--- | :--- |
| **Generate Token** | Create a new API token for admin access. | `ApiTokenController.GenerateToken` |
| **List Tokens** | List all active API tokens. | `ApiTokenController.ListTokens` |
| **Restore/Revoke Token** | Restore or revoke/delete API tokens. | `ApiTokenController.RestoreToken`, `RevokeToken` |
