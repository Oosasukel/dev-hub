import Layout from "@theme/Layout";

import { cases } from "../../_data";
import ShowcaseCard from "../ShowcaseCard";

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>Xiaohai's Projects</h1>
      <p>List of projects xiaohai was involved</p>
      <a
        className="button button--primary"
        href="https://github.com/xiaohai-huang"
        target="_blank"
        rel="noreferrer"
      >
        View Source
      </a>
    </section>
  );
}

export function ShowcaseCards() {
  return (
    <section className="container">
      <div className="row">
        {cases.map((item) => (
          <div key={item.title} className="col col--4 margin-bottom--lg">
            <ShowcaseCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <Layout title="Showcase">
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </Layout>
  );
}

export default Showcase;
