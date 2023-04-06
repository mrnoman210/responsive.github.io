import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
const card = () => {
  const router = useRouter();
  const slug = router.query.card;

  return (
    <>
      <Head>
        <title>{router.query.card}</title>
      </Head>
      <h1>{slug}</h1>
      <div>Dynamic Card</div>
    </>
  );
};

export default card;
