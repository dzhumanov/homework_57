const UsersForm = () => {
  return (
    <div>
      <form>
        <h4>Add new user</h4>
        <div className="form-group">
          <label htmlFor="name">User name:</label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">User email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="form-check-label ms-2">
            Active:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select name="role" id="role" className="form-select">
            <option defaultValue={'SelectRole'}>Select role</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrator</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
