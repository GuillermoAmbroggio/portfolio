import writingES from "./writin.es";
import writingEn from "./writing.en";
import { IWriting } from "./writing.type";
import useStore from "../hooks/useStore";

const Writing: () => IWriting = () => {
  const { language } = useStore();

  return language === "es" ? writingES : writingEn;
};

export default Writing;
