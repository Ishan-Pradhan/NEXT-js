"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
//if successfully logged in , user is redirected to account page

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
