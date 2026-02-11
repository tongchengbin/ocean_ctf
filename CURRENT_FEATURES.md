# Enabled Features

## Container Management
- [x] **Container Info**: View Docker host info (version, containers, images, memory, CPU). (`admin.py:docker_info`)
- [x] **Image Management**: List, delete, and build images (tar/dockerfile). (`docker.py:docker_images`, `image_create`)
- [x] **Container Operations**: List, start, stop, restart containers. (`docker.py:container_action`)
- [x] **Compose Support**: Manage `docker-compose.yml` files and runners (partial implementation). (`docker.py:compose_db_list`)
- [x] **Resource Synchronization**: Sync Docker resources from remote URLs. (`docker.py:docker_resource_sync`)

## Challenge Management (CTF)
- [x] **Question Bank**: Create, update, delete, and list questions. (`ctf.py:question_list`)
- [x] **Dynamic Flags**: Support for dynamic flag generation per container. (`ctf.py:question_update`)
- [x] **Resource Binding**: Bind Docker resources to questions.
- [x] **Attachments**: Upload and manage challenge attachments. (`ctf.py:ctf_upload_attachment`)
- [x] **Repo Sync**: Sync questions from remote repositories. (`ctf.py:ctf_sync_repo`)

## Vulnerability Replication (Vuln)
- [x] **Vulnerability Resources**: Manage vulnerability environments separate from CTF challenges. (`vulnerability.py`)
- [x] **One-Click Deployment**: Run vulnerability environments. (`vulnerability.py:vuln_run`)
- [x] **Import**: Support importing vulnerability configs from YAML. (`vulnerability.py:vuln_import`)

## User & System Management
- [x] **User Management**: List, create, update, delete users. (`system.py:user_list`)
- [x] **Role Management**: RBAC (Role-Based Access Control) with custom roles. (`system.py:role_list`)
- [x] **Audit Logs**: Track administrative actions (login, delete, update). (`system.py:operator_list`)
- [x] **System Config**: Manage dynamic system configurations. (`system.py:set_config`)
- [x] **Notices**: Manage system-wide announcements. (`system.py:notice_list`)
- [x] **Dashboard Stats**: View daily container usage, IP stats, and request counts. (`system.py:index_state`)

## Player Features
- [x] **Answer Submission**: Submit flags for verification. (`player/views.py`)
- [x] **Scoreboard**: View scores and rankings (implied by answer tracking).
- [x] **Container Launcher**: Players can start/stop their own challenge containers.

## Technical Stack
- **Backend**: Flask (Python) with Blueprints.
- **Database**: SQLAlchemy (ORM).
- **Task Queue**: Celery (implied by `apply_async` calls).
- **Docker Integration**: `docker-py` for direct Docker socket interaction.
