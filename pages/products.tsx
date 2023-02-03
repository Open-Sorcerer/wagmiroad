import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import CreateProduct from './../components/Products/CreateProduct';

const Products: NextPage = () => {

  return (
    <>
      <CreateProduct />
    </>
  );
};

export default Products;
