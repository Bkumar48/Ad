import React from "react";

const ChildService
 = ({ params }: { params: { childSlug: string } }) => {
  return <div>
    hello from {params.childSlug} page
  </div>;
};

export default ChildService
;
