import type { Metadata } from "next";
import { ProfileView } from "./ProfileView";

export const metadata: Metadata = {
  alternates: {
    canonical: "/profile",
  },
};

export default function ProfilePage() {
  return <ProfileView />;
}