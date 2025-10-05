-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  whatsapp TEXT,
  location TEXT,
  country TEXT,
  investor_type TEXT,
  message TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can submit)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin viewing (for future admin panel)
CREATE POLICY "Only authenticated users can view submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Create index for faster queries
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);