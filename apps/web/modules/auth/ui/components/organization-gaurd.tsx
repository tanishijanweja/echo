"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layout/auth‐layout";
import React from "react";

export const OrganizationGaurd = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <div>
        <p>Create an organization!!!</p>
      </div>
    );
  }
  return <>{children}</>;
};
