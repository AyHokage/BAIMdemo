import NavBar from "@/components/NavBar/NavBar";
import Team from "@/components/Team/Team";
import { Provider } from "react-redux";
import { store } from "@/services/store";
import PositionRelativeLayout from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import React from "react";

export default function TeamPage() {
  return (
    <Provider store={store}>
      <NavBar />
      <PositionRelativeLayout>
        <Team />
      </PositionRelativeLayout>
    </Provider>
  );
}
