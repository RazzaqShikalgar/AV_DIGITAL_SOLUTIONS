export const CONST_STRINGS = {
  INTERNAL_SERVER_ERROR: "Internal  Server Error",
  STATUS: "Status",
  SERVER_RUNNING_MESSAGE: "Server is running Last commit 12:35",
  MISSING_REQUIRED_INPUTS: "Request is missing required inputs",
  ADMIN_LOGIN_CODE_SENT: "Admin login code sent",
  //auth
  USER_REGISTER_CODE_CREATED: "User register code sent successfully",
  EMAIL_ALREADY_VERIFIED: "The email address has already been verified.",
  MAX_VERIFICATION_ATTEMPTS_REACHED:
    "You have reached the maximum number of verification attempts.",
  MAX_VERIFICATION_ATTEMPTS: "Maximum verification attempts exceeded.",
  VERIFICATION_CODE_INVALID: "The verification code provided is invalid.",
  VERIFICATION_CODE_EXPIRED: "The verification code has expired.",
  EMAIL_VERIFIED_AND_USER_REGISTERED_SUCCESSFULLY:
    "Email verified and user registered successfully.",
  EMAIL_NOT_VERIFIED: "The email address has not been verified.",
  INVALID_CREDENTIALS: "The credentials provided are invalid.",
  AUTH_USER_ROLE: "User authenticated with a role.",
  USER_LOGGED_IN_SUCCESSFULLY: "User logged in successfully.",
  NEW_PASSWORD_IS_SAME_AS_OLD_PASSWORD:
    "The new password cannot be the same as the old password.",
  PASSWORD_CHANGED_SUCCESSFULLY: "Password changed successfully.",
  FORGOT_PASSWORD_CODE_ALREADY_VERIFIED:
    "The forgot password code has already been verified.",
  NEW_PASSWORD_MATCHES_OLD_PASSWORD:
    "The new password matches the old password.",
  USER_LOGOUT_SUCCESSFULL: "User logged out successfully.",
  INVALID_PASS_KEY: "The pass key provided is invalid.",
  USER_NOT_FOUND: "User not found in our database",
  USER_DELETED_SUCCESSFULLY: "User deleted successfully.",
  USER_RETRIEVED_SUCCESSFULLY: "User retrieved successfully.",
  ADMIN_USER_ROLE: "admin",
  USER_UPDATED_SUCCESSFULLY: "User updated successfully.",
  USER_UPDATE_FAILED: "Failed to update user.",
  USER_DELETED_SUCCESSFULLY: "User deleted successfully.",
  USER_DELETE_FAILED: "Failed to delete user.",
  CONFIRM_PASSWORD_DOES_NOT_MATCH_WITH_PASSWORD: "password does not match",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password do not match the requirement",
  INVALID_EMAIL_FORMAT: "Invalid Email Format",
  SUB_USER_CREATED_SUCCESSFULLY: "Sub user created successfully.",
  //admin
  GET_ALL_USERS_SUCCESS: "Get user data successfull",
  GET_USER_DETAIL_ERROR: "Error getting user Details",
  SET_LICENSE_DETAILS_SUCCESS: "Set license detail successfull",
  CURRENT_VALIDITY_DATE_IS_NOT_UPDATED: "Current validity date is not updated",
  GET_USER_DETAIL_SUCCESS: "User Detail retrieved successfully",
  VALIDITY_SAME_AS_EXISTING_VALIDITY: "Validity same as existing validity",
  UPDATE_USER_STATUS_SUCCESS: "Update user status success",
  INVALID_ACTION_TYPE: "Invalid action type",

  //Sub User
  SUB_USERS_RETRIEVED:"Sub users retrieved successfully",
  SUB_USER_NOT_FOUND:"Sub user not found",
  SUB_USER_LOGGED_IN_SUCCESSFULLY:"Sub user logged in successfully",
  PERMISSIONS_UPDATED_SUCCESSFULLY: "Permissions updated successfully",
  PERMISSIONS_RETRIEVED_SUCCESSFULLY: "Permissions retrieved successfully",
  // License
  LICENSE_NOT_YET_SET: "License not yet set",
  UPDATE_LICENSE_STATUS_ERROR: "Update license status error",
  UPDATE_LICENSE_STATUS_SUCCESS: "Update license status success",

  // Organization
  ORGANIZATION_UPDATED: "Organization updated successfully",
  ORGANIZATION_ADDED: "Organization added successfully",
  GET_ORGANIZATION_DETAILS_SUCCESS:
    "Organization details retrieved successfully",
  ORGANIZATION_NOT_FOUND: "Organization not found",

  //access management
  UNAUTHORIZED_ACCESS: "Unauthorized access",
  INVALID_PERMISSIONS: "Invalid permissions",
};

