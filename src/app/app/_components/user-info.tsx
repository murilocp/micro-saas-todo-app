'use client';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';

type Props = {
  user: Session['user'];
};

export default function UserInfo({ user }: Props) {
  if (!user) return;

  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <span>{user?.email}</span>

      <Button variant='destructive' onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
}
