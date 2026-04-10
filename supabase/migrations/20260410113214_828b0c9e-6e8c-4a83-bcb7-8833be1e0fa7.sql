
-- Drop the overly permissive policy
DROP POLICY "Anyone can submit contact form" ON public.contact_submissions;

-- Create a tighter policy with field-level validation
CREATE POLICY "Validated contact form submissions"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) > 0 AND char_length(name) <= 100
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(email) <= 255
  AND char_length(message) > 0 AND char_length(message) <= 5000
);
