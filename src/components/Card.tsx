import React from 'react';
export default function Card({children}:{children:React.ReactNode}){
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white/80 dark:bg-gray-800/80">
      {children}
    </div>
  );
}
