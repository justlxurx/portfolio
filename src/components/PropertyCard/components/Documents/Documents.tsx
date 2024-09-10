import s from "./Documents.module.scss";
import { Doc } from "./Doc/Doc";

export const Documents = () => {
  const docs = [
    { title: "Document 1", link: "/" },
    { title: "Document 1", link: "/" },
    { title: "Document 1", link: "/" },
  ];
  return (
    <div className={s.main}>
      <h1 className={s.main__title}>Documents</h1>
      {docs.map((a, index) => (
        <Doc key={index} title={a.title} link={a.link} />
      ))}
    </div>
  );
};
