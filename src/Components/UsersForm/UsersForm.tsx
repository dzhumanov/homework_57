import { useState } from "react";
import { User } from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UsersForm: React.FC<Props> = ({ onSubmit }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    active: false,
    role: "",
  });

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
    setUser((prev) => ({
      ...prev,
      active: isChecked,
    }));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h4>Add new user</h4>
        <div className="form-group">
          <label htmlFor="name">User name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={user.name}
            onChange={changeUser}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">User email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={user.email}
            onChange={changeUser}
          />
        </div>
        <div className="form-group">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox" className="form-check-label ms-2">
            Active:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            className="form-select"
            value={user.role}
            onChange={changeUser}
          >
            <option defaultValue={"SelectRole"}>Select role</option>
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
