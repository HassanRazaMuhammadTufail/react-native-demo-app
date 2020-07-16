import React from 'react';
import {useFormikContext, Formik} from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  numberOfColumns,
  placeholder,
  width,
}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <AppPicker
        // icon="apps"
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
