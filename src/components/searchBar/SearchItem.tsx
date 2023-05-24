import { styled, alpha } from "@mui/material";

const SearchItemContainer = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "2em",
  height: "2em",
  display: "flex",
  borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.25)}`,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
}));

const Name = styled("div")(() => ({
  fontSize: "20px",
  color: "black",
  marginLeft: "10px;",
  display: "flex",
}));

export default function SearchItem(props: any) {
  const { name } = props;

  return (
    <SearchItemContainer>
      <Name>{name}</Name>
    </SearchItemContainer>
  );
}
