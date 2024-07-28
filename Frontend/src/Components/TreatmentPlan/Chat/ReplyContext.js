import React, { createContext, useState } from 'react';
import ReplyChat from './ReplyChat';

export const ReplyContext = createContext();

export const ReplyProvider = ({ children }) => {
  const [replyData, setReplyData] = useState('');

  return (
    <ReplyContext.Provider value={{ replyData, setReplyData }}>
      {children}
    </ReplyContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';

// export const ReplyContext = createContext();

// export const ReplyProvider = ({ children }) => {
//   const [replyData, setReplyData] = useState('');

//   const clearReplyData = () => {
//     setReplyData('');
//   };

//   return (
//     <ReplyContext.Provider value={{ replyData, setReplyData, clearReplyData }}>
//       {children}
//     </ReplyContext.Provider>
//   );
// };
