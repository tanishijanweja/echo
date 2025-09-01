"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "@/modules/auth/ui/layout/auth‐layout";
import React from "react";
import { OrgSelectionView } from "@/modules/auth/ui/views/org-selection-view";

export const OrganizationGaurd = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectionView />
      </AuthLayout>
    );
  }
  return <>{children}</>;
};
