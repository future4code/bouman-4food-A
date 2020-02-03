import styled from "styled-components"
import AppBar from '@material-ui/core/AppBar';

export const StyledImg = styled.img `
    width: 104px;
  height: 58px;
  object-fit: contain;
  text-align: center;
`

export const StyledAppBar = styled(AppBar)`
    width: 360px;
    height: 64px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;

`