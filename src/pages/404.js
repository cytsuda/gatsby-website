import * as React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const NotFoundPage = (props) => {
  console.log("NotFoundPage");
  console.log(props);
  const { location } = props;
  return (
    <Layout type="404" title="Error 404" text="Error 404: Página não encontrada.">
      <SEO title="404: Not found" />
      <p>A página: "<bold>{location.pathname.slice(0, -1)}</bold>" não existe.</p>
    </Layout>
  );
};

export default NotFoundPage;
