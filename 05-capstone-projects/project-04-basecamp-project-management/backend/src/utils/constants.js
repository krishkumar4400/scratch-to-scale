const UserRolesEnum = {
  USER: "user",
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
};

const AvailableUserRoles = Object.values(UserRolesEnum);

const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

const AvailableTaskStatus = Object.values(TaskStatusEnum);

export {
    UserRolesEnum,
    AvailableUserRoles,
    TaskStatusEnum,
    AvailableTaskStatus
};

