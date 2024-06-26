import { supabase } from "./supabase";
export async function login({ email, password }) {
  console.log(email, password);
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
