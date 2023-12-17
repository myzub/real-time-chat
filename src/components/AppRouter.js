import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Routes>
      {user
        ? privateRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))
        : publicRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} replace/>} />
    </Routes>
  );
};

export default AppRouter;
//   return user ? (
//       <Routes>
//         {privateRoutes.map(({ path, Component }) => (
//             <Route path={path} element={Component} key={path} />
//         ))}
//         <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
//       </Routes>
//   ) : (
//       <Routes>
//         {publicRoutes.map(({ path, Component }) => (
//             <Route path={path} element={Component} key={path} />
//         ))}
//         <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
//       </Routes>
//   );
// };
//
// export default AppRouter;