export const TYPES = {
  EMAIL_DOES_NOT_EXISTS_OR_NOT_VERIFIED:
    "EMAIL_DOES_NOT_EXISTS_OR_NOT_VERIFIED",
  EMAIL_DOES_NOT_EXISTS: "EMAIL_DOES_NOT_EXISTS",
  EMAIL_EXISTS_AND_NOT_VERIFIED: "EMAIL_EXISTS_AND_NOT_VERIFIED",
  EMAIL_VERIFIED: "EMAIL_VERIFIED",
};

// Route URLs
export const BASE_ROUTES = {
  PING_ROUTE: "/ping",
  AUTH_ROUTES: "/auth",
  MODULE_ROUTES: "/module",
  ADMIN_ROUTES: "/admin",
  LOG_ROUTES: "/logs",
  APP_APIS: "/crm",
};

export const MODULE_ROUTES = {
  GET_License_DETAILS: "/get-license-details",
  // department routes
  SET_DEPARTMENT: "/set-department",
  LOAD_DEPARTMENT: "/load-department",
  // add Organization
  SET_ORGANIZATION: "/set-organization",
  GET_ORGANIZATION: "/get-organization",
};

export const ADMIN_ROUTES = {
  GET_ADMIN_LOGIN_CODE: "/get-admin-login-code",
  ADMIN_LOGIN_WITH_CODE: "/admin-login-with-code",
  LOGIN_WITH_EMAIL_PASSWORD_ADMIN: "/login-with-email-password-admin",
  GET_ALL_USERS: "/get-all-users",
  GET_USER_BY_ID: "/get-user-by-id/:userId",
  SET_LICENSE_DATA_BY_ID: "/set-license-data-by-id",
  GET_ALL_USERS_LICENSE_DATA: "/get-all-users-license-data",
  GET_USER_LICENSE_DATA_BY_ID: "/get-user-license-data-by-id/:userId",
  UPDATE_USER_STATUS: "/update-user-status",
  LOGOUT_ADMIN: "/logout-admin",
};

export const AUTH_ROUTES = {
  CHANGE_PASSWORD: "/change-password",
  GET_CHANGE_EMAIL_CODE: "/get-change-email-code",
  CHANGE_EMAIL_WITH_CODE: "/change-email-with-code",
  CHANGE_PASSWORD_WITH_CODE: "/change-password-with-code",
  GET_FORGOT_PASSWORD_CODE: "/get-forgot-password-code",
  GET_REGISTER_CODE: "/get-register-code",
  LOGIN_WITH_EMAIL_PASSWORD: "/login-with-email-password",
  REGISTER_WITH_CODE: "/register-with-code",
  RESEND_REGISTER_CODE: "/resend-register-code",
  VERIFY_TOKEN: "/verify-token",
  LOGOUT_USER: "/logout",
  UPDATE_USER: "/update-user-data/:userId",
  DELETE_USER: "/delete-user-data/:userId",
  GET_USER_DATA: "/get-user-data/:type/:email/:key",
  AUTH_SUB_USER_GENERATION: "/create-sub-user",
  GET_SUB_USER: "/get-sub-user/:subUserId?",
  GET_SUB_USER_PERMISSION: "/get-sub-user-permission/:subUserId?",
  UPDATE_USER_PERMISSION: "/update-sub-user-permission",
  CHANGE_SUB_USER_PASSWORD: "/change-sub-user-password",
  SUB_USER_LOGIN_WITH_EMAIL_PASSWORD: "/sub-user-login-with-email-password",
};

export const EXCEL_ROUTES = {
  GET_DATA_FROM_EXCEL: "/get-data-from-excel",
};
export const LEADS_ROUTES = {
  RETRIEVE_LEAD_BY_USING_ID: "/retrieve-lead-by-id",
  RETRIEVE_ALL_LEADS: "/retrieve-all-leads",
  GET_CHARTS_FOR_LEADS: "/get-charts-for-leads",
};

export const GOOGLE_SHEETS_API = {
  SAVE_CONTACT_DETAILS: "/save-contact-details",
  SAVE_AGENT_DETAILS: "/save-agent-details",
};
