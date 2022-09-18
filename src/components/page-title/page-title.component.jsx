import "./page-title.styles.scss";

const PageTitle = ({ pagetitle }) => {
  return (
    <div className="page-title-container">
      <h5 className="page-title">
        <span className="page-title__id">{pagetitle[0]}</span>
        {pagetitle[1]}
      </h5>
    </div>
  );
};

export default PageTitle;
