'use client';

import { Provider } from "react-redux";
import { store } from "../../store/index";

export default function RootLayout({ children }: any) {
  return (
    <Provider store={store}>
      <div className="aa">{children}</div>
    </Provider>
  );
}
