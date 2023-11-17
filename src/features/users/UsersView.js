import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./usersSlice";
import { all } from "axios";
const reducer = (state, action) => {};

const UsersView = () => {
  const { error, isLoading, users } = useSelector((state) => state.users);
  const initialState = {
    allItems: [],
  };
  const [state, dispatchItems] = useReducer(initialState, reducer);
  const [searchValue, setSearchValue] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    website: "",
  });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchValue((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  let filteredItems = useMemo(() => {
  
    const { name, email, phone, address, company, website } = searchValue;
    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (email) {
      return users.filter((user) =>
        user.email.toLowerCase().includes(email.toLowerCase())
      );
    }
    if (phone) {
      return users.filter((user) =>
        user.phone.toLowerCase().includes(phone.toLowerCase())
      );
    }
    if (address) {
      return users.filter((user) =>
        user.address?.city.toLowerCase().includes(address.toLowerCase())
      );
    }
    if (company) {
      return users.filter((user) =>
        user.company?.name?.toLowerCase().includes(company.toLowerCase())
      );
    }
    if (website) {
      return users.filter((user) =>
        user.website.toLowerCase().includes(website.toLowerCase())
      );
    } else {
        return users.filter((user) =>
        user.website.toLowerCase().includes(phone.toLowerCase())
      );
    }
 
  }, [searchValue, users]);

  const handleSearchName = (e) => {
    const value = e.target.value;
    filteredItems = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  };
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <h3>All users</h3>
      <div className="table_container">
        {isLoading && <p>Loading........</p>}
        {error && <p key={error}>{error}</p>}

        <table className="table">
          <tr>
            <th>No</th>
            <th>
              {" "}
              <input
                onChange={handleInput}
                placeholder="Name"
                type="text"
                name="name"
                id=""
              />
            </th>
            <th>
              {" "}
              <input
                onChange={handleInput}
                placeholder="Email"
                type="text"
                name="email"
                id=""
              />
            </th>
            <th>
              {" "}
              <input
                onChange={handleInput}
                placeholder="Phone"
                type="text"
                name="phone"
                id=""
              />
            </th>
            <th>
              {" "}
              <input
                onChange={handleInput}
                placeholder="Address"
                type="text"
                name="address"
                id=""
              />
            </th>
            <th>
              {" "}
              <input
                onChange={handleInput}
                placeholder="Website"
                type="text"
                name="website"
                id=""
              />
            </th>
            <th>
              {" "}
              <input
                onChange={handleInput}
                placeholder="Company"
                type="text"
                name="company"
                id=""
              />
            </th>
          </tr>
          {filteredItems?.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{user?.address?.city}</td>
              <td>{user?.website}</td>
              <td>{user?.company?.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UsersView;
