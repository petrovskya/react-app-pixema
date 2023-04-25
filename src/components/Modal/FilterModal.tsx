import { Portal, PortalTarget } from "components/Portal/Portal";
import React, { FormEventHandler, useEffect } from "react";
import { FilterForm, FormHeader, StyledModal } from "./styles";
import { Button, ButtonGroup, CancelButton, FilterInput, SubmitButton } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { FilterFormValues } from "components/FilterInput/FilterInput";
import { Color, FormTitle } from "ui";
import { CancelIcon } from "assets";
import { UseAppDispatch } from "store/hooks";
import { setTitleFilter, setYearFilter, unsetTitleFilter, unsetYearFilter } from "store/features";

interface FilterModalProps {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}

export const FilterModal = ({ isOpen, toggleModal }: FilterModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterFormValues>();

  const closeModal = () => {
    toggleModal(false);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleModal(false);
    }
  };
  const dispatch = UseAppDispatch();
  const onSubmit: SubmitHandler<FilterFormValues> = (filters) => {
    dispatch(setTitleFilter(filters.title));
    dispatch(setYearFilter(filters.year));
    toggleModal(false);
  };
  const handleReset = () => {
    dispatch(unsetTitleFilter());
    dispatch(unsetYearFilter());
    reset({ title: "", year: "" });
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      {isOpen && (
        <StyledModal onClick={handleClose}>
          <FilterForm onSubmit={handleSubmit(onSubmit)} onReset={handleReset}>
            <FormHeader>
              <FormTitle>Filters</FormTitle>
              <Button onClick={closeModal} $background="transparent" type="button">
                <CancelIcon fill={Color.WHITE} />
              </Button>
            </FormHeader>
            <FilterInput
              title="Full or short movie name"
              placeholder="Your text"
              type="text"
              name="title"
              register={register}
              required={true}
            />
            {errors.title && "This field is required."}
            <FilterInput
              title="Year"
              placeholder="Enter year"
              type="text"
              name="year"
              register={register}
              required={false}
            />
            <ButtonGroup position="center">
              <CancelButton type="reset">Clear filters</CancelButton>
              <SubmitButton type="submit">Show results</SubmitButton>
            </ButtonGroup>
          </FilterForm>
        </StyledModal>
      )}
    </Portal>
  );
};
