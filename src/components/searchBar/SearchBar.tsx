import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "react-click-outside-hook";
import {
  LineSeparator,
  LoadingWrapper,
  Search,
  SearchContent,
  SearchIconWrapper,
  StyledInputBase,
  containerTransistor,
  containerVairants,
} from "../../style/SearchBar";
import CircularProgress from "@mui/material/CircularProgress";
import useDebounce from "../../utils/debounceHook";
import axios from "axios";
import SearchItem from "./SearchItem";
import { getAuthToken } from "../../utils/auth";
import { Link } from "react-router-dom";
import { EmployeeType } from "../../interfaces/Employee";

const SearchBar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [clickOutsideRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadding, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const isEmpty = !items || items.length === 0;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const prepareSearchQuery = (query: string) => {
    const url = `${process.env
      .REACT_APP_FETCH_ADDRESS!}/employees/find?w=${query}`;

    return encodeURI(url);
  };

  const searchData = async () => {
    if (!searchQuery || searchQuery.trim() === "") {
      return;
    }

    setLoading(true);

    const URL = prepareSearchQuery(searchQuery);

    const token = getAuthToken();

    const response = await axios
      .get(URL, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .catch((err) => {
        console.log({
          message: "Could not fetch employee orders.",
          status: 500,
        });
      });

    if (response) {
      setItems(response.data);
    }

    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchData);

  console.log(items);

  return (
    <>
      <Search
        animate={isExpanded ? "active" : "inactive"}
        variants={containerVairants}
        ref={clickOutsideRef}
        transition={containerTransistor}
      >
        <SearchIconWrapper>
          <SearchIcon />
          <StyledInputBase
            placeholder="Search by employee last name"
            inputProps={{ "aria-label": "search" }}
            onFocus={expandContainer}
            inputRef={inputRef}
            value={searchQuery}
            onChange={changeHandler}
          />
        </SearchIconWrapper>
        {!isExpanded ? (
          <></>
        ) : (
          <>
            <LineSeparator />
            <SearchContent>
              {isLoadding && (
                <LoadingWrapper>
                  <CircularProgress />
                </LoadingWrapper>
              )}
              {!isLoadding && !isEmpty && (
                <>
                  {items.map((item: EmployeeType) => (
                    <Link
                      key={item._id}
                      to={`/dashboard/employees/${item._id}?p=1`}
                      onClick={collapseContainer}
                    >
                      <SearchItem
                        name={item.firstName + " " + item.secondName}
                      />
                    </Link>
                  ))}
                </>
              )}
            </SearchContent>
          </>
        )}
      </Search>
    </>
  );
};

export default SearchBar;
