import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <Route component={CollectionsOverview} />
  </div>
);

export default ShopPage;
