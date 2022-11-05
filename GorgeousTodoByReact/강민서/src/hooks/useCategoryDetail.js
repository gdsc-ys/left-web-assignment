import { useState } from "react";

const useCategoryDetail = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  const open = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const close = () => {
    setSelectedCategoryId(undefined);
  };

  return { selectedCategoryId, open, close };
};

export default useCategoryDetail;
