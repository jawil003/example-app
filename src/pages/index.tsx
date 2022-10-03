import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/shared/header";
import { Navigation } from "../components/shared/navigation";
import { IndexLeftHeaderBody } from "../components/index/index-left-header-body";
import { IndexRightHeaderBody } from "../components/index/index-right-header-body";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Test Page</title>
      </Head>

      <Header navigation={<Navigation />}>
        <IndexLeftHeaderBody />
        <IndexRightHeaderBody />
      </Header>
    </>
  );
};

export default Home;
