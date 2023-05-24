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

const SearchBar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [clickOutsideRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadding, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const isEmpty = !items || items.length === 0;

  interface CustomResponse extends Response {
    data: any;
  }

  const changeHandler = (e: any) => {
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

  const prepareSearchQuery = (query: any) => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    return encodeURI(url);
  };

  const searchData = async () => {
    if (!searchQuery || searchQuery.trim() === "") {
      return;
    }

    setLoading(true);

    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      console.log("Response: ", response.data);
      setItems(response.data);
    }

    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchData);

  console.log("value ", searchQuery);

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
                  {items.map((item: any) => (
                    <SearchItem key={item.show.id} name={item.show.name} />
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
