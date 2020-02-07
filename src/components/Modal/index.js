import React, { Fragment } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  
`

class ModalPopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <StyledModal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.openPopUp}
        >
          <div>
            <h2 id="simple-modal-title">Selecione a quantidade desejada</h2>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
            >
              <MenuItem value="0">
                <em>0</em>
              </MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
            <Button>Adicionar ao Carrinho</Button>
            {/* <SimpleModal /> */}
          </div>
        </StyledModal>
      </Fragment>
    );
  }
}

export default ModalPopUp;
