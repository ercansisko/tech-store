import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oohfktesfbyoxetnlxog.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vaGZrdGVzZmJ5b3hldG5seG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMzk2NzQsImV4cCI6MjAxNzcxNTY3NH0.EMUNQtjSgY0-3rbNRPYU5dx7AJ7-nnUS7T0ePE4hBqA";
export const supabase = createClient(supabaseUrl, supabaseKey);
