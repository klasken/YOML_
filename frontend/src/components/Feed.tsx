import React, { useEffect, useState } from 'react';

interface FeedProps {
  onJoin: (user: any) => void;
}

const users = [
  { id: 1, name: "Oles", gym: "Basic Fit, 888 rue du havre", activity: "Séance dos", avatar: "https://i.pravatar.cc/150?u=oles" },
  { id: 2, name: "Marius", gym: "Basic fit, 85 Rue Nationale", activity: "Seance pec", avatar: "https://i.pravatar.cc/150?u=marius" },
  { id: 3, name: "Sacha", gym: "Fitnesspark, 78 rue du metro", activity: "Seance jambe", avatar: "https://i.pravatar.cc/150?u=sacha" },
  { id: 4, name: "Loïs", gym: "Basic fit, 85 Rue Nationale", activity: "Seance juice", avatar: "https://i.pravatar.cc/150?u=lois" },
];

export default function Feed({ onJoin }: FeedProps) {

  return (
    <div className="flex-1 h-full p-8 overflow-y-auto">
      <h2 className="text-white text-2xl font-bold mb-6 drop-shadow-md">Live Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <div className="flex items-start gap-4 mb-4">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"/>
              <div>
                <h3 className="font-bold text-xl text-black">{user.name}</h3>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1 space-y-1">
                    <li>{user.gym}</li>
                    <li>{user.activity}</li>
                </ul>
              </div>
            </div>

            <button
                onClick={() => onJoin(user)}
                className="w-full bg-[#2D427B] text-white font-bold py-2 rounded-lg hover:bg-[#1e2e58] transition-colors mt-auto cursor-pointer"
            >
              Rejoindre
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
