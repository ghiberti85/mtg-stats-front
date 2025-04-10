// src/utils/authHelpers.ts

export function getToken(): string | null {
  return localStorage.getItem('token')
}

export function getCurrentUserId(): string | null {
  return localStorage.getItem('userId')
}
