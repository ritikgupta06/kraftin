import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="(tabs)/about"
        options={{
          title: "About",
          drawerLabel: "About",
        }}
      />
    </Drawer>
  );
}
