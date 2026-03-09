import React from 'react';
import type { User } from '../types/user';
import { Mail, Briefcase, Phone, User2 } from 'lucide-react';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="w-16 h-16 rounded-full object-cover" />
        <div className="user-title">
          <h3 className="text-xl font-semibold text-slate-800">{user.firstName} {user.lastName}</h3>
          <p className="text-slate-600">@{user.username}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-slate-600">
          <User2 size={16} />
          <span>{user.age} years old</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Mail size={16} />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Briefcase size={16} />
          <span>{user.company.title} at {user.company.name}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Phone size={16} />
          <span>{user.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
