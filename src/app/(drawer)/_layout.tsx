import { DrawerContent } from "@/components/drawer-content";
import { CustomOptions } from "@/types/navigation";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      // defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Todas as caixas de entradas",
            iconsName: "all-inbox",
            isDivider: true,
            notifications: 5,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="inbox"
        options={
          {
            title: "Entrada",
            iconsName: "inbox",
            isDivider: true,
            notifications: 3,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="stars"
        options={
          {
            title: "Com estrelas",
            iconsName: "star-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="postponed"
        options={
          {
            title: "Adiados",
            iconsName: "schedule",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconsName: "label-important-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviado",
            iconsName: "send",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="programmed"
        options={
          {
            title: "Programado",
            iconsName: "schedule-send",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconsName: "outbox",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunho",
            iconsName: "note",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="all-emails"
        options={
          {
            title: "Todos os e-mails",
            iconsName: "email",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="span"
        options={
          {
            title: "Spam",
            iconsName: "info-outline",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconsName: "delete-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="read"
        options={
          {
            title: "Lidos",
            iconsName: "label-important-outline",
            sectionTitle: "Marcadores",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="general"
        options={
          {
            title: "Geral",
            iconsName: "label-important-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="new-marker"
        options={
          {
            title: "Criar novo",
            iconsName: "add",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: "Configurações",
            iconsName: "settings",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="feedback"
        options={
          {
            title: "Enviar feedback",
            iconsName: "feedback",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="help"
        options={
          {
            title: "Ajuda",
            iconsName: "help-outline",
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
