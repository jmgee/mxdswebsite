import type { Metadata } from "next";
import { ProfileView } from "@/components/mxds/profile/ProfileView";

export const metadata: Metadata = {
  alternates: {
    canonical: "/profile",
  },
};

export default function ProfilePage() {
  return <ProfileView />;
}