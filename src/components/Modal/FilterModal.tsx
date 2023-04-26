import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { UseAppDispatch } from "store/hooks";
import {
  setSearchTitleTrends,
  setTitleFilter,
  setTitleFilterTrends,
  setYearFilter,
  setYearFilterTrends,
  unsetTitleFilter,
  unsetTitleFilterTrends,
  unsetYearFilter,
  unsetYearFilterTrends,
} from "store/features";

import {
  Button,
  ButtonGroup,
  CancelButton,
  FilterInput,
  SubmitButton,
  Portal,
  PortalTarget,
} from "components";
import { FilterFormValues } from "types";
import { Color, FormTitle } from "ui";
import { CancelIcon } from "assets";

import { FilterForm, FormHeader, StyledModal } from "./styles";
import { useLocation, useParams } from "react-router-dom";
import { ROUTE } from "router";

interface FilterModalProps {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}

export const FilterModal = ({ isOpen, toggleModal }: FilterModalProps) => {
  const { pathname } = useLocation();
  const dispatch = UseAppDispatch();

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

  const onSubmit: SubmitHandler<FilterFormValues> = (filters) => {
    dispatch(setTitleFilter(filters.title));
    dispatch(setYearFilter(filters.year));
    dispatch(setTitleFilterTrends(filters.title));
    dispatch(setYearFilterTrends(filters.year));
    toggleModal(false);
  };

  const handleReset = () => {
    dispatch(unsetTitleFilter());
    dispatch(unsetYearFilter());
    dispatch(unsetYearFilterTrends());
    dispatch(unsetTitleFilterTrends());
    reset({ title: "", year: "" });
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      {isOpen && (
        <StyledModal onClick={handleClose}>
          {pathname === ROUTE.HOME && (
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
          )}
          {pathname === `/${ROUTE.TRENDS}` && (
            <FilterForm onSubmit={handleSubmit(onSubmit)} onReset={handleReset}>
              <FormHeader>
                <FormTitle>Filters</FormTitle>
                <Button onClick={closeModal} $background="transparent" type="button">
                  <CancelIcon fill={Color.WHITE} />
                </Button>
              </FormHeader>
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
          )}
        </StyledModal>
      )}
    </Portal>
  );
};
