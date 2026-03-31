import './TodosLoading.css';

function TodosLoading() {

  return (
    <div className="TodosLoading__TodoItem">
      <span className="TodosLoading__CheckItem--completed"></span>
      <span className="TodosLoading__DescriptionItem"></span>
      <span className="TodosLoading__CheckItem--delete"></span>
    </div>
  );
}

export { TodosLoading };