import { InputBase } from "@mui/material";
import {styled, alpha} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: '5%',
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: "2.8rem",
  display: "flex",
  alignItems: 'center',
  position: 'relative',
  padding: '2px 15px'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '26ch',
    [theme.breakpoints.up('md')]: {
      width: '26ch',
    },
  },
}));

  const SearchBar = () => {
    return (
      <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search by employee last name...'
            inputProps={{ "aria-label": "search" }}
          />
      </Search>
    )
  }

  export default SearchBar;