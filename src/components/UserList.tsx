import React from 'react';
import type { User } from '../types/user';
import UserCard from './UserCard';

interface UserListProps {
  users: User[];
  isLoading: boolean;
}

const UserList: React.FC<UserListProps> = ({ users, isLoading }) => {
  if (isLoading) {
    return <div className="text-center py-8 text-slate-600">Loading users...</div>;
  }

  if (users.length === 0) {
    return <div className="text-center py-8 text-slate-600">No users found. Try searching for something else.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
