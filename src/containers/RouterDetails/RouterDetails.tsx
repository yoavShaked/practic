import React from "react";
import { Details } from "../../components/Details";
import { Router } from "../../types/Router";
import { getSpesificRouterFields } from "../../utils/Router";
import { useRouterConfig } from "../../hooks";

export const RouterDetails = React.memo((router: Router) => {
  const { fields, bgColor, borderColor } = useRouterConfig(router);
  const allFields = React.useMemo(
    () => [...fields, ...getSpesificRouterFields(router)],
    [fields, router]
  );

  return (
    <Details
      fields={allFields}
      backgorundColor={bgColor}
      borderColor={borderColor}
      title={"Router"}
    />
  );
});
