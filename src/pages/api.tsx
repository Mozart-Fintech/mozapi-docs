import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Fallback } from "../components/Fallback";

const LazyStoplight = React.lazy(() => import("../components/Stoplight"));

export default function Api() {
  return (
    <Layout title="MozAPI">
      <BrowserOnly>
        {() => (
          <Suspense fallback={Fallback}>
            <LazyStoplight apiDescriptionUrl="https://raw.githubusercontent.com/Mozart-Fintech/mozapi-docs/main/apis/mozart-api.yaml" />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}
