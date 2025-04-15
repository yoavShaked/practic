import React from "react";
import { type Router } from "../../types/Router";
import { Card } from "../../components/Card";
import { useRouterConfig } from "../../hooks";

export const RouterCard = React.memo((router: Router) => {
  const { fields, bgColor, borderColor } = useRouterConfig(router);

  return (
    <Card backgorundColor={bgColor} borderColor={borderColor} fields={fields} />
  );
});
