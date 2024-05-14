import classes from "./PageContent.module.css";

function PageContent({ title, children }) {
  return (
    <div className={classes.content}>
      <h1 className="text-4xl py-5">{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
