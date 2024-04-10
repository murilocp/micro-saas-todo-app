'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { toast } from '@/components/ui/use-toast';

export default function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async data => {
    try {
      await signIn('email', { email: data.email, redirect: false });

      toast({
        title: 'Magic link sent',
        description: 'Check your email for the magic link to login',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
      });
    }
  });

  return (
    <div className='mx-auto max-w-sm space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Authentication</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Enter your email to receive a magic link
        </p>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            placeholder='m@example.com'
            required
            type='email'
            {...form.register('email')}
          />
        </div>
        <Button className='w-full'>Send Magic Link</Button>
      </form>
    </div>
  );
}
