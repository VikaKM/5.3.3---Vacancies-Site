import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import Header from "../components/Header";

const Layout = () => {
  return (
    <AppShell padding={0} styles={{ main: { backgroundColor: '#f8f9fa'} }} >
      <Header />
      <Outlet />
    </AppShell>
  );
}

export { Layout };
