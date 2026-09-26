'use strict'
// src/models/requests/User.request.ts

export interface RegisterRequest {
  username: string
  email: string
  password: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface UpdateUserRequest {
  username?: string
  email?: string
}
