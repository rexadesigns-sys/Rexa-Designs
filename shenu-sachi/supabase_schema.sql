-- SQL Script to Set Up RSVP Database in Supabase SQL Editor
-- Copy and run this script in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Create the RSVPs Table
CREATE TABLE IF NOT EXISTS rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  guest_count INTEGER DEFAULT 1 NOT NULL,
  meal_preference TEXT DEFAULT 'non-veg',
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Allow Public (Anonymous) Users to Insert RSVPs
CREATE POLICY "Allow public inserts" 
ON rsvps 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Migration query: If you already created the table, run this SQL query:
-- ALTER TABLE rsvps ADD COLUMN IF NOT EXISTS guest_count INTEGER DEFAULT 1 NOT NULL;

