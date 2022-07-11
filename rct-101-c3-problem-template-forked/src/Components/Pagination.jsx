function Pagination({
  // total pages
  total,
  // current page of the component
  current,
  // event handler when button is clicked,
  // changePage accepts the new page in number
  changePage
}) {
  // fix code here
  // let pages = <button
  //     data-testid="page-btn"
  //     onClick={handelClick}
  //     disabled={1}
  //   >
  //   </button>

  return (
    <div>
      {/* pages */}
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
}

export default Pagination;
